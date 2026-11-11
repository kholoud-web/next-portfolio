import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Kholoud Mahmoud | Frontend Developer (React & Next.js)',
  description: 'Frontend Developer focused on building modern, responsive, accessible, and high-performance web applications with React, Next.js, and TypeScript.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Kholoud Mahmoud',
    'Software Engineer',
    'Portfolio'
  ],
  authors: [{ name: 'Kholoud Mahmoud' }],
  creator: 'Kholoud Mahmoud',
  openGraph: {
    title: 'Kholoud Mahmoud | Frontend Developer (React & Next.js)',
    description: 'Frontend Developer focused on building modern, responsive, accessible, and high-performance web applications with React, Next.js, and TypeScript.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kholoud Mahmoud | Frontend Developer (React & Next.js)',
    description: 'Frontend Developer focused on building modern, responsive, accessible, and high-performance web applications with React, Next.js, and TypeScript.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0D12',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#0B0D12] text-[#F5F5F7] antialiased selection:bg-[#059669]/30 selection:text-white"
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
