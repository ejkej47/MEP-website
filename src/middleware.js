import { NextResponse } from 'next/server'

let locales = ['en', 'sr', 'de'] // Engleski je sada prvi na listi
let defaultLocale = 'en'         // Default je postavljen na 'en'

function getLocale(request) {
  // 1. Proveri kolačić (ako je korisnik ranije ručno izabrao jezik preko Navbara)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // 2. Proveri Accept-Language zaglavlje iz browsera korisnika
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    // Čisti zaglavlje (npr. "sr-RS,sr;q=0.9,en-US;q=0.8" postaje ['sr', 'en'])
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().split('-')[0].toLowerCase())
    
    // Pronađi prvi jezik koji pretraživač želi, a da ga tvoj sajt podržava
    const match = preferredLocales.find(lang => locales.includes(lang))
    if (match) return match
  }

  // 3. Ako nema kolačića i pretraživač ne šalje podržan jezik, koristi engleski
  return defaultLocale
}

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Preskoči statičke fajlove, slike, API rute i interne Next.js fajlove
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

  // Ako URL već ima jezik (npr. /sr/o-nama), samo ažuriraj kolačić da zapamtiš izbor
  if (pathnameHasLocale) {
    const currentLocale = pathname.split('/')[1]
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', currentLocale, { path: '/', maxAge: 31536000 }) // pamti 1 godinu
    return response
  }

  // Ako nema jezika u URL-u (korisnik je ukucao samo mep-website...com/)
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  // Preusmeri ga na URL sa detektovanim jezikom i postavi kolačić
  const response = NextResponse.redirect(request.nextUrl)
  response.cookies.set('NEXT_LOCALE', locale, { path: '/', maxAge: 31536000 })
  return response
}

export const config = {
  matcher: [
    // Aktiviraj middleware na svim rutama osim sistemskih fajlova
    '/((?!_next).*)',
  ],
}