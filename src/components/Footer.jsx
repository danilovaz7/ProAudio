import React from 'react';
// Importação super segura dos ícones da Lucide
import { Phone, MapPin, Globe } from 'lucide-react';
// Importa a imagem da pasta assets
import logoImg from '../assets/proAudioLogo.png'; 

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        
        {/* Linha de Contatos e Créditos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-zinc-900 text-center md:text-left">
          
          {/* Logo Oficial com Fallback (Se a imagem sumir, o texto Pro Audio aparece) */}
          <div className="flex items-center justify-center md:justify-start cursor-pointer select-none">
            {logoImg ? (
              <img 
                src={logoImg} 
                alt="PRO AUDIO Som & Luz" 
                className="h-9 w-auto object-contain" 
              />
            ) : (
              <span className="text-white font-black">PRO AUDIO</span>
            )}
          </div>

          {/* Links Técnicos com ícones mais estáveis */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a 
              href="https://www.instagram.com/pro.audio_/"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors group"
            >
              <Globe className="h-4 w-4 text-red-500" />
              <span>@pro.audio_</span>
            </a>
            
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-zinc-500" />
              <span>(13) 99121-8888</span>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zinc-500" />
              <span>Guarujá e Região</span>
            </div>
          </div>

          {/* Direitos Autorais */}
          <p className="text-zinc-600 text-[10px] font-mono tracking-tight">
            &copy; {new Date().getFullYear()} PRO.AUDIO. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}