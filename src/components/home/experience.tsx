import Image from 'next/image';

import { IconBull, IconCake, IconCoupe, IconShell, IconWine } from '@/components/site/icons';
import { ReserveButton } from '@/components/site/reserve-modal';
import { Reveal, RevealLines } from '@/components/site/reveal';

const ICONS = [
    { Icon: IconShell, label: 'Raw Bar' },
    { Icon: IconBull, label: 'Dry-Aged' },
    { Icon: IconCoupe, label: 'Cocktail Den' },
    { Icon: IconWine, label: 'The Cellar' },
    { Icon: IconCake, label: 'Sweet Finales' }
];

/** Terracotta interlude — breaks the dark rhythm of the page. */
const Experience = () => {
    return (
        <section className='bg-flame text-coal relative overflow-hidden'>
            <Image
                src='/images/leopardbg.png'
                alt=''
                fill
                sizes='100vw'
                className='object-cover opacity-[0.10] mix-blend-multiply'
            />

            <div className='relative px-5 py-20 text-center md:py-28'>
                <Reveal>
                    <p className='label-mono text-coal/70 mb-8'>The Animl Experience</p>
                </Reveal>
                <RevealLines
                    className='headline text-coal text-5xl md:text-7xl'
                    lines={['Where polished luxury', 'meets primal instinct.']}
                    delay={0.1}
                />

                {/* Icon row */}
                <Reveal delay={0.25}>
                    <div className='mx-auto mt-14 flex max-w-3xl flex-wrap items-start justify-center gap-x-12 gap-y-8 md:justify-between'>
                        {ICONS.map(({ Icon, label }) => (
                            <div key={label} className='flex flex-col items-center gap-4'>
                                <Icon size={44} className='text-coal' />
                                <span className='label-mono text-coal/70 text-[10px]'>{label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.35}>
                    <ReserveButton className='label-mono bg-coal text-bone hover:bg-bone hover:text-coal mt-14 inline-block px-10 py-4 transition-colors duration-300'>
                        Book your evening
                    </ReserveButton>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
