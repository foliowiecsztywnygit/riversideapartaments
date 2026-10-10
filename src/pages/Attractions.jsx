import React from 'react';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet-async';

const Attractions = () => {
  const mainAttractions = [
    {
      id: 1,
      name: "Energylandia w Zatorze",
      distance: "ok. 17 km (15 min autem)",
      desc: "Największy Park Rozrywki w Polsce to absolutny hit dla rodzin i fanów adrenaliny. Rollercoastery, strefy wodne i mnóstwo atrakcji dla każdego. Nasze apartamenty to idealna baza wypadowa po dniu pełnym wrażeń!",
      img: "energylandia.jpg",
      highlight: true
    },
    {
      id: 2,
      name: "Bulwary nad Sołą",
      distance: "100 m",
      desc: "Znakomite miejsce na poranny jogging, popołudniowy spacer czy relaks na trawie. Apartamenty zlokalizowane są tuż przy bulwarach, dając natychmiastowy dostęp do terenów rekreacyjnych wokół rzeki.",
      img: "bulwnadsola.jpg",
      highlight: false
    },
    {
      id: 3,
      name: "Zamek w Oświęcimiu",
      distance: "ok. 500 m",
      desc: "Historyczny Zamek z wieżą, z której roztacza się świetna panorama na miasto i rzekę. Świetne miejsce na krótki spacer, oferujące interesujące wystawy i odrobinę lokalnej historii.",
      img: "zamek_w_oświęcimiu.jpg",
      highlight: false
    },
    {
      id: 4,
      name: "Rynek Główny",
      distance: "ok. 300 m",
      desc: "Odrestaurowany rynek z zabytkowym ratuszem i przyjemnymi kawiarniami oraz restauracjami. Idealne miejsce na obiad czy wieczornego drinka po intensywnym dniu zwiedzania.",
      img: "rynek-glowny-oswiecim.jpg",
      highlight: false
    },
    {
      id: 5,
      name: "Muzeum Żydowskie i Synagoga",
      distance: "ok. 400 m",
      desc: "Centrum Żydowskie w Oświęcimiu to ciekawe miejsce pokazujące przedwojenną historię miasta, w którym krzyżowały się różne kultury.",
      img: "muzeumzydowskie.jpg",
      highlight: false
    },
    {
      id: 6,
      name: "Muzeum Auschwitz-Birkenau",
      distance: "ok. 3.5 km",
      desc: "Miejsce Pamięci wpisane na listę UNESCO. Ważny punkt dla osób zainteresowanych historią II Wojny Światowej (zalecamy wcześniejszą rezerwację biletów online).",
      img: "aushwitz.jpg",
      highlight: false
    }
  ];

  const dayTrips = [
    {
      id: 1,
      name: "Zatorland i Park Mitologii",
      distance: "ok. 20 min jazdy",
      desc: "Świetne uzupełnienie Energylandii, zwłaszcza dla młodszych dzieci. Ogromny park ruchomych dinozaurów, park owadów i lunapark.",
      category: "Rozrywka"
    },
    {
      id: 2,
      name: "Inwałd Park",
      distance: "ok. 35 min jazdy",
      desc: "Potężny kompleks rozrywkowy: Park Miniatur (budowle z całego świata), Średniowieczna Warownia i Dinolandia. Doskonałe miejsce na cały dzień zabawy.",
      category: "Rozrywka"
    },
    {
      id: 3,
      name: "Zamek i Park w Pszczynie",
      distance: "ok. 30 min jazdy",
      desc: "Nazywany Polskim Wersalem. Przepiękny pałac magnacki otoczony ogromnym parkiem w stylu angielskim, w którym znajduje się Pokazowa Zagroda Żubrów.",
      category: "Natura i Zabytki"
    },
    {
      id: 4,
      name: "Jezioro Mucharskie",
      distance: "ok. 45 min jazdy",
      desc: "Malownicze jezioro z zaporą w Świnnej Porębie. Idealne na wypożyczenie rowerka wodnego lub relaksujący rejs statkiem z pięknym górskim krajobrazem.",
      category: "Natura i Relaks"
    },
    {
      id: 5,
      name: "Beskidy (Szyndzielnia, Góra Żar)",
      distance: "ok. 45-50 min jazdy",
      desc: "Szybki wypad w góry. Nowoczesna kolejka gondolowa na Szyndzielnię (Bielsko-Biała) lub torowa na Górę Żar pozwala bez wysiłku cieszyć się pięknymi widokami.",
      category: "Góry"
    },
    {
      id: 6,
      name: "Kraków i Wieliczka",
      distance: "ok. 1 h 15 min jazdy",
      desc: "Dzięki bliskości dogodnych dróg, wypad na Rynek Główny w Krakowie czy podziemna wycieczka po Kopalni Soli to idealna opcja na całodniową wyprawę.",
      category: "Wycieczki Miejskie"
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Atrakcje i Okolica | River Side Apartments Oświęcim - Baza Wypadowa do Energylandii</title>
        <meta name="description" content="Odkryj atrakcje wokół River Side Apartments w Oświęcimiu. Idealna baza wypadowa do Energylandii, Zatorlandu, Inwałdu, Pszczyny i w Beskidy. Zarezerwuj nocleg!" />
      </Helmet>

      <Hero 
        title="Atrakcje & Okolica" 
        subtitle="Oświęcim jako idealna baza wypadowa do parków rozrywki i na południe Polski" 
        isHome={false} 
      />

      <section className="py-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-6">Główne punkty w okolicy</h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Odpoczywając w naszych nowoczesnych apartamentach nad rzeką, omijasz turystyczny zgiełk, zachowując jednocześnie dostęp do absolutnie najlepszych atrakcji regionu zaledwie kilka minut drogi samochodem lub na piechotę.
            </p>
          </div>

          {/* Main Attractions with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {mainAttractions.map(attr => (
              <div 
                key={attr.id} 
                className={`bg-white border shadow-sm group overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  attr.highlight ? 'border-accent ring-1 ring-accent' : 'border-gray-100'
                }`}
              >
                <div className="relative h-60 overflow-hidden bg-gray-200">
                  <img src={`/assets/images/${attr.img}`} alt={attr.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
                  <div className={`absolute top-4 right-4 backdrop-blur-md px-4 py-1 text-xs font-bold uppercase tracking-widest border ${
                    attr.highlight ? 'bg-accent/90 text-white border-accent' : 'bg-background/90 text-foreground border-gray-200'
                  }`}>
                    {attr.distance}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif text-foreground mb-4">{attr.name}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {attr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Day Trips Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto pt-12 border-t border-gray-200">
            <h2 className="text-4xl font-serif text-foreground mb-6">Więcej niż myślisz (Wycieczki 1-dniowe)</h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Planujesz dłuższy pobyt? Nasza lokalizacja na styku Śląska i Małopolski sprawia, że Oświęcim to genialny punkt startowy na szybkie, rodzinne wypady. Poniższe atrakcje znajdują się w promieniu krótkiej podróży samochodem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.map(trip => (
              <div key={trip.id} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-accent/30 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {trip.category}
                  </span>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {trip.distance}
                  </span>
                </div>
                <h3 className="text-lg font-serif text-foreground mb-3">{trip.name}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {trip.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Attractions;
