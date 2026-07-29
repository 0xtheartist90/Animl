import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageHero from '@/components/site/page-hero';
import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';
import Stamp from '@/components/site/stamp';

export const metadata: Metadata = {
    title: 'About — Our Story',
    description:
        'The story behind Animl Steakhouse Toronto: polished luxury meets primal instinct, in a room of Art Deco lines and Studio 54 energy by Nivek Remas.'
};

const GALLERY = [
    { src: '/images/home/knife-wall.jpg', alt: 'Steak knives mounted on leopard velvet' },
    { src: '/images/home/glam-dining.jpg', alt: 'A guest in gold slicing into a signature cut' },
    { src: '/images/home/event-lounge.jpg', alt: 'Guests lounging on velvet banquettes' },
    { src: '/images/home/seafood-social.jpg', alt: 'Friends sharing the seafood platter' },
    { src: '/images/home/interior-lights.jpg', alt: 'Sculptural lighting on dark wood' },
    { src: '/images/home/disco-bull.jpg', alt: 'The mirrored bull above the dining room' }
];

const Page = () => {
    return (
        <>
            <PageHero
                label='About Animl'
                title='Our Story'
                accent='.'
                image='/images/home/dining-room.jpg'
                imageAlt='The Animl dining room beneath the mirrored bull'
            />

            {/* Story */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <div className='p-8 md:col-span-7 md:p-14'>
                    <Reveal>
                        <p className='label-mono text-flame mb-8'>Where luxury turns instinctive</p>
                    </Reveal>
                    <RevealLines
                        className='headline text-bone text-4xl md:text-5xl'
                        lines={['Polished luxury,', 'primal appetite.']}
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-bone/60 mt-8 max-w-lg font-mono text-[13px] leading-loose'>
                            Animl is a sensory dining experience built on strong flavours, premium ingredients and
                            culinary artistry — dry-aged steak, a serious raw bar and cocktails composed like courses,
                            served with sophisticated presentation in a lively, theatrical room.
                        </p>
                        <p className='text-bone/60 mt-6 max-w-lg font-mono text-[13px] leading-loose'>
                            The space channels Art Deco lines, Studio 54 energy and 1970s glamour: mirrored bars,
                            leopard velvet, brass and rosso marble beneath a glowing coffered ceiling — and a mirrored
                            bull suspended over it all. Timeless, theatrical, and built for evenings you don&apos;t
                            forget.
                        </p>
                    </Reveal>
                </div>

                {/* Facts */}
                <div className='p-8 md:col-span-5 md:p-14'>
                    <Reveal delay={0.15}>
                        <ul className='label-mono text-bone/70 space-y-6'>
                            <li>
                                <span className='text-flame block'>Founder</span>Charles Khabouth — INK Entertainment
                            </li>
                            <li>
                                <span className='text-flame block'>Interior Design</span>Nivek Remas, Toronto
                            </li>
                            <li>
                                <span className='text-flame block'>Cocktail Programme</span>Saralyn Stevens &amp; the
                                Animl bar team
                            </li>
                            <li>
                                <span className='text-flame block'>Neighbourhood</span>Entertainment District — 420A
                                Wellington St West
                            </li>
                        </ul>
                        <div className='mt-12'>
                            <Stamp text='Elegantly Untamed • Toronto • Steakhouse • Cocktail Den • ' size={130} />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Gallery */}
            <section className='grid grid-cols-2 md:grid-cols-3'>
                {GALLERY.map((img, i) => (
                    <RevealImage key={img.src} className='relative aspect-[4/5]' delay={0.06 * (i % 3)}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes='(max-width: 768px) 50vw, 33vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                ))}
            </section>

            {/* Interior video */}
            <section className='relative'>
                <Parallax className='h-[50svh] md:h-[65svh]' amount={10}>
                    <div className='relative h-full w-full scale-[1.14]'>
                        <video
                            className='absolute inset-0 h-full w-full object-cover'
                            src='/video/interior.mp4'
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload='metadata'
                        />
                    </div>
                </Parallax>
                <div className='from-coal/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent' />
                <div className='absolute inset-x-0 bottom-0 flex flex-col items-start gap-6 px-5 pb-10 md:flex-row md:items-end md:justify-between md:px-8'>
                    <p className='headline text-bone text-4xl md:text-5xl'>Come see it for yourself.</p>
                    <Link
                        href='/reservations'
                        className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal px-8 py-4 transition-colors duration-300'>
                        Reserve Now
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Page;
