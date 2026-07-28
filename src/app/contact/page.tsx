import type { Metadata } from 'next';

import PageHero from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
    title: 'Contact, Location & Hours',
    description: 'Find Animl Steakhouse at 420A Wellington Street West in the Toronto Entertainment District.'
};

const Page = () => {
    return (
        <>
            <PageHero
                label='Contact, Location & Hours'
                title='Contact'
                accent='.'
                image='/images/home/interior-lights.jpg'
                imageAlt='Sculptural lighting inside Animl Steakhouse'
            />
            <section className='grid grid-cols-1 md:grid-cols-3'>
                <div className='border-border border-b p-8 md:border-r md:border-b-0 md:p-14'>
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
                <div className='border-border border-b p-8 md:border-r md:border-b-0 md:p-14'>
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
                            <li className='text-smoke'>
                                Press:{' '}
                                <a
                                    href='mailto:pr@inkentertainment.com'
                                    className='link-sweep hover:text-bone transition-colors'>
                                    pr@inkentertainment.com
                                </a>
                            </li>
                        </ul>
                    </Reveal>
                </div>
                <div className='p-8 md:p-14'>
                    <Reveal delay={0.2}>
                        <p className='label-mono text-flame mb-6'>Hours</p>
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
            </section>
        </>
    );
};

export default Page;
