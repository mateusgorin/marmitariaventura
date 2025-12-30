
import React, { useState, useEffect } from 'react';
import { LOGO_URL, ESTABLISHMENT_INFO, COLORS } from './constants';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentTemp = Math.round((scrollProgress / 100) * 180);
  const PROMO_IMAGE_URL = "https://i.postimg.cc/sxrN9Jnn/Picsart-25-12-30-13-49-37-370.png";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden font-['Montserrat']">
      
      {/* NOVO TERMÔMETRO HORIZONTAL NO TOPO */}
      <div className="fixed top-0 left-0 w-full z-[200] h-12 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center px-4 md:px-10 group">
        
        {/* Tooltip Horizontal */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap border border-white/20 transform -translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
          <span className="text-[#f59e0b]">Sua marmita vai chegar</span>
          <span className="text-white">quentinha</span>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 border-x-[6px] border-x-transparent border-b-[6px] border-b-gray-900/90"></div>
        </div>

        {/* Bulbo Esquerdo */}
        <div className="relative flex-shrink-0 mr-3">
          <div className={`w-8 h-8 rounded-full border-2 border-gray-200 shadow-lg transition-all duration-700 overflow-hidden ${currentTemp > 120 ? 'scale-110' : 'scale-100'}`}
               style={{ 
                 background: `radial-gradient(circle at 30% 30%, ${currentTemp > 90 ? '#ef4444' : '#f59e0b'}, #991b1b)` 
               }}>
            <div className="absolute top-1 left-1.5 w-2 h-1 bg-white/40 rounded-full blur-[0.5px] transform -rotate-45"></div>
          </div>
        </div>

        {/* Tubo de Vidro Horizontal */}
        <div className="relative flex-grow h-3 bg-gray-100 rounded-full border border-gray-200 overflow-hidden shadow-inner">
          {/* Escala (Tracinhos verticais) */}
          <div className="absolute inset-0 flex justify-between px-2 py-0.5 opacity-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`w-[1px] bg-gray-900 ${i % 5 === 0 ? 'h-full' : 'h-1/2 mt-auto'}`}></div>
            ))}
          </div>

          {/* Líquido Horizontal (Mercúrio) */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f59e0b] via-[#F65D94] to-red-600 transition-all duration-300 ease-out shadow-[5px_0_15px_rgba(246,93,148,0.3)]"
            style={{ width: `${scrollProgress}%` }}
          >
            {/* Brilho do líquido */}
            <div className="absolute top-0.5 left-0 w-full h-0.5 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Display de Temperatura Direito */}
        <div className="ml-4 flex-shrink-0">
          <div className="bg-white border border-gray-200 px-3 py-1 rounded-lg shadow-sm transform transition-all group-hover:border-[#F65D94]">
            <span className="text-[12px] font-black text-gray-800 tabular-nums">{currentTemp}°C</span>
          </div>
        </div>
      </div>

      {/* Ajuste de espaçamento para o termômetro do topo */}
      <div className="h-12"></div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-16 pb-20 px-6 bg-white border-b border-gray-50">
        <div className="absolute inset-0 kitchen-tiles opacity-10"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
          <div className="w-full md:w-5/12 animate-fade-in">
            <div className="shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-700">
              <img src={LOGO_URL} className="w-full h-auto" alt="Marmitaria Ventura" />
            </div>
          </div>

          <div className="w-full md:w-7/12 text-left space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-[#f59e0b] text-[10px] font-bold uppercase tracking-[0.3em] border border-orange-100">
                Samambaia Sul
              </span>
              <h1 className="text-4xl md:text-6xl font-light font-elegant tracking-tight leading-tight">
                Comida de verdade <br/>
                <span className="text-[#F65D94] italic">para o seu dia a dia.</span>
              </h1>
              <p className="text-gray-400 font-light text-xl max-w-xl">
                "{ESTABLISHMENT_INFO.description}"
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('order-station')} 
                className="bg-[#f59e0b] text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all rounded-full shadow-lg flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                Ver Cardápio
              </button>
              <button 
                onClick={() => scrollToSection('history-hub')} 
                className="bg-[#F65D94] text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all rounded-full shadow-lg flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                Nossa História
              </button>
              <button 
                onClick={() => scrollToSection('logistics-hub')} 
                className="bg-gray-800 text-white px-8 py-4 font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all rounded-full shadow-lg flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Localização
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* BANNER PROMOCIONAL */}
        <section className="relative bg-white py-16 md:py-24 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F65D94] opacity-[0.03] blur-[120px] rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f59e0b] opacity-[0.03] blur-[100px] rounded-full -ml-32 -mb-32"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 shadow-sm">
              <div className="w-full md:w-3/5 text-left space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-100/50 border border-orange-200">
                  <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
                  <span className="text-[10px] font-bold text-orange-800 uppercase tracking-widest">Oferta Exclusiva</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl text-gray-900 font-light font-elegant leading-tight">
                    Entrega <span className="text-[#F65D94] italic">Grátis</span> <br/> 
                    em <span className="text-[#f59e0b]">Samambaia</span>
                  </h2>
                  <p className="text-gray-500 font-light text-lg max-w-lg leading-relaxed">
                    Sabor de casa com a praticidade que você merece. Receba sua marmita quentinha sem taxa de entrega em toda a região.
                  </p>
                </div>
                <button onClick={() => scrollToSection('order-station')} className="bg-[#f59e0b] text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-xl hover:-translate-y-1 transition-all">
                  Fazer Pedido Agora
                </button>
              </div>
              <div className="w-full md:w-2/5 relative">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-gray-100">
                  <img src={PROMO_IMAGE_URL} alt="Promoção Ventura" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ÁREA DE PEDIDOS */}
        <section id="order-station" className="py-24 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light font-elegant mb-2">Pedidos Online</h2>
              <div className="w-16 h-1 bg-[#f59e0b] mx-auto"></div>
            </div>
            <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-900">
              <div className="h-[700px]">
                <iframe src="https://pedido.anota.ai/loja/marmitaria-ventura?f=ms" className="w-full h-full border-none" title="Cardápio Digital Ventura"></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* NOSSA HISTÓRIA */}
        <section id="history-hub" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light font-elegant">Nossa <span className="text-[#F65D94] italic">História</span></h2>
              <div className="space-y-4 text-gray-500 font-light leading-relaxed">
                <p>A Marmitaria Ventura nasceu para levar o verdadeiro sabor da comida caseira para a mesa de quem valoriza qualidade e tempero de verdade.</p>
                <p>Localizada em Samambaia Sul, somos referência em carinho e cuidado na preparação de cada refeição.</p>
              </div>
              <p className="font-elegant italic text-2xl text-gray-400">"Sabor que abraça o coração."</p>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={LOGO_URL} alt="Marmitaria Ventura" className="w-full h-80 object-cover" />
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="logistics-hub" className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              <div className="w-full md:w-1/3 bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#f59e0b] mb-8">Informações</h3>
                  <div className="mb-10 space-y-3">
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Endereço</h4>
                    <p className="text-lg font-light leading-relaxed">{ESTABLISHMENT_INFO.address}</p>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Horários</h4>
                    <div className="space-y-3">
                      {ESTABLISHMENT_INFO.hours.map((h, i) => (
                        <div key={i} className="flex justify-between text-[11px] border-b border-white/5 pb-2">
                          <span className="text-gray-400 uppercase">{h.day}</span>
                          <span className="font-medium">{h.status || `${h.open} - ${h.close}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white min-h-[500px]">
                <iframe src={ESTABLISHMENT_INFO.googleMapsUrl} width="100%" height="100%" style={{ border: 0, minHeight: '500px' }} allowFullScreen loading="lazy" title="Localização Ventura"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER PREMIUM */}
      <footer className="bg-gray-900 text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="space-y-2">
                <h3 className="text-4xl font-light font-elegant tracking-tight text-white">
                  Marmitaria Ventura
                </h3>
                <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed">
                  Sabor caseiro, carinho de família e qualidade excepcional para o seu almoço em Samambaia.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F65D94]">Siga-nos no Instagram</span>
                <div className="flex gap-4 items-center">
                  <a href="https://www.instagram.com/marmitariaventura/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/insta">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f59e0b] to-[#F65D94] flex items-center justify-center shadow-lg group-hover/insta:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <span className="text-gray-400 text-lg font-light hover:text-[#F65D94] transition-colors">@marmitariaventura</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#f59e0b]">Navegação</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><button onClick={() => scrollToSection('order-station')} className="text-gray-400 hover:text-[#F65D94] transition-colors">Fazer Pedido</button></li>
                <li><button onClick={() => scrollToSection('history-hub')} className="text-gray-400 hover:text-[#F65D94] transition-colors">Quem Somos</button></li>
                <li><button onClick={() => scrollToSection('logistics-hub')} className="text-gray-400 hover:text-[#F65D94] transition-colors">Onde Estamos</button></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#f59e0b]">Endereço</h4>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F65D94] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-gray-400">{ESTABLISHMENT_INFO.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest space-y-2 text-center md:text-left">
              <p>© {new Date().getFullYear()} Marmitaria Ventura. Todos os direitos reservados.</p>
              <p>
                Desenvolvido por{' '}
                <a 
                  href="https://www.gorinsolucoes.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-[#f59e0b] transition-colors font-bold"
                >
                  Gorin soluções
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;
