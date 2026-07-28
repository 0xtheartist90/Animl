import type { Metadata } from 'next';

import MenusClient from '@/components/menus/menus-client';

export const metadata: Metadata = {
    title: 'Menus — Dry-Aged Cuts & More',
    description:
        'Dry-aged steak, seafood, crafted cocktails and an extensive wine selection at Animl Steakhouse Toronto.'
};

const Page = () => {
    return <MenusClient />;
};

export default Page;
