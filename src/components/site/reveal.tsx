'use client';

import { type ReactNode, useRef } from 'react';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
    once?: boolean;
};

/** Fade + rise reveal when the element scrolls into view. */
export const Reveal = ({ children, className, delay = 0, duration = 1, y = 42, once = true }: RevealProps) => {
    const reduced = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: '0px' }}
            transition={{ duration, delay, ease: EASE }}>
            {children}
        </motion.div>
    );
};

/** Headline lines that rise out of a clipped mask, staggered. */
export const RevealLines = ({
    lines,
    className,
    lineClassName,
    delay = 0,
    stagger = 0.09
}: {
    lines: ReactNode[];
    className?: string;
    lineClassName?: string;
    delay?: number;
    stagger?: number;
}) => {
    const reduced = useReducedMotion();

    return (
        <span className={className}>
            {lines.map((line, i) => (
                <span key={i} className='block overflow-hidden pb-[0.06em]'>
                    <motion.span
                        className={`block will-change-transform ${lineClassName ?? ''}`}
                        initial={reduced ? false : { y: '110%' }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: '0px' }}
                        transition={{ duration: 1.1, delay: delay + i * stagger, ease: EASE }}>
                        {line}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

/** Image unmasked with a clip-path wipe from the bottom. */
export const RevealImage = ({
    children,
    className,
    delay = 0
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) => {
    const reduced = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={reduced ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 1.2, delay, ease: EASE }}>
            {children}
        </motion.div>
    );
};

/** Slow parallax drift for full-bleed imagery. */
export const Parallax = ({
    children,
    className,
    amount = 10
}: {
    children: ReactNode;
    className?: string;
    amount?: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduced = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

    return (
        <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
            <motion.div style={reduced ? undefined : { y }} className='h-full w-full will-change-transform'>
                {children}
            </motion.div>
        </div>
    );
};
