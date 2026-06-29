import React from 'react';
import { Smartphone, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-black">
      {/* Luz vermelha pulsante de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-red-950/40 via-black to-black z-0" />
      
      {/* Grid técnico de palco */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] sm:bg-size-[3rem_3rem] z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
        
        {/* Badge Estilo Painel de Led */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-red-900/50 text-[9px] sm:text-[10px] font-mono uppercase font-bold text-red-500 tracking-[0.25em] rounded animate-pulse">
          <Zap className="h-3 w-3 fill-red-500" /> System Online
        </div>

        {/* Título com escala responsiva agressiva (tamanho dinâmico) */}
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.9] sm:leading-[0.85] select-none text-balance">
          SOLUÇÕES <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-700 font-extrabold drop-shadow-[0_5px_15px_rgba(220,38,38,0.4)]">
            PROFISSIONAIS
          </span> 
          <br />PARA EVENTOS
        </h1>

        {/* Sub-headline técnica reduzida em telas pequenas */}
        <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-mono uppercase tracking-wider leading-relaxed px-2">
          Estrutura completa: sonorização, iluminação, painel de LED, estruturas e geradores.
        </p>

        {/* Botão Responsivo: 100% de largura no mobile, largura automática no desktop */}
        <div className="w-full max-w-sm sm:max-w-none mx-auto pt-6 px-4 sm:px-0">
          <a
            href="https://wa.me/5513991218888"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(220,38,38,0.5)] active:scale-95"
          >
            Fale Conosco: (13) 99121-8888
          </a>
        </div>
      </div>

      {/* Laser vermelho na base do Banner */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-red-600 to-transparent shadow-[0_0_10px_#dc2626]" />
    </section>
  );
}