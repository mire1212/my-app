'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [selectedSupport, setSelectedSupport] = useState<"digiapu" | "kansainvaliset" | "muut" | null>(null);

  // Static content from the JSON you provided
  const supportTypes = {
    digiapu: "Digipeda", // Static content from the provided JSON
    kansainvaliset: "Kansainvälinen", 
    muut: "Muut",
  };

  const contactInfo = {
    digiapu: {
      title: "Digipeda", // Static content
      description: "Saat apua digitaalisten työkalujen käyttöön", // Static content
      email: "digipeda@hel.fi", // Static content
      phone: "p. 09 310 1691", // Static content
    },
    kansainvaliset: {
      title: "Kansainväliset ohjelmat", // Static content
      description: "Tuki kansainvälisiin ohjelmiin", // Static content
      email: "international@hel.fi", // Static content
      phone: "p. 09 310 1680", // Static content
    },
    muut: {
      title: "Muut yhteystiedot", // Static content
      description: "Muuta tukea ja yhteystietoja", // Static content
      email: "support@hel.fi", // Static content
      phone: "p. 09 310 1700", // Static content
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Yhteystiedot</h1> {/* Static title */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Yhteystiedot</CardTitle> {/* Static header */}
              <CardDescription>Valitse haluamasi tukimuoto</CardDescription> {/* Static description */}
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
                    {supportTypes[key as "digiapu" | "kansainvaliset" | "muut"]} {/* Static button label */}
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
                <p><strong>Sähköposti:</strong> {contactInfo[selectedSupport].email}</p>
                <p><strong>Puhelin:</strong> {contactInfo[selectedSupport].phone}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
