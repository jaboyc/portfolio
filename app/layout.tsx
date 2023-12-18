import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;

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
    <html lang="en">
      <Head>
        <Link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/fbadad80a0.js"
        crossOrigin="anonymous"
      />
      <body className="bg-background">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
