import Image from 'next/image';

import Spark from '@/components/site/spark';

const ITEMS = ['Dry-Aged Steak', 'Raw Bar', 'Crafted Cocktails', 'The Cellar'];

/** Quiet terracotta divider — static, understated. */
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
            <div className='relative flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-6 md:gap-x-10 md:py-8'>
                {ITEMS.map((item, i) => (
                    <span key={item} className='flex items-center gap-x-6 md:gap-x-10'>
                        {i > 0 && <Spark className='text-coal/50' size={12} />}
                        <span className='label-mono text-coal/90 tracking-[0.3em]'>{item}</span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Statement;
