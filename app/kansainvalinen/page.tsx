import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InternationalPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">International</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Uutiset</CardTitle>
            <CardDescription>Viimeisimmät kansainväliset päivitykset</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Lue uutiset</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Liikkuvuus</CardTitle>
            <CardDescription>Kansainväliset liikkuvuusohjelmat</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Tutustu ohjelmiin</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ERASMUS</CardTitle>
            <CardDescription>Kansainväliset opiskelija- ja henkilöstövaihto-ohjelmat</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="#">Tutustu ERASMUS-ohjelmaan</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

