import Marquee from '@/components/site/marquee';
import Spark from '@/components/site/spark';

const ITEMS = ['Dry-Aged Steak', 'Crafted Cocktails', 'Art Deco', 'Studio 54 Energy', '1970s Glamour', 'Raw Bar'];

const Statement = () => {
    return (
        <section className='py-10 md:py-14'>
            <Marquee slow>
                {ITEMS.map((item, i) => (
                    <span key={i} className='mx-6 inline-flex items-center gap-12 md:mx-10'>
                        <span className='headline text-bone/90 text-6xl md:text-8xl'>{item}</span>
                        <Spark className='text-flame' size={26} />
                    </span>
                ))}
            </Marquee>
        </section>
    );
};

export default Statement;
