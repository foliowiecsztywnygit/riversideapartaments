import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
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
        title="River Side Apartments" 
        subtitle="Nowoczesne i komfortowe apartamenty w sercu Oświęcimia, obok rzeki Soły." 
        isHome={true} 
      />

      {/* About Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mt-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-serif text-foreground mb-6">River Side Apartments – Twój przystanek w Oświęcimiu</h2>
          <p className="text-gray-600 mb-6 font-light leading-relaxed">
            Nasz obiekt usytuowany jest w centrum Oświęcimia, przy malowniczych Bulwarach nad rzeką Sołą. Nowoczesne apartamenty gwarantują wygodę i niezależność, oferując bliskość do najważniejszych punktów miasta – zaledwie kilka minut od Rynku Głównego, Zamku i Muzeum Żydowskiego.
          </p>
          <p className="text-gray-600 font-light leading-relaxed mb-6">
            Do dyspozycji Gości oddajemy <strong>15 niezależnych apartamentów 3-, 4- oraz 6-osobowych</strong>. Każdy lokal jest w pełni wyposażony, posiada nowoczesną łazienkę z pralką, klimatyzację oraz szybkie bezprzewodowe połączenie Wi-Fi. W budynku znajduje się winda, miejski parking podziemny tuż obok obiektu (a dla apartamentu Premium dedykowane miejsce w garażu), a zameldowanie przebiega szybko i wygodnie w formie online (bezobsługowy check-in ze skrytkami na kod).
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center pt-2">
            <span className="text-xs uppercase tracking-widest font-bold text-accent bg-accent/10 px-4 py-2 rounded-full">
              Energylandia (Zator) – 15 min autem
            </span>
            <span className="text-xs uppercase tracking-widest font-bold text-foreground bg-gray-100 px-4 py-2 rounded-full">
              Wiślana Trasa Rowerowa tuż obok
            </span>
          </div>
        </div>
        <div className="flex-1 w-full h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="/assets/images/3.jpg" 
            alt="River Side Apartments nad rzeką Sołą" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* Apartments Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">15 niezależnych lokali</span>
            <h2 className="text-4xl font-serif text-foreground mb-4">Nasze Apartamenty</h2>
            <p className="text-gray-600 font-light max-w-2xl">
              Oferujemy komfortowe apartamenty 3-, 4- oraz 6-osobowe w standardzie Premium, gwarantujące pełną niezależność i relaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Apartament 3-osobowy */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 group overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/assets/images/IMG_3785-HDR-Edytuj.jpg" 
                  alt="Apartament 3-osobowy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded shadow">
                  3 OSOBOWY
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif text-foreground mb-3">Apartament 3-osobowy</h3>
                <p className="text-sm text-gray-600 font-light mb-5 flex-grow">
                  Przytulny, w pełni wyposażony apartament idealny dla par lub rodziny 2+1 z dzieckiem. Zapewnia intymność i wysoki standard wypoczynku.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2 border-t border-gray-100 pt-4">
                  <li className="flex items-center gap-2"><span>✓</span> Miejski parking podziemny obok</li>
                  <li className="flex items-center gap-2"><span>✓</span> Bezobsługowy check-in (skrytki na kod)</li>
                  <li className="flex items-center gap-2"><span>✓</span> Klimatyzacja i szybkie Wi-Fi</li>
                  <li className="flex items-center gap-2"><span>✓</span> Łazienka z pralką</li>
                </ul>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-500 font-medium">Winda • Aneks kuchenny</span>
                  <Link to="/apartamenty" className="text-accent text-xs font-bold uppercase tracking-widest hover:text-[#b88c45]">
                    Szczegóły &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Apartament 4-osobowy */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 group overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/assets/images/IMG_3830-HDR-Edytuj.jpg" 
                  alt="Apartament 4-osobowy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded shadow">
                  4 OSOBOWY
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif text-foreground mb-3">Apartament 4-osobowy</h3>
                <p className="text-sm text-gray-600 font-light mb-5 flex-grow">
                  Przestronny apartament ze strefą sypialną oraz salonem z rozkładaną sofą. Doskonały wybór dla rodzin i grup przyjaciół.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2 border-t border-gray-100 pt-4">
                  <li className="flex items-center gap-2"><span>✓</span> Miejski parking podziemny obok</li>
                  <li className="flex items-center gap-2"><span>✓</span> W pełni wyposażony aneks kuchenny</li>
                  <li className="flex items-center gap-2"><span>✓</span> Klimatyzacja i szybkie Wi-Fi</li>
                  <li className="flex items-center gap-2"><span>✓</span> Łazienka z pralką</li>
                </ul>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-xs text-gray-500 font-medium">Winda • Strefa wypoczynku</span>
                  <Link to="/apartamenty" className="text-accent text-xs font-bold uppercase tracking-widest hover:text-[#b88c45]">
                    Szczegóły &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Apartament 6-osobowy Premium */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-accent/40 group overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 relative">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/assets/images/IMG_3993-Edytuj.jpg" 
                  alt="Apartament 6-osobowy Premium" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-black/80 text-accent border border-accent/40 px-3 py-1 text-xs font-bold uppercase tracking-widest rounded">
                  ★ PREMIUM
                </div>
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded shadow">
                  6 OSOBOWY
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col bg-gradient-to-b from-white to-[#FAF8F5]">
                <h3 className="text-2xl font-serif text-foreground mb-3">Apartament 6-osobowy Premium</h3>
                <p className="text-sm text-gray-600 font-light mb-5 flex-grow">
                  Luksusowy, największy apartament typu Premium. Jako jedyny posiada <strong>dedykowany, przynależny parking podziemny w budynku</strong> w cenie pobytu!
                </p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2 border-t border-accent/20 pt-4">
                  <li className="flex items-center gap-2 font-medium text-accent">
                    <span>✓</span> <strong>Własny parking podziemny w budynku</strong>
                  </li>
                  <li className="flex items-center gap-2"><span>✓</span> Duży salon z jadalnią i sypialnie</li>
                  <li className="flex items-center gap-2"><span>✓</span> Klimatyzacja i szybkie Wi-Fi</li>
                  <li className="flex items-center gap-2"><span>✓</span> Nowoczesna łazienka z pralką</li>
                </ul>
                <div className="flex justify-between items-center border-t border-accent/20 pt-4 mt-auto">
                  <span className="text-xs text-accent font-bold uppercase tracking-wider">Maksymalny komfort</span>
                  <Link to="/apartamenty" className="bg-accent text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#b88c45] transition-colors">
                    Rezerwuj &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wellness & Sauna Highlight Banner */}
      <section className="py-20 bg-[#0F1416] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-black/80 via-black/60 to-black/80 border border-white/10 rounded-3xl p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-accent text-xs uppercase tracking-widest font-bold block mb-2">Relaks & Regeneracja</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Strefa Wellness & Prywatna Sauna</h2>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Zarezerwuj relaksujący seans w naszej saunie na wyłączność. Idealny sposób na odprężenie po dniu pełnym wrażeń na Bulwarach nad Sołą lub w Energylandii.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">✓ Rezerwacja online dla mieszkańców i gości</span>
                <span className="flex items-center gap-1.5">✓ Naturalna aromaterapia</span>
                <span className="flex items-center gap-1.5">✓ Prysznic schładzający</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link 
                to="/wellness"
                className="bg-accent hover:bg-[#b88c45] text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center transition-colors shadow-xl"
              >
                Kalendarz Rezerwacji Sauny
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Details Section */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-serif text-foreground mb-8">Udogodnienia i Wyposażenie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
          <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h3 className="text-xl font-serif text-accent mb-4">Wyposażone Kuchnie</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Każdy z naszych apartamentów dysponuje w pełni wyposażonym aneksem kuchennym zawierającym płytę grzewczą, lodówkę, czajnik oraz niezbędne naczynia i przybory.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h3 className="text-xl font-serif text-accent mb-4">Klimatyzacja i Winda</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Zapewniamy komfortową temperaturę dzięki nowoczesnemu systemowi klimatyzacji. W budynku dostępna jest cichobieżna winda ułatwiająca dotarcie z bagażami na wyższe piętra.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h3 className="text-xl font-serif text-accent mb-4">Łazienka z Pralką</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Wszystkie apartamenty wyposażone są w nowoczesną łazienkę z prysznicem, w której przygotowaliśmy dla Państwa <strong>pralkę</strong>, bezpłatny zestaw kosmetyków, świeże ręczniki i suszarkę.
            </p>
          </div>
          <div className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl">
            <h3 className="text-xl font-serif text-accent mb-4">Parking i Rowerownia</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Miejski parking podziemny znajduje się bezpośrednio obok apartamentu (apartament 6-os. posiada własne miejsce w garażu). Dostępna jest również <strong>bezpieczna rowerownia na życzenie</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews - Glassmorphism */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/images/bulwary.jpg" alt="Rzeka Soła" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/65 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 drop-shadow-md">Co mówią nasi Goście?</h2>
            <div className="flex items-center space-x-6 bg-white/10 px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
              <span className="text-4xl font-bold text-accent drop-shadow-sm">9.5</span>
              <div className="flex flex-col items-start border-l border-white/20 pl-6">
                <div className="flex text-accent text-sm mb-1 tracking-widest">
                  WYJĄTKOWY
                </div>
                <span className="text-xs text-gray-200 font-medium tracking-widest uppercase">Z Booking.com</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left mt-12">
            {reviews.map((review, i) => (
              <div key={i} className="group bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:bg-white/20 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-4.4 0-8 3.6-8 8v8h8v-8H6c0-2.2 1.8-4 4-4V8zm18 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                </div>
                <div className="flex text-accent text-sm mb-6">★★★★★</div>
                <p className="text-gray-100 font-light italic mb-8 leading-relaxed text-lg relative z-10">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center text-sm border-t border-white/10 pt-6 mt-auto">
                  <span className="font-bold text-white tracking-widest uppercase">{review.author}</span>
                  <span className="text-gray-300 font-medium">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-foreground mb-12 text-center">Często zadawane pytania (FAQ)</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Gdzie dokładnie znajdują się apartamenty?</h3>
              <p className="text-gray-600 font-light">River Side Apartments znajdują się przy ulicy Bulwary 1 w Oświęcimiu, tuż obok rzeki Soły, w bezpośrednim sąsiedztwie hotelu Hampton by Hilton i krótki spacer od Rynku Głównego.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Czy obiekt posiada klimatyzację i Wi-Fi?</h3>
              <p className="text-gray-600 font-light">Tak, wszystkie apartamenty posiadają nowoczesną klimatyzację oraz zapewniają bezpłatny dostęp do szybkiego internetu Wi-Fi.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Jak wygląda kwestia parkingu?</h3>
              <p className="text-gray-600 font-light">Miejski parking podziemny dostępny jest tuż obok obiektu. Dodatkowo nasz luksusowy apartament 6-osobowy typu Premium posiada własne, dedykowane stanowisko w parkingu podziemnym budynku w cenie.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Czy w apartamencie jest pralka?</h3>
              <p className="text-gray-600 font-light">Tak, wszystkie nasze apartamenty wyposażone są w pralkę w łazience, co jest ogromnym udogodnieniem zarówno przy krótkich, jak i dłuższych pobytach.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">O której godzinie odbywa się zameldowanie (check-in)?</h3>
              <p className="text-gray-600 font-light">Zameldowanie rozpoczyna się od godziny 15:00. Nie ma godziny granicznej przyjazdu – dzięki bezobsługowemu systemowi ze skrytkami na kod (smart lock) możesz zameldować się o dowolnej, nawet późnej porze!</p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Czy mogę bezpiecznie przechować rowery?</h3>
              <p className="text-gray-600 font-light">Tak! Obiekt znajduje się tuż przy Wiślanej Trasie Rowerowej i trasie Velo Soła. Dla naszych Gości udostępniamy bezpieczną, zamykaną rowerownię na życzenie.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
