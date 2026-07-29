'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/site/logo';
import { EASE } from '@/components/site/reveal';

import { AnimatePresence, motion } from 'motion/react';

const NAV = [
    { href: '/about', label: 'About' },
    { href: '/menus', label: 'Menus' },
    { href: '/events', label: 'Events' }
];

const SiteHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close the overlay on navigation
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.documentElement.style.overflow = open ? 'hidden' : '';
    }, [open]);

    return (
        <>
            <motion.header
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
                    scrolled || open ? 'border-border bg-coal/90 backdrop-blur-md' : 'border-transparent bg-transparent'
                }`}>
                <div className='flex h-16 items-stretch justify-between px-5 md:h-[72px] md:px-8'>
                    <Link href='/' className='flex items-center' aria-label='Animl Steakhouse — home'>
                        <Logo className='w-[88px] md:w-[104px]' />
                    </Link>

                    <nav className='hidden items-stretch md:flex'>
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`label-mono border-border/0 hover:text-bone flex items-center px-6 transition-colors duration-300 ${
                                    pathname === item.href ? 'text-flame' : 'text-bone/70'
                                }`}>
                                <span className='link-sweep'>{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className='flex items-center gap-3'>
                        <Link
                            href='/reservations'
                            className='label-mono border-bone/30 text-bone hover:border-flame hover:bg-flame hidden items-center border px-6 py-3 transition-all duration-300 md:flex'>
                            Reserve Now
                        </Link>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            className='group flex h-11 w-11 flex-col items-center justify-center gap-[7px] md:hidden'>
                            <span
                                className={`bg-bone block h-px w-6 transition-transform duration-300 ${open ? 'translate-y-1 rotate-45' : ''}`}
                            />
                            <span
                                className={`bg-bone block h-px w-6 transition-transform duration-300 ${open ? '-translate-y-1 -rotate-45' : ''}`}
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                        exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className='bg-coal fixed inset-0 z-40 flex flex-col justify-between px-5 pt-28 pb-10 md:hidden'>
                        <nav className='flex flex-col'>
                            {NAV.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 32 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.25 + i * 0.07, ease: EASE }}>
                                    <Link
                                        href={item.href}
                                        className='headline text-bone border-border hover:text-flame block border-b py-4 text-5xl transition-colors'>
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className='flex flex-col gap-6'>
                            <Link
                                href='/reservations'
                                className='label-mono bg-flame text-bone flex items-center justify-center px-6 py-4'>
                                Reserve Now
                            </Link>
                            <p className='label-mono text-smoke'>420A Wellington St W — Toronto</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SiteHeader;
