import Link from 'next/link';

import Logo from '@/components/site/logo';
import Marquee from '@/components/site/marquee';
import Spark from '@/components/site/spark';

const HOURS = [
    { days: 'Mon — Wed', hours: '5:00 PM — 12:00 AM' },
    { days: 'Thu — Sat', hours: '5:00 PM — 2:00 AM' },
    { days: 'Sunday', hours: '5:00 PM — 12:00 AM' }
];

const SiteFooter = () => {
    return (
        <footer className='border-border border-t'>
            {/* Ticker */}
            <Link href='/reservations' className='block'>
                <Marquee className='py-5' slow>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <span key={i} className='headline text-bone mx-8 inline-flex items-center gap-8 text-3xl'>
                            Reserve your table
                            <Spark className='text-flame' size={20} />
                        </span>
                    ))}
                </Marquee>
            </Link>

            <div className='grid grid-cols-1 md:grid-cols-12'>
                {/* Brand */}
                <div className='flex flex-col justify-between gap-10 p-8 md:col-span-5 md:p-10'>
                    <Logo className='w-56 md:w-72' />
                    <div>
                        <p className='label-mono text-smoke mb-3'>Steakhouse &amp; Cocktail Den</p>
                        <p className='headline text-bone/80 text-2xl'>Elegantly Untamed</p>
                    </div>
                </div>

                {/* Navigate */}
                <div className='p-8 md:col-span-2 md:p-10'>
                    <p className='label-mono text-flame mb-6'>Navigate</p>
                    <ul className='space-y-3'>
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/menus', label: 'Menus' },
                            { href: '/reservations', label: 'Reservations' },
                            { href: '/events', label: 'Events' },
                            { href: '/contact', label: 'Contact' }
                        ].map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className='link-sweep label-mono text-bone/70 hover:text-bone transition-colors'>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className='p-8 md:col-span-3 md:p-10'>
                    <p className='label-mono text-flame mb-6'>Find Us</p>
                    <address className='label-mono text-bone/70 space-y-3 leading-relaxed not-italic'>
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

                {/* Hours */}
                <div className='p-8 md:col-span-2 md:p-10'>
                    <p className='label-mono text-flame mb-6'>Hours</p>
                    <ul className='label-mono text-bone/70 space-y-3'>
                        {HOURS.map((h) => (
                            <li key={h.days}>
                                <span className='text-bone block'>{h.days}</span>
                                {h.hours}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='label-mono text-smoke flex flex-col gap-3 px-8 py-6 md:flex-row md:items-center md:justify-between md:px-10'>
                <p>© 2026 Animl Steakhouse — powered by INK Entertainment</p>
                <a
                    href='https://inkentertainment.com/privacy-policy/'
                    target='_blank'
                    rel='noreferrer'
                    className='link-sweep hover:text-bone transition-colors'>
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default SiteFooter;
