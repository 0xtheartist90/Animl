import Image from 'next/image';

import { IconBull, IconMartini, IconShell, IconWine } from '@/components/site/icons';

const ITEMS = [
    { Icon: IconBull, label: 'Signature Cuts' },
    { Icon: IconShell, label: 'Raw Bar' },
    { Icon: IconMartini, label: 'Cocktail Den' },
    { Icon: IconWine, label: 'Wine Cellar' }
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
            <div className='relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 md:justify-between md:px-8 md:py-9'>
                {ITEMS.map(({ Icon, label }) => (
                    <span key={label} className='flex items-center gap-3 md:gap-4'>
                        <Icon size={28} className='text-coal' />
                        <span className='label-mono text-coal text-[12px] font-semibold tracking-[0.3em] md:text-[13px]'>
                            {label}
                        </span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Statement;
