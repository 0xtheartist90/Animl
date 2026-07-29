import type { CSSProperties } from 'react';

import type { Metadata } from 'next';

import About from '@/components/home/about';
import CocktailDen from '@/components/home/cocktail-den';
import Events from '@/components/home/events';
import Experience from '@/components/home/experience';
import Hero from '@/components/home/hero';
import MenuPreview from '@/components/home/menu-preview';
import ReserveCta from '@/components/home/reserve-cta';
import TheRoom from '@/components/home/the-room';

export const metadata: Metadata = {
    title: 'Home 2 — Mangro preview'
};

/** Duplicate of the homepage with Mangro as the display font instead of The Quicky. */
const Page = () => {
    return (
        <div style={{ '--font-display': 'var(--font-mangro)' } as CSSProperties}>
            <Hero />
            <About />
            <TheRoom />
            <MenuPreview />
            <Experience />
            <CocktailDen />
            <Events />
            <ReserveCta />
        </div>
    );
};

export default Page;
