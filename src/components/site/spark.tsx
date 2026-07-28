/** Hand-drawn four-pointed spark — the line-icon accent used across the site. */
const Spark = ({ className, size = 16 }: { className?: string; size?: number }) => {
    return (
        <svg
            viewBox='0 0 24 24'
            width={size}
            height={size}
            fill='none'
            stroke='currentColor'
            strokeWidth='1.1'
            strokeLinejoin='round'
            strokeLinecap='round'
            className={`shrink-0 ${className ?? ''}`}
            aria-hidden>
            <path d='M12 2.5 C13.1 8.2, 15.8 10.9, 21.5 12 C15.8 13.1, 13.1 15.8, 12 21.5 C10.9 15.8, 8.2 13.1, 2.5 12 C8.2 10.9, 10.9 8.2, 12 2.5 Z' />
        </svg>
    );
};

export default Spark;
