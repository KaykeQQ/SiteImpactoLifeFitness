import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ModalidadesProps {
  onSelectModality: (modality: string) => void;
}

const MODALIDADES = [
  {
    id: 'musculacao',
    number: '01',
    name: 'Musculação Guiada',
    headline: 'Hipertrofia e Densidade Muscular',
    description: 'Equipamentos biomecanicamente alinhados para máxima ativação muscular e redução de lesões.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    focus: ['Cargas progressivas', 'Correção postural contínua', 'Equipamentos modernos'],
  },
  {
    id: 'funcional',
    number: '02',
    name: 'Treino Funcional',
    headline: 'Resistência, Fôlego e Mobilidade',
    description: 'Circuitos dinâmicos que desenvolvem agilidade atlética, potência cardiovascular e perda calórica real.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80',
    focus: ['Alta queima metabólica', 'Condicionamento total', 'Exercícios multiarticulares'],
  },
  {
    id: 'forca',
    number: '03',
    name: 'Força & Performance',
    headline: 'Construção de Força Pura',
    description: 'Foco nos levantamentos fundamentais com acompanhamento técnico para quem busca romper platôs.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
    focus: ['Periodização sólida', 'Técnica de barra livre', 'Foco em superação'],
  },
];

export default function Modalidades({ onSelectModality }: ModalidadesProps) {
  const [activeTab, setActiveTab] = useState(0);
  const active = MODALIDADES[activeTab];

  return (
    <section id="modalidades" className="py-24 sm:py-32 bg-[#0b1120] relative border-t border-slate-900">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Minimal & Punchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#EA580C] uppercase block mb-3">
              Áreas de Treinamento
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
              MODALIDADES <span className="text-[#EA580C]">IMPACTO</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm sm:text-base">
            Ambiente estruturado para cada fase da sua evolução, da adaptação inicial ao rendimento avançado.
          </p>
        </div>

        {/* Asymmetrical Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Nav List */}
          <div className="lg:col-span-5 space-y-4">
            {MODALIDADES.map((item, index) => {
              const isSelected = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 sm:p-8 transition-all duration-300 relative cursor-pointer border ${
                    isSelected
                      ? 'bg-[#141f36] border-[#EA580C] shadow-xl'
                      : 'bg-[#0f172a]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#141f36]/40'
                  }`}
                >
                  {/* Subtle active marker */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#EA580C]" />
                  )}

                  <div className="flex items-start justify-between">
                    <span
                      className={`font-mono text-xs font-bold tracking-widest ${
                        isSelected ? 'text-[#EA580C]' : 'text-slate-500'
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-wider font-semibold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-500'
                      }`}
                    >
                      Ver detalhes
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white mt-2 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-normal line-clamp-2">
                    {item.headline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Monumental Visual Stage */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden bg-[#141f36] border border-slate-800"
              >
                {/* Visual Image with Cinematic Atmosphere */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141f36] via-[#141f36]/30 to-transparent" />
                  
                  {/* Top corner accent */}
                  <div className="absolute top-4 right-4 bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 border border-slate-800 text-xs font-mono text-[#EA580C] uppercase tracking-wider">
                    {active.number} · {active.name}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                      {active.headline}
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {active.description}
                    </p>
                  </div>

                  {/* Bullet points without pill boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800">
                    {active.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action for this modality */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectModality(active.name)}
                      className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>Quero treinar {active.name}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
