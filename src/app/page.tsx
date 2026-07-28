import About from '@/components/home/about';
import CocktailDen from '@/components/home/cocktail-den';
import Events from '@/components/home/events';
import Hero from '@/components/home/hero';
import MenuPreview from '@/components/home/menu-preview';
import ReserveCta from '@/components/home/reserve-cta';
import Statement from '@/components/home/statement';

const Page = () => {
    return (
        <>
            <Hero />
            <About />
            <Statement />
            <MenuPreview />
            <CocktailDen />
            <Events />
            <ReserveCta />
        </>
    );
};

export default Page;
