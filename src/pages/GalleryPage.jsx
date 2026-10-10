import React, { useState } from 'react';
import Hero from '../components/Hero';

const GalleryPage = () => {
  const [filter, setFilter] = useState('wszystkie');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    { src: '/assets/images/IMG_3735.jpg', category: 'wnetrza', alt: 'River Side Apartments - Apartament' },
    { src: '/assets/images/IMG_3746.jpg', category: 'wnetrza', alt: 'River Side Apartments - Wnętrze' },
    { src: '/assets/images/IMG_3754-Edytuj.jpg', category: 'wnetrza', alt: 'River Side Apartments - Salon' },
    { src: '/assets/images/IMG_3785-HDR-Edytuj.jpg', category: 'wnetrza', alt: 'River Side Apartments - Pokój' },
    { src: '/assets/images/IMG_3809-Edytuj.jpg', category: 'wnetrza', alt: 'River Side Apartments - Sypialnia' },
    { src: '/assets/images/IMG_3830-HDR-Edytuj.jpg', category: 'wnetrza', alt: 'River Side Apartments - Aneks' },
    { src: '/assets/images/bulwary.jpg', category: 'otoczenie', alt: 'Bulwary nad Sołą' },
    { src: '/assets/images/bulwary1.jpeg', category: 'otoczenie', alt: 'Okolica' },
    { src: '/assets/images/bulwary2.jpeg', category: 'otoczenie', alt: 'Rzeka Soła' }
  ];

  const filteredImages = filter === 'wszystkie' ? images : images.filter(img => img.category === filter);

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
      <Hero 
        title="Galeria" 
        subtitle="Zobacz River Side Apartments na zdjęciach" 
        isHome={false} 
      />

      <section className="py-32 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'wszystkie', label: 'Wszystkie' },
              { id: 'wnetrza', label: 'Wnętrza' },
              { id: 'otoczenie', label: 'Otoczenie' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 border ${
                  filter === cat.id 
                    ? 'bg-accent border-accent text-white' 
                    : 'bg-transparent border-gray-300 text-foreground hover:border-accent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((img, index) => (
              <div 
                key={`${img.src}-${index}`} 
                className="relative aspect-[4/3] overflow-hidden group bg-gray-200 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent p-2 z-[110] transition-colors"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <button 
            className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent p-2 sm:p-4 z-[110] transition-colors"
            onClick={prevImage}
          >
            <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <img 
            src={filteredImages[lightboxIndex].src} 
            alt={filteredImages[lightboxIndex].alt} 
            className="max-h-full max-w-full object-contain pointer-events-none select-none"
          />
          
          <button 
            className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent p-2 sm:p-4 z-[110] transition-colors"
            onClick={nextImage}
          >
            <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm font-medium">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
