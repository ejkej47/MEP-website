import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function Footer({ lang, dict }) {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gornji deo footera - Flexbox za bolji raspored */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 text-sm">
          
          {/* Leva strana - Adresa */}
          <div>
            <h3 className="font-bold mb-4 tracking-widest uppercase">EE&C MEP</h3>
            <p className="text-neutral-400 leading-relaxed">
              Oslobođenja 25V/11<br />
              26000 Pančevo, Serbia
            </p>
          </div>

          {/* Desna strana - Kontakt */}
          <div className="md:text-right">
            <h3 className="text-neutral-500 mb-4 tracking-widest uppercase">{dict.contactTitle}</h3>
            <p className="leading-relaxed flex flex-col gap-1">
              <a href="tel:+381641187381" className="hover:text-white transition-colors">
                +381 64 1187381
              </a>
              <a href="mailto:office@eecmep.com" className="hover:text-white transition-colors">
                office@eecmep.com
              </a>
            </p>
          </div>

          
          <div className="md:text-right self-center">
  <div className="flex flex-wrap items-center gap-6 md:justify-end">
    
    {/* Email */}
    <a href="mailto:office@eecmep.com" className="text-neutral-400 hover:text-white transition-colors font-medium">
      office@eecmep.com
    </a>

    {/* Društvene mreže */}
    <div className="flex gap-4">
      <Link href="https://linkedin.com/company/eecmep" aria-label="LinkedIn" className="text-neutral-400 hover:text-white transition-colors">
        <FaLinkedin size={24} />
      </Link>
      <Link href="https://instagram.com/eecmep" aria-label="Instagram" className="text-neutral-400 hover:text-white transition-colors">
        <FaInstagram size={24} />
      </Link>
      <Link href="https://tiktok.com/eecmep" aria-label="TikTok" className="text-neutral-400 hover:text-white transition-colors">
        <FaTiktok size={24} />
      </Link>
    </div>
    
  </div>
</div>
                    
          
        </div>

        {/* Donji deo footera */}
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