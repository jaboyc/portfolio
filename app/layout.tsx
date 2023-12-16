import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jake Boychenko',
  description: "Jake Boychenko's Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-background">{children}</body>
    </html>
  );
}
