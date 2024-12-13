import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Resurssit</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Materiaalit</CardTitle>
            <CardDescription>Opetusmateriaalit ja resurssit</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Selaa materiaaleja</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Työkalut</CardTitle>
            <CardDescription>Opetustyökalut ja ohjelmistot</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Tutustu työkaluihin</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ohjelmat</CardTitle>
            <CardDescription>Käytännön harjoitusohjelmat ja sovellukset</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Tutustu ohjelmiin</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Oppimistuki</CardTitle>
            <CardDescription>Ohjaus ja mentorointiresurssit</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Hanki tukea</Link>
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

