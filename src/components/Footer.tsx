import { ArrowUp, Phone, MapPin } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY, GOOGLE_MAPS_URL, buildWhatsAppUrl } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0f1d] border-t border-slate-900 text-slate-400 py-16 text-xs">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-2xl font-black tracking-tight text-white">
                IMPACTO
              </span>
              <span className="font-heading text-xs tracking-widest text-[#EA580C] font-semibold uppercase">
                LIFE FITNESS
              </span>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Centro de treinamento focado em resultados reais, musculação e alto rendimento em Mauá.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white tracking-widest uppercase">
              Navegação
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Modalidades</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Planos</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white tracking-widest uppercase">
              Unidade
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {ADDRESS}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href={buildWhatsAppUrl('Olá!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Academia Impacto Life Fitness. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs uppercase tracking-wider font-semibold cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#EA580C]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
