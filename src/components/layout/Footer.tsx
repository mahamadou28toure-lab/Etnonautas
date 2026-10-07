import React from 'react';
import {
  MAIN_NAVIGATION,
  DISNEYLAND_SUBMENU,
  FOOTER_CONTENT,
  SubmenuItem,
} from '../../data/siteContent';
import { Button } from '../ui/Button';

interface FooterProps {
  onOpenModal: (mode: 'plan' | 'question') => void;
  onSelectSubmenuTopic: (item: SubmenuItem) => void;
  onOpenLegalModal: (legalId: string, label: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenModal,
  onSelectSubmenuTopic,
  onOpenLegalModal,
}) => {
  return (
    <footer
      aria-label="Pie de página"
      className="bg-pmp-corporate text-white border-t border-white/15"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/15">
          {/* Column 1: Official Brand Marks & Concept (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl p-3 shadow-md">
              <img
                src="/marca-grafica-pmp-simbolo-01.svg"
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="h-14 w-auto object-contain"
              />
              <img
                src="/marca-grafica-pmp-simple-04.svg"
                alt={FOOTER_CONTENT.brandName}
                referrerPolicy="no-referrer"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-white/85 leading-relaxed max-w-sm">
              Planificamos contigo cada detalle de tu viaje a Disneyland Paris:
              alojamiento, entradas, planes de comidas, vuelos, traslados,
              restaurantes, experiencias con personajes, espectáculos y la
              organización de tus días en los parques.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button
                variant="primary-pink"
                size="sm"
                onClick={() => onOpenModal('plan')}
              >
                Quiero planificar mi viaje
              </Button>
              <Button
                variant="secondary-light"
                size="sm"
                onClick={() => onOpenModal('question')}
              >
                Pregunta cualquier duda
              </Button>
            </div>
          </div>

          {/* Column 2: Navegación Principal (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-xl font-semibold text-white tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm text-white/85">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.id === 'reserva-tu-viaje') {
                        e.preventDefault();
                        onOpenModal('plan');
                      } else if (item.id === 'contacto') {
                        e.preventDefault();
                        onOpenModal('question');
                      }
                    }}
                    className="hover:text-[#FCE7F3] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Disneyland Paris Submenu Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-xl font-semibold text-white tracking-wide">
              Disneyland Paris
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm text-white/85">
              {DISNEYLAND_SUBMENU.map((sub) => (
                <li key={sub.id}>
                  <a
                    href={sub.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectSubmenuTopic(sub);
                    }}
                    className="hover:text-[#FCE7F3] transition-colors"
                  >
                    {sub.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto & Redes Sociales (Placeholders identificables) (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-semibold text-white tracking-wide">
                Contacto
              </h3>
              <ul className="space-y-2 text-sm text-white/85">
                <li className="py-1.5 px-3 rounded-lg bg-white/10 border border-dashed border-white/35 text-xs text-white">
                  {FOOTER_CONTENT.contactPlaceholders.email}
                </li>
                <li className="py-1.5 px-3 rounded-lg bg-white/10 border border-dashed border-white/35 text-xs text-white">
                  {FOOTER_CONTENT.contactPlaceholders.phone}
                </li>
                <li className="py-1.5 px-3 rounded-lg bg-white/10 border border-dashed border-white/35 text-xs text-white">
                  {FOOTER_CONTENT.contactPlaceholders.schedule}
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-xl font-semibold text-white tracking-wide">
                Redes sociales
              </h3>
              <ul className="space-y-1.5 text-xs text-white/80">
                {FOOTER_CONTENT.socialPlaceholders.map((social) => (
                  <li key={social.id}>
                    <button
                      type="button"
                      onClick={() => onOpenModal('question')}
                      className="hover:text-[#FCE7F3] transition-colors cursor-pointer text-left"
                    >
                      {social.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <p>© {new Date().getFullYear()} Paris Magic Plan. Todos los derechos reservados.</p>

          <nav aria-label="Enlaces legales" className="flex flex-wrap items-center gap-6">
            {FOOTER_CONTENT.legalLinks.map((legal) => (
              <button
                key={legal.id}
                type="button"
                onClick={() => onOpenLegalModal(legal.id, legal.label)}
                className="hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              >
                {legal.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
