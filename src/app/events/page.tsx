import type { Metadata } from 'next';

import PageHero from '@/components/site/page-hero';
import { Reveal } from '@/components/site/reveal';

export const metadata: Metadata = {
    title: 'Events — Private Dining & Buyouts',
    description:
        'Host corporate events, celebrations, wrap parties and private gatherings at Animl Steakhouse Toronto.'
};

const TYPES = ['Corporate Events', 'Special Celebrations', 'Wrap Parties', 'Private Gatherings'];

const Page = () => {
    return (
        <>
            <PageHero
                label='Private Dining & Events'
                title='Events'
                accent='.'
                image='/images/home/event-lounge.jpg'
                imageAlt='Guests lounging in the Animl dining room'
            />
            <section className='grid grid-cols-1 md:grid-cols-12'>
                <div className='p-8 md:col-span-7 md:p-14'>
                    <Reveal>
                        <p className='label-mono text-flame mb-6'>The Venue</p>
                        <p className='text-bone/70 max-w-lg font-mono text-[13px] leading-loose'>
                            A glamorous event venue combining premium menus, high-quality steak, culinary craftsmanship
                            and a sense of extravagance — from intimate private rooms to full venue buyouts.
                        </p>
                        <ul className='mt-10 max-w-lg'>
                            {TYPES.map((t, i) => (
                                <li key={t} className='group border-border flex items-baseline gap-6 border-b py-4'>
                                    <span className='label-mono text-flame'>{`0${i + 1}`}</span>
                                    <span className='headline group-hover:text-flame text-3xl transition-colors duration-300'>
                                        {t}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
                <div className='p-8 md:col-span-5 md:p-14'>
                    <Reveal delay={0.15}>
                        <p className='label-mono text-flame mb-6'>Enquire</p>
                        <p className='text-bone/70 max-w-sm font-mono text-[13px] leading-loose'>
                            Parties of eight or fewer: contact our reservations team directly. For larger events, our
                            events team will arrange a tour of the space and custom arrangements.
                        </p>
                        <div className='mt-10 flex flex-col gap-4'>
                            <a
                                href='mailto:info@animlsteakhouse.com'
                                className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal px-8 py-4 text-center transition-colors duration-300'>
                                Submit an enquiry
                            </a>
                            <a
                                href='tel:+14167646094'
                                className='label-mono border-bone/25 text-bone hover:border-bone border px-8 py-4 text-center transition-colors duration-300'>
                                +1 (416) 764-6094
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default Page;
