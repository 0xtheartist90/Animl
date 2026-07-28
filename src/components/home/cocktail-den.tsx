import Image from 'next/image';
import Link from 'next/link';

import { Reveal, RevealImage, RevealLines } from '@/components/site/reveal';

const COURSES = [
    { course: 'Amuse Bouche', theme: 'Familiar, refreshing, subtle' },
    { course: 'Appetizers', theme: 'Bright, savoury, crisp' },
    { course: 'Entrées', theme: 'Bold, complex, rich' },
    { course: 'Desserts', theme: 'Decadent, velvety, playful' },
    { course: 'Tea & Coffee', theme: 'Aromatic, bittersweet, robust' }
];

const CocktailDen = () => {
    return (
        <section className='border-border border-b'>
            <div className='border-border flex items-center justify-between border-b px-5 py-4 md:px-8'>
                <p className='label-mono text-bone/70'>The Cocktail Den</p>
                <p className='label-mono text-smoke hidden md:block'>A programme by Saralyn Stevens</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-12'>
                {/* Copy + courses */}
                <div className='order-2 flex flex-col justify-center px-5 py-16 md:order-1 md:col-span-6 md:px-14 md:py-24'>
                    <RevealLines
                        className='headline text-bone text-5xl md:text-7xl'
                        lines={[
                            'Cocktails,',
                            <span key='l2'>
                                served like <span className='text-flame'>dinner</span>.
                            </span>
                        ]}
                    />
                    <Reveal delay={0.15}>
                        <p className='text-bone/60 mt-8 max-w-md font-mono text-[13px] leading-loose'>
                            The cocktail menu is arranged like a meal — from amuse bouche to dessert — with miniature
                            martinis and a house digestif alongside. Crafted by Saralyn Stevens and the Animl bar team.
                        </p>
                    </Reveal>

                    <ul className='mt-12 max-w-md'>
                        {COURSES.map((c, i) => (
                            <Reveal key={c.course} delay={0.05 * i} y={24}>
                                <li className='group border-border flex items-baseline justify-between gap-6 border-b py-4'>
                                    <p className='headline group-hover:text-flame text-2xl transition-colors duration-300'>
                                        {c.course}
                                    </p>
                                    <p className='label-mono text-smoke text-right text-[10px]'>{c.theme}</p>
                                </li>
                            </Reveal>
                        ))}
                    </ul>

                    <Reveal delay={0.25}>
                        <Link
                            href='/menus'
                            className='label-mono border-bone/25 text-bone hover:border-flame hover:bg-flame mt-12 inline-block self-start border px-8 py-4 transition-all duration-300'>
                            The full cocktail menu
                        </Link>
                    </Reveal>
                </div>

                {/* Images */}
                <div className='border-border order-1 grid grid-cols-2 md:order-2 md:col-span-6 md:border-l'>
                    <RevealImage className='relative col-span-2 aspect-[4/3] md:aspect-auto md:min-h-[420px]'>
                        <Image
                            src='/images/home/cocktail-red.jpg'
                            alt='Flaming red cocktail crowned with a rose'
                            fill
                            sizes='(max-width: 768px) 100vw, 50vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                    <RevealImage className='border-border relative aspect-square border-t' delay={0.1}>
                        <Image
                            src='/images/home/espresso-martini.jpg'
                            alt='Espresso martini with gilded chocolate garnish'
                            fill
                            sizes='(max-width: 768px) 50vw, 25vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                    <RevealImage className='border-border relative aspect-square border-t border-l' delay={0.18}>
                        <Image
                            src='/images/home/bar.jpg'
                            alt='The mirrored bar at Animl'
                            fill
                            sizes='(max-width: 768px) 50vw, 25vw'
                            className='img-premium object-cover'
                        />
                    </RevealImage>
                </div>
            </div>
        </section>
    );
};

export default CocktailDen;
