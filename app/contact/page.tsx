'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type SupportPerson = {
  name: string
  role: string
  email: string
  phone: string
  image: string
}

type SupportCategory = {
  id: string
  name: string
  description: string
  people: SupportPerson[]
}

const supportCategories: SupportCategory[] = [
  {
    id: 'digiapu',
    name: 'Digiapu',
    description: 'Tukea digitaalisiin työkaluihin ja palveluihin',
    people: [
      {
        name: 'Matti Meikäläinen',
        role: 'Digitaalinen pedagogi',
        email: 'matti.person@helsinki.fi',
        phone: '+358 12 34 4567',
        image: '/placeholder.svg?height=100&width=100'
      },
      {
        name: 'Liisa Lahtinen',
        role: 'IT-tukihenkilö',
        email: 'liisa.person@helsinki.fi',
        phone: '+358 12 34 4567',
        image: '/placeholder.svg?height=100&width=100'
      }
    ]
  },
  {
    id: 'kv-tiimi',
    name: 'KV-tiimi',
    description: 'Tukea kansainvälisiin opintoihin liittyvissä asioissa',
    people: [
      {
        name: 'Anna Virtanen',
        role: 'Kansainvälisten asioiden koordinaattori',
        email: 'anna.person@helsinki.fi',
        phone: '+358 12 34 4567',
        image: '/placeholder.svg?height=100&width=100'
      },
      {
        name: 'Mikko Mäkinen',
        role: 'Vaihto-opiskelijakoordinaattori',
        email: 'mikko.makinen@helsinki.fi',
        phone: '+358 12 34 4567',
        image: '/placeholder.svg?height=100&width=100'
      }
    ]
  },
  {
    id: 'muut',
    name: 'Muut palvelut',
    description: 'Yleinen tuki ja neuvonta',
    people: [
      {
        name: 'Sari Salminen',
        role: 'Opintoneuvoja',
        email: 'sari.person@helsinki.fi',
        phone: '+358 12 34 4567',
        image: '/placeholder.svg?height=100&width=100'
      },
      {
        name: 'Juha Järvinen',
        role: 'Opiskelijapalveluiden koordinaattori',
        email: 'juha.person@helsinki.fi',
        phone: '+358 12 34 4567',
        image: '/placeholder.svg?height=100&width=100'
      }
    ]
  }
]

export default function YhteystiedotPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(supportCategories[0].id)

  const currentCategory = supportCategories.find(category => category.id === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Yhteystiedot</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Tukipalvelut</CardTitle>
              <CardDescription>Valitse tukipalvelu nähdäksesi yhteystiedot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {supportCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-3/4">
          {currentCategory && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">{currentCategory.name}</h2>
              <p className="mb-6 text-gray-600">{currentCategory.description}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {currentCategory.people.map((person) => (
                  <Card key={person.email}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle>{person.name}</CardTitle>
                        <CardDescription>{person.role}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p><strong>Sähköposti:</strong> {person.email}</p>
                      <p><strong>Puhelin:</strong> {person.phone}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

