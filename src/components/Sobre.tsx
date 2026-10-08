import { ArrowUpRight, Flame, Shield, Target } from 'lucide-react';
import { buildWhatsAppUrl } from '../constants';

export default function Sobre() {
  const pilares = [
    {
      icon: Target,
      title: 'Precisão e Técnica',
      desc: 'Cada repetição conta. Foco na execução correta antes de adicionar carga.',
    },
    {
      icon: Flame,
      title: 'Intensidade Constante',
      desc: 'Treinos estruturados para exigir o melhor de você em cada sessão.',
    },
    {
      icon: Shield,
      title: 'Ambiente Sério',
      desc: 'Sem distrações supérfluas. Uma comunidade focada em progresso real.',
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-36 bg-[#0a0f1d] relative border-t border-slate-900">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental High-Contrast Gym Environment Visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=85"
                alt="Ambiente de treinamento da Academia Impacto Life Fitness"
                className="w-full h-full object-cover object-center filter grayscale contrast-125"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-90" />
              
              {/* Bottom Quote inside frame */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0F172A]/95 border-l-2 border-[#EA580C] backdrop-blur-md">
                <p className="font-heading text-lg sm:text-xl text-white uppercase font-bold tracking-tight">
                  "O resultado é consequência direta do compromisso que você assume consigo mesmo."
                </p>
                <span className="text-[11px] text-slate-400 font-mono uppercase tracking-wider block mt-2">
                  Impacto Life Fitness · Filosofia de Treino
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#EA580C] uppercase block mb-3">
                Nossa Filosofia
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
                SEM ATALHOS. <br />
                APENAS <span className="text-[#EA580C]">MÉTODO</span>.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                A Impacto Life Fitness nasceu para quem cansou de academias impessoais e promessas milagrosas. Aqui, tratamos o treinamento físico com a seriedade que ele exige.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="space-y-6 pt-2">
              {pilares.map((pilar, index) => {
                const Icon = pilar.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-[#10192e] border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-none bg-[#EA580C]/10 border border-[#EA580C]/30 flex items-center justify-center shrink-0 text-[#EA580C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold uppercase text-white tracking-tight mb-1">
                        {pilar.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {pilar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href={buildWhatsAppUrl('Olá! Quero conhecer o espaço e a metodologia da Impacto Life Fitness.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EA580C] hover:bg-[#C2410C] text-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-orange-950/40"
              >
                <span>Conheça Nosso Espaço</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
