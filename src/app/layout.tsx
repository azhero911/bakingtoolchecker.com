import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from '@/config/site';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-bakery-bg text-bakery-dark font-sans antialiased flex flex-col selection:bg-amber-100 selection:text-bakery-accent">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
