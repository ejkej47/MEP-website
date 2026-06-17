import { NextResponse } from 'next/server'

let locales = ['sr', 'en', 'de']
let defaultLocale = 'sr'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Preskoči fajlove (slike, css), API rute i Next.js interne fajlove
  if (
    pathname.includes('.') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return
  }

  // Proveri da li putanja već sadrži podržani jezik u URL-u
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Ako nema jezik, preusmeri korisnika na defaultni jezik (sr)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Aktiviraj middleware na svim rutama osim statičkih fajlova
    '/((?!_next).*)',
  ],
}