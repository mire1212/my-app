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
import { useLanguage } from '@/components/LanguageContext'

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const menuItems = {
    fi: {
      digipeda: 'Digipeda',
      courses: 'Kurssit',
      tools: 'Työkalut',
      support: 'Tuki',
      international: 'Kansainvälinen',
      news: 'Uutiset',
      mobility: 'Liikkuvuus',
      resources: 'Resurssit',
      materials: 'Materiaalit',
      contact: 'Yhteystiedot',
    },
    sv: {
      digipeda: 'Digipeda',
      courses: 'Kurser',
      tools: 'Verktyg',
      support: 'Support',
      international: 'Internationell',
      news: 'Nyheter',
      mobility: 'Mobilitet',
      resources: 'Resurser',
      materials: 'Material',
      contact: 'Kontaktuppgifter',
    },
    en: {
      digipeda: 'Digipeda',
      courses: 'Courses',
      tools: 'Tools',
      support: 'Support',
      international: 'International',
      news: 'News',
      mobility: 'Mobility',
      resources: 'Resources',
      materials: 'Materials',
      contact: 'Contact',
    },
  }

  const currentMenuItems = menuItems[language]

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
              <NavigationMenuItem>
                <NavigationMenuTrigger>{currentMenuItems.digipeda}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <Link href="/digipeda/courses" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {currentMenuItems.courses}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Access all digital pedagogy courses and materials
                        </p>
                      </Link>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/digipeda/tools" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{currentMenuItems.tools}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Educational tools and resources
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/digipeda/support" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{currentMenuItems.support}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get help with digital tools
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{currentMenuItems.international}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/international/news" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{currentMenuItems.news}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest international updates
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/international/mobility" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{currentMenuItems.mobility}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            International mobility programs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{currentMenuItems.resources}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/resources/materials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{currentMenuItems.materials}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Educational resources and materials
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/resources/tools" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{currentMenuItems.tools}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Educational tools and software
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/yhteystiedot">
                    {language === 'fi' ? 'Yhteystiedot' : language === 'sv' ? 'Kontaktuppgifter' : 'Contact'}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('fi')}>
                  Suomi
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('sv')}>
                  Svenska
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
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
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <nav className="grid gap-2">
                    <Link href="/digipeda" className="hover:underline">
                      {currentMenuItems.digipeda}
                    </Link>
                    <Link href="/international" className="hover:underline">
                      {currentMenuItems.international}
                    </Link>
                    <Link href="/resources" className="hover:underline">
                      {currentMenuItems.resources}
                    </Link>
                    <Link href="/yhteystiedot" className="hover:underline">
                      {language === 'fi' ? 'Yhteystiedot' : language === 'sv' ? 'Kontaktuppgifter' : 'Contact'}
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {isSearchOpen && (
          <div className="border-t py-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-md border px-4 py-2 pl-10"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

