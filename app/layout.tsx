import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

import { Inter, Outfit, Roboto } from 'next/font/google';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Providers } from './providers';
config.autoAddCss = false;

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const roboto = Outfit({
  subsets: ['latin'],
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
  library.add(fas, fab);

  return (
    <html lang="en" className="dark">
      <Script
        src="https://kit.fontawesome.com/fbadad80a0.js"
        crossOrigin="anonymous"
      />
      <body className={`${outfit.variable} ${roboto.variable}`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
