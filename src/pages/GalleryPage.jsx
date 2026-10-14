import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet-async';

const GalleryPage = () => {
  const [filter, setFilter] = useState('wszystkie');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    // Exterior & Drone & Building
    { src: '/assets/images/3.jpg', category: 'zewnatrz', title: 'River Side Apartments odbite w rzece Sole', desc: 'Widok na budynek, rzekę Sołę, most i zamek' },
    { src: '/assets/images/1.jpg', category: 'zewnatrz', title: 'Fasada obiektu od strony mostu', desc: 'Nowoczesna architektura przy Bulwarach 1' },
    { src: '/assets/images/IMG_4021.jpg', category: 'zewnatrz', title: 'Elewacja i wejście główne', desc: 'River Side Residence przy Bulwarach' },
    { src: '/assets/images/IMG_4033.jpg', category: 'zewnatrz', title: 'Parking podziemny', desc: 'Hala garażowa w budynku' },
    { src: '/assets/images/bulwary.jpg', category: 'zewnatrz', title: 'Restauracja Bulwary', desc: 'Restauracja znajdująca się w kompleksie' },
    { src: '/assets/images/bulwary1.jpeg', category: 'zewnatrz', title: 'Kulinaria restauracji Bulwary', desc: 'Wyśmienita kuchnia na miejscu' },
    { src: '/assets/images/bulwary2.jpeg', category: 'zewnatrz', title: 'Restauracja Bulwary - dania', desc: 'Lokalne i europejskie smaki' },
    
    // Building Corridors & Common Areas
    { src: '/assets/images/IMG_3746.jpg', category: 'wnetrza', title: 'Cichobieżna winda', desc: 'Wygodny dostęp z bagażami na wszystkie piętra' },
    { src: '/assets/images/IMG_3752.jpg', category: 'wnetrza', title: 'Nowoczesny korytarz', desc: 'Beton architektoniczny i designerskie oświetlenie' },
    { src: '/assets/images/IMG_3735.jpg', category: 'wnetrza', title: 'Bezobsługowy check-in', desc: 'Elektroniczne zamki i skrytki na kod' },
    { src: '/assets/images/IMG_3739.jpg', category: 'wnetrza', title: 'Klatka schodowa', desc: 'Galeria sztuki na klatce schodowej' },
    { src: '/assets/images/IMG_3754-Edytuj.jpg', category: 'wnetrza', title: 'Strefa wejściowa do budynku', desc: 'Bezpieczne, monitorowane wejście' },

    // Living Rooms (Salony)
    { src: '/assets/images/IMG_3993-Edytuj.jpg', category: 'wnetrza', title: 'Salon w Apartamencie Premium', desc: 'Strefa wypoczynkowa z sofą i jadalnią' },
    { src: '/assets/images/IMG_3988-Edytuj.jpg', category: 'wnetrza', title: 'Jasny, przestronny salon', desc: 'Komfortowy wypoczynek przy dużym oknie' },
    { src: '/assets/images/IMG_3830-HDR-Edytuj.jpg', category: 'wnetrza', title: 'Salon z okrągłym stołem jadalnianym', desc: 'Miejsce na wspólne posiłki i relaks' },
    { src: '/assets/images/IMG_3843-Edytuj.jpg', category: 'wnetrza', title: 'Strefa dzienna z telewizorem Smart TV', desc: 'Nowoczesny design i wygoda' },
    { src: '/assets/images/IMG_3895-HDR-Edytuj.jpg', category: 'wnetrza', title: 'Fotel uszak i stolik kawowy', desc: 'Przytulny kącik do czytania i relaksu' },
    { src: '/assets/images/IMG_3931.jpg', category: 'wnetrza', title: 'Dbałość o każdy detal', desc: 'Świeże kwiaty i przytulna atmosfera' },

    // Bedrooms (Sypialnie)
    { src: '/assets/images/IMG_3785-HDR-Edytuj.jpg', category: 'wnetrza', title: 'Główna sypialnia z podwójnym łóżkiem', desc: 'Wysokiej jakości materac i świeża pościel' },
    { src: '/assets/images/IMG_3809-Edytuj.jpg', category: 'wnetrza', title: 'Sypialnia z pojemną szafą', desc: 'Miejsce na wszystkie Twoje bagaże' },

    // Kitchens (Aneksy kuchenne)
    { src: '/assets/images/IMG_3845-Edytuj.jpg', category: 'wnetrza', title: 'W pełni wyposażony aneks kuchenny', desc: 'Płyta indukcyjna, piekarnik i jadalnia' },
    { src: '/assets/images/IMG_3848.jpg', category: 'wnetrza', title: 'Część kuchenno-jadalniana', desc: 'Pełna niezależność podczas pobytu' },
    { src: '/assets/images/IMG_3851-Edytuj.jpg', category: 'wnetrza', title: 'Kuchnia ze sprzętem AGD', desc: 'Czajnik, lodówka, przybory kuchenne' },
    { src: '/assets/images/IMG_3898-Edytuj.jpg', category: 'wnetrza', title: 'Nowoczesna zabudowa kuchenna', desc: 'Białe fronty i funkcjonalny układ' },
    { src: '/assets/images/IMG_3927-Edytuj.jpg', category: 'wnetrza', title: 'Płyta grzewcza i zlew', desc: 'Czystość i przygotowanie do gotowania' },

    // Bathrooms (Łazienki z pralką)
    { src: '/assets/images/IMG_3914-Edytuj.jpg', category: 'wnetrza', title: 'Prysznic walk-in z deszczownicą', desc: 'Nowoczesna armatura i kabina szklana' },
    { src: '/assets/images/IMG_3912-Edytuj.jpg', category: 'wnetrza', title: 'Umywalka nablatowa i lustro', desc: 'Świeże ręczniki i zestaw kosmetyków' },
    { src: '/assets/images/IMG_3925-Edytuj.jpg', category: 'wnetrza', title: 'Łazienka w grafitowych płytkach', desc: 'Każdy apartament posiada własną pralkę' },
    { src: '/assets/images/IMG_3956-Edytuj.jpg', category: 'wnetrza', title: 'Hotelowe kosmetyki', desc: 'Dozowniki z delikatnym mydłem i szamponem' }
  ];

  const filteredImages = filter === 'wszystkie' 
    ? galleryItems 
    : galleryItems.filter(img => img.category === filter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div>
      <Helmet>
        <title>Galeria Zdjęć i Wideo | River Side Apartments Oświęcim</title>
        <meta 
          name="description" 
          content="Obejrzyj galerię zdjęć River Side Apartments w Oświęcimiu. Zobacz luksusowe wnętrza apartamentów, widok na rzekę Sołę, halę garażową i wideo z drona." 
        />
      </Helmet>

      <Hero 
        title="Galeria" 
        subtitle="Zobacz River Side Apartments na fotografiach i ujęciach z drona" 
        isHome={false} 
      />

      <section className="py-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { id: 'wszystkie', label: 'Wszystkie Zdjęcia' },
              { id: 'wnetrza', label: 'Wnętrza Apartamentów' },
              { id: 'zewnatrz', label: 'Z Zewnątrz i Okolica' },
              { id: 'wideo', label: 'Film z Drona (Wideo)' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg border ${
                  filter === cat.id 
                    ? 'bg-accent border-accent text-white shadow-md' 
                    : 'bg-white border-gray-200 text-foreground hover:border-accent hover:text-accent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Video Section (shown if 'wideo' or 'wszystkie') */}
          {(filter === 'wideo' || filter === 'wszystkie') && (
            <div className="mb-16 bg-[#0F1416] p-6 sm:p-10 rounded-3xl text-white shadow-2xl border border-white/10">
              <div className="max-w-3xl mb-6">
                <span className="text-accent uppercase tracking-widest text-xs font-bold block mb-2">
                  Ujęcia z lotu ptaka
                </span>
                <h3 className="text-2xl md:text-3xl font-serif">River Side Apartments z drona</h3>
                <p className="text-gray-300 text-sm font-light mt-2">
                  Zobacz spektakularne położenie naszego obiektu tuż przy Bulwarach nad rzeką Sołą, obok mostu i zamku w Oświęcimiu.
                </p>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video 
                  controls 
                  playsInline 
                  preload="metadata"
                  poster="/assets/images/3.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/video/riverside-drone.mp4" type="video/mp4" />
                  Twoja przeglądarka nie obsługuje odtwarzania wideo.
                </video>
              </div>
            </div>
          )}

          {/* Photo Grid */}
          {filter !== 'wideo' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((img, index) => (
                <div 
                  key={`${img.src}-${index}`} 
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-widest">
                      {img.category === 'wnetrza' ? 'Wnętrze' : 'Otoczenie'}
                    </span>
                    <h4 className="text-white font-serif text-sm font-medium">{img.title}</h4>
                    <p className="text-gray-300 text-xs font-light mt-0.5 line-clamp-1">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && filteredImages[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-5 right-5 text-white hover:text-accent p-2 z-[110] transition-colors"
            onClick={closeLightbox}
            aria-label="Zamknij"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          {/* Prev button */}
          <button 
            className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent p-2 sm:p-4 z-[110] transition-colors bg-black/30 rounded-full"
            onClick={prevImage}
            aria-label="Poprzednie zdjęcie"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          {/* Image & Caption */}
          <div className="flex flex-col items-center max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredImages[lightboxIndex].src} 
              alt={filteredImages[lightboxIndex].title} 
              className="max-h-[78vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
            />
            <div className="text-center mt-4">
              <h4 className="text-white font-serif text-lg">{filteredImages[lightboxIndex].title}</h4>
              <p className="text-gray-400 text-xs font-light">{filteredImages[lightboxIndex].desc}</p>
            </div>
          </div>
          
          {/* Next button */}
          <button 
            className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent p-2 sm:p-4 z-[110] transition-colors bg-black/30 rounded-full"
            onClick={nextImage}
            aria-label="Następne zdjęcie"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          {/* Index Counter */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-xs font-medium tracking-widest">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
