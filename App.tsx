
import React from 'react';
import { LOGO_URL, ESTABLISHMENT_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center pt-8 pb-16 px-5 md:px-6">
      
      {/* HEADER: AURA & IDENTITY */}
      <header className="w-full max-w-2xl flex flex-col items-center mb-8 md:mb-16 animate-reveal">
        <div className="relative mb-10 md:mb-14 group">
          {/* Luminous Aura */}
          <div className="absolute inset-[-15%] bg-white rounded-full opacity-30 group-hover:opacity-50 transition-all duration-1000 blur-[60px] md:blur-[80px]"></div>
          
          {/* Logo Container - Optimized size for mobile-first visibility */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 p-2.5 md:p-3 bg-white/10 backdrop-blur-2xl rounded-full shadow-2xl ring-1 ring-white/20 transition-all duration-700 hover:scale-[1.02] flex items-center justify-center overflow-hidden">
            <img 
              src={LOGO_URL} 
              alt="Logo Ventura" 
              className="w-full h-full object-cover rounded-full relative z-10"
            />
            <div className="absolute inset-0 z-20 shimmer-effect"></div>
          </div>
        </div>

        {/* Centralized Brand Block */}
        <div className="text-center flex flex-col items-center max-w-lg px-2">
          <h1 className="font-serif text-6xl md:text-8xl text-[#111827] tracking-tight leading-none text-center">
            Ventura
          </h1>
          
          <span className="font-montserrat text-base md:text-xl font-bold uppercase tracking-[0.25em] text-[#F65D94] mt-2 text-center pl-[0.25em]">
            Marmitaria
          </span>
          
          <p className="text-[#111827]/40 uppercase tracking-[0.3em] text-[9px] md:text-[11px] font-bold mt-6 md:mt-8 text-center pl-[0.3em] leading-relaxed">
            {ESTABLISHMENT_INFO.description}
          </p>
        </div>
      </header>

      {/* THE 4 MASTER BLOCKS - Standardized & Animated */}
      <main className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-center">
        
        {/* BLOCK 1: THE MENU - Icon Bounces */}
        <a 
          href={ESTABLISHMENT_INFO.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group relative flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2rem] md:rounded-[2.5rem] shadow-[0_15px_30px_-12px_rgba(0,0,0,0.3)] p-4 transition-all duration-500 hover:scale-[1.05] hover:ring-2 hover:ring-white/20 active:scale-95 animate-reveal delay-1"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2.5 md:mb-3 text-white transform group-hover:-translate-y-3 group-hover:scale-110 transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <div className="flex flex-col items-center space-y-0.5 md:space-y-1 relative z-10 px-1">
            <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-white">Cardápio</span>
            <span className="text-[8px] md:text-[9px] font-medium text-white/50 leading-tight">Fazer pedido online</span>
          </div>
        </a>

        {/* BLOCK 2: WHATSAPP - Icon Pulses and Tilts */}
        <a 
          href={ESTABLISHMENT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2rem] md:rounded-[2.5rem] shadow-[0_15px_30px_-12px_rgba(0,0,0,0.3)] p-4 transition-all duration-500 hover:scale-[1.05] hover:ring-2 hover:ring-white/20 active:scale-95 animate-reveal delay-2"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2.5 md:mb-3 text-white transform group-hover:scale-125 group-hover:rotate-[10deg] transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="overflow-visible">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.883 1.027 4.012 1.569 6.182 1.569h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <div className="flex flex-col items-center space-y-0.5 md:space-y-1 relative z-10 px-1">
            <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-white">WhatsApp</span>
            <span className="text-[8px] md:text-[9px] font-medium text-white/50 leading-tight">Chamar no WhatsApp</span>
          </div>
        </a>

        {/* BLOCK 3: INSTAGRAM - Icon Wiggles/Rotates */}
        <a 
          href={ESTABLISHMENT_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2rem] md:rounded-[2.5rem] shadow-[0_15px_30px_-12px_rgba(0,0,0,0.3)] p-4 transition-all duration-500 hover:scale-[1.05] hover:ring-2 hover:ring-white/20 active:scale-95 animate-reveal delay-3"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2.5 md:mb-3 text-white transform group-hover:rotate-[25deg] group-hover:scale-110 transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          <div className="flex flex-col items-center space-y-0.5 md:space-y-1 relative z-10 px-1">
            <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-white">Instagram</span>
            <span className="text-[8px] md:text-[9px] font-medium text-white/50 leading-tight">Nosso dia a dia</span>
          </div>
        </a>

        {/* BLOCK 4: MAPS - Icon Floats/Jumps */}
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ESTABLISHMENT_INFO.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] card-grain rounded-[2rem] md:rounded-[2.5rem] shadow-[0_15px_30px_-12px_rgba(0,0,0,0.3)] p-4 transition-all duration-500 hover:scale-[1.05] hover:ring-2 hover:ring-white/20 active:scale-95 animate-reveal delay-4"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2.5 md:mb-3 text-white transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="overflow-visible"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div className="flex flex-col items-center space-y-0.5 md:space-y-1 relative z-10 px-1">
            <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] text-white">Endereço</span>
            <span className="text-[8px] md:text-[9px] font-medium text-white/50 leading-tight">Como chegar</span>
          </div>
        </a>

      </main>

      {/* FOOTER: THE SIGNATURE */}
      <footer className="mt-16 md:mt-20 flex flex-col items-center gap-8 animate-reveal delay-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-10 h-[1px] bg-slate-900/10 rounded-full"></div>
          <a 
            href="https://www.gorinsolucoes.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center group pb-4"
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-900/30 group-hover:text-slate-900/50 transition-colors">
              Site em desenvolvimento por
            </span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-900/60 group-hover:text-slate-900 transition-all">
              Gorin Soluções
            </span>
          </a>
        </div>
      </footer>

    </div>
  );
};

export default App;
