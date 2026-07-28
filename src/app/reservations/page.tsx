import type { Metadata } from 'next';

import PageHero from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
    title: 'Reservations — Book Your Table',
    description: 'Book your table at Animl Steakhouse Toronto. Private dining, partial venue use and full buyouts.'
};

const Page = () => {
    return (
        <>
            <PageHero
                label='Reservations'
                title='Book a table'
                accent='.'
                image='/images/home/dining.jpg'
                imageAlt='Steak dinner at Animl Steakhouse Toronto'
            />
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <div className='border-border border-b p-8 md:col-span-7 md:border-r md:border-b-0 md:p-14'>
                    <Reveal>
                        <p className='label-mono text-flame mb-6'>Booking</p>
                        <p className='text-bone/70 max-w-lg font-mono text-[13px] leading-loose'>
                            Reservations are handled through our booking partner. The online widget will live here —
                            until then, reach us directly by phone or email and we&apos;ll take care of you.
                        </p>
                        <div className='mt-10 flex flex-wrap gap-4'>
                            <a
                                href='tel:+14167646094'
                                className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal px-8 py-4 transition-colors duration-300'>
                                +1 (416) 764-6094
                            </a>
                            <a
                                href='mailto:info@animlsteakhouse.com'
                                className='label-mono border-bone/25 text-bone hover:border-bone border px-8 py-4 transition-colors duration-300'>
                                info@animlsteakhouse.com
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className='border-border mt-14 border-t pt-10'>
                            <p className='label-mono text-flame mb-6'>Private Dining</p>
                            <p className='text-bone/70 max-w-lg font-mono text-[13px] leading-loose'>
                                Enquire about private dining, partial venue use or full buyouts. Our events team offers
                                space tours and custom arrangements.
                            </p>
                        </div>
                    </Reveal>
                </div>
                <div className='md:col-span-5'>
                    <div className='border-border border-b p-8 md:p-14'>
                        <Reveal delay={0.1}>
                            <p className='label-mono text-flame mb-6'>Dinner Service</p>
                            <ul className='label-mono text-bone/70 space-y-4'>
                                <li>
                                    <span className='text-bone block'>Mon — Wed &amp; Sun</span>5:00 PM — 10:00 PM
                                </li>
                                <li>
                                    <span className='text-bone block'>Thu — Sat</span>5:00 PM — 11:00 PM
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                    <div className='p-8 md:p-14'>
                        <Reveal delay={0.2}>
                            <p className='label-mono text-flame mb-6'>Dress Code</p>
                            <p className='text-bone/70 max-w-sm font-mono text-[13px] leading-loose'>
                                Elegant attire requested. Athletic wear, hats, tank tops, flip-flops, shorts and
                                beachwear are not permitted — entry may be refused otherwise.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
