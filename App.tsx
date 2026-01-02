
import React, { useState, useEffect } from 'react';
import { LOGO_URL, ESTABLISHMENT_INFO } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-10 pb-16 px-5 md:px-6">
      
      {/* OVERLAY DO CARDÁPIO (IFRAME) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[300] bg-white animate-reveal flex flex-col">
          {/* Barra de Topo do Cardápio - Versão Minimalista com cor unificada */}
          <div className="bg-[#fff5ed] px-4 py-3 flex items-center justify-start border-b border-black/5">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#232B35] text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest active:scale-95 transition-all shadow-md"
            >
              Voltar
            </button>
          </div>
          
          {/* O Iframe em si */}
          <iframe 
            src={ESTABLISHMENT_INFO.orderUrl} 
            className="flex-1 w-full h-full border-none"
            title="Cardápio Digital"
            allow="geolocation"
          />
        </div>
      )}

      {/* HEADER: IDENTITY */}
      <header className={`w-full max-w-2xl flex flex-col items-center mb-10 md:mb-20 animate-reveal ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative mb-12 md:mb-16 group">
          {/* Aura de fundo da logo (suavizada) */}
          <div className="absolute inset-[-15%] bg-white rounded-full opacity-20 blur-[50px]"></div>
          
          {/* Container da Logo */}
          <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] p-2 md:p-4 bg-white/10 backdrop-blur-2xl rounded-full shadow-xl ring-2 ring-white/20 flex items-center justify-center overflow-hidden transition-all duration-700 hover:scale-105">
            <img 
              src={LOGO_URL} 
              alt="Logo Ventura" 
              className="w-full h-full object-cover rounded-full relative z-10"
            />
            {/* EFEITO DE RAIO DE SOL */}
            <div className="sunbeam"></div>
          </div>
        </div>

        <div className="text-center flex flex-col items-center max-w-lg px-2">
          <h1 className="font-serif text-7xl md:text-9xl text-[#111827] tracking-tighter leading-none text-center drop-shadow-sm">
            Ventura
          </h1>
          
          <span className="font-montserrat text-lg md:text-2xl font-black uppercase tracking-[0.3em] text-[#F65D94] mt-1 text-center pl-[0.3em]">
            Marmitaria
          </span>
          
          <p className="text-[#111827]/40 uppercase tracking-[0.4em] text-[10px] md:text-[12px] font-bold mt-8 md:mt-10 text-center pl-[0.4em] leading-relaxed max-w-xs">
            {ESTABLISHMENT_INFO.description}
          </p>
        </div>
      </header>

      {/* THE 4 MASTER BLOCKS */}
      <main className={`w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 justify-center transition-opacity duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* BLOCK 1: THE MENU */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="aspect-square group relative flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] p-4 transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] active:scale-95 animate-reveal delay-1"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-3 text-white transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <div className="flex flex-col items-center space-y-1 relative z-10 px-1">
            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.15em] text-white">Cardápio</span>
            <span className="text-[9px] md:text-[10px] font-medium text-white/40 leading-tight">Pedido Online</span>
          </div>
        </button>

        {/* BLOCK 2: WHATSAPP */}
        <a 
          href={ESTABLISHMENT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] p-4 transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] active:scale-95 animate-reveal delay-2"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-3 text-white transform group-hover:scale-125 group-hover:rotate-[12deg] transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.883 1.027 4.012 1.569 6.182 1.569h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <div className="flex flex-col items-center space-y-1 relative z-10 px-1">
            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.15em] text-white">WhatsApp</span>
            <span className="text-[9px] md:text-[10px] font-medium text-white/40 leading-tight">Falar Conosco</span>
          </div>
        </a>

        {/* BLOCK 3: INSTAGRAM */}
        <a 
          href={ESTABLISHMENT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] p-4 transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] active:scale-95 animate-reveal delay-3"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-3 text-white transform group-hover:rotate-[20deg] group-hover:scale-110 transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          <div className="flex flex-col items-center space-y-1 relative z-10 px-1">
            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.15em] text-white">Instagram</span>
            <span className="text-[9px] md:text-[10px] font-medium text-white/40 leading-tight">Siga a Gente</span>
          </div>
        </a>

        {/* BLOCK 4: MAPS */}
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ESTABLISHMENT_INFO.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] p-4 transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] active:scale-95 animate-reveal delay-4"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-3 text-white transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div className="flex flex-col items-center space-y-1 relative z-10 px-1">
            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.15em] text-white">Endereço</span>
            <span className="text-[9px] md:text-[10px] font-medium text-white/40 leading-tight">Como Chegar</span>
          </div>
        </a>

      </main>

      {/* FOOTER */}
      <footer className={`mt-20 md:mt-28 flex flex-col items-center gap-10 animate-reveal delay-4 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-16 h-[2px] bg-slate-900/10 rounded-full"></div>
          <a href="https://www.gorinsolucoes.com.br" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group pb-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-900/10 mb-2">Desenvolvido por</span>
            <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.4em] text-slate-900/40 group-hover:text-slate-900 transition-colors">Gorin Soluções</span>
          </a>
        </div>
      </footer>

    </div>
  );
};

export default App;
