import React from 'react';
import { ExternalLink } from 'lucide-react';

import imgSonorizacao from '../assets/showluz.jpg';
import imgIluminacao from '../assets/show.jpg';
import imgLed from '../assets/jogobrasill.jpg';
import imgEstruturas from '../assets/montagempalco1.jpg';

export default function Gallery() {
    const photos = [
        { id: 1, title: "Sonorização & Palco", category: "Shows / Festivais", src: imgSonorizacao },
        { id: 2, title: "Iluminação Cênica", category: "Casamentos / Sociais", src: imgIluminacao },
        { id: 3, title: "Painel LED de Alta Definição", category: "Corporativo", src: imgLed },
        { id: 4, title: "Estruturas Box Truss & Pista", category: "Eventos Especiais", src: imgEstruturas },
    ];

    return (
        <section id="portfolio" className="py-20 bg-black relative z-10 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-12 border-l-4 border-red-600 pl-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <p className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase font-sans">
                            PROJETOS EXECUTADOS
                        </p>
                    </div>
                </div>

                {/* Grid de Fotos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="relative group aspect-video sm:aspect-square bg-zinc-900 overflow-hidden border border-zinc-800 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        >
                            <img
                                src={photo.src}
                                alt={photo.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 flex flex-col justify-end p-6 transition-all duration-300 group-hover:from-black/90">
                                {/* Categoria destacada com um fundo preto sólido, borda técnica e padding */}
                                <div className="w-fit mb-2 px-2 py-0.5 bg-zinc-950 border border-red-900/60 rounded text-[9px] sm:text-[10px] font-mono text-red-500 uppercase tracking-widest font-black shadow-md">
                                    {photo.category}
                                </div>

                                {/* Título com uma leve sombra projetada para descolar da imagem de fundo */}
                                <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    {photo.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão Instagram */}
                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/pro.audio_/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-950 border border-red-600/30 rounded-lg text-xs font-mono uppercase font-bold tracking-widest text-zinc-300 hover:text-white hover:border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.05)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 group"
                    >
                        <span>Ver bastidores no Instagram</span>
                        <ExternalLink className="h-4 w-4 text-red-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>

            </div>
        </section>
    );
}