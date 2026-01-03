import React, { useState, useEffect } from 'react';
import { LOGO_URL, ESTABLISHMENT_INFO } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-10 pb-16 px-5 md:px-6">
      
      {/* OVERLAY DO CARDÁPIO - Renderizado por cima de tudo quando aberto */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[1000] bg-[#fffaf7] flex flex-col animate-reveal">
          <div className="bg-[#fff5ed] px-4 py-3 flex items-center justify-start border-b border-black/5 safe-top">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#232B35] text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest active:scale-95 transition-all shadow-md"
            >
              Voltar
            </button>
          </div>
          <iframe 
            src={ESTABLISHMENT_INFO.orderUrl} 
            className="flex-1 w-full h-full border-none"
            title="Cardápio Digital"
            allow="geolocation"
          />
        </div>
      )}

      {/* CONTEÚDO PRINCIPAL - Só existe no DOM se o cardápio estiver fechado */}
      {!isMenuOpen && (
        <>
          {/* HEADER */}
          <header className="w-full max-w-2xl flex flex-col items-center mb-10 md:mb-16 animate-reveal">
            <div className="relative mb-8 md:mb-12 group">
              <div className="absolute inset-[-15%] bg-white rounded-full opacity-30 blur-[60px]"></div>
              <div className="relative w-48 h-48 md:w-[380px] md:h-[380px] p-2 bg-white/10 backdrop-blur-2xl rounded-full shadow-2xl ring-1 ring-white/20 flex items-center justify-center overflow-hidden transition-all duration-700 hover:scale-[1.03]">
                <img 
                  src={LOGO_URL} 
                  alt="Logo Ventura" 
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
                <div className="sunbeam"></div>
              </div>
            </div>

            <div className="text-center flex flex-col items-center max-w-lg">
              <h1 className="font-serif text-6xl md:text-8xl text-[#111827] tracking-tighter leading-none drop-shadow-sm">
                Ventura
              </h1>
              <span className="font-montserrat text-base md:text-xl font-black uppercase tracking-[0.3em] text-[#F65D94] mt-1 pl-[0.3em]">
                Marmitaria
              </span>
              <p className="text-[#111827]/50 uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-bold mt-6 md:mt-8 px-4 leading-loose max-w-xs">
                {ESTABLISHMENT_INFO.description}
              </p>
            </div>
          </header>

          {/* GRID DE BOTÕES */}
          <main className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="aspect-square group relative flex flex-col items-center justify-center text-center bg-[#232B35] rounded-[2.5rem] shadow-xl p-4 transition-all duration-500 hover:scale-[1.05] active:scale-95 animate-reveal overflow-hidden"
            >
              <div className="mb-2 text-white transform group-hover:-translate-y-1 transition-transform duration-500 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-white relative z-10">Cardápio</span>
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/50 mt-1 relative z-10">Fazer pedido</span>
            </button>

            <a 
              href={ESTABLISHMENT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] rounded-[2.5rem] shadow-xl p-4 transition-all duration-500 hover:scale-[1.05] active:scale-95 animate-reveal [animation-delay:0.1s]"
            >
              <div className="mb-2 text-white transform group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-white">WhatsApp</span>
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/50 mt-1">Fale conosco</span>
            </a>

            <a 
              href={ESTABLISHMENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] rounded-[2.5rem] shadow-xl p-4 transition-all duration-500 hover:scale-[1.05] active:scale-95 animate-reveal [animation-delay:0.2s]"
            >
              <div className="mb-2 text-white transform group-hover:rotate-12 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-white">Instagram</span>
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/50 mt-1">Siga-nos</span>
            </a>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ESTABLISHMENT_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square group flex flex-col items-center justify-center text-center bg-[#232B35] rounded-[2.5rem] shadow-xl p-4 transition-all duration-500 hover:scale-[1.05] active:scale-95 animate-reveal [animation-delay:0.3s]"
            >
              <div className="mb-2 text-white transform group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-white">Endereço</span>
              <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/50 mt-1">Como chegar</span>
            </a>
          </main>

          {/* FOOTER */}
          <footer className="mt-16 mb-8 text-center animate-reveal">
            <div className="text-[11px] text-gray-400 uppercase tracking-[0.2em] flex flex-col items-center gap-1">
              <span className="font-normal">Em desenvolvimento por</span>
              <a 
                href="https://www.gorinsolucoes.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-black hover:text-[#F65D94] transition-colors"
              >
                Gorin soluções
              </a>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;