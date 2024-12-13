import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DigipedaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Digipeda</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Kurssit</CardTitle>
            <CardDescription>Pääsy kaikkiin digipedagogiikan kursseihin ja materiaaleihin</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Näytä kurssit</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Työkalut</CardTitle>
            <CardDescription>Opetustyökalut ja resurssit</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Tutustu työkaluihin</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tuki</CardTitle>
            <CardDescription>Saa apua digityökalujen käyttöön</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/contact">Hanki tukea</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

