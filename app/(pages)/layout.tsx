import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';

import { Outfit, Roboto } from 'next/font/google';

import { Providers } from './providers';

import initIcons from '@/app/(ui)/util/fa_icons';
initIcons();

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Jake Boychenko',
  description: "Jake Boychenko's Portfolio.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${roboto.variable}`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
