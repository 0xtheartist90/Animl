import type { Metadata } from 'next';
import Image from 'next/image';

import { IconBull, IconCoupe, IconWine } from '@/components/site/icons';
import PageHero from '@/components/site/page-hero';
import { ReserveButton } from '@/components/site/reserve-modal';
import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';

export const metadata: Metadata = {
    title: 'Events — Private Dining & Buyouts',
    description:
        'Host corporate events, celebrations, wrap parties and private gatherings at Animl Steakhouse Toronto.'
};

const OCCASIONS = [
    {
        n: '01',
        name: 'Corporate Events',
        note: 'Client dinners, launches and team nights that close deals and open bottles.'
    },
    {
        n: '02',
        name: 'Special Celebrations',
        note: 'Birthdays, anniversaries, engagements — milestones deserve theatre.'
    },
    {
        n: '03',
        name: 'Wrap Parties',
        note: 'End the production the way it deserves: loud, late and glamorous.'
    },
    {
        n: '04',
        name: 'Private Gatherings',
        note: 'Intimate dinners tucked into velvet corners of the den.'
    }
];

const OPTIONS = [
    { Icon: IconCoupe, name: 'Private Dining', note: 'A dedicated space within the room — dinner and cocktails for your table only.' },
    { Icon: IconWine, name: 'Partial Venue', note: 'A section of the floor, yours for the night, with a menu built around your party.' },
    { Icon: IconBull, name: 'Full Buyout', note: 'The entire venue — kitchen, den and mirrored bull included.' }
];

const STEPS = [
    { n: '01', name: 'Enquire', note: 'Tell us the occasion, the date and the size of your party.' },
    { n: '02', name: 'Tour the space', note: 'Our events team walks you through the room and the possibilities.' },
    { n: '03', name: 'We tailor the night', note: 'Menus, cocktails, timing and music — arranged around your evening.' }
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
                showLogo
            />

            {/* Intro */}
            <section className='px-5 py-14 text-center md:py-20'>
                <RevealLines
                    className='headline text-bone text-5xl md:text-7xl'
                    lines={[
                        <span key='t'>
                            The room is <span className='text-flame'>yours</span>.
                        </span>
                    ]}
                />
                <Reveal delay={0.15}>
                    <p className='text-bone/60 mx-auto mt-8 max-w-lg font-mono text-[13px] leading-loose'>
                        Premium menus, high-quality steak and culinary craftsmanship in an intimate, boldly designed
                        room. From a velvet corner of the den to the entire venue — if you can dream the night, we can
                        set the table for it.
                    </p>
                </Reveal>
            </section>

            {/* Occasions + image */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <div className='flex flex-col justify-center p-8 pt-0 md:col-span-6 md:p-14'>
                    <ul>
                        {OCCASIONS.map((o, i) => (
                            <Reveal key={o.name} delay={0.05 * i} y={24}>
                                <li className='group border-border hover:border-flame/60 flex items-baseline gap-6 border-b py-5 transition-colors duration-500'>
                                    <span className='label-mono text-flame'>{o.n}</span>
                                    <div>
                                        <p className='headline group-hover:text-flame text-2xl transition-colors duration-300 md:text-3xl'>
                                            {o.name}
                                        </p>
                                        <p className='label-mono text-smoke mt-2 text-[10px] leading-relaxed'>
                                            {o.note}
                                        </p>
                                    </div>
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                </div>
                <RevealImage className='relative aspect-[4/3] md:col-span-6 md:aspect-auto'>
                    <Parallax className='h-full' amount={8}>
                        <div className='relative h-full min-h-full w-full scale-[1.16]'>
                            <Image
                                src='/images/home/guests-fashion.jpg'
                                alt='Guests dressed for the evening in the dining room'
                                fill
                                sizes='(max-width: 768px) 100vw, 50vw'
                                className='img-premium object-cover'
                            />
                        </div>
                    </Parallax>
                </RevealImage>
            </section>

            {/* Ways to book the room */}
            <section className='px-5 py-14 md:px-8 md:py-20'>
                <Reveal>
                    <p className='label-mono text-flame mb-10 text-center'>Ways to book the room</p>
                </Reveal>
                <div className='mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8'>
                    {OPTIONS.map(({ Icon, name, note }, i) => (
                        <Reveal key={name} delay={0.08 * i}>
                            <div className='flex flex-col items-center gap-5 text-center'>
                                <Icon size={44} className='text-flame' />
                                <p className='headline text-bone text-3xl'>{name}</p>
                                <p className='label-mono text-smoke max-w-xs text-[10px] leading-relaxed'>{note}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* How it works */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <RevealImage className='relative aspect-[4/3] md:col-span-5 md:aspect-auto'>
                    <Image
                        src='/images/home/seafood-social.jpg'
                        alt='Guests sharing a seafood platter'
                        fill
                        sizes='(max-width: 768px) 100vw, 42vw'
                        className='img-premium object-cover'
                    />
                </RevealImage>
                <div className='flex flex-col justify-center p-8 md:col-span-7 md:p-14'>
                    <Reveal>
                        <p className='label-mono text-flame mb-8'>How it works</p>
                    </Reveal>
                    <ul className='max-w-xl'>
                        {STEPS.map((s, i) => (
                            <Reveal key={s.n} delay={0.06 * i} y={24}>
                                <li className='border-border flex items-baseline gap-6 border-b py-5'>
                                    <span className='headline text-flame text-3xl'>{s.n}</span>
                                    <div>
                                        <p className='headline text-bone text-2xl'>{s.name}</p>
                                        <p className='label-mono text-smoke mt-1 text-[10px] leading-relaxed'>
                                            {s.note}
                                        </p>
                                    </div>
                                </li>
                            </Reveal>
                        ))}
                    </ul>
                    <Reveal delay={0.2}>
                        <p className='label-mono text-smoke mt-8 max-w-md text-[10px] leading-relaxed'>
                            Parties of eight or fewer can book directly with our reservations team — for everything
                            bigger, the events team takes it from here.
                        </p>
                    </Reveal>
                </div>
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
                        <div className='flex flex-col gap-4 sm:flex-row'>
                            <ReserveButton
                                tab='event'
                                className='label-mono bg-coal text-bone hover:bg-bone hover:text-coal inline-block px-10 py-4 transition-colors duration-300'>
                                Submit an enquiry
                            </ReserveButton>
                            <a
                                href='tel:+14167646094'
                                className='label-mono border-coal/40 text-coal hover:border-coal inline-block border px-10 py-4 transition-colors duration-300'>
                                +1 (416) 764-6094
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default Page;
