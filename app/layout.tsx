import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Contact  from '@/app/contact/page'
import { LanguageProvider } from '@/components/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi"> {/* Set a default language here */}
      <body className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
