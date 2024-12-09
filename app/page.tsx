'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Globe, MonitorPlay, Users } from 'lucide-react'

export default function Home() {

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Helsingin koulutusalusta {/* Static title */}
            </h1>
            <p className="text-lg text-gray-600">
              Yhtenäinen portaali digitaaliseen pedagogiikkaan, kansainvälisiin ohjelmiin ja opetusresursseihin {/* Static description */}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="featured">
            <TabsList>
              <TabsTrigger value="featured">Tärkeää</TabsTrigger>
              <TabsTrigger value="courses">Kurssit</TabsTrigger>
              <TabsTrigger value="resources">Materiaalit</TabsTrigger>
              <TabsTrigger value="events">Tapahtumat</TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <MonitorPlay className="h-6 w-6 text-gray-500" />
                    <CardTitle className="mt-4">Digitaalinen pedagogiikka</CardTitle>
                    <CardDescription>
                      Uudet työkalut ja menetelmät opettamiseen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Tutustu lisää</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Globe className="h-6 w-6 text-gray-500" />
                    <CardTitle className="mt-4">Kansainväliset mahdollisuudet</CardTitle>
                    <CardDescription>
                      Etsi kansainvälisiä ohjelmia ja yhteistyömahdollisuuksia
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Näe ohjelmat</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Calendar className="h-6 w-6 text-gray-500" />
                    <CardTitle className="mt-4">Tulevat tapahtumat</CardTitle>
                    <CardDescription>
                      Tarkista seuraavat koulutustapahtumat ja konferenssit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Katso tapahtumat</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Kurssi 1: Digitaalinen oppiminen</CardTitle>
                    <CardDescription>
                      Opi digitaalisten oppimisalustojen käytöstä ja niiden hallinnasta
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Aloita nyt</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Kurssi 2: React ja Sovelluskehitys</CardTitle>
                    <CardDescription>
                      Syvenny Reactin käyttöön ja opi luomaan interaktiivisia verkkosovelluksia
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Aloita kurssi</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Oppimateriaali</CardTitle>
                    <CardDescription>
                      Laaja valikoima materiaaleja opettamiseen ja opiskeluun
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Selaa resursseja</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tukimateriaalit</CardTitle>
                    <CardDescription>
                      Löydä oppimista tukevia materiaaleja ja ohjeita
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Näytä tukimateriaalit</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Tapahtuma 1: Koulutuskonferenssi</CardTitle>
                    <CardDescription>
                      Liity koulutusseminaareihin ja verkostoidu asiantuntijoiden kanssa
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Ilmoittaudu</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tapahtuma 2: React-työpaja</CardTitle>
                    <CardDescription>
                      Kattava työpaja, jossa opit Reactin kehityksestä
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Osallistu työpajaan</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
