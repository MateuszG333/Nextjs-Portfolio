import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 text-center">
      
      <h1 className="text-8xl font-extrabold tracking-widest text-white/90">
        404
      </h1>

      <div className="h-1 w-24 bg-white/20 my-6 rounded-full" />

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Ups... Ta strona nie istnieje
      </h2>

      <p className="text-white/60 max-w-md mb-8">
        Wygląda na to, że trafiłeś w ślepy zaułek internetu. 
        Sprawdź adres URL lub wróć na stronę główną.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-white text-black font-medium 
        hover:bg-gray-200 transition-all duration-300 
        shadow-lg hover:scale-105"
      >
        Wróć na stronę główną
      </Link>

    </section>
  );
}