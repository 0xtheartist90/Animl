'use client';

import { useRef } from 'react';

import Link from 'next/link';

import Logo from '@/components/site/logo';
import { EASE } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

const Hero = () => {
    const ref = useRef<HTMLElement>(null);
    const reduced = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.6], ['0%', '30%']);

    return (
        <section ref={ref} className='relative h-[100svh] overflow-hidden'>
            {/* Video */}
            <motion.div style={reduced ? undefined : { y: videoY }} className='absolute inset-0 scale-[1.06]'>
                <video
                    className='h-full w-full object-cover'
                    src='/video/hero.mp4'
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload='auto'
                />
            </motion.div>
            {/* Grade */}
            <div className='from-coal via-coal/30 absolute inset-0 bg-gradient-to-t to-transparent' />
            <div className='from-coal/70 absolute inset-0 bg-gradient-to-b via-transparent to-transparent' />

            <motion.div
                style={reduced ? undefined : { opacity: contentOpacity, y: contentY }}
                className='relative flex h-full flex-col justify-end px-5 pb-12 md:px-8 md:pb-14'>
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
                    className='mb-6'>
                    <Logo className='w-44 md:w-60' />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1, ease: EASE }}
                    className='label-mono text-bone/80 mb-8 flex items-center gap-4'>
                    <Spark className='text-flame' />
                    Steakhouse &amp; Cocktail Den — Toronto
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.25, ease: EASE }}
                    className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
                    <p className='label-mono text-bone/70 max-w-md leading-loose'>
                        Elegantly untamed — dry-aged steak, crafted cocktails and 1970s glamour in the heart of the
                        Entertainment District.
                    </p>
                    <div className='flex items-center gap-4'>
                        <Link
                            href='/reservations'
                            className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal px-8 py-4 transition-colors duration-300'>
                            Reserve Now
                        </Link>
                        <Link
                            href='/menus'
                            className='label-mono border-bone/30 text-bone hover:border-bone border px-8 py-4 transition-colors duration-300'>
                            View Menus
                        </Link>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className='absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 pb-4 md:flex'>
                <span className='label-mono text-bone/50 text-[10px]'>Scroll</span>
                <motion.span
                    animate={{ scaleY: [0, 1, 0], originY: ['0%', '0%', '100%'] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className='bg-bone/60 block h-8 w-px'
                />
            </motion.div>
        </section>
    );
};

export default Hero;
