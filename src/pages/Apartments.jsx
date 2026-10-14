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
                <img src="/assets/images/IMG_3830-HDR-Edytuj.jpg" alt="Kuchnia" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Funkcjonalne Aneksy Kuchenne</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Wszystkie apartamenty posiadają własne aneksy kuchenne lub dedykowane części jadalniane, w których można samodzielnie przygotować ulubione posiłki.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Płyta indukcyjna, lodówka, zamrażalnik</li>
                  <li>✓ Niezbędne naczynia, sztućce, garnki i patelnie</li>
                  <li>✓ Czajnik elektryczny oraz zestaw powitalny (kawa, herbata)</li>
                  <li>✓ Część jadalniana ze stołem i krzesłami</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Strefa wypoczynkowa */}
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3754-Edytuj.jpg" alt="Salon" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Strefa Wypoczynkowa</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Nowocześnie zaaranżowane salony z wygodnymi sofami i kącikiem wypoczynkowym tworzą idealne warunki do wieczornego relaksu.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Telewizory Smart TV z płaskim ekranem</li>
                  <li>✓ Szybki, bezpłatny światłowodowy internet Wi-Fi</li>
                  <li>✓ Rozkładane sofy z funkcją spania codziennego</li>
                  <li>✓ Designerskie oświetlenie i przytulna atmosfera</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 - Łazienki z pralką */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <img src="/assets/images/IMG_3735.jpg" alt="Łazienka z pralką" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-serif text-foreground mb-6">Nowoczesne Łazienki z Pralką</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Wszystkie nasze apartamenty posiadają nowoczesne łazienki wyposażone w <strong>pralkę</strong>, co stanowi ogromną wygodę przy dłuższych pobytach i wyjazdach z dziećmi.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Pralka we wszystkich apartamentach</li>
                  <li>✓ Przestronne kabiny prysznicowe typu walk-in</li>
                  <li>✓ Zestaw świeżych ręczników i suszarka do włosów</li>
                  <li>✓ Bezpłatny zestaw kosmetyków hotelowych</li>
                </ul>
              </div>
            </div>

            {/* Feature 5 - Apartament Premium 6-osobowy */}
            <div className="flex flex-col md:flex-row items-center gap-16 bg-[#faf8f5] p-8 md:p-12 rounded-2xl border border-[#ece4d8]">
              <div className="flex-1">
                <img src="/assets/images/IMG_3752.jpg" alt="Apartament Premium 6-osobowy" className="w-full h-[400px] object-cover shadow-xl rounded-xl" />
              </div>
              <div className="flex-1">
                <span className="text-xs uppercase tracking-widest font-bold text-accent mb-2 block">Standard Najwyższy</span>
                <h3 className="text-3xl font-serif text-foreground mb-4">Apartament 6-osobowy Premium</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Największy i najbardziej ekskluzywny apartament w obiekcie, zaprojektowany z myślą o większych rodzinach lub grupach przyjaciół. Tylko ten apartament ma zagwarantowane <strong>prywatne, przynależne miejsce w parkingu podziemnym</strong>.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>✓ Przeznaczony dla maksymalnie 6 osób</li>
                  <li>✓ Dedykowane miejsce parkingowe w garażu podziemnym budynku</li>
                  <li>✓ Dwie niezależne strefy sypialne i przestronny salon</li>
                  <li>✓ Bezpośredni dostęp windą</li>
                </ul>
                <Link to="/rezerwacja" className="inline-block bg-accent hover:bg-[#b88c45] text-white px-8 py-3 text-xs font-semibold tracking-widest uppercase transition-colors">
                  Sprawdź dostępność
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Apartments;
