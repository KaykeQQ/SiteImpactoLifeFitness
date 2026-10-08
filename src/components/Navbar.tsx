import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { PHONE_DISPLAY, buildWhatsAppUrl } from '../constants';

interface NavbarProps {
  onOpenAgendamento: () => void;
}

export default function Navbar({ onOpenAgendamento }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="group flex items-baseline gap-1.5 focus:outline-none"
          aria-label="Impacto Life Fitness - Voltar ao início"
        >
          <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white transition-colors">
            IMPACTO
          </span>
          <span className="font-heading text-xs sm:text-sm tracking-widest text-[#EA580C] font-semibold uppercase">
            LIFE FITNESS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] ml-0.5 inline-block animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors duration-200 uppercase tracking-wider text-xs font-semibold py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EA580C] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={buildWhatsAppUrl('Olá! Gostaria de falar com a equipe da Impacto Life Fitness.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 border border-slate-800 rounded-sm hover:border-slate-700 bg-slate-900/60"
          >
            <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <button
            onClick={onOpenAgendamento}
            className="relative inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-all duration-200 active:scale-95 shadow-lg shadow-orange-950/40 cursor-pointer"
          >
            <span>Agendar Aula</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenAgendamento}
            className="bg-[#EA580C] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 cursor-pointer"
          >
            Agendar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold uppercase tracking-wider text-slate-200 hover:text-[#EA580C] py-2 border-b border-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAgendamento();
              }}
              className="w-full text-center bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider py-3"
            >
              Agendar Aula Experimental
            </button>
            <a
              href={buildWhatsAppUrl('Olá! Gostaria de falar com a equipe da Impacto Life Fitness.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xs font-semibold uppercase tracking-wider text-slate-300 border border-slate-800 py-2.5 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
