import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const checkin = searchParams.get('checkin');
    const checkout = searchParams.get('checkout');
    if (checkin && checkout) {
      setMessage(`Dzień dobry, potrzebuję noclegu w River Side Apartments pomiędzy ${checkin} a ${checkout}. Czy mają Państwo wolny termin?`);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message })
      });

      if (res.ok) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <div>
      <Hero 
        title="Kontakt" 
        subtitle="Skontaktuj się z nami i zarezerwuj pobyt" 
        isHome={false} 
      />

      <section className="py-32 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-4xl font-serif text-foreground mb-8">Jesteśmy do Twojej dyspozycji</h2>
          <p className="text-gray-600 font-light leading-relaxed mb-12">
            Z przyjemnością odpowiemy na wszystkie pytania i pomożemy dobrać apartament najbardziej odpowiadający Państwa potrzebom.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#EBE7DF] p-4 rounded-full text-accent mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Adres</h3>
                <p className="text-gray-600 font-light mt-1">
                  River Side Apartments<br/>
                  Bulwary 1<br/>
                  32-600 Oświęcim
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#EBE7DF] p-4 rounded-full text-accent mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">Telefon</h3>
                <p className="text-gray-600 font-light mt-1">
                  <a href="tel:+48793942793" className="hover:text-accent transition-colors">+48 793 942 793</a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#EBE7DF] p-4 rounded-full text-accent mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">E-mail</h3>
                <p className="text-gray-600 font-light mt-1">
                  <a href="mailto:riversideapartmentsosw@gmail.com" className="hover:text-accent transition-colors">riversideapartmentsosw@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 bg-white p-8 md:p-12 border border-gray-100 shadow-xl rounded-2xl">
          <h3 className="text-2xl font-serif text-foreground mb-6">Napisz do nas</h3>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
              Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              Wystąpił błąd podczas wysyłania wiadomości. Prosimy spróbować ponownie lub skontaktować się telefonicznie.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-gray-600 mb-2">Imię i Nazwisko</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-gray-200 px-4 py-3 rounded-lg focus:outline-hidden focus:border-accent"
                placeholder="Jan Kowalski"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-gray-600 mb-2">Adres E-mail</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-gray-200 px-4 py-3 rounded-lg focus:outline-hidden focus:border-accent"
                  placeholder="jan@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-gray-600 mb-2">Numer Telefonu</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-gray-200 px-4 py-3 rounded-lg focus:outline-hidden focus:border-accent"
                  placeholder="+48 123 456 789"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest font-semibold text-gray-600 mb-2">Treść wiadomości</label>
              <textarea 
                rows="5" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-gray-200 px-4 py-3 rounded-lg focus:outline-hidden focus:border-accent"
                placeholder="W czym możemy pomóc?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={submitStatus === 'sending'}
              className="w-full bg-accent hover:bg-[#b88c45] text-white py-4 font-semibold text-xs uppercase tracking-widest transition-colors duration-300 rounded-lg cursor-pointer disabled:opacity-50"
            >
              {submitStatus === 'sending' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;
