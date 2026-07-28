import Image from 'next/image';
import Link from 'next/link';

import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';

const TheRoom = () => {
    return (
        <section className='border-border border-b'>
            <div className='border-border flex items-center justify-between border-b px-5 py-4 md:px-8'>
                <p className='label-mono text-bone/70'>The Room</p>
                <p className='label-mono text-smoke hidden md:block'>Design by Nivek Remas</p>
            </div>

            {/* Intro line */}
            <div className='border-border border-b px-5 py-16 text-center md:py-24'>
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
                    <p className='text-bone/60 mx-auto mt-8 max-w-md font-mono text-[13px] leading-loose'>
                        Mirrored bars, leopard velvet, brass and rosso marble — a timeless, theatrical room built for
                        evenings you don&apos;t forget.
                    </p>
                </Reveal>
            </div>

            {/* Interior grid */}
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <RevealImage className='border-border relative aspect-[4/5] md:col-span-7 md:aspect-auto md:min-h-[620px] md:border-r'>
                    <Parallax className='h-full' amount={8}>
                        <div className='relative h-full min-h-full w-full scale-[1.16]'>
                            <Image
                                src='/images/home/the-lounge.jpg'
                                alt='Leopard velvet banquettes beneath woven brass pendants'
                                fill
                                sizes='(max-width: 768px) 100vw, 58vw'
                                className='img-premium object-cover'
                            />
                        </div>
                    </Parallax>
                </RevealImage>
                <div className='grid md:col-span-5'>
                    <RevealImage className='border-border relative aspect-[4/3] border-t md:aspect-auto md:border-t-0 md:border-b' delay={0.1}>
                        <Image
                            src='/images/home/booth.jpg'
                            alt='Fringed lamp on a leopard velvet booth'
                            fill
                            sizes='(max-width: 768px) 100vw, 42vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                    <RevealImage className='border-border relative aspect-[4/3] border-t md:aspect-auto md:border-t-0' delay={0.18}>
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

            {/* Full-bleed bar */}
            <Link href='/reservations' className='group border-border relative block border-t'>
                <Parallax className='h-[55svh] md:h-[70svh]' amount={10}>
                    <div className='relative h-full w-full scale-[1.14]'>
                        <Image
                            src='/images/home/bar-wide.jpg'
                            alt='The mirrored bar with brass stools and rosso marble floors'
                            fill
                            sizes='100vw'
                            className='img-premium object-cover'
                        />
                    </div>
                </Parallax>
                <div className='from-coal/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent' />
                <div className='absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-8 md:px-8 md:pb-10'>
                    <p className='headline text-bone text-4xl md:text-5xl'>Pull up a stool.</p>
                    <p className='link-sweep label-mono text-bone/80 hidden md:block'>Reserve your evening</p>
                </div>
            </Link>
        </section>
    );
};

export default TheRoom;
