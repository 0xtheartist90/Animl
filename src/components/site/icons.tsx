import type { ReactNode } from 'react';

/**
 * Animl line-icon set — single-weight geometric line drawings with
 * Art Deco inlines, drawn to match the brand's hand-sketched icon language.
 */
const Base = ({ children, className, size = 32 }: { children: ReactNode; className?: string; size?: number }) => (
    <svg
        viewBox='0 0 32 32'
        width={size}
        height={size}
        fill='none'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={`shrink-0 ${className ?? ''}`}
        aria-hidden>
        {children}
    </svg>
);

type IconProps = { className?: string; size?: number };

/** Faceted bull head — the house. */
export const IconBull = (p: IconProps) => (
    <Base {...p}>
        {/* horns */}
        <path d='M10.5 7.5 C7 7.5, 4.5 5.5, 4.5 2.5 C8.5 2.5, 11 4.5, 11.5 7' />
        <path d='M21.5 7.5 C25 7.5, 27.5 5.5, 27.5 2.5 C23.5 2.5, 21 4.5, 20.5 7' />
        {/* head */}
        <path d='M11.5 7 L20.5 7 L24 12 L21.5 20 L18 24.5 L14 24.5 L10.5 20 L8 12 Z' />
        {/* facets */}
        <path d='M8 12 L13 13.5 L10.5 20' />
        <path d='M24 12 L19 13.5 L21.5 20' />
        <path d='M13 13.5 L16 12 L19 13.5' />
        {/* nostrils */}
        <path d='M13.8 21 L14 21.2' />
        <path d='M18.2 21 L18 21.2' />
    </Base>
);

/** Coupe glass with deco fluting. */
export const IconCoupe = (p: IconProps) => (
    <Base {...p}>
        <path d='M6 7 H26 C26 13.5, 21.5 17, 16 17 C10.5 17, 6 13.5, 6 7 Z' />
        <path d='M11 7 V13.5' />
        <path d='M16 7 V16' />
        <path d='M21 7 V13.5' />
        <path d='M16 17 V26.5' />
        <path d='M10 27.5 H22' />
    </Base>
);

/** Cocktail shaker. */
export const IconShaker = (p: IconProps) => (
    <Base {...p}>
        <path d='M13.5 3 H18.5 V5.5 H13.5 Z' />
        <path d='M12 5.5 H20 L21 9.5 H11 Z' />
        <path d='M11 9.5 L10 26 C10 27, 11 28, 12 28 H20 C21 28, 22 27, 22 26 L21 9.5' />
        <path d='M13.5 12 L13 25' />
        <path d='M18.5 12 L19 25' />
    </Base>
);

/** Wine glass with deco fluting. */
export const IconWine = (p: IconProps) => (
    <Base {...p}>
        <path d='M10 3.5 H22 V9.5 C22 14.5, 19.5 17.5, 16 17.5 C12.5 17.5, 10 14.5, 10 9.5 Z' />
        <path d='M13 3.5 V14' />
        <path d='M19 3.5 V14' />
        <path d='M10 8 H22' />
        <path d='M16 17.5 V26.5' />
        <path d='M10.5 27.5 H21.5' />
    </Base>
);

/** Martini with garnish pick. */
export const IconMartini = (p: IconProps) => (
    <Base {...p}>
        <path d='M5.5 6.5 H26.5 L16 18 Z' />
        <path d='M9 9.5 H23' />
        <path d='M16 18 V26.5' />
        <path d='M10.5 27.5 H21.5' />
        <path d='M21.5 3 L13.5 8.5' />
        <circle cx='12.5' cy='9.2' r='1.3' />
    </Base>
);

/** Glazed dome dessert with cherry. */
export const IconCake = (p: IconProps) => (
    <Base {...p}>
        <path d='M8 21.5 C8 15, 11 11.5, 16 11.5 C21 11.5, 24 15, 24 21.5' />
        <path d='M5 21.5 H27 C27 23.5, 25 24.5, 23 24.5 H9 C7 24.5, 5 23.5, 5 21.5 Z' />
        <path d='M16 11.5 C16 9, 16.5 7, 18.5 5.5' />
        <circle cx='19.5' cy='5' r='1.6' />
        <path d='M12 15 C13 14, 15 13.5, 16.5 13.8' />
    </Base>
);

/** Coffee cup with deco steam. */
export const IconCoffee = (p: IconProps) => (
    <Base {...p}>
        <path d='M7 12.5 H23 V18 C23 21.5, 20 24, 15 24 C10 24, 7 21.5, 7 18 Z' />
        <path d='M23 14 C26.5 14, 26.5 19.5, 23 19.5' />
        <path d='M11 12.5 V21' />
        <path d='M15 12.5 V22' />
        <path d='M19 12.5 V21' />
        <path d='M11.5 9 L12.5 6.5' />
        <path d='M15.5 9 L16.5 6.5' />
        <path d='M19.5 9 L20.5 6.5' />
        <path d='M6 27 H24' />
    </Base>
);

/** Herb sprig. */
export const IconHerb = (p: IconProps) => (
    <Base {...p}>
        <path d='M16 28 C16 20, 16.5 12, 19 4' />
        <path d='M16.2 23 C12 22.5, 10.5 19.5, 11 16.5 C14.5 17.5, 16 20, 16.2 23 Z' />
        <path d='M16.5 16.5 C20.5 16, 22 13, 21.5 10 C18 11, 16.6 13.5, 16.5 16.5 Z' />
        <path d='M17.2 10.5 C14 10, 13 7.5, 13.5 5 C16.5 6, 17.4 8, 17.2 10.5 Z' />
    </Base>
);

/** Oyster shell with pearl. */
export const IconShell = (p: IconProps) => (
    <Base {...p}>
        <path d='M16 25 C9 25, 5.5 20, 5.5 14 C5.5 9, 10 5.5, 16 5.5 C22 5.5, 26.5 9, 26.5 14 C26.5 20, 23 25, 16 25 Z' />
        <path d='M16 25 L10 9' />
        <path d='M16 25 L16 7' />
        <path d='M16 25 L22 9' />
        <path d='M16 25 L7 13' />
        <path d='M16 25 L25 13' />
        <circle cx='16' cy='20.5' r='1.4' />
    </Base>
);

/** Walking leopard — after the house pattern. */
export const IconLeopard = (p: IconProps) => (
    <Base {...p}>
        {/* ear + head + back */}
        <path d='M4 14 C4 12.4, 5.2 11.2, 6.8 11.2 L7.6 9.6 L8.6 11.3 C12 10.2, 18.5 10, 22 11.2' />
        {/* muzzle + jaw to chest */}
        <path d='M4 14 C3.8 15, 4.4 15.8, 5.6 15.9 L6.8 16 C7.2 16.8, 7.6 17.2, 8.4 17.4' />
        {/* rump */}
        <path d='M22 11.2 C24 11.6, 24.8 13.5, 24.6 15.2 C24.5 16, 24.2 16.8, 23.8 17.4' />
        {/* belly */}
        <path d='M8.4 17.4 C13 18.2, 19 18.2, 23.8 17.4' />
        {/* legs */}
        <path d='M9.2 17.6 L8.8 22.5 L10.2 22.5' />
        <path d='M12.4 18 L12.2 22.5 L13.6 22.5' />
        <path d='M19.6 18 L19.4 22.5 L20.8 22.5' />
        <path d='M23 17.6 L23 22.5 L24.4 22.5' />
        {/* curled tail */}
        <path d='M22 11.2 C24.5 9.5, 27 8.2, 28.4 9.4 C29.6 10.4, 28.8 12, 27.2 11.6' />
        {/* spots */}
        <path d='M11.6 13 L11.8 13.2' />
        <path d='M15.2 12.2 L15.4 12.4' />
        <path d='M18.6 13.6 L18.8 13.8' />
        <path d='M13.8 15.4 L14 15.6' />
        <path d='M20.8 15.2 L21 15.4' />
        {/* eye */}
        <path d='M5.7 13.2 L5.9 13.2' />
    </Base>
);

/** Tomahawk / rib steak. */
export const IconSteak = (p: IconProps) => (
    <Base {...p}>
        <path d='M9 6 C15 4, 24 5.5, 26 11 C27.5 15.5, 24 19, 19.5 19.5 L13 20.5 C9.5 21, 7 18.5, 6.5 15 C6 11, 6.5 7, 9 6 Z' />
        <path d='M11.5 9.5 C15 8.5, 20.5 9, 22 12.5 C23 15, 20.5 16.5, 17.5 16.8 L13.5 17.3' />
        <path d='M13 20.5 L11.5 27.5' />
        <path d='M9.8 24 L13.8 24.6' />
    </Base>
);
