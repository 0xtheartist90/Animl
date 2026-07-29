import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ReserveButton } from '@/components/site/reserve-modal';
import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';
import Stamp from '@/components/site/stamp';

export const metadata: Metadata = {
    title: 'About — Our Story',
    description:
        'The story behind Animl Steakhouse Toronto: polished luxury meets primal instinct, in a room of Art Deco lines and Studio 54 energy by Nivek Remas.'
};

const GALLERY = [
    { src: '/images/home/knife-wall.jpg', alt: 'Steak knives mounted on leopard velvet', label: 'The Details' },
    { src: '/images/home/glam-dining.jpg', alt: 'A guest in gold slicing into a signature cut', label: 'The Glamour' },
    { src: '/images/home/event-lounge.jpg', alt: 'Guests lounging on velvet banquettes', label: 'The Nights' },
    { src: '/images/home/seafood-social.jpg', alt: 'Friends sharing the seafood platter', label: 'The Table' },
    { src: '/images/home/interior-lights.jpg', alt: 'Sculptural lighting on dark wood', label: 'The Light' },
    { src: '/images/home/disco-bull.jpg', alt: 'The mirrored bull above the dining room', label: 'The Bull' }
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
                    <div className='flex flex-1 items-center justify-center'>
                        <Reveal delay={0.2}>
                            <Image
                                src='/images/animl-cow.png'
                                alt='Animl — the upside-down cow'
                                width={1215}
                                height={954}
                                priority
                                className='w-48 md:w-64'
                            />
                        </Reveal>
                    </div>
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
                        <p className='text-bone/60 mt-8 max-w-lg font-mono text-[13px] leading-loose'>
                            Not just for dinner — for all of it. The low light, the loud table next to yours, the
                            second bottle you didn&apos;t plan on. Animl was built on that instinct: a steakhouse where
                            polished luxury gives in, just a little, to something more primal.
                        </p>
                        <p className='text-bone/60 mt-6 max-w-lg font-mono text-[13px] leading-loose'>
                            Founded by Charles Khabouth&apos;s INK Entertainment — the people behind three decades of
                            Toronto nights — Animl brings sophisticated dining and untamed energy under one glowing
                            ceiling in the Entertainment District.
                        </p>
                    </Reveal>
                </div>
                <RevealImage className='relative aspect-[4/5] md:col-span-6 md:aspect-auto md:min-h-[560px]'>
                    <Image
                        src='/images/home/about-night.jpg'
                        alt='Guests mingling beneath the mirrored bull on a busy night'
                        fill
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className='img-premium object-cover'
                    />
                </RevealImage>
            </section>

            {/* Quote band */}
            <section className='bg-flame relative overflow-hidden'>
                <Image
                    src='/images/leopardbg.png'
                    alt=''
                    fill
                    sizes='100vw'
                    className='object-cover opacity-[0.10] mix-blend-multiply'
                />
                <div className='relative px-5 py-16 text-center md:py-20'>
                    <RevealLines
                        className='headline text-coal text-4xl md:text-6xl'
                        lines={['Polished luxury,', 'primal appetite.']}
                    />
                </div>
            </section>

            {/* Chapter 02 — The Room */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <RevealImage className='relative order-2 aspect-[4/5] md:order-1 md:col-span-6 md:aspect-auto md:min-h-[560px]'>
                    <Parallax className='h-full' amount={8}>
                        <div className='relative h-full min-h-full w-full scale-[1.16]'>
                            <Image
                                src='/images/home/the-lounge.jpg'
                                alt='Leopard velvet banquettes beneath woven brass pendants'
                                fill
                                sizes='(max-width: 768px) 100vw, 50vw'
                                className='img-premium object-cover'
                            />
                        </div>
                    </Parallax>
                </RevealImage>
                <div className='order-1 flex flex-col justify-center p-8 md:order-2 md:col-span-6 md:p-16'>
                    <Reveal>
                        <p className='label-mono text-flame mb-8'>The Room</p>
                    </Reveal>
                    <RevealLines
                        className='headline text-bone text-4xl md:text-5xl'
                        lines={['Art Deco bones,', 'Studio 54 blood.']}
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-bone/60 mt-8 max-w-lg font-mono text-[13px] leading-loose'>
                            Toronto design studio Nivek Remas dressed the room like it was going out: mirrored bars
                            under a gold-leaf canopy, leopard velvet booths, rosso marble floors and a backlit coffered
                            ceiling that makes everyone look like they arrived by limousine.
                        </p>
                        <p className='text-bone/60 mt-6 max-w-lg font-mono text-[13px] leading-loose'>
                            And above it all — a mirrored bull, suspended mid-charge. Part disco ball, part patron
                            saint. You&apos;ll know the room when you see it.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Chapter 03 — The Table & The Den */}
            <section className='grid grid-cols-1 md:grid-cols-2'>
                <div className='relative'>
                    <RevealImage className='relative aspect-[4/3]'>
                        <Image
                            src='/images/home/steak-branded.jpg'
                            alt='The Animl-branded signature cut'
                            fill
                            sizes='(max-width: 768px) 100vw, 50vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                    <div className='p-8 md:p-12'>
                        <Reveal>
                            <p className='label-mono text-flame mb-6'>The Table</p>
                            <p className='headline text-bone text-3xl md:text-4xl'>Fire, salt and patience.</p>
                            <p className='text-bone/60 mt-6 max-w-md font-mono text-[13px] leading-loose'>
                                Cuts from Alberta, Elora and Miyazaki — wet- and dry-aged up to 45 days, grilled over
                                fire and branded before they leave the pass. A raw bar of oysters, king crab and
                                Kaviari caviar keeps the other side of the table honest.
                            </p>
                        </Reveal>
                    </div>
                </div>
                <div className='relative'>
                    <RevealImage className='relative aspect-[4/3]' delay={0.12}>
                        <Image
                            src='/images/home/cocktail-red.jpg'
                            alt='Flaming red cocktail crowned with a rose'
                            fill
                            sizes='(max-width: 768px) 100vw, 50vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                    <div className='p-8 md:p-12'>
                        <Reveal delay={0.1}>
                            <p className='label-mono text-flame mb-6'>The Den</p>
                            <p className='headline text-bone text-3xl md:text-4xl'>Cocktails, served like dinner.</p>
                            <p className='text-bone/60 mt-6 max-w-md font-mono text-[13px] leading-loose'>
                                Saralyn Stevens and the Animl bar team composed the cocktail menu like a tasting: amuse
                                bouche to dessert, with miniature martinis in between. Stay past midnight — the den
                                pours until 2 AM on weekends.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Credits */}
            <section className='grid grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-12 md:px-16 md:py-16'>
                <div className='md:col-span-9'>
                    <Reveal>
                        <ul className='label-mono text-bone/70 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                            <li>
                                <span className='text-flame block'>Founder</span>Charles Khabouth — INK
                            </li>
                            <li>
                                <span className='text-flame block'>Interior Design</span>Nivek Remas
                            </li>
                            <li>
                                <span className='text-flame block'>Cocktail Programme</span>Saralyn Stevens
                            </li>
                            <li>
                                <span className='text-flame block'>Neighbourhood</span>420A Wellington St W
                            </li>
                        </ul>
                    </Reveal>
                </div>
                <div className='md:col-span-3 md:justify-self-end'>
                    <Reveal delay={0.15}>
                        <Stamp text='Elegantly Untamed • Animl • Toronto • ' size={120} />
                    </Reveal>
                </div>
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
                            src='/images/home/dining-room.jpg'
                            alt='The Animl dining room set for the evening'
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
