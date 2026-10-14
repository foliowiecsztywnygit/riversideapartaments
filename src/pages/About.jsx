import React from 'react';
import Hero from '../components/Hero';

const About = () => {
  const reviews = [
    {
      author: "Piotr",
      rating: 5,
      date: "niedawno",
      text: "Świetna lokalizacja tuż obok bulwarów nad Sołą. Apartament jest bardzo nowocześnie urządzony, czysty i posiada wszystko, co potrzebne. Dodatkowym plusem jest winda i klimatyzacja."
    },
    {
      author: "Anna",
      rating: 5,
      date: "niedawno",
      text: "Bardzo ładne i czyste miejsce. Świetny kontakt z obsługą. Blisko do Rynku i Zamku, a spacer do muzeum Auschwitz zajmuje zaledwie chwilę samochodem. Zdecydowanie polecam!"
    },
    {
      author: "Kamil",
      rating: 5,
      date: "niedawno",
      text: "Apartament przewyższył moje oczekiwania. Bardzo wygodne łóżko, świetnie wyposażony aneks kuchenny, bardzo czysto. Idealne miejsce na krótki lub dłuższy pobyt w Oświęcimiu."
    }
  ];

  return (
    <div>
      <Hero 
        title="O nas" 
        subtitle="Odkryj komfort w sercu Oświęcimia" 
        isHome={false} 
      />

      <section className="py-32 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 w-full h-[600px] relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/assets/images/IMG_3785-HDR-Edytuj.jpg" 
            alt="Wnętrze apartamentów" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-serif text-foreground mb-6">Wygoda i Niezależność</h2>
          <p className="text-gray-600 mb-6 font-light leading-relaxed">
            River Side Apartments to odpowiedź na potrzeby turystów i gości biznesowych, poszukujących w Oświęcimiu miejsca nowoczesnego, czystego i dającego pełną swobodę. Nasze apartamenty to przestrzeń, w której każdy detal został starannie przemyślany.
          </p>
          <p className="text-gray-600 font-light leading-relaxed mb-12">
            Obiekt zlokalizowany jest obok hotelu Hampton by Hilton, a od Rynku Głównego w Oświęcimiu dzieli go krótki spacer malowniczymi alejkami. To wspaniały punkt wypadowy do zwiedzania najważniejszych punktów w regionie i wypoczynku nad rzeką Sołą.
          </p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-12">
            <div>
              <span className="block text-4xl font-serif text-accent mb-2">2 min</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Spacerem do Rynku</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-accent mb-2">0 m</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Od rzeki Soły</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-accent mb-2">3.5 km</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Do Muzeum Auschwitz</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-accent mb-2">17 km</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Do Energylandii (Zator)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-gray-900 text-white border-t-8 border-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-serif mb-6">Opinie naszych Gości</h2>
            <div className="inline-flex items-center space-x-6 bg-white/10 px-8 py-4 rounded-full border border-white/20">
              <span className="text-5xl font-bold text-accent">9.5</span>
              <div className="flex flex-col items-start">
                <div className="flex text-accent text-xl mb-1">
                  ★★★★★
                </div>
                <span className="text-sm text-gray-300 font-medium tracking-widest uppercase">Z Booking.com (42 opinie)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white/5 p-10 border border-white/10 hover:border-accent transition-colors relative rounded-xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-4.4 0-8 3.6-8 8v8h8v-8H6c0-2.2 1.8-4 4-4V8zm18 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                </div>
                <div className="flex text-accent text-lg mb-6">★★★★★</div>
                <p className="text-gray-300 font-light italic mb-8 leading-relaxed relative z-10 text-lg">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center text-sm border-t border-white/10 pt-6">
                  <span className="font-bold text-white tracking-wider">{review.author}</span>
                  <span className="text-gray-400 font-light">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
