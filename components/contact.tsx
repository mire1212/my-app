'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const t = useTranslations('contact') // Using 'contact' namespace for translations
  const [selectedSupport, setSelectedSupport] = useState<"digiapu" | "kansainvaliset" | "muut" | null>(null);

  const supportTypes = {
    digiapu: t('supportTypes.digiapu'),
    kansainvaliset: t('supportTypes.kansainvaliset'),
    muut: t('supportTypes.muut'),
  };

  const contactInfo = {
    digiapu: {
      title: t('contactInfo.digiapu.title'),
      description: t('contactInfo.digiapu.description'),
      email: t('contactInfo.digiapu.email'),
      phone: t('contactInfo.digiapu.phone'),
    },
    kansainvaliset: {
      title: t('contactInfo.kansainvaliset.title'),
      description: t('contactInfo.kansainvaliset.description'),
      email: t('contactInfo.kansainvaliset.email'),
      phone: t('contactInfo.kansainvaliset.phone'),
    },
    muut: {
      title: t('contactInfo.muut.title'),
      description: t('contactInfo.muut.description'),
      email: t('contactInfo.muut.email'),
      phone: t('contactInfo.muut.phone'),
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">{t('title')}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>{t('title')}</CardTitle>
              <CardDescription>{t('description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.keys(supportTypes).map((key) => (
                  <Button
                    key={key}
                    variant={selectedSupport === key ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedSupport(key as "digiapu" | "kansainvaliset" | "muut")}
                  >
                    {supportTypes[key as "digiapu" | "kansainvaliset" | "muut"]}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-2/3">
          {selectedSupport && (
            <Card>
              <CardHeader>
                <CardTitle>{contactInfo[selectedSupport].title}</CardTitle>
                <CardDescription>{contactInfo[selectedSupport].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>{t('email')}:</strong> {contactInfo[selectedSupport].email}</p>
                <p><strong>{t('phone')}:</strong> {contactInfo[selectedSupport].phone}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
