import { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../constants';

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModality?: string;
}

export default function AgendamentoModal({
  isOpen,
  onClose,
  initialModality = 'Musculação Guiada',
}: AgendamentoModalProps) {
  const [modality, setModality] = useState(initialModality);
  const [period, setPeriod] = useState('Manhã');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `*Agendamento de Aula Experimental - Impacto Life Fitness*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *Contato:* ${phone || 'Informado no chat'}\n` +
      `🏋️ *Modalidade de Interesse:* ${modality}\n` +
      `⏰ *Período Preferido:* ${period}\n\n` +
      `Gostaria de confirmar o agendamento da minha aula experimental!`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#0F172A] border border-slate-700 shadow-2xl p-6 sm:p-8 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#EA580C]/20 border border-[#EA580C] text-[#EA580C] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              Agendamento Iniciado!
            </h3>
            <p className="text-slate-300 text-sm max-w-xs mx-auto">
              Redirecionando você para o WhatsApp oficial para confirmar o dia com a nossa equipe...
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#EA580C] uppercase block mb-1">
                Primeiro Passo
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                AGENDAR AULA EXPERIMENTAL
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Conheça a estrutura e sinta na prática o método Impacto Life Fitness.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Modality selector */}
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-slate-300 mb-2">
                  Modalidade Escolhida
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {['Musculação Guiada', 'Treino Funcional', 'Força & Performance'].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setModality(item)}
                      className={`text-xs py-2.5 px-2 text-center font-medium border transition-colors cursor-pointer ${
                        modality === item
                          ? 'border-[#EA580C] bg-[#EA580C]/10 text-white font-bold'
                          : 'border-slate-800 bg-[#141f36]/60 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {item.replace(' & Performance', '').replace(' Guiada', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shift selector */}
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-slate-300 mb-2">
                  Período de Preferência
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Manhã', 'Tarde', 'Noite'].map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={`text-xs py-2 px-3 text-center border font-medium transition-colors cursor-pointer ${
                        period === p
                          ? 'border-[#EA580C] bg-[#EA580C]/10 text-white font-bold'
                          : 'border-slate-800 bg-[#141f36]/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-slate-300 mb-1">
                  Seu Nome Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#141f36] border border-slate-700 py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-slate-300 mb-1">
                  Seu WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#141f36] border border-slate-700 py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white py-3.5 px-4 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-orange-950/40"
                >
                  <span>Confirmar e Enviar no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Atendimento direto e sem compromisso.
                </p>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
