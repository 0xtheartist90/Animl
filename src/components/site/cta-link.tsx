import type { ReactNode } from 'react';

import Link from 'next/link';

/** Compact bordered CTA button — used for section-level actions. */
const CtaLink = ({ href, children, className }: { href: string; children: ReactNode; className?: string }) => {
    return (
        <Link
            href={href}
            className={`label-mono group/cta bg-flame text-bone hover:bg-bone hover:text-coal inline-flex shrink-0 items-center gap-3 px-5 py-2.5 transition-colors duration-300 ${className ?? ''}`}>
            {children}
            <span aria-hidden className='transition-transform duration-300 group-hover/cta:translate-x-1'>
                →
            </span>
        </Link>
    );
};

export default CtaLink;
