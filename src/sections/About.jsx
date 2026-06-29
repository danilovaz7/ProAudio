import React from 'react';
import { CheckSquare } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-black border-t border-zinc-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-red-600 font-black tracking-widest text-sm uppercase">Quem Somos</h2>
            <h3 className="text-4xl font-black tracking-tighter text-white uppercase">
              Tecnologia de ponta, precisão milimétrica.
            </h3>
            <p className="text-zinc-400 leading-relaxed font-medium">
              A Pro Audio Som & Luz atua no fornecimento de estruturas integradas para eventos de grande, médio e pequeno porte. Focados no mercado corporativo, social e de espetáculos, oferecemos o que há de melhor em engenharia de áudio e projetos luminotécnicos.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Alinhamos equipamentos de marcas referências no mercado mundial com equipes e técnicos de mixagem certificados para conferir estabilidade operacional do primeiro ao último minuto do seu evento.
            </p>
          </div>

          {/* Lista Técnica de Diferenciais */}
          <div className="bg-zinc-950 border border-zinc-900 p-8 space-y-6 rounded-lg">
            <h4 className="text-white font-black tracking-wider uppercase text-lg border-b border-zinc-900 pb-3">Diferenciais Operacionais</h4>
            
            <div className="flex gap-3 items-start">
              <CheckSquare className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-zinc-400 text-sm font-medium"><strong className="text-zinc-200 uppercase">Projetos em DMX & Line Array:</strong> Cobertura acústica uniforme e iluminação perfeitamente sincronizada.</p>
            </div>

            <div className="flex gap-3 items-start">
              <CheckSquare className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-zinc-400 text-sm font-medium"><strong className="text-zinc-200 uppercase">Segurança Homologada:</strong> Palcos e box truss montados rigidamente seguindo todas as normas vigentes.</p>
            </div>

            <div className="flex gap-3 items-start">
              <CheckSquare className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-zinc-400 text-sm font-medium"><strong className="text-zinc-200 uppercase">Suporte Logístico Próprio:</strong> Entrega, montagem e geradores integrados sem terceirizações complexas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}