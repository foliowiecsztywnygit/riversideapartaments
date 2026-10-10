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
            Nasz obiekt usytuowany jest w centrum Oświęcimia, przy malowniczych Bulwarach nad rzeką Sołą. Nowoczesne apartamenty gwarantują wygodę i niezależność, oferując bliskość do najważniejszych punktów miasta – Zaledwie kilka minut od Rynku Głównego, Zamku i Muzeum Żydowskiego.
          </p>
          <p className="text-gray-600 font-light leading-relaxed mb-6">
            Każdy z apartamentów jest w pełni wyposażony, posiada nowoczesną łazienkę, klimatyzację oraz szybkie bezprzewodowe połączenie Wi-Fi. Do Państwa dyspozycji przygotowaliśmy w pełni wyposażone aneksy kuchenne. W budynku znajduje się winda oraz parking podziemny, a zameldowanie przebiega szybko i wygodnie w formie online (bezobsługowy check-in).
          </p>
          <p className="text-xs uppercase tracking-widest font-bold text-accent">
            Energylandia (Zator) – zaledwie 15 min samochodem
          </p>
        </div>
        <div className="flex-1 w-full h-[500px] relative">
          <img 
            src="/assets/images/IMG_3754-Edytuj.jpg" 
            alt="Wnętrze River Side Apartments" 
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Apartments Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-serif text-foreground mb-4">Nasze Apartamenty</h2>
            <p className="text-gray-600 font-light">Oferujemy nowocześnie urządzone apartamenty, które zapewnią komfort podczas pobytu w Oświęcimiu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Apartament 3-osobowy (nr 5)", img: "IMG_3735.jpg", desc: "Przytulny, w pełni wyposażony apartament idealny dla par lub rodziny z dzieckiem." },
              { id: 2, title: "Apartamenty 4-osobowe", img: "IMG_3746.jpg", desc: "Oferujemy aż 10 przestronnych apartamentów czteroosobowych (m.in. nr 4, 6, 10, 12, 17, 18, 24, 28, 29, 30)." },
              { id: 3, title: "Twój Pełen Komfort", img: "IMG_3785-HDR-Edytuj.jpg", desc: "Niezależnie od wybranego numeru, każdy apartament oferuje ten sam wysoki standard z aneksem, klimatyzacją i prywatną łazienką." }
            ].map(domek => (
              <div key={domek.id} className="bg-white shadow-md group overflow-hidden flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <img src={`/assets/images/${domek.img}`} alt={domek.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    REZERWUJ
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-serif text-foreground mb-4">{domek.title}</h3>
                  <p className="text-sm text-gray-600 font-light mb-4 flex-grow">{domek.desc}</p>
                  <ul className="text-sm text-gray-500 mb-6 space-y-1">
                    <li>• Parking podziemny</li>
                    <li>• Bezobsługowy online check-in</li>
                    <li>• Bezpłatne Wi-Fi i klimatyzacja</li>
                    <li>• Prywatna łazienka</li>
                  </ul>
                  <div className="flex justify-between items-end border-t border-gray-100 pt-4 mt-auto">
                    <p className="text-xs text-gray-500 font-medium">Dostęp do windy<br/>Wyposażony aneks</p>
                    <Link to="/domki" className="text-accent text-xs font-bold uppercase tracking-widest hover:text-[#b88c45]">Więcej</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Details Section */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-serif text-foreground mb-8">Udogodnienia i Wyposażenie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
          <div className="p-6 bg-white border border-gray-100 shadow-sm">
            <h3 className="text-xl font-serif text-accent mb-4">W pełni wyposażona kuchnia</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Większość naszych apartamentów dysponuje w pełni wyposażonym aneksem kuchennym zawierającym kuchenkę, piekarnik, lodówkę, czajnik oraz niezbędne przybory, co daje pełną niezależność.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-100 shadow-sm">
            <h3 className="text-xl font-serif text-accent mb-4">Klimatyzacja i Winda</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Zapewniamy odpowiednią temperaturę o każdej porze roku dzięki nowoczesnemu systemowi klimatyzacji. W budynku dostępna jest winda ułatwiająca dotarcie z bagażami na wyższe piętra.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-100 shadow-sm">
            <h3 className="text-xl font-serif text-accent mb-4">Prywatna Łazienka</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Każdy apartament posiada nowoczesną łazienkę z prysznicem, w której przygotowaliśmy dla Państwa bezpłatny zestaw kosmetyków, świeże ręczniki oraz pralkę w niektórych jednostkach.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-100 shadow-sm">
            <h3 className="text-xl font-serif text-accent mb-4">Parking i Check-in</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Do dyspozycji gości oddajemy wygodny parking podziemny. Proces meldowania jest w pełni zautomatyzowany – poprzez system online check-in otrzymują Państwo dostęp do apartamentu.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews - Redesigned with Glassmorphism */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/images/bulwary.jpg" alt="Rzeka Soła" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
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
              <p className="text-gray-600 font-light">River Side Apartments znajdują się przy ulicy Bulwary 1 w Oświęcimiu, tuż obok rzeki Soły, niedaleko hotelu Hampton by Hilton i krótki spacer od Rynku Głównego.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Czy obiekt posiada klimatyzację i darmowe Wi-Fi?</h3>
              <p className="text-gray-600 font-light">Tak, wszystkie apartamenty są klimatyzowane i zapewniają dostęp do bezpłatnego, szybkiego internetu Wi-Fi.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Czy w budynku znajduje się winda?</h3>
              <p className="text-gray-600 font-light">Tak, do dyspozycji naszych Gości jest winda w budynku, dzięki czemu przemieszczanie się z bagażami nie stanowi problemu.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Jak daleko jest do Muzeum Auschwitz-Birkenau?</h3>
              <p className="text-gray-600 font-light">Nasze apartamenty oddalone są od Muzeum Auschwitz-Birkenau o około 3,5 kilometra, co pozwala na dojazd samochodem w kilka minut.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Czy dostępne są ręczniki i pościel?</h3>
              <p className="text-gray-600 font-light">Tak, wszystkie apartamenty posiadają świeżą pościel i zestawy ręczników dla każdego zarejestrowanego Gościa. Zapewniamy również bezpłatne kosmetyki hotelowe.</p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Jak wygląda kwestia parkingu i zameldowania?</h3>
              <p className="text-gray-600 font-light">Dla naszych Gości udostępniamy parking podziemny. Zameldowanie odbywa się w pełni bezobsługowo w formie online poprzez nasz system rezerwacyjny.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
