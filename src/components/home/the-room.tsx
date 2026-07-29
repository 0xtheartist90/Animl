import Image from 'next/image';
import Link from 'next/link';

import Statement from '@/components/home/statement';
import CtaLink from '@/components/site/cta-link';
import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

const TheRoom = () => {
    return (
        <section className='pt-6 md:pt-10'>
            <div className='flex items-center justify-between px-5 py-6 md:px-8'>
                <p className='label-mono text-bone/70 flex items-center gap-4'>
                    <Spark className='text-flame' size={13} />
                    The Room
                </p>
                <p className='label-mono text-smoke hidden md:block'>Design by Nivek Remas</p>
            </div>

            {/* Intro line */}
            <div className='px-5 pt-4 pb-10 text-center md:pt-6 md:pb-16'>
                <RevealLines
                    className='headline text-bone text-5xl md:text-7xl'
                    lines={[
                        'Art Deco lines,',
                        <span key='l2'>
                            Studio 54 <span className='text-flame'>energy</span>.
                        </span>
                    ]}
                />
                <Reveal delay={0.2}>
                    <Image
                        src='/images/leopardicon.png'
                        alt=''
                        width={955}
                        height={2081}
                        className='mx-auto mt-8 w-12 md:w-14'
                    />
                    <p className='text-bone/60 mx-auto mt-4 max-w-md font-mono text-[13px] leading-loose'>
                        Mirrored bars, leopard velvet, brass and rosso marble — a timeless, theatrical room built for
                        evenings you don&apos;t forget.
                    </p>
                </Reveal>
            </div>

            {/* Interior grid */}
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <RevealImage className='relative aspect-[4/5] md:col-span-7 md:aspect-auto md:min-h-[620px]'>
                    <Parallax className='h-full' amount={8}>
                        <div className='relative h-full min-h-full w-full scale-[1.16]'>
                            <Image
                                src='/images/home/bar-wide.jpg'
                                alt='The mirrored bar with brass stools and rosso marble floors'
                                fill
                                sizes='(max-width: 768px) 100vw, 58vw'
                                className='img-premium object-cover'
                            />
                        </div>
                    </Parallax>
                </RevealImage>
                <div className='grid md:col-span-5'>
                    <RevealImage className='relative aspect-[4/3] md:aspect-auto' delay={0.1}>
                        <Image
                            src='/images/home/booth.jpg'
                            alt='Fringed lamp on a leopard velvet booth'
                            fill
                            sizes='(max-width: 768px) 100vw, 42vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                    <RevealImage className='relative aspect-[4/3] md:aspect-auto' delay={0.18}>
                        <Image
                            src='/images/home/ceiling.jpg'
                            alt='Backlit coffered ceiling with mirrored panels'
                            fill
                            sizes='(max-width: 768px) 100vw, 42vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                </div>
            </div>

            {/* Marquee interlude */}
            <Statement />

            {/* Full-bleed interior video */}
            <Link href='/reservations' className='group relative block'>
                <Parallax className='h-[55svh] md:h-[75svh]' amount={10}>
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
                <div className='absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-8 md:px-8 md:pb-10'>
                    <p className='headline text-bone text-4xl md:text-5xl'>Pull up a stool.</p>
                    <CtaLink href='/reservations' className='bg-coal/40 hidden backdrop-blur-sm md:inline-flex'>
                        Reserve your evening
                    </CtaLink>
                </div>
            </Link>
        </section>
    );
};

export default TheRoom;
