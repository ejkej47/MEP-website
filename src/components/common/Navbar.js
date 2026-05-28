"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative bg-white z-20">
        
        {/* LEVO: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl tracking-tighter" onClick={() => setIsMenuOpen(false)}>
            HYPER<span className="font-extrabold ml-1">MEP</span>
          </Link>
        </div>

        {/* SREDINA: Navigacioni linkovi (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          <Link href="/o-nama" className="hover:text-black transition-colors">O nama</Link>
          <Link href="/usluge" className="hover:text-black transition-colors">Usluge</Link>
          <Link href="/projekti" className="hover:text-black transition-colors">Projekti</Link>
          <Link href="/ljudi" className="hover:text-black transition-colors">Ljudi</Link>
        </nav>

        {/* DESNO: Jezik i Kontakt dugme (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex text-xs font-semibold tracking-widest">
            <button className="text-black">SR</button>
            <span className="text-neutral-300 mx-2">|</span>
            <button className="text-neutral-400 hover:text-black transition-colors">EN</button>
            <span className="text-neutral-300 mx-2">|</span>
            <button className="text-neutral-400 hover:text-black transition-colors">DE</button>
          </div>
          <Link href="/kontakt" className="bg-black text-white px-6 py-3 text-sm font-bold flex items-center gap-2 hover:bg-neutral-800 transition-colors">
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* HAMBURGER DUGME (Mobilni) */}
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

      {/* MOBILNI MENI (Padajući) */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-200 transition-all duration-300 ease-in-out overflow-hidden -z-10 ${isMenuOpen ? 'max-h-[500px] border-t opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4 text-lg font-medium text-black">
          <Link href="/o-nama" onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">O nama</Link>
          <Link href="/usluge" onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">Usluge</Link>
          <Link href="/projekti" onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">Projekti</Link>
          <Link href="/ljudi" onClick={() => setIsMenuOpen(false)} className="border-b border-neutral-100 pb-3">Ljudi</Link>
          
          <div className="flex gap-4 py-2 text-sm font-semibold tracking-widest text-neutral-400">
            <button className="text-black">SR</button>
            <span>|</span>
            <button className="hover:text-black transition-colors">EN</button>
            <span>|</span>
            <button className="hover:text-black transition-colors">DE</button>
          </div>

          <Link href="/kontakt" onClick={() => setIsMenuOpen(false)} className="bg-black text-white px-6 py-4 mt-2 text-sm font-bold flex justify-between items-center hover:bg-neutral-800 transition-colors">
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}