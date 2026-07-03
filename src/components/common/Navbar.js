"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


export default function Navbar({ lang, dict }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const redirectedPathName = (locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative bg-white z-20">
        
        <div className="flex-shrink-0">
          <Link href={`/${lang}`} onClick={() => setIsMenuOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="EE&C MEP Logo" 
              width={150} 
              height={50} 
              className="w-auto h-16" /* Prilagodi visinu (h-10) po potrebi */
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-base font-bold uppercase tracking-wider text-black">
          <Link href={`/${lang}/o-nama`} className="relative group py-2">
            <span className="block group-hover:text-neutral-400 group-hover:-translate-y-0.5 transition-all duration-300">{dict.about}</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href={`/${lang}/usluge`} className="relative group py-2">
            <span className="block group-hover:text-neutral-400 group-hover:-translate-y-0.5 transition-all duration-300">{dict.services}</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href={`/${lang}/projekti`} className="relative group py-2">
            <span className="block group-hover:text-neutral-400 group-hover:-translate-y-0.5 transition-all duration-300">{dict.projects}</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href={`/${lang}/ljudi`} className="relative group py-2">
            <span className="block group-hover:text-neutral-400 group-hover:-translate-y-0.5 transition-all duration-300">{dict.people}</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </Link>
          <Link href={`/${lang}/karijere`} className="relative group py-2">
            <span className="block group-hover:text-neutral-400 group-hover:-translate-y-0.5 transition-all duration-300">{dict.careers}</span>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex text-xs font-semibold tracking-widest">
            {['en', 'de', 'sr'].map((locale, i) => (
              <span key={locale} className="flex items-center">
                <Link
                  href={redirectedPathName(locale)}
                  className={`px-2 py-2 transition-colors ${
                    lang === locale
                      ? 'text-black underline underline-offset-4 decoration-2'
                      : 'text-neutral-400 hover:text-black'
                  }`}
                >
                  {locale.toUpperCase()}
                </Link>
                {i < 2 && <span className="text-neutral-300">|</span>}
              </span>
            ))}
          </div>
          <Link href={`/${lang}/kontakt`} className="bg-black text-white px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-neutral-800 transition-colors">
            {dict.contact}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <button 
          className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Otvari meni"
        >
          <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 transition-all duration-300 ease-in-out overflow-hidden -z-10 ${isMenuOpen ? 'max-h-[500px] border-t opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4 text-lg font-medium text-black">
          <Link href={`/${lang}/o-nama`} onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">{dict.about}</Link>
          <Link href={`/${lang}/usluge`} onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">{dict.services}</Link>
          <Link href={`/${lang}/projekti`} onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">{dict.projects}</Link>
          <Link href={`/${lang}/ljudi`} onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">{dict.people}</Link>
          <Link href={`/${lang}/karijere`} onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">{dict.careers}</Link>
          
          <div className="flex gap-1 py-2 text-sm font-semibold tracking-widest">
            {['en','de','sr'].map((locale, i) => (
              <span key={locale} className="flex items-center">
                <Link
                  href={redirectedPathName(locale)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 transition-colors ${
                    lang === locale
                      ? 'text-black underline underline-offset-4 decoration-2'
                      : 'text-neutral-400 hover:text-black'
                  }`}
                >
                  {locale.toUpperCase()}
                </Link>
                {i < 2 && <span className="text-neutral-300">|</span>}
              </span>
            ))}
          </div>

          <Link href={`/${lang}/kontakt`} onClick={() => setIsMenuOpen(false)} className="bg-black text-white px-6 py-4 mt-2 text-sm font-bold flex justify-between items-center hover:bg-neutral-800 transition-colors">
            {dict.contact}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}