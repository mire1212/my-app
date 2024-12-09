'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Globe, MonitorPlay, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('page') // Use the 'page' namespace for translations

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="featured" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="featured">{t('featured')}</TabsTrigger>
              <TabsTrigger value="courses">{t('courses')}</TabsTrigger>
              <TabsTrigger value="resources">{t('resources')}</TabsTrigger>
            </TabsList>
            <TabsContent value="featured">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <MonitorPlay className="h-8 w-8 text-blue-500" />
                    <CardTitle className="mt-4">{t('digitalTools')}</CardTitle>
                    <CardDescription>
                      {t('digitalToolsDescription')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{t('exploreTools')}</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Globe className="h-8 w-8 text-green-500" />
                    <CardTitle className="mt-4">{t('internationalPrograms')}</CardTitle>
                    <CardDescription>
                      {t('internationalProgramsDescription')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{t('viewPrograms')}</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Calendar className="h-8 w-8 text-purple-500" />
                    <CardTitle className="mt-4">{t('upcomingEvents')}</CardTitle>
                    <CardDescription>
                      {t('upcomingEventsDescription')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{t('seeCalendar')}</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="courses">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('course1Title')}</CardTitle>
                    <CardDescription>
                      {t('course1Description')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{t('startCourse')}</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('course2Title')}</CardTitle>
                    <CardDescription>
                      {t('course2Description')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{t('startCourse')}</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="resources">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('teachingMaterials')}</CardTitle>
                    <CardDescription>
                      {t('teachingMaterialsDescription')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{t('browseMaterials')}</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('supportDocuments')}</CardTitle>
                    <CardDescription>
                      {t('supportDocumentsDescription')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">{t('viewDocs')}</Button>
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
