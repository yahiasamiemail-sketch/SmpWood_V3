import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SMP Wood - Négoce et Distribution de Granulés de Bois',
  description: 'Leader français du négoce et de la distribution de granulés de bois pour le chauffage domestique.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003d82',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-white scroll-smooth">
      <body className={`${geistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
