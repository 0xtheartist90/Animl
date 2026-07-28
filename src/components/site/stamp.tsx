/** Rotating circular text stamp — Art Deco seal energy. */
const Stamp = ({ text, className, size = 150 }: { text: string; className?: string; size?: number }) => {
    const id = `stamp-${text.length}-${size}`;

    return (
        <div className={`relative ${className ?? ''}`} style={{ width: size, height: size }}>
            <svg viewBox='0 0 100 100' className='animate-spin-slow h-full w-full' aria-hidden>
                <defs>
                    <path id={id} d='M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0' />
                </defs>
                <text className='fill-bone font-mono text-[7.5px] tracking-[0.24em] uppercase'>
                    <textPath href={`#${id}`}>{text}</textPath>
                </text>
            </svg>
            <div className='absolute inset-0 flex items-center justify-center'>
                <svg
                    viewBox='0 0 24 24'
                    width={18}
                    height={18}
                    fill='none'
                    stroke='var(--flame)'
                    strokeWidth='1.1'
                    strokeLinejoin='round'
                    aria-hidden>
                    <path d='M12 2.5 C13.1 8.2, 15.8 10.9, 21.5 12 C15.8 13.1, 13.1 15.8, 12 21.5 C10.9 15.8, 8.2 13.1, 2.5 12 C8.2 10.9, 10.9 8.2, 12 2.5 Z' />
                </svg>
            </div>
        </div>
    );
};

export default Stamp;
