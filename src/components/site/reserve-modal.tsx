'use client';

import { type ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';

import { EASE } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

import { AnimatePresence, motion } from 'motion/react';

const ReserveContext = createContext<{ openReserve: () => void }>({ openReserve: () => {} });

export const useReserve = () => useContext(ReserveContext);

/** Button that opens the reservation modal. Style it via className like any CTA. */
export const ReserveButton = ({ children, className }: { children: ReactNode; className?: string }) => {
    const { openReserve } = useReserve();

    return (
        <button type='button' onClick={openReserve} className={className}>
            {children}
        </button>
    );
};

const FIELD =
    'label-mono bg-secondary/60 border-border text-bone placeholder:text-smoke focus:border-flame w-full border px-4 py-3 outline-none transition-colors';

/** Provides the reserve context and renders the booking modal. */
export const ReserveProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const openReserve = useCallback(() => {
        setSent(false);
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

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const lines = [
            `Name: ${fd.get('name')}`,
            `Phone: ${fd.get('phone')}`,
            `Guests: ${fd.get('guests')}`,
            `Date: ${fd.get('date')}`,
            `Time: ${fd.get('time')}`,
            fd.get('notes') ? `Notes: ${fd.get('notes')}` : ''
        ].filter(Boolean);
        const subject = encodeURIComponent(`Reservation request — ${fd.get('name')}`);
        const body = encodeURIComponent(lines.join('\n'));
        window.location.href = `mailto:info@animlsteakhouse.com?subject=${subject}&body=${body}`;
        setSent(true);
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
                            className='bg-coal border-border relative w-full max-w-lg overflow-hidden border p-6 md:p-10'>
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
                                Reserve your table<span className='text-flame'>.</span>
                            </h2>

                            {sent ? (
                                <div className='mt-8'>
                                    <p className='text-bone/80 font-mono text-[13px] leading-loose'>
                                        Your mail app should have opened with the request — send it and we&apos;ll
                                        confirm shortly. Prefer to talk?
                                    </p>
                                    <a
                                        href='tel:+14167646094'
                                        className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal mt-6 inline-block px-8 py-4 transition-colors duration-300'>
                                        +1 (416) 764-6094
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit} className='mt-8 grid grid-cols-2 gap-3'>
                                    <input name='name' required placeholder='Name' className={`${FIELD} col-span-2`} />
                                    <input
                                        name='phone'
                                        required
                                        type='tel'
                                        placeholder='Phone'
                                        className={FIELD}
                                    />
                                    <select name='guests' required defaultValue='2' className={FIELD}>
                                        {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                                            <option key={n} value={n}>
                                                {n} {n === '1' ? 'guest' : 'guests'}
                                            </option>
                                        ))}
                                        <option value='9+'>9+ — events team</option>
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
                                    <p className='label-mono text-smoke col-span-2 mt-1 text-center text-[10px]'>
                                        Or call{' '}
                                        <a href='tel:+14167646094' className='text-bone hover:text-flame transition-colors'>
                                            +1 (416) 764-6094
                                        </a>{' '}
                                        — elegant attire requested
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
