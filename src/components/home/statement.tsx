import Image from 'next/image';

import Marquee from '@/components/site/marquee';
import Spark from '@/components/site/spark';

const ITEMS = ['Dry-Aged Steak', 'Crafted Cocktails', 'Art Deco', 'Studio 54 Energy', '1970s Glamour', 'Raw Bar'];

const Statement = () => {
    return (
        <section className='bg-flame relative overflow-hidden py-4 md:py-6'>
            <Image
                src='/images/leopardbg.png'
                alt=''
                fill
                sizes='100vw'
                className='object-cover opacity-[0.10] mix-blend-multiply'
            />
            <Marquee slow className='relative'>
                {ITEMS.map((item, i) => (
                    <span key={i} className='mx-4 inline-flex items-center gap-8 md:mx-6'>
                        <span className='headline text-coal/90 text-3xl md:text-5xl'>{item}</span>
                        <Spark className='text-coal/60' size={18} />
                    </span>
                ))}
            </Marquee>
        </section>
    );
};

export default Statement;
