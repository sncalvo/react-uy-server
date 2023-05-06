import Header from '@/components/organisms/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/organisms/Footer'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReactJS Uruguayan Community',
  description: 'La comunidad de ReactJS de Uruguay!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
