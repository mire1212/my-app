'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const { language } = useLanguage()
  const [selectedSupport, setSelectedSupport] = useState<string | null>(null)

  const content = {
    fi: {
      title: 'Yhteystiedot',
      description: 'Valitse tukipalvelu vasemmalta nähdäksesi yhteystiedot',
      supportTypes: {
        digiapu: 'Digiapu',
        kansainvaliset: 'Kansainväliset opintojen tuki',
        muut: 'Muut palvelut',
      },
      contactInfo: {
        digiapu: {
          title: 'Digiapu',
          description: 'Tukea digitaalisiin työkaluihin ja palveluihin',
          email: 'digiapu@helsinki.fi',
          phone: '+358 12 3456789',
        },
        kansainvaliset: {
          title: 'Kansainväliset opintojen tuki',
          description: 'Tukea kansainvälisiin opintoihin liittyvissä asioissa',
          email: 'kv-opinnot@helsinki.fi',
          phone: '+358 98 7654321',
        },
        muut: {
          title: 'Muut palvelut',
          description: 'Yleinen tuki ja neuvonta',
          email: 'info@helsinki.fi',
          phone: '+358 10 2345678',
        },
      },
    },
    sv: {
      title: 'Kontaktuppgifter',
      description: 'Välj en supporttjänst till vänster för att se kontaktinformation',
      supportTypes: {
        digiapu: 'Digital hjälp',
        kansainvaliset: 'Stöd för internationella studier',
        muut: 'Övriga tjänster',
      },
      contactInfo: {
        digiapu: {
          title: 'Digital hjälp',
          description: 'Support för digitala verktyg och tjänster',
          email: 'digitalstod@helsingfors.fi',
          phone: '+358 12 3456789',
        },
        kansainvaliset: {
          title: 'Stöd för internationella studier',
          description: 'Support för frågor relaterade till internationella studier',
          email: 'int-studier@helsingfors.fi',
          phone: '+358 98 7654321',
        },
        muut: {
          title: 'Övriga tjänster',
          description: 'Allmän support och rådgivning',
          email: 'info@helsingfors.fi',
          phone: '+358 10 2345678',
        },
      },
    },
    en: {
      title: 'Contact Information',
      description: 'Select a support service on the left to view contact details',
      supportTypes: {
        digiapu: 'Digital Support',
        kansainvaliset: 'International Studies Support',
        muut: 'Other Services',
      },
      contactInfo: {
        digiapu: {
          title: 'Digital Support',
          description: 'Support for digital tools and services',
          email: 'digitalsupport@helsinki.fi',
          phone: '+358 12 3456789',
        },
        kansainvaliset: {
          title: 'International Studies Support',
          description: 'Support for international studies related matters',
          email: 'int-studies@helsinki.fi',
          phone: '+358 98 7654321',
        },
        muut: {
          title: 'Other Services',
          description: 'General support and guidance',
          email: 'info@helsinki.fi',
          phone: '+358 10 2345678',
        },
      },
    },
  }

  const currentContent = content[language]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">{currentContent.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>{currentContent.title}</CardTitle>
              <CardDescription>{currentContent.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(currentContent.supportTypes).map(([key, value]) => (
                  <Button
                    key={key}
                    variant={selectedSupport === key ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedSupport(key)}
                  >
                    {value}
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
                <CardTitle>{currentContent.contactInfo[selectedSupport].title}</CardTitle>
                <CardDescription>{currentContent.contactInfo[selectedSupport].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p><strong>Email:</strong> {currentContent.contactInfo[selectedSupport].email}</p>
                <p><strong>Phone:</strong> {currentContent.contactInfo[selectedSupport].phone}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

