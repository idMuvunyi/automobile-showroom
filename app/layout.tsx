import { Footer, Navbar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Showu Automobile',
  description: 'Explore the best autobiles near you!',
  authors: [{ name: 'Idrissa Muvunyi', url: 'idrissa.netlify.app' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
