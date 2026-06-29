import React from 'react';
import { Sliders, Lightbulb, Grid, HardHat, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Sliders className="h-7 w-7 sm:h-8 w-8 text-red-500" />, title: "SONORIZAÇÃO" },
    { icon: <Lightbulb className="h-7 w-7 sm:h-8 w-8 text-red-500" />, title: "ILUMINAÇÃO" },
    { icon: <Grid className="h-7 w-7 sm:h-8 w-8 text-red-500" />, title: "PAINEL DE LED" },
    { icon: <HardHat className="h-7 w-7 sm:h-8 w-8 text-red-500" />, title: "ESTRUTURAS" },
    { icon: <Zap className="h-7 w-7 sm:h-8 w-8 text-red-500" />, title: "GERADORES" }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de Seção Industrial */}
        <div className="mb-12 border-l-4 border-red-600 pl-4">
          <p className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
            EQUIPAMENTOS DE ALTA POTÊNCIA
          </p>
        </div>

        {/* Grid Inteligente: 2 colunas no celular e 5 colunas em telas grandes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-4 sm:p-6 bg-black border border-red-600/30 rounded-xl text-center flex flex-col items-center justify-center min-h-35 sm:min-h-45 transition-all duration-300 hover:border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.05)] hover:shadow-[0_0_25px_rgba(220,38,38,0.25)] group"
            >
              <div className="mb-3 sm:mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]">
                {service.icon}
              </div>
              <h3 className="text-xs sm:text-sm lg:text-base font-black text-white tracking-widest uppercase font-sans">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}