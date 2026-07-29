import Link from 'next/link';

import Logo from '@/components/site/logo';
import { ReserveButton } from '@/components/site/reserve-modal';
import Spark from '@/components/site/spark';
import Stamp from '@/components/site/stamp';

const NAV = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/menus', label: 'Menus' },
    { href: '/events', label: 'Events' },
    { href: '/reservations', label: 'Reserve' }
];

const SiteFooter = () => {
    return (
        <footer className='relative overflow-hidden'>
            {/* Reserve invitation */}
            <ReserveButton className='group border-border block w-full border-y py-8 md:py-10'>
                <span className='headline text-bone group-hover:text-flame inline-flex items-center gap-5 text-3xl transition-colors duration-500 md:gap-6 md:text-4xl'>
                    Reserve your table
                    <Spark className='text-flame group-hover:text-bone transition-colors duration-500' size={18} />
                </span>
            </ReserveButton>

            <div className='relative grid grid-cols-1 gap-8 px-5 pt-10 pb-6 md:grid-cols-12 md:gap-12 md:px-8 md:pt-20 md:pb-10'>
                {/* Brand block */}
                <div className='flex flex-col items-center gap-5 text-center md:col-span-6 md:items-start md:gap-8 md:text-left'>
                    <Logo className='text-bone w-44 md:w-80' />
                    <p className='label-mono text-smoke'>
                        Steakhouse &amp; Cocktail Den — Elegantly Untamed
                    </p>
                    <ReserveButton className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal px-8 py-4 transition-colors duration-300'>
                        Reserve Now
                    </ReserveButton>
                </div>

                {/* Script nav */}
                <nav className='text-center md:col-span-3 md:text-left'>
                    <ul className='space-y-1'>
                        {NAV.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className='group headline text-bone/80 hover:text-flame inline-flex items-center gap-3 text-2xl transition-colors duration-300 md:gap-4 md:text-4xl'>
                                    <Spark
                                        size={13}
                                        className='text-flame opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                    />
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Details */}
                <div className='space-y-6 text-center md:col-span-3 md:space-y-10 md:text-left'>
                    <div>
                        <p className='label-mono text-flame mb-4 flex items-center justify-center gap-3 md:justify-start'>
                            <Spark size={12} />
                            Find Us
                        </p>
                        <address className='label-mono text-bone/70 space-y-2 leading-relaxed not-italic'>
                            <p>
                                420A Wellington St West
                                <br />
                                Toronto, ON M5V 1E3
                            </p>
                            <p>
                                <a href='tel:+14167646094' className='link-sweep hover:text-bone transition-colors'>
                                    +1 (416) 764-6094
                                </a>
                            </p>
                            <p>
                                <a
                                    href='mailto:info@animlsteakhouse.com'
                                    className='link-sweep hover:text-bone transition-colors'>
                                    info@animlsteakhouse.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href='https://www.instagram.com/animl.toronto'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='link-sweep hover:text-bone transition-colors'>
                                    @animl.toronto
                                </a>
                            </p>
                        </address>
                    </div>
                    <div>
                        <p className='label-mono text-flame mb-4 flex items-center justify-center gap-3 md:justify-start'>
                            <Spark size={12} />
                            Hours
                        </p>
                        <ul className='label-mono text-bone/70 space-y-2'>
                            <li>
                                <span className='text-bone'>Mon — Wed &amp; Sun</span> · 5 PM — 12 AM
                            </li>
                            <li>
                                <span className='text-bone'>Thu — Sat</span> · 5 PM — 2 AM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom strip with stamp */}
            <div className='relative flex flex-col items-center gap-4 px-5 pb-8 text-center md:flex-row md:items-end md:justify-between md:gap-6 md:px-8 md:pb-10 md:text-left'>
                <div className='label-mono text-smoke space-y-2'>
                    <p>© 2026 Animl Steakhouse — powered by INK Entertainment</p>
                    <a
                        href='https://inkentertainment.com/privacy-policy/'
                        target='_blank'
                        rel='noreferrer'
                        className='link-sweep hover:text-bone inline-block transition-colors'>
                        Privacy Policy
                    </a>
                </div>
                <Stamp text='Elegantly Untamed • Animl • Toronto • ' size={96} className='hidden opacity-70 md:block' />
            </div>
        </footer>
    );
};

export default SiteFooter;
