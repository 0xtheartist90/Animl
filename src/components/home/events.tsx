import Image from 'next/image';
import Link from 'next/link';

import CtaLink from '@/components/site/cta-link';
import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

const OCCASIONS = ['Corporate Events', 'Celebrations', 'Wrap Parties', 'Private Dining', 'Full Buyouts'];

const Events = () => {
    return (
        <section className='pt-6 md:pt-10'>
            <Reveal y={14} duration={0.7} className='flex items-center justify-between px-5 py-6 md:px-8'>
                <p className='text-bone flex items-center gap-4 font-sans text-2xl font-semibold tracking-tight uppercase md:text-3xl'>
                    <Spark className='text-flame' size={18} />
                    Private Dining &amp; Events
                </p>
                <CtaLink href='/events'>Plan an event</CtaLink>
            </Reveal>

            {/* Full-bleed parallax image with copy overlay */}
            <Link href='/events' className='group relative block'>
                <RevealImage zoom={false}>
                    <Parallax className='h-[70svh] md:h-[85svh]' amount={12}>
                    <div className='relative h-full w-full scale-[1.15]'>
                        <Image
                            src='/images/home/dining-room.jpg'
                            alt='The Animl dining room beneath the mirrored bull and glowing coffered ceiling'
                            fill
                            sizes='100vw'
                            className='img-premium object-cover'
                        />
                    </div>
                    </Parallax>
                </RevealImage>
                <div className='from-coal/90 via-coal/30 absolute inset-0 bg-gradient-to-t to-transparent' />

                <div className='absolute inset-x-0 bottom-0 px-5 pb-12 md:px-8 md:pb-16'>
                    <RevealLines
                        className='headline text-bone text-7xl md:text-[7.5vw]'
                        lines={[
                            'A venue built',
                            <span key='l2'>
                                for <span className='text-flame'>extravagance</span>.
                            </span>
                        ]}
                    />
                    <Reveal delay={0.2}>
                        <div className='mt-8 flex flex-wrap items-center gap-3'>
                            {OCCASIONS.map((o) => (
                                <span
                                    key={o}
                                    className='label-mono border-bone/25 text-bone/80 group-hover:border-bone/50 border px-4 py-2 transition-colors duration-500'>
                                    {o}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Link>
        </section>
    );
};

export default Events;
