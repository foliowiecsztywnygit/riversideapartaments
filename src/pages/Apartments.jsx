import React from 'react';
import Hero from '../components/Hero';

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
              Zadbaliśmy o to, aby nasze wnętrza były nowoczesne, wygodne i w pełni wyposażone. Oferujemy różne opcje zakwaterowania dopasowane do potrzeb osób podróżujących solo, w parach oraz małych grup.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3809-Edytuj.jpg" alt="Sypialnia" className="w-full h-[400px] object-cover shadow-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Komfortowe Miejsca do Spania</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  W każdym z apartamentów przygotowaliśmy komfortowe łóżka z wygodnymi materacami, które pozwolą zregenerować siły. W apartamentach znajdują się również miejsca na przechowywanie bagażu.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Podwójne i pojedyncze łóżka</li>
                  <li>• Szafy na garderobę</li>
                  <li>• Świeża, wysokiej jakości pościel</li>
                  <li>• Klimatyzacja w sypialniach/salonach</li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3830-HDR-Edytuj.jpg" alt="Kuchnia" className="w-full h-[400px] object-cover shadow-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Aneksy Kuchenne</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Większość apartamentów posiada własne aneksy kuchenne lub dedykowane części jadalniane, w których można samodzielnie przygotować posiłki o dowolnej porze.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Płyta grzewcza, piekarnik, lodówka</li>
                  <li>• Niezbędne naczynia, sztućce, garnki i patelnie</li>
                  <li>• Czajnik elektryczny</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3754-Edytuj.jpg" alt="Salon" className="w-full h-[400px] object-cover shadow-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Część Wypoczynkowa</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Apartamenty o podwyższonym standardzie wyposażone są w specjalne strefy wypoczynkowe, idealne na relaks po dniu pełnym zwiedzania Oświęcimia i okolic.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Telewizory z płaskim ekranem</li>
                  <li>• Szybki i bezpłatny internet Wi-Fi</li>
                  <li>• Zestawy do parzenia kawy i herbaty</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3735.jpg" alt="Łazienka" className="w-full h-[400px] object-cover shadow-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Nowoczesne Łazienki</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Do Państwa dyspozycji oddajemy nowoczesne łazienki utrzymane w nienagannej czystości. Niektóre apartamenty wyposażone są dodatkowo w pralkę, która może okazać się niezwykle przydatna podczas dłuższych pobytów.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Przestronne kabiny prysznicowe</li>
                  <li>• Bezpłatny zestaw kosmetyków</li>
                  <li>• Świeże ręczniki i suszarka do włosów</li>
                  <li>• Wybrane apartamenty z pralką</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apartments;
