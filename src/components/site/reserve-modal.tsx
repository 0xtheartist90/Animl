'use client';

import { type ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

import { EASE } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

import { AnimatePresence, motion } from 'motion/react';

type ReserveTab = 'table' | 'event';

const ReserveContext = createContext<{ openReserve: (tab?: ReserveTab) => void }>({ openReserve: () => {} });

export const useReserve = () => useContext(ReserveContext);

/** Button that opens the reservation modal. Style it via className like any CTA. */
export const ReserveButton = ({
    children,
    className,
    tab = 'table'
}: {
    children: ReactNode;
    className?: string;
    tab?: 'table' | 'event';
}) => {
    const { openReserve } = useReserve();

    return (
        <button type='button' onClick={() => openReserve(tab)} className={className}>
            {children}
        </button>
    );
};

const FIELD =
    'label-mono bg-secondary/60 border-border text-bone placeholder:text-smoke focus:border-flame w-full border px-4 py-3 outline-none transition-colors';

const EVENT_TYPES = ['Corporate Event', 'Special Celebration', 'Wrap Party', 'Private Gathering'];
const EVENT_OPTIONS = ['Private Dining', 'Partial Venue', 'Full Buyout'];

/** Provides the reserve context and renders the booking modal. */
export const ReserveProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState<'table' | 'event'>('table');
    const [sent, setSent] = useState(false);
    const openReserve = useCallback((t: ReserveTab = 'table') => {
        setSent(false);
        setTab(t);
        setOpen(true);
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = open ? 'hidden' : '';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);

        return () => {
            document.documentElement.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const submitMail = (subject: string, lines: string[]) => {
        window.location.href = `mailto:info@animlsteakhouse.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
        setSent(true);
    };

    const onSubmitTable = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        submitMail(
            `Reservation request — ${fd.get('name')}`,
            [
                `Name: ${fd.get('name')}`,
                `Phone: ${fd.get('phone')}`,
                `Guests: ${fd.get('guests')}`,
                `Date: ${fd.get('date')}`,
                `Time: ${fd.get('time')}`,
                fd.get('notes') ? `Notes: ${fd.get('notes')}` : ''
            ].filter(Boolean) as string[]
        );
    };

    const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        submitMail(
            `Event enquiry — ${fd.get('type')} — ${fd.get('name')}`,
            [
                `Name: ${fd.get('name')}`,
                `Phone: ${fd.get('phone')}`,
                `Event type: ${fd.get('type')}`,
                `Space: ${fd.get('space')}`,
                `Guests: ${fd.get('guests')}`,
                `Date: ${fd.get('date')}`,
                fd.get('notes') ? `Notes: ${fd.get('notes')}` : ''
            ].filter(Boolean) as string[]
        );
    };

    return (
        <ReserveContext.Provider value={{ openReserve }}>
            {children}

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className='bg-coal/80 fixed inset-0 z-[70] flex items-end justify-center backdrop-blur-sm md:items-center'
                        onClick={() => setOpen(false)}>
                        <motion.div
                            initial={{ y: 48, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 32, opacity: 0 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            onClick={(e) => e.stopPropagation()}
                            role='dialog'
                            aria-modal='true'
                            aria-label='Reserve your table'
                            className='bg-coal border-border relative max-h-[92svh] w-full max-w-lg overflow-y-auto border p-6 md:p-10'>
                            {/* close */}
                            <button
                                type='button'
                                onClick={() => setOpen(false)}
                                aria-label='Close'
                                className='label-mono text-smoke hover:text-bone absolute top-4 right-4 p-2 transition-colors'>
                                ✕
                            </button>

                            <p className='label-mono text-flame flex items-center gap-3'>
                                <Spark size={13} />
                                Reservations
                            </p>
                            <h2 className='headline text-bone mt-4 text-4xl'>
                                {tab === 'table' ? 'Reserve your table' : 'Host your night'}
                                <span className='text-flame'>.</span>
                            </h2>

                            {/* Tab switch */}
                            <div className='border-border mt-6 grid grid-cols-2 border'>
                                {(
                                    [
                                        { key: 'table', label: 'A Table' },
                                        { key: 'event', label: 'An Event' }
                                    ] as const
                                ).map((t) => (
                                    <button
                                        key={t.key}
                                        type='button'
                                        onClick={() => {
                                            setTab(t.key);
                                            setSent(false);
                                        }}
                                        aria-pressed={tab === t.key}
                                        className={`label-mono py-3 transition-colors duration-300 ${
                                            tab === t.key
                                                ? 'bg-flame text-bone'
                                                : 'text-bone/60 hover:text-bone bg-transparent'
                                        }`}>
                                        {t.label}
                                    </button>
                                ))}
                            </div>

                            {sent ? (
                                <div className='mt-8'>
                                    <p className='text-bone/80 font-mono text-[15px] leading-loose'>
                                        Your mail app should have opened with the request — send it and we&apos;ll
                                        confirm shortly. Prefer to talk?
                                    </p>
                                    <a
                                        href='tel:+14167646094'
                                        className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal mt-6 inline-block px-8 py-4 transition-colors duration-300'>
                                        +1 (416) 764-6094
                                    </a>
                                </div>
                            ) : tab === 'table' ? (
                                <form onSubmit={onSubmitTable} className='mt-6 grid grid-cols-2 gap-3'>
                                    <input name='name' required placeholder='Name' className={`${FIELD} col-span-2`} />
                                    <input name='phone' required type='tel' placeholder='Phone' className={FIELD} />
                                    <select name='guests' required defaultValue='2' className={FIELD}>
                                        {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                                            <option key={n} value={n}>
                                                {n} {n === '1' ? 'guest' : 'guests'}
                                            </option>
                                        ))}
                                    </select>
                                    <input name='date' required type='date' className={FIELD} />
                                    <input name='time' required type='time' defaultValue='19:00' className={FIELD} />
                                    <textarea
                                        name='notes'
                                        rows={2}
                                        placeholder='Occasion, allergies, requests…'
                                        className={`${FIELD} col-span-2 resize-none`}
                                    />
                                    <button
                                        type='submit'
                                        className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal col-span-2 mt-2 px-8 py-4 transition-colors duration-300'>
                                        Request reservation
                                    </button>
                                    <p className='label-mono text-smoke col-span-2 mt-1 text-center text-[12px]'>
                                        More than 8 guests? Switch to{' '}
                                        <button
                                            type='button'
                                            onClick={() => setTab('event')}
                                            className='text-flame hover:text-bone transition-colors'>
                                            An Event
                                        </button>{' '}
                                        — elegant attire requested
                                    </p>
                                </form>
                            ) : (
                                <form onSubmit={onSubmitEvent} className='mt-6 grid grid-cols-2 gap-3'>
                                    <input name='name' required placeholder='Name' className={`${FIELD} col-span-2`} />
                                    <input name='phone' required type='tel' placeholder='Phone' className={FIELD} />
                                    <input
                                        name='guests'
                                        required
                                        type='number'
                                        min={1}
                                        placeholder='Guests'
                                        className={FIELD}
                                    />
                                    <select name='type' required defaultValue={EVENT_TYPES[0]} className={FIELD}>
                                        {EVENT_TYPES.map((t) => (
                                            <option key={t} value={t}>
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                    <select name='space' required defaultValue={EVENT_OPTIONS[0]} className={FIELD}>
                                        {EVENT_OPTIONS.map((o) => (
                                            <option key={o} value={o}>
                                                {o}
                                            </option>
                                        ))}
                                    </select>
                                    <input name='date' required type='date' className={`${FIELD} col-span-2`} />
                                    <textarea
                                        name='notes'
                                        rows={2}
                                        placeholder='Tell us about the night…'
                                        className={`${FIELD} col-span-2 resize-none`}
                                    />
                                    <button
                                        type='submit'
                                        className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal col-span-2 mt-2 px-8 py-4 transition-colors duration-300'>
                                        Submit enquiry
                                    </button>
                                    <p className='label-mono text-smoke col-span-2 mt-1 text-center text-[12px]'>
                                        Our events team will tour you through the space and tailor the night
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </ReserveContext.Provider>
    );
};
