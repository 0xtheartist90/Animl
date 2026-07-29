'use client';

import { useEffect, useRef, useState } from 'react';

// quartic ease-out — long, soft landing
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Premium full-page scroll controller + diamond pager.
 * Sections opt in with `data-snap`; engages on md+ only (wheel & arrow keys),
 * animating between sections over ~1.1s. The footer is the final stop.
 */
const SnapPager = () => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(0);
    const jumpRef = useRef<(i: number) => void>(() => {});

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const els = Array.from(document.querySelectorAll<HTMLElement>('[data-snap]'));
        if (els.length === 0) return;
        setCount(els.length);

        const idx = { current: 0 };
        const animating = { current: false };
        let cooldownUntil = 0;

        const targets = () => {
            const maxTop = document.documentElement.scrollHeight - window.innerHeight;
            const list = els.map((el) => Math.min(el.offsetTop, maxTop));
            const foot = document.querySelector<HTMLElement>('footer');
            if (foot) list.push(Math.min(foot.offsetTop, maxTop));

            return list;
        };

        const setIdx = (i: number) => {
            idx.current = i;
            setActive(Math.min(i, els.length - 1));
        };

        const animateTo = (top: number) => {
            animating.current = true;
            const start = window.scrollY;
            const dist = top - start;
            const dur = 1100;
            let t0: number | null = null;
            const step = (ts: number) => {
                if (t0 === null) t0 = ts;
                const p = Math.min(1, (ts - t0) / dur);
                window.scrollTo(0, start + dist * easeOut(p));
                if (p < 1) {
                    requestAnimationFrame(step);
                } else {
                    animating.current = false;
                    cooldownUntil = performance.now() + 350; // swallow trackpad inertia
                }
            };
            requestAnimationFrame(step);
        };

        const go = (dir: 1 | -1) => {
            const list = targets();
            const next = Math.max(0, Math.min(list.length - 1, idx.current + dir));
            if (next === idx.current) return;
            setIdx(next);
            animateTo(list[next]);
        };

        const jump = (i: number) => {
            setIdx(i);
            animateTo(targets()[i]);
        };
        jumpRef.current = jump;

        const onWheel = (e: WheelEvent) => {
            if (!mq.matches) return;
            e.preventDefault();
            if (animating.current || performance.now() < cooldownUntil) return;
            if (Math.abs(e.deltaY) < 8) return;
            go(e.deltaY > 0 ? 1 : -1);
        };

        const onKey = (e: KeyboardEvent) => {
            if (!mq.matches) return;
            if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
                e.preventDefault();
                go(1);
            } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
                e.preventDefault();
                go(-1);
            }
        };

        // keep the pager honest if the user drags the scrollbar
        const onScroll = () => {
            if (animating.current) return;
            const list = targets();
            let best = 0;
            let bd = Infinity;
            list.forEach((t, i) => {
                const d = Math.abs(t - window.scrollY);
                if (d < bd) {
                    bd = d;
                    best = i;
                }
            });
            setIdx(best);
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('keydown', onKey);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    if (count === 0) return null;

    return (
        <nav
            aria-label='Sections'
            className='fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex'>
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    type='button'
                    onClick={() => jumpRef.current(i)}
                    aria-label={`Section ${i + 1}`}
                    aria-current={active === i}
                    className={`block h-2 w-2 rotate-45 transition-all duration-500 ${
                        active === i ? 'bg-flame scale-125' : 'bg-bone/25 hover:bg-bone/60'
                    }`}
                />
            ))}
        </nav>
    );
};

export default SnapPager;
