import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

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
    <div className="bg-white">
      <Header />

      <main className="min-h-screen overflow-x-hidden">
        {children}
      </main>

      <Footer />
    </div>
  );
}
