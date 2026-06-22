import Link from 'next/link';
import "../../styles/globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
        <h1 className="text-9xl font-black tracking-tighter mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Stranica nije pronađena | Page not found</h2>
        <p className="text-neutral-500 mb-8 text-center max-w-md">
          Ova putanja ne postoji. / The page you are looking for does not exist.
        </p>
        <Link 
          href="/" 
          className="bg-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors"
        >
          Povratak na početnu / Go Home
        </Link>
      </body>
    </html>
  );
}