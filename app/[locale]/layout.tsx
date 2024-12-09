import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LanguageProvider } from '@/components/LanguageContext'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'


const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages()
  return (
    <NextIntlClientProvider messages={messages}>
    <html lang="fi">
      <body className={inter.className}>
          <LanguageProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </LanguageProvider>
      </body>
    </html>
    </NextIntlClientProvider>
  );
}

