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
                <span className='bg-flame block h-2 w-2 rotate-45' />
            </div>
        </div>
    );
};

export default Stamp;
