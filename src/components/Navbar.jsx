import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// Importa a imagem da pasta assets
import logoImg from '../assets/proAudioLogo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Container do Logo Oficial */}
          <div className="flex items-center cursor-pointer select-none">
            <img 
              src={logoImg} 
              alt="PRO AUDIO Som & Luz" 
              className="h-10 w-auto object-contain sm:h-12 transition-all" 
            />
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider uppercase">
            <a href="#inicio" className="text-zinc-300 hover:text-red-500 transition-colors">Início</a>
            <a href="#servicos" className="text-zinc-300 hover:text-red-500 transition-colors">Serviços</a>
            <a href="#sobre" className="text-zinc-300 hover:text-red-500 transition-colors">Sobre Nós</a>
            <a 
              href="https://www.instagram.com/pro.audio_/" 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold transition-all border border-red-700 shadow-md shadow-red-600/20"
            >
              @pro.audio_
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Aberto */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-zinc-900 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-300 font-bold uppercase">Início</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-300 font-bold uppercase">Serviços</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-300 font-bold uppercase">Sobre Nós</a>
          <a 
            href="https://www.instagram.com/pro.audio_/" 
            target="_blank" 
            rel="noreferrer"
            className="block w-full text-center py-3 bg-red-600 text-white font-bold uppercase"
          >
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}