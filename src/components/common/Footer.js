import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


export default function Footer({ lang, dict }) {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-sm">
          
          <div>
            <h3 className="font-bold mb-4">HYPERMEP DOO</h3>
            <p className="text-neutral-400 leading-relaxed">
              [insert street and number]<br />
              [insert postal code and city], Serbia
            </p>
          </div>

          <div>
            <h3 className="text-neutral-400 mb-4">{dict.contactTitle}</h3>
            <p className="leading-relaxed">
              <a href="tel:[insert phone number]" className="hover:text-neutral-300 transition-colors">
                [insert phone number]
              </a>
              <br />
              <a href="mailto:[insert email address]" className="hover:text-neutral-300 transition-colors">
                [insert email address]
              </a>
            </p>
          </div>

          <div className="flex md:justify-end gap-6">
            <Link href="https://linkedin.com/company/hypermep" aria-label="LinkedIn" className="text-neutral-400 hover:text-white transition-colors">
              <FaLinkedin size={32} />
            </Link>
            <Link href="https://instagram.com/hypermep" aria-label="Instagram" className="text-neutral-400 hover:text-white transition-colors">
              <FaInstagram size={32} />
            </Link>
            <Link href="https://facebook.com/hypermep" aria-label="Facebook" className="text-neutral-400 hover:text-white transition-colors">
              <FaFacebook size={32} />
            </Link>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} HYPER MEP. {dict.rights}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href={`/${lang}/terms-of-service`} className="hover:text-white transition-colors">{dict.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}