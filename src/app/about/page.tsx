import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ReserveButton } from '@/components/site/reserve-modal';
import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

export const metadata: Metadata = {
    title: 'About — Our Story',
    description:
        'The story behind Animl Steakhouse Toronto: polished luxury meets primal instinct, in a room of Art Deco lines and Studio 54 energy by Nivek Remas.'
};

const GALLERY = [
    { src: '/images/home/knife-wall.jpg', alt: 'Steak knives mounted on leopard velvet', label: 'The Details' },
    { src: '/images/home/glam-lounge.jpg', alt: 'A guest draped in black on the velvet banquette', label: 'The Glamour' },
    { src: '/images/home/neon-sign.jpg', alt: 'The neon Animl sign on leopard tapestry', label: 'The Nights' },
    { src: '/images/home/seafood-tower.jpg', alt: 'The two-tier seafood tower with champagne', label: 'The Table' },
    { src: '/images/home/interior-lights.jpg', alt: 'Sculptural lighting on dark wood', label: 'The Light' },
    { src: '/images/home/bull-close.jpg', alt: 'The mirrored bull up close', label: 'The Bull' }
];

const Page = () => {
    return (
        <>
            {/* Video hero */}
            <section className='relative h-[80svh] overflow-hidden'>
                <video
                    className='absolute inset-0 h-full w-full scale-[1.06] object-cover'
                    src='/video/interior.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                />
                <div className='from-coal via-coal/30 absolute inset-0 bg-gradient-to-t to-transparent' />
                <div className='from-coal/60 absolute inset-x-0 top-0 h-28 bg-gradient-to-b to-transparent' />
                <div className='relative flex h-full flex-col justify-end px-5 pb-14 md:px-8 md:pb-16'>
                    <Reveal delay={0.2}>
                        <Image
                            src='/images/animl-cow.png'
                            alt='Animl — the upside-down cow'
                            width={1215}
                            height={954}
                            priority
                            className='mx-auto mb-8 w-40 md:mb-10 md:w-52'
                        />
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className='label-mono text-bone/80 mb-6 flex items-center gap-4'>
                            <Spark className='text-flame' size={13} />
                            About Animl
                        </p>
                    </Reveal>
                    <RevealLines
                        className='headline text-bone text-[clamp(56px,12vw,160px)]'
                        delay={0.4}
                        lines={[
                            <span key='t'>
                                Our Story<span className='text-flame'>.</span>
                            </span>
                        ]}
                    />
                </div>
            </section>

            {/* Chapter 01 — The Instinct */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <div className='flex flex-col justify-center p-8 md:col-span-6 md:p-16'>
                    <Reveal>
                        <p className='label-mono text-flame mb-8'>The Instinct</p>
                    </Reveal>
                    <RevealLines
                        className='headline text-bone text-4xl md:text-5xl'
                        lines={['Every great night out', 'starts with an appetite.']}
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-bone/60 mt-8 max-w-lg font-mono text-[15px] leading-loose'>
                            Not just for dinner — for all of it. The low light, the loud table next to yours, the
                            second bottle you didn&apos;t plan on. Animl was built on that instinct: a steakhouse where
                            polished luxury gives in, just a little, to something more primal.
                        </p>
                        <p className='text-bone/60 mt-6 max-w-lg font-mono text-[15px] leading-loose'>
                            Founded by Charles Khabouth&apos;s INK Entertainment — the people behind three decades of
                            Toronto nights — Animl brings sophisticated dining and untamed energy under one glowing
                            ceiling in the Entertainment District.
                        </p>
                    </Reveal>
                </div>
                <RevealImage className='relative aspect-[4/5] md:col-span-6 md:aspect-auto md:min-h-[560px]'>
                    <Image
                        src='/images/home/glam-dining.jpg'
                        alt='A guest in gold slicing into a signature cut'
                        fill
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='img-premium object-cover object-bottom'
                    />
                </RevealImage>
            </section>

            {/* The Room — full-bleed */}
            <section className='relative'>
                <Parallax className='h-[85svh] md:h-[95svh]' amount={10}>
                    <div className='relative h-full w-full scale-[1.14]'>
                        <Image
                            src='/images/home/the-lounge.jpg'
                            alt='Leopard velvet banquettes beneath woven brass pendants'
                            fill
                            sizes='100vw'
                            className='img-premium object-cover'
                        />
                    </div>
                </Parallax>
                <div className='from-coal/95 via-coal/40 absolute inset-0 bg-gradient-to-t to-transparent' />
                <div className='absolute inset-x-0 bottom-0 grid grid-cols-1 gap-6 px-5 pb-10 md:grid-cols-12 md:items-end md:px-8 md:pb-14'>
                    <div className='md:col-span-6'>
                        <Reveal>
                            <p className='label-mono text-flame mb-6'>The Room</p>
                        </Reveal>
                        <RevealLines
                            className='headline text-bone text-4xl md:text-6xl'
                            lines={['Art Deco bones,', 'Studio 54 blood.']}
                            delay={0.1}
                        />
                    </div>
                    <Reveal delay={0.2} className='md:col-span-6'>
                        <p className='text-bone/70 max-w-lg font-mono text-[15px] leading-loose'>
                            Nivek Remas dressed the room like it was going out: mirrored bars under a gold-leaf
                            canopy, leopard velvet booths, rosso marble floors and a backlit coffered ceiling. And
                            above it all — a mirrored bull, suspended mid-charge. Part disco ball, part patron saint.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* The Table — stats */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <RevealImage className='relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[620px]'>
                    <Image
                        src='/images/home/dry-ager.jpg'
                        alt='The dry-aging cabinet glowing red'
                        fill
                        sizes='(max-width: 768px) 100vw, 42vw'
                        className='img-premium object-cover'
                    />
                </RevealImage>
                <div className='flex flex-col justify-center p-8 md:col-span-7 md:p-16 md:pl-20'>
                    <Reveal>
                        <p className='label-mono text-flame mb-8'>The Table</p>
                    </Reveal>
                    <RevealLines
                        className='headline text-bone text-4xl md:text-5xl'
                        lines={['Fire, salt', 'and patience.']}
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-bone/60 mt-8 max-w-lg font-mono text-[15px] leading-loose'>
                            Cuts from Alberta, Elora and Miyazaki — grilled over fire and branded before they leave
                            the pass. A raw bar of oysters, king crab and Kaviari caviar keeps the other side of the
                            table honest. Time is the most expensive ingredient in the room, and we spend it
                            generously.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className='mt-12 flex gap-14 md:gap-20'>
                            <div>
                                <p className='headline text-flame text-6xl md:text-7xl'>45</p>
                                <p className='label-mono text-smoke mt-2'>Days dry-aged</p>
                            </div>
                            <div>
                                <p className='headline text-flame text-6xl md:text-7xl'>3</p>
                                <p className='label-mono text-smoke mt-2'>Continents of wagyu</p>
                            </div>
                            <div>
                                <p className='headline text-flame text-6xl md:text-7xl'>40</p>
                                <p className='label-mono text-smoke mt-2'>oz Porterhouse</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* The Den — terracotta */}
            <section className='bg-flame relative overflow-hidden'>
                <Image
                    src='/images/leopardbg.png'
                    alt=''
                    fill
                    sizes='100vw'
                    className='object-cover opacity-[0.10] mix-blend-multiply'
                />
                <div className='relative grid grid-cols-1 gap-10 p-8 md:grid-cols-12 md:items-center md:gap-14 md:p-16'>
                    <div className='md:col-span-7'>
                        <Reveal>
                            <p className='label-mono text-coal/70 mb-8'>The Den</p>
                        </Reveal>
                        <RevealLines
                            className='headline text-coal text-4xl md:text-5xl'
                            lines={['Cocktails,', 'served like dinner.']}
                            delay={0.1}
                        />
                        <Reveal delay={0.2}>
                            <p className='text-coal/70 mt-8 max-w-lg font-mono text-[15px] leading-loose'>
                                Saralyn Stevens and the Animl bar team composed the cocktail menu like a tasting:
                                amuse bouche to dessert, with miniature martinis in between and a house digestif to
                                close. Stay past midnight — the den pours until 2 AM on weekends.
                            </p>
                        </Reveal>
                    </div>
                    <RevealImage className='border-coal/30 relative aspect-[4/5] border p-3 md:col-span-5' zoom={false}>
                        <div className='relative h-full w-full overflow-hidden'>
                            <Image
                                src='/images/home/den-nights.jpg'
                                alt='An old fashioned beside the Animl menu'
                                fill
                                sizes='(max-width: 768px) 100vw, 42vw'
                                className='img-premium object-cover'
                            />
                        </div>
                    </RevealImage>
                </div>
            </section>

            {/* The Founder — centered */}
            <section className='px-5 py-16 text-center md:py-24'>
                <Reveal>
                    <p className='label-mono text-flame mb-8'>The Founder</p>
                </Reveal>
                <RevealLines
                    className='headline text-bone text-4xl md:text-6xl'
                    lines={['Three decades of', 'Toronto nights.']}
                    delay={0.1}
                />
                <Reveal delay={0.2}>
                    <p className='text-bone/60 mx-auto mt-8 max-w-xl font-mono text-[15px] leading-loose'>
                        Animl is the newest chapter from Charles Khabouth&apos;s INK Entertainment — the hospitality
                        house that has shaped how Toronto goes out since the eighties. Everything INK learned about a
                        great night — the room, the sound, the service, the drama — is distilled into one address on
                        Wellington Street.
                    </p>
                </Reveal>
                <Reveal delay={0.3}>
                    <ul className='label-mono text-bone/70 mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-x-16 gap-y-8'>
                        <li>
                            <span className='text-flame block'>Founder</span>Charles Khabouth
                        </li>
                        <li>
                            <span className='text-flame block'>Interior Design</span>Nivek Remas
                        </li>
                        <li>
                            <span className='text-flame block'>Cocktail Programme</span>Saralyn Stevens
                        </li>
                        <li>
                            <span className='text-flame block'>Home</span>420A Wellington St W
                        </li>
                    </ul>
                </Reveal>
            </section>

            {/* Gallery */}
            <section className='grid grid-cols-2 md:grid-cols-3'>
                {GALLERY.map((img, i) => (
                    <RevealImage key={img.src} className='group relative aspect-[4/5]' delay={0.06 * (i % 3)}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes='(max-width: 768px) 50vw, 33vw'
                            className='img-premium object-cover'
                        />
                        <div className='from-coal/70 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-5 pt-14 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                            <p className='label-mono text-bone'>{img.label}</p>
                        </div>
                    </RevealImage>
                ))}
            </section>

            {/* Closing CTA */}
            <section className='relative'>
                <Parallax className='h-[50svh] md:h-[65svh]' amount={10}>
                    <div className='relative h-full w-full scale-[1.14]'>
                        <Image
                            src='/images/home/caviar-night.jpg'
                            alt='Guests sharing caviar service and martinis at the table'
                            fill
                            sizes='100vw'
                            className='img-premium object-cover'
                        />
                    </div>
                </Parallax>
                <div className='from-coal/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent' />
                <div className='absolute inset-x-0 bottom-0 flex flex-col items-start gap-6 px-5 pb-10 md:flex-row md:items-end md:justify-between md:px-8'>
                    <p className='headline text-bone text-4xl md:text-5xl'>Come see it for yourself.</p>
                    <div className='flex gap-4'>
                        <ReserveButton className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal px-8 py-4 transition-colors duration-300'>
                            Reserve Now
                        </ReserveButton>
                        <Link
                            href='/menus'
                            className='label-mono border-bone/30 text-bone hover:border-bone border px-8 py-4 transition-colors duration-300'>
                            View Menus
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
