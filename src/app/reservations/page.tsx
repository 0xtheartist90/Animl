import type { Metadata } from 'next';

import PageHero from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
    title: 'Reserve — Book Your Table',
    description:
        'Book your table at Animl Steakhouse Toronto. Hours, dress code, private dining and how to find us at 420A Wellington Street West.'
};

const Page = () => {
    return (
        <>
            <PageHero
                label='Reservations'
                title='Reserve'
                accent='.'
                image='/images/home/table-overhead.jpg'
                imageAlt='A table at Animl seen from above, oysters and martini at hand'
            />

            {/* Booking + hours */}
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <div className='p-8 md:col-span-7 md:p-14'>
                    <Reveal>
                        <p className='label-mono text-flame mb-6'>Booking</p>
                        <p className='text-bone/70 max-w-lg font-mono text-[15px] leading-loose'>
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
                            <p className='label-mono text-flame mb-6'>Private Dining &amp; Groups</p>
                            <p className='text-bone/70 max-w-lg font-mono text-[15px] leading-loose'>
                                Parties of eight or fewer can book directly with our reservations team. For larger
                                gatherings, private dining, partial venue use or full buyouts, our events team offers
                                space tours and custom arrangements.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <div className='md:col-span-5'>
                    <div className='p-8 md:p-14'>
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
                            <p className='label-mono text-flame mt-10 mb-6'>Den Hours</p>
                            <ul className='label-mono text-bone/70 space-y-4'>
                                <li>
                                    <span className='text-bone block'>Mon — Wed &amp; Sun</span>5:00 PM — 12:00 AM
                                </li>
                                <li>
                                    <span className='text-bone block'>Thu — Sat</span>5:00 PM — 2:00 AM
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                    <div className='p-8 pt-0 md:p-14 md:pt-0'>
                        <Reveal delay={0.2}>
                            <p className='label-mono text-flame mb-6'>Dress Code</p>
                            <p className='text-bone/70 max-w-sm font-mono text-[15px] leading-loose'>
                                Elegant attire requested. Athletic wear, hats, tank tops, flip-flops, shorts and
                                beachwear are not permitted — entry may be refused otherwise.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Find us */}
            <section className='grid grid-cols-1 md:grid-cols-3'>
                <div className='p-8 md:p-14'>
                    <Reveal>
                        <p className='label-mono text-flame mb-6'>Address</p>
                        <address className='label-mono text-bone/70 leading-loose not-italic'>
                            420A Wellington Street West
                            <br />
                            Toronto, Ontario M5V 1E3
                            <br />
                            Entertainment District
                        </address>
                        <a
                            href='https://maps.google.com/?q=420A+Wellington+Street+West+Toronto'
                            target='_blank'
                            rel='noreferrer'
                            className='link-sweep label-mono text-bone mt-6 inline-block'>
                            Open in Maps
                        </a>
                    </Reveal>
                </div>
                <div className='p-8 md:p-14'>
                    <Reveal delay={0.1}>
                        <p className='label-mono text-flame mb-6'>Reach Us</p>
                        <ul className='label-mono text-bone/70 space-y-4'>
                            <li>
                                <a href='tel:+14167646094' className='link-sweep hover:text-bone transition-colors'>
                                    +1 (416) 764-6094
                                </a>
                            </li>
                            <li>
                                <a
                                    href='mailto:info@animlsteakhouse.com'
                                    className='link-sweep hover:text-bone transition-colors'>
                                    info@animlsteakhouse.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.instagram.com/animl.toronto'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='link-sweep hover:text-bone transition-colors'>
                                    @animl.toronto
                                </a>
                            </li>
                        </ul>
                    </Reveal>
                </div>
                <div className='p-8 md:p-14'>
                    <Reveal delay={0.2}>
                        <p className='label-mono text-flame mb-6'>Press</p>
                        <p className='text-bone/70 max-w-sm font-mono text-[15px] leading-loose'>
                            For press and editorial enquiries:
                        </p>
                        <a
                            href='mailto:pr@inkentertainment.com'
                            className='link-sweep label-mono text-bone mt-4 inline-block'>
                            pr@inkentertainment.com
                        </a>
                    </Reveal>
                </div>
            </section>

            {/* Map */}
            <section className='px-5 pb-10 md:px-8 md:pb-14'>
                <Reveal>
                    <div className='relative h-[320px] overflow-hidden md:h-[420px]'>
                        <iframe
                            title='Animl Steakhouse — 420A Wellington Street West, Toronto'
                            src='https://www.google.com/maps?q=420A+Wellington+Street+West,+Toronto,+ON+M5V+1E3&output=embed'
                            className='absolute inset-0 h-full w-full border-0 grayscale invert-[0.92] contrast-[1.05]'
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        />
                    </div>
                </Reveal>
            </section>
        </>
    );
};

export default Page;
