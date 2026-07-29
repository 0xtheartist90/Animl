import type { Metadata } from 'next';
import Image from 'next/image';

import PageHero from '@/components/site/page-hero';
import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';

export const metadata: Metadata = {
    title: 'Events — Private Dining & Buyouts',
    description:
        'Host corporate events, celebrations, wrap parties and private gatherings at Animl Steakhouse Toronto.'
};

const OCCASIONS = [
    {
        name: 'Corporate Events',
        note: 'Client dinners, launches and team nights that close deals and open bottles.'
    },
    {
        name: 'Special Celebrations',
        note: 'Birthdays, anniversaries, engagements — milestones deserve theatre.'
    },
    {
        name: 'Wrap Parties',
        note: 'End the production the way it deserves: loud, late and glamorous.'
    },
    {
        name: 'Private Gatherings',
        note: 'Intimate dinners tucked into velvet corners of the den.'
    }
];

const OPTIONS = [
    { name: 'Private Dining', note: 'A dedicated space within the room' },
    { name: 'Partial Venue', note: 'A section of the floor, yours for the night' },
    { name: 'Full Buyout', note: 'The entire venue — bull included' }
];

const STRIP = [
    { src: '/images/home/dining-room.jpg', alt: 'The full dining room set for service' },
    { src: '/images/home/seafood-social.jpg', alt: 'Guests sharing a seafood platter' },
    { src: '/images/home/disco-bull.jpg', alt: 'The mirrored bull over the dining room' }
];

const Page = () => {
    return (
        <>
            <PageHero
                label='Private Dining & Events'
                title='Events'
                accent='.'
                image='/images/home/event-lounge.jpg'
                imageAlt='Guests lounging in the Animl dining room'
            />

            {/* Intro + occasions */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <div className='p-8 md:col-span-7 md:p-14'>
                    <Reveal>
                        <p className='label-mono text-flame mb-8'>The Venue</p>
                    </Reveal>
                    <RevealLines
                        className='headline text-bone text-4xl md:text-5xl'
                        lines={['A venue built', 'for extravagance.']}
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-bone/60 mt-8 max-w-lg font-mono text-[13px] leading-loose'>
                            Premium menus, high-quality steak and culinary craftsmanship in an intimate, boldly designed
                            room — from a velvet corner of the den to the entire venue, mirrored bull included.
                        </p>
                    </Reveal>

                    <ul className='mt-12 max-w-xl'>
                        {OCCASIONS.map((o, i) => (
                            <Reveal key={o.name} delay={0.05 * i} y={24}>
                                <li className='group border-border hover:border-flame/60 border-b py-5 transition-colors duration-500'>
                                    <p className='headline group-hover:text-flame text-2xl transition-colors duration-300 md:text-3xl'>
                                        {o.name}
                                    </p>
                                    <p className='label-mono text-smoke mt-2 text-[10px] leading-relaxed'>{o.note}</p>
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                </div>

                {/* Options + enquiry */}
                <div className='md:col-span-5'>
                    <div className='p-8 md:p-14'>
                        <Reveal delay={0.1}>
                            <p className='label-mono text-flame mb-6'>Ways to Book the Room</p>
                            <ul className='label-mono text-bone/70 space-y-5'>
                                {OPTIONS.map((o) => (
                                    <li key={o.name}>
                                        <span className='text-bone block'>{o.name}</span>
                                        {o.note}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                    <div className='p-8 pt-0 md:p-14 md:pt-0'>
                        <Reveal delay={0.2}>
                            <p className='label-mono text-flame mb-6'>Enquire</p>
                            <p className='text-bone/70 max-w-sm font-mono text-[13px] leading-loose'>
                                Parties of eight or fewer: book directly with our reservations team. For larger events,
                                our events team will tour you through the space and tailor the arrangements.
                            </p>
                            <div className='mt-8 flex flex-col gap-4'>
                                <a
                                    href='mailto:info@animlsteakhouse.com'
                                    className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal px-8 py-4 text-center transition-colors duration-300'>
                                    Submit an enquiry
                                </a>
                                <a
                                    href='tel:+14167646094'
                                    className='label-mono border-bone/25 text-bone hover:border-bone border px-8 py-4 text-center transition-colors duration-300'>
                                    +1 (416) 764-6094
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Image strip */}
            <section className='grid grid-cols-1 md:grid-cols-3'>
                {STRIP.map((img, i) => (
                    <RevealImage key={img.src} className='relative aspect-[4/3]' delay={0.08 * i}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes='(max-width: 768px) 100vw, 33vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                ))}
            </section>

            {/* Terracotta CTA band */}
            <section className='bg-flame relative overflow-hidden'>
                <Image
                    src='/images/leopardbg.png'
                    alt=''
                    fill
                    sizes='100vw'
                    className='object-cover opacity-[0.10] mix-blend-multiply'
                />
                <div className='relative flex flex-col items-center gap-8 px-5 py-16 text-center md:py-24'>
                    <RevealLines className='headline text-coal text-5xl md:text-7xl' lines={['Host your night.']} />
                    <Reveal delay={0.15}>
                        <a
                            href='mailto:info@animlsteakhouse.com'
                            className='label-mono bg-coal text-bone hover:bg-bone hover:text-coal inline-block px-10 py-4 transition-colors duration-300'>
                            Start the conversation
                        </a>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default Page;
