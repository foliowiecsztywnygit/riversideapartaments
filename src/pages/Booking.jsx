import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { format, parseISO, isBefore } from 'date-fns';
import { pl } from 'date-fns/locale';
import SearchBar from '../components/SearchBar';
import Calendar from '../components/Calendar';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const startParam = searchParams.get('start');
  const endParam = searchParams.get('end');
  const guestsParam = searchParams.get('guests');

  const [availableCabins, setAvailableCabins] = useState([]);
  const [fullyBookedDates, setFullyBookedDates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [childrenUnder3, setChildrenUnder3] = useState('0');
  const [childrenOver3, setChildrenOver3] = useState('0');
  const [message, setMessage] = useState('');
  const [selectedCabin, setSelectedCabin] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const navigate = useNavigate();
  const [selectionPhase, setSelectionPhase] = useState('start');
  const [tempStart, setTempStart] = useState(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        // Fetch all cabins
        const cabinsRes = await fetch(`${API_URL}/api/cabins`);
        const cabins = await cabinsRes.json();

        // Fetch blocks
        const blocksRes = await fetch(`${API_URL}/api/availability`);
        const blocks = await blocksRes.json();

        // Calculate fully booked dates for general calendar
        const cabinCount = cabins.length;
        const blockCountsByDate = {};
        blocks.forEach(b => {
          const d = b.start_date;
          blockCountsByDate[d] = (blockCountsByDate[d] || 0) + 1;
        });
        
        const fullyBooked = Object.keys(blockCountsByDate).filter(date => blockCountsByDate[date] >= cabinCount);
        setFullyBookedDates(fullyBooked);

        if (!startParam || !endParam) {
           setAvailableCabins(cabins); // show all if no dates
           setLoading(false);
           return;
        }

        // Filter available cabins
        const available = cabins.filter(cabin => {
          const cabinBlocks = blocks.filter(b => b.cabin_id === cabin.id);
          const isBlocked = cabinBlocks.some(block => {
            return (
              (startParam <= block.end_date && startParam >= block.start_date) ||
              (endParam <= block.end_date && endParam >= block.start_date) ||
              (startParam <= block.start_date && endParam >= block.end_date)
            );
          });
          return !isBlocked;
        });

        setAvailableCabins(available);
      } catch (err) {
        console.error("Failed to fetch availability", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [startParam, endParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCabin) {
      alert("Proszę wybrać domek");
      return;
    }
    
    setSubmitStatus('sending');
    try {
      const res = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cabin_id: selectedCabin,
          start_date: startParam,
          end_date: endParam,
          guest_name: guestName,
          guest_email: guestEmail,
          guest_phone: guestPhone,
          guest_count: guestCount,
          children_under_3: childrenUnder3,
          children_over_3: childrenOver3,
          message: message
        })
      });
      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  const displayDate = (isoStr) => {
    if (!isoStr) return '';
    return format(parseISO(isoStr), 'dd MMMM yyyy', { locale: pl });
  };

  const handleCalendarClick = (day) => {
    if (selectionPhase === 'start') {
      setTempStart(day);
      setSelectionPhase('end');
    } else {
      if (isBefore(day, tempStart) || day.getTime() === tempStart.getTime()) {
         setTempStart(day);
      } else {
         const startStr = format(tempStart, 'yyyy-MM-dd');
         const endStr = format(day, 'yyyy-MM-dd');
         navigate(`/rezerwacja?start=${startStr}&end=${endStr}&guests=2`);
         setTempStart(null);
         setSelectionPhase('start');
      }
    }
  };

  const currentSelectedDates = tempStart 
    ? [tempStart] 
    : [startParam ? parseISO(startParam) : null, endParam ? parseISO(endParam) : null].filter(Boolean);

  const cabinDetails = {
    1: { 
      name: "Apartament 3-osobowy", 
      capacity: "3 osoby",
      img: "IMG_3785-HDR-Edytuj.jpg", 
      desc: "Komfortowy apartament z podwójnym łóżkiem i rozkładaną sofą, aneksem kuchennym i łazienką z pralką.",
      parking: "Miejski parking podziemny tuż obok obiektu"
    },
    2: { 
      name: "Apartament 4-osobowy", 
      capacity: "4 osoby",
      img: "IMG_3830-HDR-Edytuj.jpg", 
      desc: "Przestronny apartament z częścią dzienną, w pełni wyposażonym aneksem kuchennym, łazienką z pralką i klimatyzacją.",
      parking: "Miejski parking podziemny tuż obok obiektu"
    },
    3: { 
      name: "Apartament 6-osobowy Premium", 
      capacity: "6 osób • Premium",
      img: "apartament-6/_DSC2907.jpg", 
      desc: "Luksusowy apartament typu Premium z dwiema sypialniami, panoramicznym salonem, jadalnią, kuchnią i dedykowanym prywatnym miejscem w garażu.",
      parking: "Dedykowane prywatne miejsce w parkingu podziemnym budynku"
    }
  };

  const selectedCabinInfo = selectedCabin ? (cabinDetails[selectedCabin] || { name: availableCabins.find(c => c.id === selectedCabin)?.name || 'Apartament' }) : null;

  return (
    <div className="min-h-screen bg-[#fdfaf5] pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <SearchBar />
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif text-foreground mb-2 text-center">Rezerwacja Apartamentu</h1>
        <p className="text-gray-500 text-center mb-8">
          {startParam && endParam ? (
            <>Twój termin: <span className="text-foreground font-medium">{displayDate(startParam)} - {displayDate(endParam)}</span> dla {guestsParam} osób.</>
          ) : (
            "Wybierz termin z kalendarza, aby sprawdzić dostępność apartamentów."
          )}
        </p>

        {/* Wellness i Sauna Quick Access Banner */}
        <div className="mb-12 bg-white rounded-2xl p-6 border border-amber-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg text-foreground font-medium">Strefa Wellness i Rezerwacja Sauny</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Prywatna sauna dla mieszkańców i gości River Side. Dostępny wygodny kalendarz rezerwacji seansów.
            </p>
          </div>
          <a 
            href="/wellness#rezerwacja-sauny" 
            className="px-5 py-2.5 bg-foreground hover:bg-accent text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            Rezerwuj Saunę →
          </a>
        </div>

        {!loading && (
          <div className="mb-16 bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-serif text-foreground mb-2 text-center">Ogólna dostępność apartamentów</h2>
            <p className="text-gray-500 text-sm text-center mb-6">Kliknij w kalendarzu, aby wybrać nowy termin pobytu (przyjazd i wyjazd).</p>
            
            <div className="flex justify-center mb-6">
              <Calendar 
                selectedDates={currentSelectedDates}
                blockedDates={fullyBookedDates}
                publicStyles={true}
                readOnly={false}
                onChange={handleCalendarClick}
                monthsCount={1}
                className="shadow-none border-none !p-0 max-w-md w-full"
              />
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200"></div>
                <span className="text-gray-600 font-medium">Brak wolnych apartamentów</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gray-50 border border-gray-200"></div>
                <span className="text-gray-600 font-medium">Dostępne</span>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <p className="text-gray-500 text-center">Sprawdzam dostępność...</p>
        ) : submitStatus === 'success' ? (
           <div className="bg-white border border-gray-200 shadow-xl p-8 rounded-xl text-center">
             <h2 className="text-2xl text-accent mb-4 font-serif">Dziękujemy!</h2>
             <p className="text-gray-600">Twoje zapytanie rezerwacyjne zostało wysłane. Skontaktujemy się z Tobą wkrótce z potwierdzeniem.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Cabins / Apartments Selection */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif text-foreground">Wybierz apartament</h2>
                <span className="text-xs text-gray-500">15 niezależnych lokali</span>
              </div>

              {availableCabins.length === 0 ? (
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-red-800">
                  Niestety w wybranym terminie nie mamy wolnych apartamentów. Spróbuj wybrać inny termin powyżej.
                </div>
              ) : (
                <div className="space-y-4">
                  {availableCabins.map(cabin => {
                    const details = cabinDetails[cabin.id] || { 
                      name: cabin.name,
                      capacity: "3-4 osoby",
                      img: "IMG_3785-HDR-Edytuj.jpg", 
                      desc: "Nowoczesny apartament z klimatyzacją, aneksem kuchennym i łazienką z pralką.",
                      parking: "Miejski parking podziemny tuż obok"
                    };
                    const isSelected = selectedCabin === cabin.id;

                    return (
                    <div 
                      key={cabin.id} 
                      onClick={() => setSelectedCabin(cabin.id)}
                      className={`p-0 rounded-xl border cursor-pointer overflow-hidden transition-all flex flex-col sm:flex-row ${
                        isSelected 
                        ? 'border-accent bg-accent/5 ring-2 ring-accent shadow-md' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
                        <img src={`/assets/images/${details.img}`} alt={details.name} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                          {details.capacity}
                        </span>
                      </div>
                      <div className="p-4 sm:w-3/5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg text-foreground font-serif font-medium">{details.name}</h3>
                            {isSelected && <span className="text-accent text-xs font-bold">✓ Wybrano</span>}
                          </div>
                          <p className="text-gray-500 text-xs font-light mb-3">{details.desc}</p>
                          <div className="mb-3 inline-block bg-gray-50 border border-gray-100 px-2 py-1 rounded text-[11px] text-gray-700">
                            Parking: {details.parking}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                          <span>Klimatyzacja • Pralka • Winda</span>
                          <a 
                            href="/wellness#rezerwacja-sauny" 
                            onClick={(e) => e.stopPropagation()} 
                            className="text-accent hover:underline font-medium"
                          >
                            + Sauna
                          </a>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              )}
            </div>

            {/* Inquiry Form */}
            <div>
              <div className="bg-white border border-gray-200 shadow-xl p-8 rounded-xl sticky top-24">
                <h2 className="text-2xl font-serif text-foreground mb-4">Wyślij zapytanie</h2>
                
                {selectedCabinInfo && (
                  <div className="mb-6 p-3 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-accent font-bold block">Wybrany wariant:</span>
                      <span className="text-sm font-serif font-medium text-foreground">{selectedCabinInfo.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{startParam && endParam ? `${displayDate(startParam)} - ${displayDate(endParam)}` : 'Wybierz termin'}</span>
                  </div>
                )}

                {/* Mobile SMS Quick Action */}
                <div className="block md:hidden">
                   <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                     Jesteś na smartfonie? Najszybsza rezerwacja odbywa się przez SMS. Przygotowaliśmy dla Ciebie gotową wiadomość z terminem!
                   </p>
                   <a 
                     href={`sms:+48793942793?body=${encodeURIComponent(`Dzień dobry, chciał(a)bym zarezerwować ${selectedCabinInfo ? selectedCabinInfo.name : 'apartament w River Side'} w terminie od ${displayDate(startParam)} do ${displayDate(endParam)} dla ${guestCount} osób (w tym ${childrenUnder3} dzieci do 3 lat, ${childrenOver3} dzieci pow. 3 lat). Czy termin jest dostępny?`)}`}
                     className={`w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-colors text-sm uppercase tracking-widest ${!selectedCabin ? 'opacity-50 pointer-events-none' : ''}`}
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                     Wyślij SMS z zapytaniem
                   </a>
                   {!selectedCabin && <p className="text-xs text-red-500 mt-4 text-center">Wybierz apartament z listy, aby wysłać zapytanie.</p>}
                </div>

                {/* Desktop Form */}
                <form onSubmit={handleSubmit} className="hidden md:block space-y-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Imię i nazwisko</label>
                    <input required type="text" value={guestName} onChange={e => setGuestName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">E-mail</label>
                    <input required type="email" value={guestEmail} onChange={e => setGuestEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-accent" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Telefon</label>
                    <input required type="tel" value={guestPhone} onChange={e => setGuestPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-accent" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Liczba osób</label>
                      <input required type="number" min="1" max="6" value={guestCount} onChange={e => setGuestCount(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">
                        Dzieci do 3 lat
                        <span className="block text-[10px] text-accent font-semibold">GRATIS</span>
                      </label>
                      <input required type="number" min="0" value={childrenUnder3} onChange={e => setChildrenUnder3(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-sm mb-1">Dzieci pow. 3 lat</label>
                      <input required type="number" min="0" value={childrenOver3} onChange={e => setChildrenOver3(e.target.value)} className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-accent" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-sm mb-1">Wiadomość / Życzenia (np. rowerownia, pobyt ze zwierzęciem)</label>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} placeholder="Dodatkowe pytania lub życzenia..." className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:border-accent" />
                  </div>
                  <button 
                    disabled={!selectedCabin || submitStatus === 'sending'}
                    type="submit" 
                    className="w-full bg-accent hover:bg-[#b88c45] disabled:opacity-50 text-white font-bold py-4 rounded-lg transition-colors mt-4 text-sm uppercase tracking-widest cursor-pointer"
                  >
                    {submitStatus === 'sending' ? 'Wysyłanie...' : 'Wyślij zapytanie o rezerwację'}
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    Bezobsługowy check-in od 15:00 (skrytki na kod) • Check-out do 10:00
                  </p>
                </form>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
