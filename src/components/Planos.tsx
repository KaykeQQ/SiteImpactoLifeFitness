import { Check, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../constants';

interface PlanosProps {
  onSelectPlan: (planName: string) => void;
}

const PLANS = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    badge: 'Flexibilidade Total',
    period: 'Sem fidelidade',
    description: 'Acesso completo à estrutura da academia com liberdade de renovação mês a mês.',
    features: [
      'Acesso livre à sala de musculação',
      'Treinos funcionais inclusos',
      'Orientação de professores no salão',
      'Sem taxa de cancelamento',
    ],
    highlight: false,
    ctaText: 'Escolher Mensal',
    defaultMessage: 'Olá! Tenho interesse no Plano Mensal da Impacto Life Fitness.',
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral',
    badge: 'Mais Escolhido',
    period: 'Foco e Constância',
    description: 'O período ideal para consolidar a rotina de treinos e obter os primeiros resultados sólidos.',
    features: [
      'Tudo do Plano Mensal',
      'Avaliação física e montagem de ficha',
      'Condição especial por mês',
      'Prioridade no suporte técnico',
    ],
    highlight: true,
    ctaText: 'Garantir Trimestral',
    defaultMessage: 'Olá! Gostaria de consultar os valores e garantir o Plano Trimestral na Impacto Life Fitness.',
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    badge: 'Compromisso Real',
    period: 'Transformação Contínua',
    description: 'Para quem não aceita desculpas e quer o melhor custo-benefício com disciplina o ano todo.',
    features: [
      'Acesso irrestrito 100% liberado',
      'Reavaliações periódicas de treino',
      'Melhor tarifa mensal garantida',
      'Opções de congelamento de férias',
    ],
    highlight: false,
    ctaText: 'Escolher Anual',
    defaultMessage: 'Olá! Gostaria de informações sobre o Plano Anual da Impacto Life Fitness.',
  },
];

export default function Planos({ onSelectPlan }: PlanosProps) {
  return (
    <section id="planos" className="py-24 sm:py-36 bg-[#0F172A] relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#EA580C] uppercase block mb-3">
            Transparência e Foco
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            PLANOS DE <span className="text-[#EA580C]">TREINO</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Sem taxas ocultas. Escolha o ritmo ideal para os seus objetivos e inicie ainda esta semana.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 relative border ${
                  plan.highlight
                    ? 'bg-[#141f36] border-[#EA580C] shadow-2xl shadow-orange-950/30 lg:-translate-y-2'
                    : 'bg-[#10192e] border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header of Card */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider mb-4">
                    <span className={plan.highlight ? 'text-[#EA580C] font-bold' : 'text-slate-400'}>
                      {plan.badge}
                    </span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>

                  <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-3">
                    {plan.name}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  <div className="border-t border-slate-800 pt-6 mb-8 space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 border-t border-slate-800/80">
                  <a
                    href={buildWhatsAppUrl(plan.defaultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 px-6 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      plan.highlight
                        ? 'bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-lg shadow-orange-950/40'
                        : 'border border-slate-700 hover:border-[#EA580C] hover:text-white text-slate-200 bg-[#0F172A]/50'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance text */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Dúvidas sobre formas de pagamento e matrícula?{' '}
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de tirar dúvidas sobre as opções de pagamento da academia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EA580C] underline hover:text-white transition-colors ml-1 font-semibold"
          >
            Fale direto com a nossa recepção
          </a>
        </div>

      </div>
    </section>
  );
}
