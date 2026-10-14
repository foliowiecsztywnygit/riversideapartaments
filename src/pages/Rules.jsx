import React from 'react';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet-async';

const Rules = () => {
  return (
    <div>
      <Helmet>
        <title>Regulamin i Zasady Pobytu | River Side Apartments Oświęcim</title>
        <meta 
          name="description" 
          content="Zasady pobytu w River Side Apartments w Oświęcimiu. Elastyczny check-in od 15:00 bez limitu godziny, check-out do 10:00, dzieci do lat 3 bezpłatnie, zwierzęta za dopłatą." 
        />
      </Helmet>

      <Hero 
        title="Regulamin i Zasady" 
        subtitle="Dla komfortu i bezpieczeństwa naszych gości" 
        isHome={false} 
      />

      <section className="py-32 px-4 max-w-4xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-foreground mb-4">Godziny i Czas Pobytu</h2>
          <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="flex-1">
              <span className="block text-4xl font-serif text-accent mb-2">od 15:00</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Bezobsługowe Zameldowanie</span>
              <p className="text-sm text-gray-600 mt-4">
                Dzięki bezpiecznym skrytkom na kod, zameldowanie jest w pełni bezkontaktowe i elastyczne – nie ma godziny granicznej, możesz przyjechać o dowolnej porze po 15:00.
              </p>
            </div>
            <div className="hidden md:block w-px h-24 bg-gray-200"></div>
            <div className="flex-1">
              <span className="block text-4xl font-serif text-accent mb-2">do 10:00</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Wymeldowanie</span>
              <p className="text-sm text-gray-600 mt-4">
                Wymeldowanie odbywa się do godziny 10:00. Przed wyjazdem prosimy o pozostawienie klucza w skrytce.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          
          <div>
            <h3 className="text-2xl font-serif text-foreground mb-4 border-b border-gray-200 pb-2">Pobyt dzieci</h3>
            <p className="text-gray-600 font-light mb-4">
              River Side Apartments to przestrzeń przyjazna całym rodzinom.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside ml-2">
              <li><strong>Dzieci do lat 3:</strong> Pobyt bezpłatny! Łóżeczko dziecięce udostępniamy bezpłatnie na życzenie (w zależności od dostępności).</li>
              <li><strong>Dzieci powyżej 3 roku życia i dorośli:</strong> Objęci standardową opłatą rezerwacyjną.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-foreground mb-4 border-b border-gray-200 pb-2">Pobyt ze zwierzętami</h3>
            <p className="text-gray-600 font-light mb-4">
              Jesteśmy obiektem przyjaznym czworonogom – rozumiemy, że zwierzaki to część rodziny!
            </p>
            <p className="text-sm text-gray-500 bg-[#EBE7DF] p-4 rounded-md">
              <strong>Zwierzęta domowe:</strong> Mile widziane za dodatkową opłatą. Prosimy o informację podczas dokonywania rezerwacji.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-foreground mb-4 border-b border-gray-200 pb-2">Parking i Udogodnienia</h3>
            <p className="text-gray-600 font-light mb-2">
              Bezpośrednio obok obiektu dostępny jest miejski parking podziemny. Dodatkowo apartament typu Premium posiada dedykowane, prywatne miejsce w garażu podziemnym.
            </p>
            <p className="text-sm text-gray-500">
              W budynku znajduje się winda, a dla miłośników aktywnego wypoczynku na życzenie dostępna jest zamykana rowerownia.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-foreground mb-4 border-b border-gray-200 pb-2">Cisza nocna i Zasady domowe</h3>
            <p className="text-gray-600 font-light">
              Dla wspólnego komfortu w godzinach 22:00 – 06:00 obowiązuje cisza nocna. We wszystkich wnętrzach obowiązuje bezwzględny zakaz palenia.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Rules;
