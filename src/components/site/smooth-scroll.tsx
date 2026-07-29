'use client';

import { type ReactNode, useEffect } from 'react';

import { usePathname } from 'next/navigation';

import Lenis from 'lenis';

/**
 * Lenis-powered smooth scrolling with a heavy, premium feel.
 * Disabled on /about, where native scroll drives the section snapping.
 */
const SmoothScroll = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;
        if (pathname === '/about') return;

        const lenis = new Lenis({
            lerp: 0.085,
            wheelMultiplier: 0.9,
            touchMultiplier: 1.4,
            anchors: true
        });

        let frame: number;
        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, [pathname]);

    return <>{children}</>;
};

export default SmoothScroll;
