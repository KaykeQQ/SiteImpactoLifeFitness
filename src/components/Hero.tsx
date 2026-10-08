import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../constants';

interface HeroProps {
  onOpenAgendamento: () => void;
}

export default function Hero({ onOpenAgendamento }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0F172A]"
    >
      {/* Background Gradients & Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#EA580C]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[160px]" />
        {/* Subtle grid pattern for precision athletic feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            {/* Subtle Tagline / Location */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#EA580C] uppercase"
            >
              <span className="w-6 h-[2px] bg-[#EA580C]" />
              <span>Mauá · São Paulo</span>
            </motion.div>

            {/* Giant Confident Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black uppercase text-white tracking-tight leading-[0.92]"
            >
              FORÇA, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-orange-500 to-amber-500">
                DISCIPLINA
              </span> <br />
              E RESULTADOS.
            </motion.h1>

            {/* Single Support Sentence */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed"
            >
              O centro de treinamento definitivo em Mauá para quem busca evolução física intransigente e acompanhamento de verdade.
            </motion.p>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenAgendamento}
                className="group inline-flex items-center justify-center gap-3 bg-[#EA580C] hover:bg-[#C2410C] text-white px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-950/50 cursor-pointer"
              >
                <span>Agendar Treino Gratuito</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href={buildWhatsAppUrl('Olá! Gostaria de mais informações sobre a Academia Impacto Life Fitness.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-sm font-semibold uppercase tracking-wider transition-all bg-slate-900/60"
              >
                <MessageCircle className="w-4 h-4 text-[#EA580C]" />
                <span>Entrar em Contato</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Single Monumental Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Asymmetrical frame border accents */}
              <div className="absolute -inset-2 border border-slate-800 -z-10 translate-x-3 translate-y-3 pointer-events-none hidden sm:block" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#EA580C] pointer-events-none z-20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#EA580C] pointer-events-none z-20" />

              {/* Main Photo Container */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-slate-950 shadow-2xl shadow-black">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85"
                  alt="Treinamento de alta intensidade na Academia Impacto Life Fitness"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Dark Vignette Overlay with Burnt Orange Rim Light */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/40 to-transparent" />

                {/* Subtle Overlaid Badge at bottom */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F172A]/90 backdrop-blur-sm border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-[#EA580C] uppercase">Ambiente Dedicado</p>
                    <p className="text-sm font-semibold text-white">Musculação & Alta Performance</p>
                  </div>
                  <span className="w-2.5 h-2.5 bg-[#EA580C] rounded-full animate-ping" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Peek & Scroll Invitation */}
      <div className="relative max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between border-t border-slate-800/80 text-xs text-slate-400">
        <span className="uppercase tracking-widest font-mono text-[11px]">
          Impacto Life Fitness · Jardim Sonia Maria
        </span>
        <a
          href="#modalidades"
          className="flex items-center gap-2 hover:text-white transition-colors group text-[11px] uppercase tracking-wider font-semibold"
        >
          <span>Conheça as modalidades</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#EA580C] group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
