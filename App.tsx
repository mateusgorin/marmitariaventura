import React, { useState, useEffect } from 'react';
import { LOGO_URL, ESTABLISHMENT_INFO } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* NAVEGAÇÃO PREMIUM */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[500] transition-all duration-700 w-[90%] max-w-3xl">
        <div className={`glass-card px-6 py-3 flex items-center justify-between border-white/40 shadow-2xl transition-all ${isScrolled ? 'scale-95 bg-white/80 backdrop-blur-2xl' : 'scale-100'}`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-200">
              <img src={LOGO_URL} alt="Ventura" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-xs tracking-[0.3em] uppercase hidden sm:block">Ventura</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-6">
            <button onClick={() => scrollTo('menu')} className={`text-[10px] font-black uppercase tracking-widest px-3 py-2 transition-all ${activeTab === 'menu' ? 'text-orange-500' : 'text-gray-500 hover:text-orange-400'}`}>Cardápio</button>
            <button onClick={() => scrollTo('local')} className={`text-[10px] font-black uppercase tracking-widest px-3 py-2 transition-all ${activeTab === 'local' ? 'text-orange-500' : 'text-gray-500 hover:text-orange-400'}`}>Local</button>
            <div className="w-[1px] h-4 bg-gray-200 mx-2"></div>
            <button 
              onClick={() => scrollTo('menu')}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md hover:bg-orange-500 transition-all active:scale-95"
            >
              Pedir
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-40">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400 rounded-full blur-[180px] animate-pulse"></div>
          </div>

          <div className="logo-container mb-8 md:mb-12 floating relative">
             <div className="relative z-10 p-5 md:p-10 rounded-full bg-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl group transition-all duration-700 hover:bg-white/30">
                <img 
                  src={LOGO_URL} 
                  alt="Marmitaria Ventura Oficial" 
                  className="logo-main w-60 h-60 md:w-[460px] md:h-[460px] rounded-full z-10 relative object-cover shadow-2xl"
                />
             </div>
          </div>

          <div className="text-center relative z-20 space-y-4">
            <h1 className="text-6xl md:text-[12rem] font-display font-black leading-[0.8] tracking-tighter text-gray-900">
              VENTURA
            </h1>
            <div className="flex items-center justify-center gap-4">
               <span className="text-sm md:text-xl font-black uppercase tracking-[0.5em] ventura-gradient-text">Marmitaria</span>
            </div>
            <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-xl mx-auto italic py-4 md:py-6">
              "Comidinha caseira com qualidade de verdade para o seu dia."
            </p>
            <div className="pt-2">
              <button 
                onClick={() => scrollTo('menu')}
                className="bg-gray-900 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-orange-500 transition-all transform hover:scale-105"
              >
                Explorar Cardápio
              </button>
            </div>
          </div>
        </section>

        {/* MÓDULOS DE CONTEÚDO */}
        <section className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-24 pb-40">
          
          {/* BANNER ENTREGA */}
          <div className="mt-4 md:mt-8 mb-16 relative z-10">
            <div className="glass-card p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-20 border-white/40 bg-white/20 relative shadow-2xl group transition-all duration-500">
              <div className="relative z-10 w-full max-w-sm md:max-w-md">
                <div className="glass-card p-2 md:p-3 border-white/60 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <img 
                    src="https://i.postimg.cc/3RF6CcDD/Picsart-26-01-01-20-10-24-567.png" 
                    alt="Entrega Grátis em Samambaia" 
                    className="w-full h-auto rounded-[1.6rem] md:rounded-[1.8rem] object-contain" 
                  />
                </div>
              </div>

              <div className="text-center md:text-left flex-1 relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-orange-500/20 mb-8">
                   <span className="text-[12px] font-black uppercase tracking-[0.2em] text-orange-600 animate-pulse">Entrega Grátis Ventura</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-display font-black text-gray-900 leading-[0.85] mb-6 tracking-tighter">
                  ENTREGA <br className="hidden md:block" /> GRÁTIS EM <br className="hidden md:block" />
                  <span className="ventura-gradient-text italic">SAMAMBAIA</span>
                </h2>
                <p className="text-gray-500 font-bold text-xl md:text-3xl tracking-tight">
                  Peça agora e economize no frete!
                </p>
              </div>
            </div>
          </div>

          {/* CARDÁPIO INTEGRADO */}
          <div id="menu" className="space-y-12">
             <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-gray-900">
                  Fazer pedidos <br/> 
                  <span className="ventura-gradient-text italic">online.</span>
                </h2>
                <div className="mt-6">
                   <p className="text-[10px] md:text-[13px] font-black uppercase tracking-[0.4em] text-gray-400 max-w-2xl mx-auto leading-relaxed text-center px-4">
                      Seu pedido rápido, fácil e seguro em nossa plataforma digital
                   </p>
                </div>
             </div>

             <div className="glass-card overflow-hidden h-[900px] border-4 border-white shadow-2xl relative">
                <iframe 
                  src="https://pedido.anota.ai/loja/marmitaria-ventura?f=ms" 
                  className="w-full h-full border-none"
                  title="Cardápio Digital Marmitaria Ventura"
                ></iframe>
             </div>
          </div>

          {/* LOCALIZAÇÃO E CONTATO */}
          <div id="local" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
             <div className="lg:col-span-5 glass-card p-12 flex flex-col justify-between bg-white/60">
                <div className="space-y-10">
                   <h3 className="text-4xl font-display font-bold text-gray-900">Onde a <br/> mágica acontece.</h3>
                   <div className="space-y-8">
                      <div className="flex gap-8 items-center group">
                         <div className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center shrink-0 shadow-lg group-hover:bg-orange-500 transition-colors duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 group-hover:text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                         </div>
                         <div className="flex-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Endereço</p>
                            <p className="font-bold text-gray-800 leading-tight text-lg">{ESTABLISHMENT_INFO.address}</p>
                         </div>
                      </div>

                      <div className="flex gap-8 items-center group">
                         <div className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center shrink-0 shadow-lg group-hover:bg-pink-500 transition-colors duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 group-hover:text-white"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                         </div>
                         <div className="flex-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Atendimento</p>
                            <p className="font-bold text-gray-800 text-lg">Segunda a Sábado até as 14:00</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                <a 
                  href={ESTABLISHMENT_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-green-600 transition-all mt-12 shadow-xl"
                >
                  Suporte Via WhatsApp
                </a>
             </div>
             
             <div className="lg:col-span-7 glass-card overflow-hidden h-[500px] border-white relative group">
                <iframe 
                  src={ESTABLISHMENT_INFO.googleMapsUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                  title="Localização Ventura"
                ></iframe>
             </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-white/60 backdrop-blur-3xl border-t border-orange-100 py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
               <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="glass-card p-2 rounded-full border-white/60 shadow-2xl transform hover:rotate-6 transition-transform">
                    <img 
                      src={LOGO_URL} 
                      alt="Ventura Logo" 
                      className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover" 
                    />
                  </div>
                  <div className="text-center md:text-left">
                     <span className="block font-display font-black text-5xl tracking-tighter text-gray-900">VENTURA</span>
                     <span className="text-xs font-black uppercase tracking-[0.5em] ventura-gradient-text">Marmitaria</span>
                  </div>
               </div>
               
               <div className="flex gap-6">
                  {/* Ícone do WhatsApp adicionado aqui */}
                  <a href={ESTABLISHMENT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-lg hover:scale-110 group">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900 group-hover:text-white transition-colors">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.883 1.027 4.012 1.569 6.182 1.569h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                     </svg>
                  </a>
                  <a href="https://www.instagram.com/marmitariaventura/" target="_blank" rel="noopener noreferrer" className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:scale-110">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
               </div>
            </div>
            
            <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
               <p>© 2026 Marmitaria Ventura • Sabor e Qualidade em Samambaia.</p>
               <div className="flex items-center gap-2">
                  <span className="opacity-50">Desenvolvido por</span>
                  <a href="https://www.gorinsolucoes.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold underline underline-offset-4 decoration-orange-200 hover:text-orange-500 transition-colors">Gorin Soluções</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;