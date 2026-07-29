import Image from 'next/image';

import { IconBull, IconCake, IconCoupe, IconShell, IconWine } from '@/components/site/icons';
import { ReserveButton } from '@/components/site/reserve-modal';
import { Reveal } from '@/components/site/reveal';

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

            <div className='relative px-5 py-8 text-center md:py-10'>
                {/* Icon row */}
                <Reveal delay={0.1}>
                    <div className='mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-x-8 gap-y-6 md:gap-x-14'>
                        {ICONS.map(({ Icon, label }) => (
                            <div key={label} className='flex w-28 flex-col items-center gap-4'>
                                <Icon size={34} className='text-coal' />
                                <span className='label-mono text-coal/70 text-[11px]'>{label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <ReserveButton className='label-mono bg-coal text-bone hover:bg-bone hover:text-coal mt-8 inline-block px-9 py-4 transition-colors duration-300'>
                        Book your evening
                    </ReserveButton>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
