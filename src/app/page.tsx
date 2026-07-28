import About from '@/components/home/about';
import CocktailDen from '@/components/home/cocktail-den';
import Events from '@/components/home/events';
import Experience from '@/components/home/experience';
import Hero from '@/components/home/hero';
import MenuPreview from '@/components/home/menu-preview';
import ReserveCta from '@/components/home/reserve-cta';
import TheRoom from '@/components/home/the-room';

const Page = () => {
    return (
        <>
            <Hero />
            <About />
            <TheRoom />
            <MenuPreview />
            <Experience />
            <CocktailDen />
            <Events />
            <ReserveCta />
        </>
    );
};

export default Page;
