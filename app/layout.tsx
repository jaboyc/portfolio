import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';

import { Outfit, Roboto } from 'next/font/google';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faAws,
  faDocker,
  faFigma,
  faGithub,
  faJava,
  faJira,
  faLinkedin,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { Providers } from './providers';
config.autoAddCss = false;

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
  library.add(
    faLinkedin,
    faUnity,
    faGithub,
    faJava,
    faEnvelope,
    faFile,
    faAws,
    faDocker,
    faFigma,
    faJira,
    faDatabase,
  );

  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${roboto.variable}`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
