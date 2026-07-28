import Image from 'next/image';
import Link from 'next/link';

import { Parallax, Reveal, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

const OCCASIONS = ['Corporate Events', 'Celebrations', 'Wrap Parties', 'Private Dining', 'Full Buyouts'];

const Events = () => {
    return (
        <section className='pt-6 md:pt-10'>
            <div className='flex items-center justify-between px-5 py-6 md:px-8'>
                <p className='label-mono text-bone/70 flex items-center gap-4'>
                    <Spark className='text-flame' size={13} />
                    Private Dining &amp; Events
                </p>
                <Link href='/events' className='link-sweep label-mono text-bone/70 hover:text-bone transition-colors'>
                    Plan an event
                </Link>
            </div>

            {/* Full-bleed parallax image with copy overlay */}
            <Link href='/events' className='group relative block'>
                <Parallax className='h-[70svh] md:h-[85svh]' amount={12}>
                    <div className='relative h-full w-full scale-[1.15]'>
                        <Image
                            src='/images/home/disco-bull.jpg'
                            alt='The mirrored bull suspended above the Animl dining room'
                            fill
                            sizes='100vw'
                            className='img-premium object-cover'
                        />
                    </div>
                </Parallax>
                <div className='from-coal/90 via-coal/30 absolute inset-0 bg-gradient-to-t to-transparent' />

                <div className='absolute inset-x-0 bottom-0 px-5 pb-12 md:px-8 md:pb-16'>
                    <RevealLines
                        className='headline text-bone text-6xl md:text-[7vw]'
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
