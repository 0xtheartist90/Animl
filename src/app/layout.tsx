import type { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

import '@/app/globals.css';
import SiteFooter from '@/components/site/site-footer';
import SiteHeader from '@/components/site/site-header';
import SmoothScroll from '@/components/site/smooth-scroll';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});
const display = localFont({
    src: './fonts/TheQuicky.otf',
    variable: '--font-display',
    display: 'swap'
});
const serifAccent = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500'],
    style: ['normal', 'italic'],
    variable: '--font-serif-accent'
});

export const metadata: Metadata = {
    title: {
        default: 'Animl Steakhouse Toronto — Elegantly Untamed',
        template: '%s — Animl Steakhouse Toronto'
    },
    description:
        'A 1970s-inspired Toronto steakhouse and cocktail den. Dry-aged steak, crafted cocktails and a bold, glamorous dining experience in the Entertainment District.',
    openGraph: {
        title: 'Animl Steakhouse Toronto — Elegantly Untamed',
        description:
            'Dry-aged steak, crafted cocktails and a bold, glamorous dining experience. 420A Wellington Street West, Toronto.',
        type: 'website'
    }
};

export const viewport: Viewport = {
    themeColor: '#0a0a0a'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='en' className='dark'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${serifAccent.variable} bg-background text-foreground overscroll-none antialiased`}>
                <SmoothScroll>
                    <SiteHeader />
                    <main>{children}</main>
                    <SiteFooter />
                </SmoothScroll>
            </body>
        </html>
    );
};

export default Layout;
