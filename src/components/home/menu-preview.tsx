'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import CtaLink from '@/components/site/cta-link';
import { IconBull, IconCake, IconShaker, IconWine } from '@/components/site/icons';
import Marquee from '@/components/site/marquee';
import { EASE, Reveal, RevealImage } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

import { AnimatePresence, motion } from 'motion/react';

type MenuItem = { name: string; note: string; price?: string };

const TABS: {
    key: string;
    label: string;
    icon: typeof IconBull;
    title: string;
    image: string;
    imageAlt: string;
    items: MenuItem[];
    footnote: string;
}[] = [
    {
        key: 'dinner',
        label: 'Dinner',
        icon: IconBull,
        title: 'Signature Cuts.',
        image: '/images/home/steak-raw.jpg',
        imageAlt: 'Raw signature cut with the Animl steak knife',
        items: [
            { name: '10 oz Filet Mignon', note: 'Alberta AAA Angus — wet-aged 30 days', price: '108' },
            { name: '18 oz Bone-in Ribeye', note: "Martin's Farm, Elora ON — aged 45 days", price: '153' },
            { name: '40 oz Porterhouse', note: "Martin's Farm, Elora ON — aged 45 days", price: '295' },
            { name: '4 oz Japanese A5 Wagyu', note: 'Miyachiku Co-op — Miyazaki Kuroge Washu', price: '108' },
            { name: 'Wagyu Trio', note: 'American, Australian & Japanese — 4 oz each', price: '260' },
            { name: 'Platinum Surf & Turf', note: 'Wagyu tomahawk, 28 oz lobster, sides & sauces', price: '999' }
        ],
        footnote: 'Dry-aged in house. Grilled over fire. Finished with intent.'
    },
    {
        key: 'dessert',
        label: 'Dessert',
        icon: IconCake,
        title: 'Sweet Finales.',
        image: '/images/home/dessert-heart.jpg',
        imageAlt: 'White-chocolate heart dessert with strawberries and a rose',
        items: [
            { name: 'Black Forest', note: 'Chocolate mousse, cherry compote, almond-chocolate sablé', price: '16' },
            { name: 'Tarte Tatin', note: 'Caramelized apple, speculoos sablé Breton, vanilla ice cream', price: '16' },
            {
                name: 'Chocolate Sticky Toffee Pudding',
                note: 'Salted butterscotch, chocolate tuile & ice cream',
                price: '16'
            },
            { name: 'Gold Bar', note: 'Lime mousse, calamansi crémeux, white-chocolate feuilletine', price: '18' }
        ],
        footnote: 'Decadent, velvety and playful — save room.'
    },
    {
        key: 'cocktails',
        label: 'Cocktails',
        icon: IconShaker,
        title: 'Liquid Courses.',
        image: '/images/home/coupe-bar.jpg',
        imageAlt: 'A golden coupe cocktail held at the mirrored bar',
        items: [
            { name: 'Amuse Bouche', note: 'Familiar, refreshing, subtle' },
            { name: 'Appetizers', note: 'Bright, savoury, crisp' },
            { name: 'Entrées', note: 'Bold, complex, rich' },
            { name: 'Desserts', note: 'Decadent, velvety, playful' },
            { name: 'Tea & Coffee', note: 'Aromatic, bittersweet, robust' }
        ],
        footnote: 'A programme by Saralyn Stevens & the Animl bar team, arranged like a meal.'
    },
    {
        key: 'wine',
        label: 'Wine',
        icon: IconWine,
        title: 'The Cellar.',
        image: '/images/home/wine-pour.jpg',
        imageAlt: 'Burgundy poured tableside from the cellar',
        items: [
            { name: 'By the Glass', note: 'Sparkling, white, rosé, red & sweet — 2, 5 or 8 oz pours' },
            { name: 'Champagne', note: 'Vintage & non-vintage houses' },
            { name: 'Old World', note: 'Burgundy, Bordeaux, Rhône, Italy, Spain' },
            { name: 'New World', note: 'Canada, USA, Argentina, Australia, New Zealand' },
            { name: "Owner's Cellar", note: 'Rare bottles from the private collection' }
        ],
        footnote: 'Ordering something special? Call ahead and we’ll decant it before you arrive.'
    }
];

const DISHES = [
    { src: '/images/home/lamb.jpg', label: 'Ontario Rack of Lamb' },
    { src: '/images/home/steak-pan.jpg', label: 'Seared Over Fire' },
    { src: '/images/home/caviar-service.jpg', label: 'Caviar Service' },
    { src: '/images/home/tomahawk-platter.jpg', label: 'The Tomahawk' },
    { src: '/images/home/nightcap.jpg', label: 'The Nightcap' },
    { src: '/images/home/tartare.jpg', label: 'Prime Steak Tartare' },
    { src: '/images/home/wellington-cut.jpg', label: 'The Wellington' },
    { src: '/images/home/cocktail-orange.jpg', label: 'Liquid Courses' }
];

const MenuPreview = () => {
    const [active, setActive] = useState(TABS[0]);
    const [lightbox, setLightbox] = useState<(typeof DISHES)[number] | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null);
        window.addEventListener('keydown', onKey);

        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <section className='pt-6 md:pt-10'>
            <Reveal y={14} duration={0.7} className='flex items-center justify-between px-5 py-6 md:px-8'>
                <p className='label-mono text-bone/70 flex items-center gap-4'>
                    <Spark className='text-flame' size={13} />
                    The Menus
                </p>
            </Reveal>

            {/* Selector + content — fits one viewport on desktop */}
            <div className='md:flex md:h-[calc(100svh-72px)] md:flex-col'>
                {/* Tab bar */}
                <Reveal y={20} duration={0.8} delay={0.05} className='grid shrink-0 grid-cols-2 gap-2 px-5 pb-6 md:grid-cols-4 md:gap-0 md:px-8'>
                    {TABS.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = active.key === tab.key;

                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActive(tab)}
                                aria-pressed={isActive}
                                className={`group relative flex items-center justify-center gap-4 py-4 transition-colors duration-500 ${
                                    isActive ? 'text-flame' : 'text-bone/60 hover:text-bone'
                                }`}>
                                <Icon
                                    size={26}
                                    className='transition-transform duration-500 group-hover:-translate-y-0.5'
                                />
                                <span className='label-mono'>{tab.label}</span>
                                {isActive && (
                                    <motion.span
                                        layoutId='menu-tab-underline'
                                        transition={{ duration: 0.5, ease: EASE }}
                                        className='bg-flame absolute inset-x-8 bottom-1 h-px md:inset-x-14'
                                    />
                                )}
                            </button>
                        );
                    })}
                </Reveal>

                <Reveal y={32} delay={0.1} className='md:min-h-0 md:flex-1'>
                    <div className='grid h-full grid-cols-1 md:grid-cols-12'>
                    {/* Image — swaps with the active tab */}
                    <div className='relative aspect-square overflow-hidden md:col-span-5 md:aspect-auto md:h-full'>
                        <AnimatePresence mode='popLayout' initial={false}>
                            <motion.div
                                key={active.key}
                                initial={{ opacity: 0, scale: 1.06 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.9, ease: EASE }}
                                className='absolute inset-0'>
                                <Image
                                    src={active.image}
                                    alt={active.imageAlt}
                                    fill
                                    sizes='(max-width: 768px) 100vw, 42vw'
                                    className='img-premium object-cover'
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* List — swaps with the active tab */}
                    <div className='flex flex-col justify-center px-5 py-12 md:col-span-7 md:min-h-0 md:px-14 md:py-4'>
                        <AnimatePresence mode='wait' initial={false}>
                            <motion.div
                                key={active.key}
                                initial={{ opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.55, ease: EASE }}>
                                <h2 className='headline text-bone text-4xl md:text-5xl'>
                                    {active.title.slice(0, -1)}
                                    <span className='text-flame'>.</span>
                                </h2>
                                <p className='label-mono text-smoke mt-2 max-w-md leading-relaxed'>{active.footnote}</p>

                                <ul className='mt-3'>
                                    {active.items.map((item, i) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: EASE }}
                                            className='group border-border hover:border-flame/60 flex items-baseline justify-between gap-6 border-b py-3 transition-colors duration-500 md:py-2'>
                                            <div>
                                                <p className='headline group-hover:text-flame text-xl transition-colors duration-300 md:text-2xl'>
                                                    {item.name}
                                                </p>
                                                <p className='label-mono text-smoke mt-0.5 text-[12px]'>{item.note}</p>
                                            </div>
                                            {item.price && (
                                                <p className='font-mono text-bone/80 shrink-0 text-sm'>{item.price}</p>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>

                                <Link
                                    href={`/menus?tab=${active.key}`}
                                    className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal mt-4 inline-block px-6 py-3 transition-colors duration-300'>
                                    The full {active.label.toLowerCase()} menu
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    </div>
                </Reveal>
            </div>

            {/* Dish marquee — click a dish to view it large */}
            <RevealImage zoom={false}>
                <div className='group block [&:hover_.animate-marquee-slow]:[animation-play-state:paused]'>
                    <Marquee slow className='py-0'>
                        {DISHES.map((dish) => (
                            <button
                                type='button'
                                key={dish.src}
                                onClick={() => setLightbox(dish)}
                                aria-label={`View ${dish.label} large`}
                                className='relative block w-64 md:w-80'>
                                <span className='relative block aspect-[4/5] overflow-hidden'>
                                    <Image
                                        src={dish.src}
                                        alt={dish.label}
                                        fill
                                        sizes='320px'
                                        className='img-premium object-cover'
                                    />
                                </span>
                                <span className='from-coal/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-5 pt-14'>
                                    <span className='label-mono text-bone flex items-center gap-3'>
                                        <Spark className='text-flame' size={13} />
                                        {dish.label}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </Marquee>
                </div>
            </RevealImage>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className='bg-coal/90 fixed inset-0 z-[70] flex items-center justify-center p-5 backdrop-blur-sm md:p-10'
                        onClick={() => setLightbox(null)}>
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.45, ease: EASE }}
                            onClick={(e) => e.stopPropagation()}
                            className='relative w-full max-w-3xl'>
                            <button
                                type='button'
                                onClick={() => setLightbox(null)}
                                aria-label='Close'
                                className='label-mono text-bone/70 hover:text-bone absolute -top-10 right-0 p-2 transition-colors'>
                                ✕
                            </button>
                            <div className='relative aspect-[4/5] max-h-[80svh] w-full overflow-hidden md:aspect-[4/3]'>
                                <Image
                                    src={lightbox.src}
                                    alt={lightbox.label}
                                    fill
                                    sizes='(max-width: 768px) 100vw, 768px'
                                    className='object-cover'
                                />
                            </div>
                            <p className='label-mono text-bone mt-4 flex items-center gap-3'>
                                <Spark className='text-flame' size={13} />
                                {lightbox.label}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MenuPreview;
