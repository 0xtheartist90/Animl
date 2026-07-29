import Image from 'next/image';
import Link from 'next/link';

import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';
import Stamp from '@/components/site/stamp';

const About = () => {
    return (
        <section className='pt-6 md:pt-10'>
            {/* Section label */}
            <div className='flex items-center justify-between px-5 py-6 md:px-8'>
                <p className='label-mono text-bone/70 flex items-center gap-4'>
                    <Spark className='text-flame' size={13} />
                    About Animl
                </p>
                <Link
                    href='/about'
                    className='link-sweep label-mono text-bone/70 hover:text-bone hidden transition-colors md:block'>
                    Our full story
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12'>
                {/* Image */}
                <RevealImage className='relative aspect-[4/5] md:col-span-4 md:aspect-auto'>
                    <Parallax className='h-full' amount={8}>
                        <div className='relative h-full min-h-full w-full scale-[1.18]'>
                            <Image
                                src='/images/home/interior-lights.jpg'
                                alt='Sculptural lighting inside Animl Steakhouse'
                                fill
                                sizes='(max-width: 768px) 100vw, 33vw'
                                className='img-premium object-cover'
                            />
                        </div>
                    </Parallax>
                </RevealImage>

                {/* Copy */}
                <div className='flex flex-col justify-center px-5 py-16 text-center md:col-span-5 md:px-14 md:py-28'>
                    <Reveal>
                        <p className='label-mono text-flame mb-8'>Where luxury turns instinctive</p>
                    </Reveal>
                    <RevealLines
                        className='headline text-bone text-4xl md:text-5xl'
                        lines={['Polished luxury,', 'primal appetite.']}
                        delay={0.1}
                    />
                    <Reveal delay={0.25}>
                        <p className='text-bone/60 mx-auto mt-8 max-w-md font-mono text-[13px] leading-loose'>
                            Animl is a sensory dining experience built on strong flavours, premium ingredients and
                            culinary artistry — served with sophisticated presentation in a lively, theatrical room.
                        </p>
                        <p className='text-bone/60 mx-auto mt-6 max-w-md font-mono text-[13px] leading-loose'>
                            Art Deco lines, Studio 54 energy and 1970s glamour — a space designed by Nivek Remas for
                            evenings you don&apos;t forget.
                        </p>
                    </Reveal>
                    <Reveal delay={0.35}>
                        <Link href='/about' className='link-sweep label-mono text-bone mx-auto mt-10 inline-block'>
                            Read our story
                        </Link>
                    </Reveal>
                </div>

                {/* Stamp + leopard address card */}
                <div className='grid grid-rows-2 md:col-span-3'>
                    <div className='flex flex-col items-center justify-center gap-4 py-14'>
                        <Reveal>
                            <Stamp text='Elegantly Untamed • Toronto • Steakhouse • Cocktail Den • ' />
                        </Reveal>
                    </div>
                    <RevealImage className='bg-flame relative overflow-hidden' delay={0.1}>
                        <Image
                            src='/images/leopardbg.png'
                            alt=''
                            fill
                            sizes='(max-width: 768px) 100vw, 25vw'
                            className='object-cover opacity-[0.10] mix-blend-multiply'
                        />
                        <div className='relative flex h-full flex-col items-center justify-center gap-3 py-14'>
                            <p className='headline text-coal text-center text-6xl'>420A</p>
                            <p className='label-mono text-coal/70 text-center'>Wellington St West</p>
                        </div>
                    </RevealImage>
                </div>
            </div>
        </section>
    );
};

export default About;
