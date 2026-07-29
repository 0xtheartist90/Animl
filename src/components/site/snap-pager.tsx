'use client';

import { useEffect, useState } from 'react';

/**
 * Full-viewport section snapping + a diamond pager.
 * Sections opt in with `data-snap`; snapping engages on md+ only.
 */
const SnapPager = () => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>('[data-snap]'));
        setCount(els.length);

        const mq = window.matchMedia('(min-width: 768px)');
        const applySnap = () => {
            document.documentElement.style.scrollSnapType = mq.matches ? 'y mandatory' : '';
        };
        applySnap();
        mq.addEventListener('change', applySnap);

        // let the footer be a valid resting point too
        const foot = document.querySelector<HTMLElement>('footer');
        if (foot) foot.style.scrollSnapAlign = 'start';

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(els.indexOf(e.target as HTMLElement));
                });
            },
            { threshold: 0.5 }
        );
        els.forEach((el) => io.observe(el));

        return () => {
            document.documentElement.style.scrollSnapType = '';
            mq.removeEventListener('change', applySnap);
            if (foot) foot.style.scrollSnapAlign = '';
            io.disconnect();
        };
    }, []);

    const jump = (i: number) => {
        document.querySelectorAll<HTMLElement>('[data-snap]')[i]?.scrollIntoView({ behavior: 'smooth' });
    };

    if (count === 0) return null;

    return (
        <nav
            aria-label='Sections'
            className='fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex'>
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    type='button'
                    onClick={() => jump(i)}
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
