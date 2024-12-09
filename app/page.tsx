'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Globe, MonitorPlay, Users } from 'lucide-react'
import { useLanguage } from '@/components/LanguageContext'

export default function Home() {
  const { language } = useLanguage()

  const content = {
    fi: {
      title: 'Helsingin koulutusalusta',
      description: 'Yhtenäinen portaali digitaaliseen pedagogiikkaan, kansainvälisiin ohjelmiin ja opetusresursseihin',
      featured: 'Esillä',
      courses: 'Kurssit',
      resources: 'Resurssit',
      digitalTools: 'Digitaaliset työkalut',
      exploreTools: 'Tutustu työkaluihin',
      internationalPrograms: 'Kansainväliset ohjelmat',
      viewPrograms: 'Katso ohjelmat',
      upcomingEvents: 'Tulevat tapahtumat',
      seeCalendar: 'Katso kalenteri',
    },
    sv: {
      title: 'Helsingfors utbildningsplattform',
      description: 'Din enhetliga portal för digital pedagogik, internationella program och utbildningsresurser',
      featured: 'Utvalda',
      courses: 'Kurser',
      resources: 'Resurser',
      digitalTools: 'Digitala verktyg',
      exploreTools: 'Utforska verktyg',
      internationalPrograms: 'Internationella program',
      viewPrograms: 'Visa program',
      upcomingEvents: 'Kommande evenemang',
      seeCalendar: 'Se kalender',
    },
    en: {
      title: 'Helsinki Education Platform',
      description: 'Your unified gateway to digital pedagogy, international programs, and educational resources',
      featured: 'Featured',
      courses: 'Courses',
      resources: 'Resources',
      digitalTools: 'Digital Tools',
      exploreTools: 'Explore Tools',
      internationalPrograms: 'International Programs',
      viewPrograms: 'View Programs',
      upcomingEvents: 'Upcoming Events',
      seeCalendar: 'See Calendar',
    },
  }

  const currentContent = content[language]

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {currentContent.title}
            </h1>
            <p className="text-lg text-gray-600">
              {currentContent.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="featured" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="featured">{currentContent.featured}</TabsTrigger>
              <TabsTrigger value="courses">{currentContent.courses}</TabsTrigger>
              <TabsTrigger value="resources">{currentContent.resources}</TabsTrigger>
            </TabsList>
            <TabsContent value="featured">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <MonitorPlay className="h-8 w-8 text-blue-500" />
                    <CardTitle className="mt-4">{currentContent.digitalTools}</CardTitle>
                    <CardDescription>
                      Access our comprehensive collection of educational tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{currentContent.exploreTools}</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Globe className="h-8 w-8 text-green-500" />
                    <CardTitle className="mt-4">{currentContent.internationalPrograms}</CardTitle>
                    <CardDescription>
                      Discover international mobility opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{currentContent.viewPrograms}</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Calendar className="h-8 w-8 text-purple-500" />
                    <CardTitle className="mt-4">{currentContent.upcomingEvents}</CardTitle>
                    <CardDescription>
                      Stay updated with educational events and workshops
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{currentContent.seeCalendar}</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="courses">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Digital Pedagogy Basics</CardTitle>
                    <CardDescription>
                      Learn the fundamentals of digital teaching methods
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Start Course</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Educational Tools</CardTitle>
                    <CardDescription>
                      Master the latest educational technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Start Course</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="resources">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Teaching Materials</CardTitle>
                    <CardDescription>
                      Access our library of educational resources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Browse Materials</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Support Documents</CardTitle>
                    <CardDescription>
                      Find guides and documentation for tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">View Docs</Button>
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

