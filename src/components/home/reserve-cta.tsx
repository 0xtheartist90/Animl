import Image from 'next/image';

import { ReserveButton } from '@/components/site/reserve-modal';
import { Reveal } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

const ReserveCta = () => {
    return (
        <section className='pt-6 md:pt-10'>
            <Reveal y={14} duration={0.7} className='flex items-center justify-between px-5 py-6 md:px-8'>
                <p className='label-mono text-bone/70 flex items-center gap-4'>
                    <Spark className='text-flame' size={13} />
                    Reservations
                </p>
                <p className='label-mono text-smoke hidden md:block'>Elegant attire requested</p>
            </Reveal>

            <div className='grid grid-cols-1 md:grid-cols-12'>
                {/* Giant CTA */}
                <ReserveButton className='group bg-flame relative flex flex-col justify-center overflow-hidden px-5 py-20 text-left md:col-span-8 md:px-14 md:py-32'>
                    <Image
                        src='/images/leopardbg.png'
                        alt=''
                        fill
                        sizes='(max-width: 768px) 100vw, 66vw'
                        className='object-cover opacity-[0.10] mix-blend-multiply'
                    />
                    {/* Photo fades in over the terracotta on hover */}
                    <span className='absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100'>
                        <Image
                            src='/images/home/wagyu-glow.jpg'
                            alt=''
                            fill
                            sizes='(max-width: 768px) 100vw, 66vw'
                            className='scale-105 object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-100'
                        />
                        <span className='bg-coal/45 absolute inset-0' />
                    </span>
                    <Reveal>
                        <span className='label-mono text-coal/70 group-hover:text-bone/80 relative mb-6 block transition-colors duration-500'>
                            Your table is waiting
                        </span>
                        <span className='text-coal group-hover:text-bone relative block font-sans text-[clamp(52px,8vw,128px)] leading-[1.02] font-semibold tracking-tight uppercase transition-colors duration-500'>
                            Reserve
                            <br />
                            Now
                        </span>
                        <span className='label-mono text-coal/80 group-hover:text-bone relative mt-8 inline-flex items-center gap-3 transition-colors duration-500'>
                            Book your evening
                            <span>→</span>
                        </span>
                    </Reveal>
                </ReserveButton>

                {/* Hours + dress code */}
                <div className='md:col-span-4'>
                    <div className='p-8 md:p-10'>
                        <Reveal>
                            <p className='label-mono text-flame mb-6'>Dinner Service</p>
                            <ul className='label-mono text-bone/70 space-y-4'>
                                <li>
                                    <span className='text-bone block'>Mon — Wed &amp; Sun</span>
                                    5:00 PM — 10:00 PM
                                </li>
                                <li>
                                    <span className='text-bone block'>Thu — Sat</span>
                                    5:00 PM — 11:00 PM
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                    <div className='p-8 md:p-10'>
                        <Reveal delay={0.1}>
                            <p className='label-mono text-flame mb-6'>Den Hours</p>
                            <ul className='label-mono text-bone/70 space-y-4'>
                                <li>
                                    <span className='text-bone block'>Mon — Wed &amp; Sun</span>
                                    5:00 PM — 12:00 AM
                                </li>
                                <li>
                                    <span className='text-bone block'>Thu — Sat</span>
                                    5:00 PM — 2:00 AM
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReserveCta;
