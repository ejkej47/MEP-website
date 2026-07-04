import Link from 'next/link';
import Image from 'next/image';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaTiktok, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa';

export default function Footer({ lang, dict }) {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. CTA Sekcija */}
        <div className="flex flex-col items-center text-center pb-16 border-b border-neutral-800 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{dict.cta.title}</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl text-lg">
            {dict.cta.desc}
          </p>
          <Link 
            href={`/${lang}/kontakt`} 
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-colors"
          >
            {dict.cta.btn}
          </Link>
        </div>

        {/* 2. Glavni deo - Spojene informacije i mreže */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Logo i spojene kontakt informacije */}
          <div className="flex flex-col gap-10 w-full md:w-1/2">
            {/*<Image 
              src="/logo.png" 
              alt="EE&C MEP Logo" 
              width={160} 
              height={60} 
              // Ove klase čine sliku belom
              className="object-contain invert brightness-0" 
              priority
            />*/}
            
            <div>
              <h3 className="text-neutral-500 font-bold tracking-widest uppercase mb-6 text-sm">{dict.contactTitle}</h3>
              <div className="flex flex-col gap-4 text-neutral-300">
                
                {/* Adresa */}
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="mt-1 text-neutral-500" size={18} />
                  <p className="leading-relaxed">
                    Oslobođenja 25V/11<br />
                    26000 Pančevo, Serbia
                  </p>
                </div>

                {/* Telefon */}
                <a href="tel:+381641187381" className="flex items-center gap-4 hover:text-white transition-colors w-fit">
                  <FaPhoneAlt className="text-neutral-500" size={18} />
                  <span>+381 64 1187381</span>
                </a>

                {/* Email */}
                <a href="mailto:office@eecmep.com" className="flex items-center gap-4 hover:text-white transition-colors w-fit">
                  <FaEnvelope className="text-neutral-500" size={18} />
                  <span>office@eecmep.com</span>
                </a>

              </div>
            </div>
          </div>

          {/* Društvene mreže u obliku bedževa */}
          <div className="flex flex-col justify-end md:items-end w-full md:w-1/2 pt-2 md:pt-0">
            <div className="flex gap-4">
              <Link href="https://linkedin.com/company/eecmep" aria-label="LinkedIn" className="bg-neutral-900 p-4 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
                <FaLinkedin size={22} />
              </Link>
              <Link href="https://instagram.com/eecmep" aria-label="Instagram" className="bg-neutral-900 p-4 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
                <FaInstagram size={22} />
              </Link>
              <Link href="https://tiktok.com/@eecmep" aria-label="TikTok" className="bg-neutral-900 p-4 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
                <FaTiktok size={22} />
              </Link>
            </div>
          </div>
          
        </div>

        {/* 3. Donji deo (Copyright i pravni linkovi) */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-neutral-800 text-xs text-neutral-500 gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} EE&C MEP. {dict.rights}</p>
          <div className="flex gap-6">
            <Link href={`/${lang}/politika-privatnosti`} className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href={`/${lang}/uslovi-koriscenja`} className="hover:text-white transition-colors">{dict.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}