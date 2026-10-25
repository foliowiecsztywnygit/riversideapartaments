import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Apartments = () => {
  return (
    <div>
      <Hero 
        title="Nasze Apartamenty" 
        subtitle="Komfort i nowoczesność nad rzeką Sołą w Oświęcimiu" 
        isHome={false} 
      />

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-foreground mb-6">Wybierz Wymarzony Apartament</h2>
            <p className="text-gray-600 font-light leading-relaxed">
              Zadbaliśmy o to, aby nasze wnętrza były nowoczesne, wygodne i w pełni wyposażone. Oferujemy łącznie <strong>15 niezależnych apartamentów 3-, 4- oraz 6-osobowych</strong>. Dla najbardziej wymagających Gości przygotowaliśmy przestronny <strong>Apartament 6-osobowy Premium</strong> z prywatnym miejscem w parkingu podziemnym.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 - Miejsca do spania */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3809-Edytuj.jpg" alt="Sypialnia" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Komfortowe Miejsca do Spania</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  W każdym z apartamentów przygotowaliśmy komfortowe łóżka z wygodnymi materacami, które pozwolą zregenerować siły po dniu pełnym wrażeń.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Podwójne łóżka małżeńskie i pojedyncze</li>
                  <li>✓ Pojemne szafy na garderobę i bagaż</li>
                  <li>✓ Świeża, hipoalergiczna pościel hotelowa</li>
                  <li>✓ Klimatyzacja zapewniająca idealną temperaturę</li>
                </ul>
              </div>
            </div>

            {/* Feature 2 - Aneksy kuchenne */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3845-Edytuj.jpg" alt="Aneks kuchenny" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Funkcjonalne Aneksy Kuchenne</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Wszystkie apartamenty posiadają własne, w pełni wyposażone aneksy kuchenne oraz dedykowaną część jadalnianą, w których można wygodnie przygotować ulubione posiłki.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Płyta indukcyjna, lodówka, zamrażalnik, piekarnik</li>
                  <li>✓ Niezbędne naczynia, sztućce, garnki i patelnie</li>
                  <li>✓ Czajnik elektryczny oraz zestaw powitalny (kawa, herbata)</li>
                  <li>✓ Część jadalniana ze stołem i krzesłami</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Strefa wypoczynkowa */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3988-Edytuj.jpg" alt="Część wypoczynkowa - salon" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Strefa Wypoczynkowa (Salon)</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Nowocześnie i ze smakiem zaaranżowane salony z wygodnymi sofami, stolikami kawowymi i kącikiem do relaksu tworzą idealne warunki do wypoczynku po całym dniu.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Telewizory Smart TV z płaskim ekranem</li>
                  <li>✓ Szybki, bezpłatny światłowodowy internet Wi-Fi</li>
                  <li>✓ Rozkładane, komfortowe sofy</li>
                  <li>✓ Klimatyzacja oraz nowoczesny design z architektonicznym betonem</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 - Łazienki z pralką */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3914-Edytuj.jpg" alt="Nowoczesna łazienka" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Nowoczesne Łazienki z Pralką</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  <strong>Wszystkie nasze apartamenty wyposażone są w pralkę</strong>, co stanowi ogromną wygodę przy dłuższych pobytach biznesowych, turystycznych i rodzinnych.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Pralka w każdym apartamencie</li>
                  <li>✓ Przestronne kabiny prysznicowe typu walk-in</li>
                  <li>✓ Zestaw świeżych ręczników i suszarka do włosów</li>
                  <li>✓ Bezpłatny zestaw kosmetyków hotelowych</li>
                </ul>
              </div>
            </div>

            {/* Feature 5 - Apartament Premium 6-osobowy */}
            <div className="flex flex-col md:flex-row items-center gap-16 bg-[#faf8f5] p-8 md:p-12 rounded-2xl border border-[#ece4d8]">
              <div className="flex-1">
                <img src="/assets/images/apartament-6/_DSC2907.jpg" alt="Apartament 6-osobowy Premium" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <span className="text-xs uppercase tracking-widest font-bold text-accent mb-2 block">Standard Najwyższy • Premium</span>
                <h3 className="text-3xl font-serif text-foreground mb-4">Apartament 6-osobowy Premium</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Największy i najbardziej ekskluzywny apartament w obiekcie, zaprojektowany z myślą o rodzinach lub grupach do 6 osób. <strong>Tylko ten apartament posiada gwarantowane dedykowane prywatne miejsce w parkingu podziemnym budynku</strong>.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>✓ Przeznaczony dla maksymalnie 6 osób</li>
                  <li>✓ Przynależny prywatny parking podziemny w budynku</li>
                  <li>✓ Przestronny salon z jadalnią i w pełni wyposażonym aneksem</li>
                  <li>✓ Klimatyzacja, pralka, winda, bezobsługowy check-in</li>
                  <li>✓ Dla pozostałych apartamentów miejski parking podziemny tuż obok</li>
                </ul>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link to="/rezerwacja" className="inline-block bg-accent hover:bg-[#b88c45] text-white px-8 py-3 text-xs font-semibold tracking-widest uppercase transition-colors rounded shadow-sm">
                    Rezerwuj pobyt
                  </Link>
                  <Link to="/wellness#rezerwacja-sauny" className="inline-block bg-white hover:bg-gray-50 text-foreground border border-gray-300 px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-colors rounded">
                    Kalendarz Sauny
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Apartments;
