import Image from 'next/image';

import { Reveal, RevealLines } from '@/components/site/reveal';
import Spark from '@/components/site/spark';

/** Shared interior-page hero: label, giant title, optional backdrop image or video. */
const PageHero = ({
    label,
    title,
    accent,
    image,
    imageAlt,
    video,
    showLogo = false
}: {
    label: string;
    title: string;
    accent?: string;
    image?: string;
    imageAlt?: string;
    video?: string;
    showLogo?: boolean;
}) => {
    return (
        <section className='relative h-[80svh] overflow-hidden'>
            {video ? (
                <>
                    <video
                        className='absolute inset-0 h-full w-full scale-[1.06] object-cover'
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                    />
                    <div className='from-coal via-coal/30 absolute inset-0 bg-gradient-to-t to-transparent' />
                    <div className='from-coal/60 absolute inset-x-0 top-0 h-28 bg-gradient-to-b to-transparent' />
                </>
            ) : (
                image && (
                    <>
                        <Image
                            src={image}
                            alt={imageAlt ?? ''}
                            fill
                            sizes='100vw'
                            priority
                            className='object-cover opacity-40'
                        />
                        <div className='from-coal via-coal/60 absolute inset-0 bg-gradient-to-t to-transparent' />
                    </>
                )
            )}
            <div className='relative flex h-full flex-col justify-end px-5 pb-14 md:px-8 md:pb-16'>
                {showLogo && (
                    <Reveal delay={0.05}>
                        <Image
                            src='/images/animl-cow.png'
                            alt='Animl — the upside-down cow'
                            width={1215}
                            height={954}
                            priority
                            className='mx-auto mb-8 w-40 md:mb-10 md:w-52'
                        />
                    </Reveal>
                )}
                <Reveal>
                    <p className='label-mono text-bone/70 mb-6 flex items-center gap-4'>
                        <Spark className='text-flame' size={13} />
                        {label}
                    </p>
                </Reveal>
                <RevealLines
                    className='headline text-bone text-[clamp(56px,12vw,160px)]'
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
