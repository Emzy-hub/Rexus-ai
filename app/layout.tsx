import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rexus AI - The AI Business Operating System',
  description: 'Create marketing, understand your finances, and grow your business—all from one intelligent AI platform.',
  keywords: 'AI, Business, Marketing, Finance, Growth, Startup',
  openGraph: {
    title: 'Rexus AI - The AI Business Operating System',
    description: 'Create marketing, understand your finances, and grow your business—all from one intelligent AI platform.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-background dark:bg-dark text-dark dark:text-background`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
