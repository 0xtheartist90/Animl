import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
    title: 'Menus — Dry-Aged Cuts & More',
    description:
        'Dry-aged steak, seafood, crafted cocktails and an extensive wine selection at Animl Steakhouse Toronto.'
};

const MENUS = [
    { name: 'Dinner', note: 'Starters, raw bar, signature cuts & wagyu' },
    { name: 'Dessert', note: 'Black Forest, Tarte Tatin, Gold Bar' },
    { name: 'Cocktails', note: 'A tasting arranged like a meal' },
    { name: 'Wine & Spirits', note: 'From vintage champagne to the owner’s cellar' }
];

const Page = () => {
    return (
        <>
            <PageHero
                label='The Menus'
                title='Menus'
                accent='.'
                image='/images/home/steak-branded.jpg'
                imageAlt='Animl-branded dry-aged steak'
            />
            <section className='grid grid-cols-1 md:grid-cols-2'>
                {MENUS.map((menu, i) => (
                    <Reveal key={menu.name} delay={0.06 * i}>
                        <div className='group flex h-full flex-col justify-between gap-16 p-8 md:p-12'>
                            <p className='label-mono text-flame'>{`0${i + 1}`}</p>
                            <div>
                                <h2 className='headline group-hover:text-flame text-5xl transition-colors duration-300 md:text-6xl'>
                                    {menu.name}
                                </h2>
                                <p className='label-mono text-smoke mt-4'>{menu.note}</p>
                                <p className='label-mono text-bone/50 mt-8'>Full menu coming online soon</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </section>
            <section className='px-5 py-16 text-center md:py-24'>
                <Reveal>
                    <p className='headline text-bone/80 mx-auto max-w-xl text-3xl'>
                        Ordering a special bottle? Call ahead and we&apos;ll have it decanted before you arrive.
                    </p>
                    <Link
                        href='/reservations'
                        className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal mt-10 inline-block px-8 py-4 transition-colors duration-300'>
                        Reserve Now
                    </Link>
                </Reveal>
            </section>
        </>
    );
};

export default Page;
