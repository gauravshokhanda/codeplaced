import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });
const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400','500','600','700'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400','600','700'] });

export const metadata: Metadata = {
  title: 'CodePlaced — Enterprise Data Analytics & BI Agency',
  description:
    'Operationalize decisions from your data. Strategy, engineering, BI dashboards, and ML — delivered with measurable ROI.',
  icons: {
    icon: '/images/favicon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${plex.className}`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}