import { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, ArrowUpRight } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY, GOOGLE_MAPS_URL, buildWhatsAppUrl } from '../constants';

export default function Contato() {
  const [formName, setFormName] = useState('');
  const [formMsg, setFormMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formMsg.trim()) return;

    const fullMessage = `*Mensagem via Site - Impacto Life Fitness*\n\n` +
      `👤 *Nome:* ${formName}\n` +
      `💬 *Mensagem:* ${formMsg}`;

    window.open(buildWhatsAppUrl(fullMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 sm:py-36 bg-[#0F172A] relative border-t border-slate-900">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#EA580C] uppercase block mb-3">
            Localização e Contato
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-none">
            ENTRAR EM <span className="text-[#EA580C]">CONTATO</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Visite nossa unidade em Mauá ou envie sua dúvida diretamente para nossa equipe pelo WhatsApp.
          </p>
        </div>

        {/* Content Split: Information & Quick Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Real Verified Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-8 bg-[#141f36] border border-slate-800 relative group">
              <div className="w-10 h-10 bg-[#EA580C]/10 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Endereço da Unidade
              </span>
              <p className="text-lg sm:text-xl font-bold text-white mb-4">
                {ADDRESS}
              </p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EA580C] hover:text-orange-400 transition-colors"
              >
                <span>Ver no Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-8 bg-[#141f36] border border-slate-800">
              <div className="w-10 h-10 bg-[#EA580C]/10 border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Atendimento Rápido
              </span>
              <p className="text-2xl font-black text-white mb-4 tracking-tight">
                {PHONE_DISPLAY}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsAppUrl('Olá! Gostaria de falar com a Impacto Life Fitness.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Clean Message Form */}
          <div className="lg:col-span-6 bg-[#141f36] p-8 sm:p-10 border border-slate-800">
            <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-2">
              Envie uma Mensagem
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Preencha os campos abaixo para iniciar seu atendimento prioritário direto no WhatsApp.
            </p>

            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-slate-300 mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-[#0F172A] border border-slate-700 py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold tracking-wider text-slate-300 mb-1">
                  Mensagem ou Dúvida
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Gostaria de saber mais sobre as modalidades, valores ou como começar..."
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  className="w-full bg-[#0F172A] border border-slate-700 py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#EA580C] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white py-4 px-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-orange-950/40"
              >
                <span>Enviar pelo WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
