import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/assets/images/logo.png" 
              alt="River Side Apartments" 
              className="h-40 w-auto mb-6 mx-auto md:mx-0 opacity-90 logo-filter transform scale-150 origin-center md:origin-left object-contain hidden" 
            />
            <h2 className="text-2xl font-serif text-foreground mb-4">River Side<br/>Apartments</h2>
            <p className="text-gray-600 text-sm font-light leading-loose max-w-sm mx-auto md:mx-0">
              Bulwary 1<br />
              32-600 Oświęcim
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p className="text-accent font-medium"><span className="text-foreground mr-2">📱</span>+48 793 942 793</p>
              <p className="text-accent font-medium"><span className="text-foreground mr-2">✉</span>riversideapartmentsosw@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-serif mb-6 text-foreground">Na skróty</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-accent transition-colors">Strona Główna</Link></li>
              <li><Link to="/domki" className="hover:text-accent transition-colors">Apartamenty</Link></li>
              <li><Link to="/o-nas" className="hover:text-accent transition-colors">O nas</Link></li>
              <li><Link to="/galeria" className="hover:text-accent transition-colors">Galeria</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-serif mb-6 text-foreground">Informacje</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/atrakcje" className="hover:text-accent transition-colors">Atrakcje</Link></li>
              <li><Link to="/regulamin" className="hover:text-accent transition-colors">Regulamin</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-[#E5E0D8] text-center text-sm text-gray-500">
          Wykonanie i System: <a href="https://brosystems.pl" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">brosystems.pl</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
