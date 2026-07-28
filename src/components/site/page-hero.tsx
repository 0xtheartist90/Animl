import Image from 'next/image';

import { Reveal, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

/** Shared interior-page hero: label, giant title, optional backdrop image. */
const PageHero = ({
    label,
    title,
    accent,
    image,
    imageAlt
}: {
    label: string;
    title: string;
    accent?: string;
    image?: string;
    imageAlt?: string;
}) => {
    return (
        <section className='relative overflow-hidden'>
            {image && (
                <>
                    <Image src={image} alt={imageAlt ?? ''} fill sizes='100vw' priority className='object-cover opacity-40' />
                    <div className='from-coal via-coal/60 absolute inset-0 bg-gradient-to-t to-transparent' />
                </>
            )}
            <div className='relative px-5 pt-40 pb-16 md:px-8 md:pt-56 md:pb-24'>
                <Reveal>
                    <p className='label-mono text-bone/70 mb-6 flex items-center gap-4'>
                        <Spark className='text-flame' />
                        {label}
                    </p>
                </Reveal>
                <RevealLines
                    className='headline text-bone text-[clamp(56px,12vw,180px)]'
                    delay={0.1}
                    lines={[
                        <span key='t'>
                            {title}
                            {accent && <span className='text-flame'>{accent}</span>}
                        </span>
                    ]}
                />
            </div>
        </section>
    );
};

export default PageHero;
