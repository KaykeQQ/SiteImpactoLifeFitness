import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={buildWhatsAppUrl('Olá! Gostaria de informações sobre os treinos na Academia Impacto Life Fitness.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco no WhatsApp"
        className="flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white p-3.5 sm:px-5 sm:py-3.5 shadow-2xl shadow-orange-950/60 border border-orange-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-current text-white shrink-0" />
        <span className="hidden sm:inline font-heading text-xs font-bold uppercase tracking-wider">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
