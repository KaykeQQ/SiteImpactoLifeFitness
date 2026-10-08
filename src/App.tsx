/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modalidades from './components/Modalidades';
import Planos from './components/Planos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AgendamentoModal from './components/AgendamentoModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModality, setSelectedModality] = useState('Musculação Guiada');

  const handleOpenAgendamento = (modality?: string) => {
    if (modality) {
      setSelectedModality(modality);
    }
    setModalOpen(true);
  };

  const handleSelectPlan = (_planName: string) => {
    // Plan clicks open WhatsApp with tailored message
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
      {/* Fixed Header */}
      <Navbar onOpenAgendamento={() => handleOpenAgendamento()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Início (Hero Fullscreen) */}
        <Hero onOpenAgendamento={() => handleOpenAgendamento()} />

        {/* 2. Modalidades (Asymmetrical Composition) */}
        <Modalidades onSelectModality={(m) => handleOpenAgendamento(m)} />

        {/* 3. Planos (3 Transparent Tiers) */}
        <Planos onSelectPlan={handleSelectPlan} />

        {/* 4. Sobre (Authoritative Philosophy & Method) */}
        <Sobre />

        {/* 5. Contato & Localização (Verified Address & Direct Form) */}
        <Contato />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Agendamento Online Modal */}
      <AgendamentoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialModality={selectedModality}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
