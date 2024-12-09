'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Search, Menu, Globe } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useRouter } from 'next/navigation'

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { push } = useRouter()

  const handleLanguageChange = (lang: string) => {
    push(`/${lang}`)
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Helsinki.edu</span>
            </Link>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {/* Digipedagogiikka Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Digipedagogiikka</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <Link href="#" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">Kurssit</div>
                        <p className="text-sm leading-tight text-muted-foreground">Opi digipedagogiikkaa ja työkaluja!</p>
                      </Link>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Työkalut</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Käytä digipedagogisia työkaluja</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Tuki</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Tarvitsetko apua? Ota yhteyttä!</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Kansainvälinen Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Kansainvälinen</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/kansainvalinen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Uutiset</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Pysy ajan tasalla kansainvälisistä uutisista</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/kansainvalinen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Liikkuvuus</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Tutustu liikkuvuusohjelmiin</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/kansainvalinen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Resurssit</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Tutustu kansainvälisiin resursseihin</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resurssit Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resurssit</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Materiaalit</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Lataa opetusmateriaalit</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Työkalut</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Tutustu hyödyllisiin työkaluihin</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Yhteystiedot Section */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact">Yhteystiedot</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Other components (Search, DropdownMenu, Mobile Menu) */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('fi')}>fi</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('swe')}>swe</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')}>en</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="grid gap-4">
                  <h2 className="text-lg font-semibold">Valikko</h2>
                  <nav className="grid gap-2">
                    <Link href="#" className="hover:underline">Digipedia</Link>
                    <Link href="/kansainvalinen" className="hover:underline">Kansainvälinen</Link>
                    <Link href="#" className="hover:underline">Resurssit</Link>
                    <Link href="/contact" className="hover:underline">Yhteystiedot</Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {isSearchOpen && (
          <div className="border-t py-4">
            <div className="relative">
              <input type="search" placeholder="Hae" className="w-full rounded-md border px-4 py-2 pl-10" />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
