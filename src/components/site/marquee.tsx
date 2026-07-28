import type { ReactNode } from 'react';

/** Infinite horizontal ticker. Content is duplicated for a seamless loop. */
const Marquee = ({ children, className, slow = false }: { children: ReactNode; className?: string; slow?: boolean }) => {
    return (
        <div className={`overflow-hidden whitespace-nowrap ${className ?? ''}`}>
            <div className={`inline-flex w-max items-center ${slow ? 'animate-marquee-slow' : 'animate-marquee'}`}>
                {[0, 1].map((i) => (
                    <div key={i} aria-hidden={i === 1} className='inline-flex items-center'>
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
