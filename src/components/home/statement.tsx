import Image from 'next/image';

import { IconBowtie, IconCloche, IconMoon, IconSteak } from '@/components/site/icons';
import { Reveal } from '@/components/site/reveal';

const ITEMS = [
    { Icon: IconSteak, label: 'Dinner From 5 PM' },
    { Icon: IconMoon, label: 'Cocktails Till Late' },
    { Icon: IconBowtie, label: 'Elegant Attire' },
    { Icon: IconCloche, label: 'Private Dining' }
];

/** Quiet terracotta divider — static, understated, one icon per pillar. */
const Statement = () => {
    return (
        <section className='bg-flame relative overflow-hidden'>
            <Image
                src='/images/leopardbg.png'
                alt=''
                fill
                sizes='100vw'
                className='object-cover opacity-[0.10] mix-blend-multiply'
            />
            <Reveal y={18} duration={0.8} className='relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 md:py-9 lg:justify-between lg:px-8'>
                {ITEMS.map(({ Icon, label }) => (
                    <span key={label} className='group/pill flex items-center gap-3 md:gap-4'>
                        <Icon
                            size={28}
                            className='text-coal transition-transform duration-500 group-hover/pill:[animation:wobble_1.4s_ease-in-out_infinite]'
                        />
                        <span className='label-mono text-coal text-[12px] font-semibold tracking-[0.3em] whitespace-nowrap md:text-[14px]'>
                            {label}
                        </span>
                    </span>
                ))}
            </Reveal>
        </section>
    );
};

export default Statement;
