import Marquee from '@/components/site/marquee';
import Spark from '@/components/site/spark';

const ITEMS = ['Dry-Aged Steak', 'Crafted Cocktails', 'Art Deco', 'Studio 54 Energy', '1970s Glamour', 'Raw Bar'];

const Statement = () => {
    return (
        <section className='border-border border-b py-8 md:py-10'>
            <Marquee slow>
                {ITEMS.map((item, i) => (
                    <span key={i} className='mx-6 inline-flex items-center gap-12 md:mx-10'>
                        <span className='headline text-outline text-6xl md:text-8xl'>{item}</span>
                        <Spark className='text-flame' size={26} />
                    </span>
                ))}
            </Marquee>
        </section>
    );
};

export default Statement;
