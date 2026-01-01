
import React, { useState, useEffect } from 'react';
import { LOGO_URL, ESTABLISHMENT_INFO } from './constants';
import AIChat from './components/AIChat';

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
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    setActiveTab(id);
  };

  return (
    <div className="relative min-h-screen">
      {/* FUTURISTIC NAV */}
      <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-[500] transition-all duration-700 w-[90%] max-w-3xl`}>
        <div className={`glass-card px-6 py-3 flex items-center justify-between border-white/40 shadow-2xl transition-all ${isScrolled ? 'scale-95 bg-white/80' : 'scale-100'}`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-200">
              <img src={LOGO_URL} alt="V" className="w-full h-full object-cover" />
            </div>
            <span className="font-black text-xs tracking-[0.3em] uppercase hidden sm:block">Ventura</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-6">
            <button onClick={() => scrollTo('menu')} className={`text-[10px] font-black uppercase tracking-widest px-3 py-2 transition-all ${activeTab === 'menu' ? 'text-orange-500' : 'text-gray-500'}`}>Cardápio</button>
            <button onClick={() => scrollTo('local')} className={`text-[10px] font-black uppercase tracking-widest px-3 py-2 transition-all ${activeTab === 'local' ? 'text-orange-500' : 'text-gray-500'}`}>Local</button>
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
        {/* HERO PORTAL */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-40">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400 rounded-full blur-[180px] animate-pulse"></div>
             <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-pink-400 rounded-full blur-[150px] animate-bounce"></div>
          </div>

          <div className="logo-container mb-12 floating relative">
             <div className="absolute inset-0 ventura-gradient-bg rounded-full blur-[100px] opacity-20 animate-pulse"></div>
             <div className="relative z-10 p-5 md:p-10 rounded-full bg-white/20 backdrop-blur-3xl border border-white/40 shadow-2xl group transition-all duration-700 hover:bg-white/30">
                <img 
                  src={LOGO_URL} 
                  alt="Marmitaria Ventura" 
                  className="logo-main w-60 h-60 md:w-[460px] md:h-[460px] rounded-full z-10 relative object-cover shadow-2xl"
                />
             </div>
          </div>

          <div className="text-center relative z-20 space-y-4">
            <h1 className="text-6xl md:text-[12rem] font-display font-black leading-[0.8] tracking-tighter text-gray-900">
              VENTURA
            </h1>
            <div className="flex items-center justify-center gap-4">
               <div className="h-[1px] w-12 bg-gray-300"></div>
               <span className="text-sm md:text-xl font-black uppercase tracking-[0.5em] ventura-gradient-text">Marmitaria</span>
               <div className="h-[1px] w-12 bg-gray-300"></div>
            </div>
            <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-xl mx-auto italic py-6">
              "Comidinha caseira com qualidade de verdade para o seu dia."
            </p>
            <div className="pt-4">
              <button 
                onClick={() => scrollTo('menu')}
                className="bg-gray-900 text-white px-12 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-orange-500 transition-all active:scale-95"
              >
                Explorar Cardápio
              </button>
            </div>
          </div>
        </section>

        {/* IMMERSIVE MODULES */}
        <section className="max-w-7xl mx-auto px-6 space-y-24 pb-40">
          
          {/* Delivery Highlight Banner */}
          <div className="mt-12 mb-16 relative z-10">
            <div className="glass-card p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-20 border-white/40 bg-white/20 relative shadow-[0_50px_150px_-40px_rgba(245,158,11,0.2)] group transition-all duration-700">
              <div className="absolute top-0 left-0 w-full h-full ventura-gradient-bg blur-[150px] opacity-5 pointer-events-none"></div>
              
              <div className="relative shrink-0 w-full md:w-auto flex justify-center">
                <div className="absolute inset-0 bg-orange-400 blur-[80px] opacity-25 scale-110"></div>
                <div className="relative z-10 w-full max-w-sm md:max-w-md transition-transform duration-700 group-hover:scale-105">
                  <div className="glass-card p-2 md:p-3 border-white/60 shadow-2xl overflow-hidden">
                    <img 
                      src="https://i.postimg.cc/3RF6CcDD/Picsart-26-01-01-20-10-24-567.png" 
                      alt="Entrega Grátis Ventura" 
                      className="w-full h-auto rounded-[1.6rem] md:rounded-[1.8rem] object-contain shadow-sm" 
                    />
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left flex-1 relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-orange-500/20 mb-8">
                   <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                   </span>
                   <span className="text-[12px] font-black uppercase tracking-[0.2em] text-orange-600">Entrega Grátis Ventura</span>
                </div>
                
                <h2 className="text-5xl md:text-8xl font-display font-black text-gray-900 leading-[0.85] mb-6 tracking-tighter">
                  ENTREGA <br className="hidden md:block" /> GRÁTIS EM <br className="hidden md:block" />
                  <span className="ventura-gradient-text italic">SAMAMBAIA</span>
                </h2>
                
                <p className="text-gray-500 font-bold text-xl md:text-3xl tracking-tight leading-relaxed">
                  Peça agora e economize no frete!
                </p>
              </div>
              
              <div className="shrink-0 hidden xl:flex items-center justify-center relative z-10">
                 <div className="w-40 h-40 rounded-full border-2 border-dashed border-orange-200 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full text-orange-400/20 fill-current p-4" viewBox="0 0 100 100">
                           <path id="circlePathBannerFix" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                           <text className="text-[7.5px] font-black uppercase tracking-[0.35em]">
                              <textPath href="#circlePathBannerFix">SAMAMBAIA • VENTURA • QUALIDADE • </textPath>
                           </text>
                        </svg>
                    </div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Module: Menu Portal */}
          <div id="menu" className="space-y-12">
             <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-5xl md:text-8xl font-display font-black leading-tight tracking-tighter text-gray-900">
                  Fazer pedidos <br/> 
                  <span className="ventura-gradient-text italic">online.</span>
                </h2>
                <div className="mt-6">
                   <p className="text-[10px] md:text-[13px] font-black uppercase tracking-[0.4em] text-gray-400 max-w-2xl mx-auto leading-relaxed">
                      Faça seu pedido em nossa plataforma e receba no conforto da sua casa
                   </p>
                </div>
             </div>

             <div className="glass-card overflow-hidden h-[900px] border-4 border-white shadow-[0_40px_100px_-20px_rgba(245,158,11,0.15)] transition-all duration-700 hover:shadow-orange-200/20">
                <iframe 
                  src="https://pedido.anota.ai/loja/marmitaria-ventura?f=ms" 
                  className="w-full h-full border-none"
                  title="Menu Interativo"
                ></iframe>
             </div>
          </div>

          {/* Module: Logistics */}
          <div id="local" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
             <div className="lg:col-span-5 glass-card p-12 flex flex-col justify-between bg-white/60">
                <div className="space-y-10">
                   <h3 className="text-4xl font-display font-bold">Onde a <br/> mágica acontece.</h3>
                   <div className="space-y-8">
                      <div className="flex gap-8 items-center group">
                         <div className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center shrink-0 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-500 group-hover:shadow-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 group-hover:text-white transition-colors"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                         </div>
                         <div className="flex-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Endereço</p>
                            <p className="font-bold text-gray-800 leading-tight text-lg">{ESTABLISHMENT_INFO.address}</p>
                         </div>
                      </div>

                      <div className="flex gap-8 items-center group">
                         <div className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center shrink-0 shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-500 group-hover:shadow-pink-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 group-hover:text-white transition-colors"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                         </div>
                         <div className="flex-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Atendimento</p>
                            <p className="font-bold text-gray-800 text-lg">Abertos hoje até as 14:00</p>
                            <p className="text-xs text-gray-400 mt-0.5 font-medium italic">Segunda a Sábado</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                <a 
                  href={ESTABLISHMENT_INFO.whatsappUrl} 
                  target="_blank" 
                  className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-green-600 transition-all mt-12 shadow-xl"
                >
                  Suporte Via WhatsApp
                </a>
             </div>
             
             <div className="lg:col-span-7 glass-card overflow-hidden h-[500px] border-white group">
                <iframe 
                  src={ESTABLISHMENT_INFO.googleMapsUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
             </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white/60 backdrop-blur-3xl border-t border-orange-100 py-24 relative overflow-hidden">
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-64 h-64 bg-pink-50 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
               <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-ventura-gradient-bg rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    <div className="glass-card p-1.5 md:p-2 rounded-full border-white/60 shadow-2xl relative transition-transform group-hover:scale-105 duration-500">
                      <img 
                        src={LOGO_URL} 
                        alt="Logo Ventura Oficial" 
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-white/40 shadow-inner object-cover" 
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                     <span className="block font-display font-black text-5xl tracking-tighter text-gray-900">VENTURA</span>
                     <span className="text-xs font-black uppercase tracking-[0.5em] ventura-gradient-text">Marmitaria</span>
                     <p className="text-gray-400 text-sm mt-4 max-w-xs font-medium italic">O sabor da verdadeira comida caseira em Samambaia Sul.</p>
                  </div>
               </div>
               
               <div className="flex gap-6">
                  <a href="https://www.instagram.com/marmitariaventura/" target="_blank" className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:shadow-orange-200 group">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href={ESTABLISHMENT_INFO.whatsappUrl} target="_blank" className="w-20 h-20 rounded-[2rem] glass-card flex items-center justify-center hover:bg-green-500 hover:text-white transition-all shadow-lg hover:shadow-green-200 group">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </a>
               </div>
            </div>
            
            <div className="mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
               <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                  <p>© 2026 Marmitaria Ventura • Todos os direitos reservados.</p>
                  <span className="hidden md:inline text-gray-200">|</span>
                  <p>Samambaia Sul, Brasília - DF</p>
               </div>
               <div className="flex items-center gap-2">
                  <span className="opacity-50">Desenvolvido por</span>
                  <a href="https://www.gorinsolucoes.com.br" target="_blank" className="text-gray-900 hover:text-orange-500 transition-all font-bold underline underline-offset-4 decoration-orange-200">Gorin Soluções</a>
               </div>
            </div>
         </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
