import Image from 'next/image';
import Link from 'next/link';

import { Parallax, Reveal, RevealImage, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

const CUTS = [
    { name: '10 oz Filet Mignon', origin: 'Alberta AAA Angus — wet-aged 30 days', price: '108' },
    { name: '18 oz Bone-in Ribeye', origin: "Martin's Farm, Elora ON — aged 45 days", price: '153' },
    { name: '40 oz Porterhouse', origin: "Martin's Farm, Elora ON — aged 45 days", price: '295' },
    { name: '4 oz Japanese A5 Wagyu', origin: 'Miyachiku Co-op — Miyazaki Kuroge Washu', price: '108' },
    { name: 'Wagyu Trio', origin: 'American, Australian & Japanese — 4 oz each', price: '260' },
    { name: 'Platinum Surf & Turf', origin: 'Wagyu tomahawk, 28 oz lobster, sides & sauces', price: '999' }
];

const GALLERY = [
    { src: '/images/home/lobster-tagliatelle.jpg', alt: 'Lobster tagliatelle with sturgeon caviar', label: 'Lobster Tagliatelle' },
    { src: '/images/home/surf-turf.jpg', alt: 'Surf and turf platter with lobster and steak', label: 'Surf & Turf' },
    { src: '/images/home/tartare.jpg', alt: 'Prime steak tartare plated on black ceramic', label: 'Prime Steak Tartare' }
];

const MenuPreview = () => {
    return (
        <section className='border-border border-b'>
            <div className='border-border flex items-center justify-between border-b px-5 py-4 md:px-8'>
                <p className='label-mono text-bone/70'>The Menus</p>
                <Link href='/menus' className='link-sweep label-mono text-bone/70 hover:text-bone transition-colors'>
                    Explore all menus
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12'>
                {/* Image */}
                <RevealImage className='border-border relative aspect-square md:col-span-5 md:aspect-auto md:border-r'>
                    <Parallax className='h-full' amount={8}>
                        <div className='relative h-full min-h-full w-full scale-[1.18]'>
                            <Image
                                src='/images/home/steak-fork.jpg'
                                alt='Perfectly cooked steak on a carving fork'
                                fill
                                sizes='(max-width: 768px) 100vw, 42vw'
                                className='img-premium object-cover'
                            />
                        </div>
                    </Parallax>
                </RevealImage>

                {/* Signature cuts */}
                <div className='flex flex-col justify-center px-5 py-16 md:col-span-7 md:px-14 md:py-24'>
                    <RevealLines
                        className='headline text-bone text-5xl md:text-7xl'
                        lines={['Signature', <span key='c'>Cuts<span className='text-flame'>.</span></span>]}
                    />
                    <Reveal delay={0.15}>
                        <p className='label-mono text-smoke mt-6 max-w-md leading-loose'>
                            Dry-aged in house. Grilled over fire. Finished with intent.
                        </p>
                    </Reveal>

                    <ul className='mt-12'>
                        {CUTS.map((cut, i) => (
                            <Reveal key={cut.name} delay={0.05 * i} y={28}>
                                <li className='group border-border hover:border-flame/60 flex items-baseline justify-between gap-6 border-b py-5 transition-colors duration-500'>
                                    <div>
                                        <p className='headline group-hover:text-flame text-2xl transition-colors duration-300 md:text-3xl'>
                                            {cut.name}
                                        </p>
                                        <p className='label-mono text-smoke mt-2 text-[10px]'>{cut.origin}</p>
                                    </div>
                                    <p className='font-mono text-bone/80 shrink-0 text-sm'>{cut.price}</p>
                                </li>
                            </Reveal>
                        ))}
                    </ul>

                    <Reveal delay={0.2}>
                        <div className='mt-12 flex flex-wrap gap-4'>
                            {['Dinner', 'Dessert', 'Cocktails', 'Wine'].map((menu) => (
                                <Link
                                    key={menu}
                                    href='/menus'
                                    className='label-mono border-bone/25 text-bone/80 hover:border-flame hover:bg-flame hover:text-bone border px-6 py-3 transition-all duration-300'>
                                    {menu}
                                </Link>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Dish gallery strip */}
            <div className='border-border grid grid-cols-1 border-t md:grid-cols-3'>
                {GALLERY.map((item, i) => (
                    <Link
                        key={item.src}
                        href='/menus'
                        className={`group relative aspect-[4/3] overflow-hidden ${i < 2 ? 'border-border border-b md:border-r md:border-b-0' : ''}`}>
                        <RevealImage className='h-full' delay={0.08 * i}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes='(max-width: 768px) 100vw, 33vw'
                                className='img-premium object-cover'
                            />
                        </RevealImage>
                        <div className='from-coal/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-6 pt-16'>
                            <p className='label-mono text-bone flex items-center gap-3'>
                                <Spark className='text-flame' size={14} />
                                {item.label}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MenuPreview;
