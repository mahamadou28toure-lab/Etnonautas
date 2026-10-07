import React, { useState } from 'react';
import {
  IMAGES,
  FIRST_HORIZONTAL_BANNER,
  SECOND_HORIZONTAL_BANNER,
  HOME_CLOSING_CONTENT,
  SubmenuItem,
  BlogArticleItem,
} from './data/siteContent';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { HighlightedConceptsSection } from './components/sections/HighlightedConceptsSection';
import { ExplanatoryTextSection } from './components/sections/ExplanatoryTextSection';
import { MainPlanningSection } from './components/sections/MainPlanningSection';
import { AdvantagesSection } from './components/sections/AdvantagesSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { BlogSection } from './components/sections/BlogSection';
import { FaqSection } from './components/sections/FaqSection';
import { FullWidthImageBanner } from './components/ui/FullWidthImageBanner';
import {
  PlanningContactModal,
  SubmenuTopicModal,
  InfoPreviewModal,
} from './components/modals/InteractiveModals';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'plan' | 'question';
    topic?: string;
  }>({
    isOpen: false,
    mode: 'plan',
  });

  const [selectedSubmenuTopic, setSelectedSubmenuTopic] =
    useState<SubmenuItem | null>(null);

  const [infoModal, setInfoModal] = useState<{
    title: string | null;
    subtitle?: string;
    body: string | null;
  }>({
    title: null,
    body: null,
  });

  const handleOpenModal = (
    mode: 'plan' | 'question',
    preselectedTopic?: string
  ) => {
    setModalState({
      isOpen: true,
      mode,
      topic: preselectedTopic,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSelectArticle = (article: BlogArticleItem) => {
    setInfoModal({
      title: article.title,
      subtitle: `${article.category} · ${article.date}`,
      body: `${article.excerpt} [Vista previa del artículo del blog preparada para conectarse con el CMS de Paris Magic Plan.]`,
    });
  };

  const handleOpenLegalModal = (legalId: string, label: string) => {
    setInfoModal({
      title: label,
      subtitle: 'Información legal · Paris Magic Plan',
      body: `[Espacio reservado para el documento oficial de "${label}" (${legalId}). Pendiente de incorporar los textos legales definitivos proporcionados por el cliente.]`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#233975] overflow-x-hidden">
      {/* 4. HEADER / MENÚ SUPERIOR */}
      <Header
        onOpenModal={handleOpenModal}
        onSelectSubmenuTopic={(item) => setSelectedSubmenuTopic(item)}
      />

      <main className="flex-grow">
        {/* 5. HERO PRINCIPAL */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* 6. CONCEPTOS DESTACADOS */}
        <HighlightedConceptsSection />

        {/* 7. SECCIÓN TEXTO EXPLICATIVO */}
        <ExplanatoryTextSection onOpenModal={handleOpenModal} />

        {/* 8. IMAGEN HORIZONTAL DE ANCHO COMPLETO */}
        <FullWidthImageBanner
          imageSrc={IMAGES.bannerFamilyMagic}
          imageAlt="Familia caminando hacia el castillo de Disneyland Paris al atardecer"
          quote={FIRST_HORIZONTAL_BANNER.quote}
        />

        {/* 9. SECCIÓN PRINCIPAL DE PLANIFICACIÓN */}
        <MainPlanningSection />

        {/* 10. SECCIÓN VENTAJAS */}
        <AdvantagesSection />

        {/* 11. SECCIÓN ¿CÓMO FUNCIONA? */}
        <HowItWorksSection />

        {/* 12. OPINIONES */}
        <TestimonialsSection />

        {/* 13. SEGUNDA IMAGEN HORIZONTAL */}
        <FullWidthImageBanner
          imageSrc={IMAGES.bannerEmotionalPlanning}
          imageAlt="Familia observando las luces de Disneyland Paris al anochecer"
          quote={SECOND_HORIZONTAL_BANNER.quote}
        />

        {/* 14. BLOG */}
        <BlogSection onSelectArticle={handleSelectArticle} />

        {/* 15. PREGUNTAS FRECUENTES */}
        <FaqSection onOpenQuestionModal={() => handleOpenModal('question')} />

        {/* 16. CIERRE DE LA HOME */}
        <FullWidthImageBanner
          id="reserva-tu-viaje"
          imageSrc={IMAGES.closingNightCastle}
          imageAlt="Castillo de Disneyland Paris iluminado bajo las estrellas"
          quote={HOME_CLOSING_CONTENT.mainHeadline}
          subHeadline1={HOME_CLOSING_CONTENT.subHeadline1}
          subHeadline2={HOME_CLOSING_CONTENT.subHeadline2}
          ctaLabel={HOME_CLOSING_CONTENT.cta}
          onCtaClick={() => handleOpenModal('plan')}
          isClosingSection
        />
      </main>

      {/* 24. FOOTER */}
      <Footer
        onOpenModal={handleOpenModal}
        onSelectSubmenuTopic={(item) => setSelectedSubmenuTopic(item)}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Interactive Modals */}
      <PlanningContactModal
        isOpen={modalState.isOpen}
        initialMode={modalState.mode}
        preselectedTopic={modalState.topic}
        onClose={handleCloseModal}
      />

      <SubmenuTopicModal
        item={selectedSubmenuTopic}
        onClose={() => setSelectedSubmenuTopic(null)}
        onOpenPlanModal={(mode, topicLabel) =>
          handleOpenModal(mode, topicLabel)
        }
      />

      <InfoPreviewModal
        title={infoModal.title}
        categoryOrSubtitle={infoModal.subtitle}
        bodyText={infoModal.body}
        onClose={() => setInfoModal({ title: null, body: null })}
        onOpenPlanModal={() => handleOpenModal('plan')}
      />
    </div>
  );
}
