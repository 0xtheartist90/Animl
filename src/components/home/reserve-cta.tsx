import Image from 'next/image';
import Link from 'next/link';

import { Reveal } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

const ReserveCta = () => {
    return (
        <section className='pt-6 md:pt-10'>
            <div className='flex items-center justify-between px-5 py-6 md:px-8'>
                <p className='label-mono text-bone/70 flex items-center gap-4'>
                    <Spark className='text-flame' size={13} />
                    Reservations
                </p>
                <p className='label-mono text-smoke hidden md:block'>Elegant attire requested</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12'>
                {/* Giant CTA */}
                <Link
                    href='/reservations'
                    className='group bg-flame relative flex flex-col justify-center overflow-hidden px-5 py-20 md:col-span-8 md:px-14 md:py-32'>
                    <Image
                        src='/images/leopardbg.png'
                        alt=''
                        fill
                        sizes='(max-width: 768px) 100vw, 66vw'
                        className='object-cover opacity-[0.10] mix-blend-multiply'
                    />
                    <span className='bg-coal absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100' />
                    <Reveal>
                        <span className='label-mono text-coal/70 group-hover:text-bone/70 relative mb-6 block transition-colors duration-500'>
                            Your table is waiting
                        </span>
                        <span className='text-coal group-hover:text-bone relative block font-sans text-[clamp(52px,8vw,128px)] leading-[1.02] font-semibold tracking-tight uppercase transition-colors duration-500'>
                            Reserve
                            <br />
                            Now
                            <span className='text-bone group-hover:text-flame transition-colors duration-500'>
                                .
                            </span>
                        </span>
                        <span className='label-mono text-coal/80 group-hover:text-bone relative mt-8 inline-flex items-center gap-3 transition-colors duration-500'>
                            Book your evening
                            <span className='transition-transform duration-500 group-hover:translate-x-2'>→</span>
                        </span>
                    </Reveal>
                </Link>

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
