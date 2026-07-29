'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { IconBull, IconCake, IconShaker, IconWine } from '@/components/site/icons';
import { ReserveButton } from '@/components/site/reserve-modal';
import { EASE } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

import { AnimatePresence, motion } from 'motion/react';

type MenuItem = { name: string; note?: string; price?: string };
type Course = { key: string; label: string; image: string; imageAlt: string; items: MenuItem[]; note?: string };

const DINNER_COURSES: Course[] = [
    {
        key: 'starters',
        label: 'Starters',
        image: '/images/home/wellington.jpg',
        imageAlt: 'Golden lattice pastry fresh from the oven',
        items: [
            { name: 'Japanese Milk Bread', note: 'Whipped Quebec honey butter', price: '9' },
            { name: 'Caesar Salad', note: 'Parmesan, lemon, garlic croutons, double-smoked bacon', price: '29' },
            { name: 'Heirloom Tomato Salad', note: 'Whipped ricotta, basil oil, smoked tomato, sea salt', price: '29' },
            { name: 'Signature Pastrami', note: 'Mishima Ranch wagyu, cornichon, mustard, bergamot aioli', price: '30' },
            { name: 'Prime Steak Tartare', note: 'Bagna cauda, truffle mayo, preserved yolk, crisp sourdough', price: '32' }
        ]
    },
    {
        key: 'sea',
        label: 'From the Sea',
        image: '/images/home/surf-turf.jpg',
        imageAlt: 'Seafood platter with lobster, oysters and prawns',
        items: [
            { name: 'East Coast Oysters', note: 'Champagne mignonette, horseradish, lemon', price: '31' },
            { name: 'Chilled Jumbo Prawns', note: 'Clamato cocktail sauce, lemon', price: '47' },
            { name: 'Tuna Ceviche', note: 'Ponzu, avocado relish, jalapeño dressing, crisp shallot', price: '31' },
            { name: 'Hamachi Crudo', note: "Tomato tiger's milk, calamansi aioli, chive oil, rayu", price: '32' },
            { name: 'Calamari Fries', note: 'Humboldt squid, chimichurri rojo, herbs', price: '25' },
            { name: 'King Crab Croquettes', note: 'Corn pudding, watercress, vin cotto', price: '34' }
        ]
    },
    {
        key: 'caviar',
        label: 'Caviar & Platters',
        image: '/images/home/caviar.jpg',
        imageAlt: 'Rainbow caviar served on sculpted porcelain',
        items: [
            { name: 'Rainbow Caviar Dip', note: 'Crème fraîche, salmon, blini, flying-fish & sturgeon caviar', price: '64' },
            { name: 'Kaviari Kaluga', note: 'Premium caviar service', price: '95' },
            { name: 'Kaviari Paris Oscietre Prestige', note: 'Premium caviar service', price: '275' },
            { name: 'Kaviari Beluga Imperial', note: 'Premium caviar service', price: '525' },
            { name: 'Seafood Platter — Small', note: 'Oysters, shrimp, lobster, king & snow crab', price: '220' },
            { name: 'Seafood Platter — Large', note: 'The full raw bar, dressed to impress', price: '420' }
        ]
    },
    {
        key: 'entrees',
        label: 'Entrées',
        image: '/images/home/lobster-tagliatelle.jpg',
        imageAlt: 'Lobster tagliatelle crowned with caviar',
        items: [
            { name: 'Animl Burger', note: 'House blend, brioche, raclette, house sauce, pickles', price: '37' },
            { name: 'Giannone Chicken', note: 'Pistachio dust, salsa verde, annatto schmaltz, mustard jus', price: '48' },
            { name: 'Chilean Sea Bass', note: 'Salmon caviar, saffron butter sauce', price: '75' },
            { name: 'Lobster Tagliatelle', note: 'Lobster Alfredo, sturgeon caviar, Calabrese chilli', price: '73' },
            { name: 'Ontario Rack of Lamb', note: 'Brussels sprout sofrito, black garlic aioli', price: '87' },
            { name: 'Dover Sole Meunière', note: 'Butter, capers, lemon', price: '102' }
        ]
    },
    {
        key: 'cuts',
        label: 'Signature Cuts',
        image: '/images/home/steak-fork.jpg',
        imageAlt: 'Perfectly cooked steak on a carving fork',
        note: 'Alberta AAA Angus, wet-aged 30 days — and Martin’s Farm, Elora ON, aged up to 45 days.',
        items: [
            { name: '6 oz Petite Filet', note: 'Alberta AAA Angus', price: '72' },
            { name: '10 oz Filet Mignon', note: 'Alberta AAA Angus', price: '108' },
            { name: '10 oz Striploin', note: "Martin's Farm, Elora ON", price: '83' },
            { name: '18 oz Bone-in Ribeye', note: "Martin's Farm, Elora ON", price: '153' },
            { name: '22 oz Bone-in Striploin', note: "Martin's Farm, Elora ON", price: '150' },
            { name: '32 oz Bone-in Ribeye', note: "Martin's Farm, Elora ON", price: '220' },
            { name: '24 oz Porterhouse', note: "Martin's Farm, Elora ON", price: '150' },
            { name: '40 oz Porterhouse', note: "Martin's Farm, Elora ON", price: '295' }
        ]
    },
    {
        key: 'wagyu',
        label: 'Wagyu',
        image: '/images/home/steak-branded.jpg',
        imageAlt: 'Animl-branded wagyu striploin',
        note: '4 oz striploin cuts from three continents.',
        items: [
            { name: 'American — Snake River Farms Gold', note: 'Idaho, Fukutsuru lineage', price: '89' },
            { name: 'Australian — Andrews Meats', note: 'Tajima, Riverina NSW — marbling 8/10', price: '98' },
            { name: 'Japanese — Miyachiku Co-op A5', note: 'Miyazaki Kuroge Washu', price: '108' },
            { name: 'Wagyu Trio', note: 'All three selections, 4 oz each', price: '260' },
            { name: 'Wagyu Tomahawk', note: 'Veal jus, chimichurri, bourbon au poivre', price: 'MP' }
        ]
    },
    {
        key: 'surfturf',
        label: 'Surf & Turf',
        image: '/images/home/steak-glam.jpg',
        imageAlt: 'Sliced steak with a glass of red wine',
        items: [
            { name: 'Roasted Shrimp Piccata', note: 'Ajo verde, garlic chips, roasted lemon', price: '39' },
            { name: 'Lobster Tail Piccata — 6 oz', note: 'Ajo verde, garlic chips, roasted lemon', price: '55' },
            { name: 'Lobster Tail Piccata — 28 oz', note: 'For the table', price: '310' },
            { name: 'Broiled King Crab — Small', note: 'Clarified butter, roasted lemon', price: '125' },
            { name: 'Broiled King Crab — Large', note: 'Clarified butter, roasted lemon', price: '215' },
            { name: 'Platinum Surf & Turf', note: 'Wagyu tomahawk, 28 oz lobster, three sides, two sauces', price: '999' }
        ]
    },
    {
        key: 'sides',
        label: 'Sides',
        image: '/images/home/dining.jpg',
        imageAlt: 'A table laid with steak and green sides',
        items: [
            { name: 'Pomme Purée', note: 'Quebec butter, chives', price: '18' },
            { name: 'Potato Gratin Dauphinoise', note: 'Mornay, thyme, Quebec butter', price: '18' },
            { name: 'Pomme Frites au Truffle', note: 'Black truffle, Parmigiano Reggiano', price: '19' },
            { name: 'Onion Rings', note: 'Buttermilk ranch', price: '18' },
            { name: 'Mac & Cheese', note: 'Radiatore, four cheeses, pangrattato', price: '24' },
            { name: 'Creamed Corn', note: 'Crème fraîche, Aleppo chilli', price: '18' },
            { name: 'Brussels Sprouts', note: 'Beef bacon, sweetie-drop peppers, pecorino', price: '18' },
            { name: 'Roasted Broccolini', note: 'Sea salt, basil emulsion', price: '22' },
            { name: 'Seasonal Mushrooms', note: 'Garlic, jalapeño, Marsala', price: '24' }
        ]
    },
    {
        key: 'sauces',
        label: 'Sauces',
        image: '/images/home/steak-plate.jpg',
        imageAlt: 'The signature cut with a damascus steak knife',
        items: [
            { name: 'Red Wine Veal Reduction', price: '9' },
            { name: 'Chimichurri', price: '8' },
            { name: 'Bourbon au Poivre', price: '10' },
            { name: "Maître d'Hôtel Butter", price: '8' },
            { name: 'Oscar', price: '20' }
        ]
    }
];

const WINE_COURSES: Course[] = [
    {
        key: 'glass',
        label: 'By the Glass',
        image: '/images/home/bar.jpg',
        imageAlt: 'The mirrored bar with its back-lit collection',
        note: 'Poured in 2, 5 or 8 oz — vintages may change.',
        items: [
            { name: 'Sparkling & Champagne', note: 'Bright openers, poured to order' },
            { name: 'White Wine', note: 'Crisp to textured' },
            { name: 'Rosé', note: 'Pale and precise' },
            { name: 'Red Wine', note: 'From silky to structured' },
            { name: 'Sweet Wine', note: 'For the finale' }
        ]
    },
    {
        key: 'bottle',
        label: 'By the Bottle',
        image: '/images/home/cellar.jpg',
        imageAlt: 'The floor-to-ceiling wine cellar',
        note: 'Ordering something special? Call ahead and we’ll decant it before you arrive.',
        items: [
            { name: 'Champagne', note: 'Vintage & non-vintage houses' },
            { name: 'Burgundy · Bordeaux · Rhône', note: 'The French classics' },
            { name: 'Italy', note: 'North to the islands' },
            { name: 'Canada & USA', note: 'Home turf and California' },
            { name: 'Spain · South America · Oceania', note: 'Rioja to Riverina' },
            { name: "Owner's Cellar", note: 'Rare bottles from the private collection' }
        ]
    },
    {
        key: 'spirits',
        label: 'Spirits',
        image: '/images/home/espresso-martini.jpg',
        imageAlt: 'Espresso martini with gilded garnish',
        items: [
            { name: 'Aperitivo & Digestivo', note: 'Before and after' },
            { name: 'Cognac & Armagnac', note: 'Long finishes' },
            { name: 'Whisky', note: 'Irish, Italian, Japanese, rye & Scotch' },
            { name: 'Gin · Rum · Vodka', note: 'The clear classics' },
            { name: 'Tequila & Mezcal', note: 'Agave, both ways' }
        ]
    }
];

const TABS: { key: string; label: string; icon: typeof IconBull; title: string; courses: Course[] }[] = [
    { key: 'dinner', label: 'Dinner', icon: IconBull, title: 'Dinner', courses: DINNER_COURSES },
    {
        key: 'dessert',
        label: 'Dessert',
        icon: IconCake,
        title: 'Dessert',
        courses: [
            {
                key: 'dessert',
                label: 'Dessert',
                image: '/images/home/dessert-cherry.jpg',
                imageAlt: 'Cherry-glazed dessert dome on white porcelain',
                note: 'Decadent, velvety and playful — save room.',
                items: [
                    { name: 'Black Forest', note: 'Chocolate mousse, cherry compote & coulis, almond-chocolate sablé', price: '16' },
                    { name: 'Tarte Tatin', note: 'Caramelized apple, speculoos sablé Breton, oat crumble, vanilla ice cream', price: '16' },
                    { name: 'Chocolate Sticky Toffee Pudding', note: 'Salted butterscotch, chocolate tuile, chocolate ice cream', price: '16' },
                    { name: 'Gold Bar', note: 'Lime mousse, calamansi crémeux, white-chocolate feuilletine, makrut-lime cream', price: '18' }
                ]
            }
        ]
    },
    {
        key: 'cocktails',
        label: 'Cocktails',
        icon: IconShaker,
        title: 'Cocktails',
        courses: [
            {
                key: 'cocktails',
                label: 'Cocktails',
                image: '/images/home/cocktail-trio.jpg',
                imageAlt: 'Three crafted cocktails in coupes and a rocks glass',
                note: 'A programme by Saralyn Stevens & the Animl bar team, arranged like a meal.',
                items: [
                    { name: 'Amuse Bouche', note: 'Familiar, refreshing, subtle' },
                    { name: 'Appetizers', note: 'Bright, savoury, crisp' },
                    { name: 'Entrées', note: 'Bold, complex, rich' },
                    { name: 'Desserts', note: 'Decadent, velvety, playful' },
                    { name: 'Tea & Coffee', note: 'Aromatic, bittersweet, robust' },
                    { name: 'Accompaniments', note: 'Miniature martinis & the house digestif' }
                ]
            }
        ]
    },
    { key: 'wine', label: 'Wine', icon: IconWine, title: 'Wine & Spirits', courses: WINE_COURSES }
];

const MenusClient = () => {
    const searchParams = useSearchParams();
    const initialTab = TABS.find((t) => t.key === searchParams.get('tab')) ?? TABS[0];
    const [activeTab, setActiveTab] = useState(initialTab);
    const [activeCourse, setActiveCourse] = useState(initialTab.courses[0]);

    const selectTab = (tab: (typeof TABS)[number]) => {
        setActiveTab(tab);
        setActiveCourse(tab.courses[0]);
    };

    return (
        <div className='flex h-[100svh] flex-col overflow-hidden pt-16 md:pt-[72px]'>
            {/* Label row */}
            <div className='flex shrink-0 items-center justify-between px-5 py-4 md:px-8'>
                <p className='label-mono text-bone/70 flex items-center gap-4'>
                    <Spark className='text-flame' size={13} />
                    The Menus
                </p>
                <ReserveButton className='label-mono bg-flame text-bone hover:bg-bone hover:text-coal inline-flex shrink-0 items-center gap-3 px-5 py-2.5 transition-colors duration-300'>
                    Reserve Now <span aria-hidden>→</span>
                </ReserveButton>
            </div>

            {/* Main tabs */}
            <div className='grid shrink-0 grid-cols-4 px-2 md:px-8'>
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab.key === tab.key;

                    return (
                        <button
                            key={tab.key}
                            onClick={() => selectTab(tab)}
                            aria-pressed={isActive}
                            className={`group relative flex items-center justify-center gap-3 py-3 transition-colors duration-500 md:py-4 ${
                                isActive ? 'text-flame' : 'text-bone/60 hover:text-bone'
                            }`}>
                            <Icon size={24} className='hidden transition-transform duration-500 group-hover:-translate-y-0.5 sm:block' />
                            <span className='label-mono text-[10px] md:text-[11px]'>{tab.label}</span>
                            {isActive && (
                                <motion.span
                                    layoutId='menus-tab-underline'
                                    transition={{ duration: 0.5, ease: EASE }}
                                    className='bg-flame absolute inset-x-4 bottom-0 h-px md:inset-x-10'
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <div className='grid min-h-0 flex-1 grid-cols-1 md:grid-cols-12'>
                {/* Image */}
                <div className='relative hidden overflow-hidden md:col-span-5 md:block'>
                    <AnimatePresence mode='popLayout' initial={false}>
                        <motion.div
                            key={activeCourse.key}
                            initial={{ opacity: 0, scale: 1.06 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.9, ease: EASE }}
                            className='absolute inset-0'>
                            <Image
                                src={activeCourse.image}
                                alt={activeCourse.imageAlt}
                                fill
                                sizes='42vw'
                                className='img-premium object-cover'
                                priority
                            />
                            <div className='from-coal/70 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-6 pt-20'>
                                <p className='headline text-bone text-3xl'>{activeTab.title}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Course selector + list */}
                <div className='flex min-h-0 flex-col px-5 pt-2 pb-4 md:col-span-7 md:px-12'>
                    {/* Course pills */}
                    {activeTab.courses.length > 1 && (
                        <div className='scroll-invisible -mx-1 flex shrink-0 gap-1 overflow-x-auto pb-2'>
                            {activeTab.courses.map((course) => (
                                <button
                                    key={course.key}
                                    onClick={() => setActiveCourse(course)}
                                    aria-pressed={activeCourse.key === course.key}
                                    className={`label-mono shrink-0 px-3 py-2 text-[10px] transition-colors duration-300 ${
                                        activeCourse.key === course.key
                                            ? 'text-flame'
                                            : 'text-bone/50 hover:text-bone'
                                    }`}>
                                    {course.label}
                                </button>
                            ))}
                        </div>
                    )}

                    <AnimatePresence mode='wait' initial={false}>
                        <motion.div
                            key={activeCourse.key}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            className='flex min-h-0 flex-1 flex-col'>
                            <div className='flex shrink-0 items-baseline justify-between gap-6'>
                                <h1 className='headline text-bone text-3xl md:text-4xl'>
                                    {activeCourse.label}
                                    <span className='text-flame'>.</span>
                                </h1>
                                {activeCourse.note && (
                                    <p className='label-mono text-smoke hidden max-w-xs text-right text-[10px] leading-relaxed md:block'>
                                        {activeCourse.note}
                                    </p>
                                )}
                            </div>

                            <ul className='scroll-invisible mt-2 min-h-0 flex-1 overflow-y-auto'>
                                {activeCourse.items.map((item, i) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.05 + i * 0.04, ease: EASE }}
                                        className='group border-border hover:border-flame/60 flex items-baseline justify-between gap-6 border-b py-2.5 transition-colors duration-500'>
                                        <div>
                                            <p className='headline group-hover:text-flame text-lg transition-colors duration-300 md:text-xl'>
                                                {item.name}
                                            </p>
                                            {item.note && (
                                                <p className='label-mono text-smoke mt-0.5 text-[10px]'>{item.note}</p>
                                            )}
                                        </div>
                                        {item.price && (
                                            <p className='font-mono text-bone/80 shrink-0 text-sm'>{item.price}</p>
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default MenusClient;
