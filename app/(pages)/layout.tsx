import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';

import { Outfit, Roboto } from 'next/font/google';

import { Providers } from './providers';

import initIcons from '@/app/(ui)/util/fa_icons';
import Script from 'next/script';
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
  title: 'Jake Boychenko - Mobile & Web Developer | Full-Stack Flutter Expert',
  description:
    'Explore the portfolio of Jake Boychenko, a dedicated Mobile & Web Developer specializing in full-stack mobile applications with Flutter. Discover my projects, read my insights on my blog, and view my resume to understand my journey and expertise.',
  authors: [{ name: 'Jake Boychenko' }],
  keywords: [
    'software development',
    'programming',
    'coding',
    'tech',
    'developer',
    'blog',
    'flutter',
    'web',
    'next.js',
    'client',
    'freelancing',
    'Mobile Developer',
    'Web Developer',
    'Mid-Level Developer',
    'Full-Stack Mobile Applications',
    'Flutter Developer',
    'Software Engineer Portfolio',
    'Developer Blog',
  ],
  metadataBase: new URL('https://www.jakeboychenko.com'),
  icons: '/favicon.png',
  openGraph: {
    images: '/favicon.png',
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
        {process.env.NODE_ENV == 'production' && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script id="google-analytics">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
