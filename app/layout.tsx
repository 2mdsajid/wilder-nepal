import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import content from '@/src/data/content.json';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${content.company.name} — ${content.company.tagline}`,
    template: `%s | ${content.company.name}`,
  },
  description: content.hero.subheadline,
  keywords: ['kayaking Pokhara', 'SUP Fewa Lake', 'stand up paddle Nepal', 'water sports Lakeside'],
  openGraph: {
    title: `${content.company.name} — ${content.company.tagline}`,
    description: content.hero.subheadline,
    siteName: content.company.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: content.hero.backgroundImage, width: 1920, height: 1080 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.company.name} — ${content.company.tagline}`,
    description: content.hero.subheadline,
    images: [content.hero.backgroundImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
