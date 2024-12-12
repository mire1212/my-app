import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
