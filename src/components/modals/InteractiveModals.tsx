import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import {
  SubmenuItem,
  HOW_IT_WORKS_CONTENT,
} from '../../data/siteContent';
import { Button } from '../ui/Button';

interface PlanningContactModalProps {
  isOpen: boolean;
  initialMode: 'plan' | 'question';
  preselectedTopic?: string;
  onClose: () => void;
}

export const PlanningContactModal: React.FC<PlanningContactModalProps> = ({
  isOpen,
  initialMode,
  preselectedTopic,
  onClose,
}) => {
  const [mode, setMode] = useState<'plan' | 'question'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dates, setDates] = useState('');
  const [travelers, setTravelers] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setError(null);
    setIsSubmitted(false);
    if (preselectedTopic) {
      setMessage(`Consulta relacionada con: ${preselectedTopic}\n`);
    }
  }, [initialMode, preselectedTopic, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Por favor, introduce tu nombre.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }
    if (mode === 'plan' && !dates.trim() && !travelers.trim()) {
      setError(
        'Por favor, indícanos fechas aproximadas o número de viajeros para empezar a darle forma a tu viaje.'
      );
      return;
    }
    if (mode === 'question' && !message.trim()) {
      setError('Por favor, escribe tu duda o consulta.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-planning-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#233975]/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-white text-[#233975] border border-[#EC4689]/30 shadow-2xl overflow-hidden my-8">
        {/* Top Modal Header with Corporate Gradient */}
        <div className="bg-pmp-corporate text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-12 rounded-xl bg-white p-1.5 shrink-0 shadow-xs">
              <img
                src="/marca-grafica-pmp-simbolo-01.svg"
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs text-[#FCE7F3] tracking-wider">
                Paris Magic Plan
              </p>
              <h2
                id="modal-planning-title"
                className="font-serif text-2xl sm:text-3xl font-semibold text-white"
              >
                {mode === 'plan'
                  ? 'Quiero planificar mi viaje'
                  : 'Pregunta cualquier duda'}
              </h2>
            </div>
          </div>

          <button
            type="button"
            aria-label="Cerrar ventana"
            onClick={onClose}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/85 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Interactive Mode Switcher (Functional Tabs) */}
        <div className="px-6 sm:px-8 pt-6">
          <div className="grid grid-cols-2 gap-1 p-1 bg-[#F8F7FC] rounded-xl border border-[#233975]/12">
            <button
              type="button"
              onClick={() => {
                setMode('plan');
                setError(null);
                setIsSubmitted(false);
              }}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap truncate ${
                mode === 'plan'
                  ? 'bg-[#233975] text-white shadow-xs'
                  : 'text-[#233975]/70 hover:text-[#233975]'
              }`}
            >
              Quiero planificar mi viaje
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('question');
                setError(null);
                setIsSubmitted(false);
              }}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap truncate ${
                mode === 'question'
                  ? 'bg-[#233975] text-white shadow-xs'
                  : 'text-[#233975]/70 hover:text-[#233975]'
              }`}
            >
              Pregunta cualquier duda
            </button>
          </div>
        </div>

        {/* Form or Confirmation State */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-5">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#EC4689]/10 border border-[#EC4689] flex items-center justify-center">
                <CheckCircle2
                  className="w-7 h-7 text-[#EC4689]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-serif text-3xl font-semibold text-[#233975]">
                Solicitud recibida correctamente
              </h3>

              <p className="text-base text-[#233975]/80 max-w-lg mx-auto leading-relaxed">
                Gracias, <span className="font-semibold">{name}</span>. Hemos
                registrado tus datos ({email}) para empezar a darle forma a tu
                experiencia en Disneyland Paris.
              </p>

              <div className="pt-4">
                <Button variant="primary-blue" size="md" onClick={onClose}>
                  Volver a Paris Magic Plan
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <p className="text-sm text-[#233975]/75 leading-relaxed">
                {mode === 'plan'
                  ? `${HOW_IT_WORKS_CONTENT.steps[0].title}: ${HOW_IT_WORKS_CONTENT.steps[0].description}`
                  : 'Cuéntanos cómo imaginas vuestro viaje y nosotros empezaremos a darle forma.'}
              </p>

              {error && (
                <div
                  role="alert"
                  className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800"
                >
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="pmp-name"
                    className="block text-xs font-semibold text-[#233975] mb-1.5"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="pmp-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7FC] border border-[#233975]/20 text-sm text-[#233975] focus:outline-none focus:border-[#EC4689] focus:ring-1 focus:ring-[#EC4689]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pmp-email"
                    className="block text-xs font-semibold text-[#233975] mb-1.5"
                  >
                    Correo electrónico *
                  </label>
                  <input
                    id="pmp-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7FC] border border-[#233975]/20 text-sm text-[#233975] focus:outline-none focus:border-[#EC4689] focus:ring-1 focus:ring-[#EC4689]"
                  />
                </div>
              </div>

              {mode === 'plan' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="pmp-dates"
                      className="block text-xs font-semibold text-[#233975] mb-1.5"
                    >
                      Fechas aproximadas
                    </label>
                    <input
                      id="pmp-dates"
                      type="text"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      placeholder="Ej. Octubre / 4 días"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7FC] border border-[#233975]/20 text-sm text-[#233975] focus:outline-none focus:border-[#EC4689] focus:ring-1 focus:ring-[#EC4689]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pmp-travelers"
                      className="block text-xs font-semibold text-[#233975] mb-1.5"
                    >
                      Viajeros y edades
                    </label>
                    <input
                      id="pmp-travelers"
                      type="text"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      placeholder="Ej. 2 adultos, 2 niños (6 y 9)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7FC] border border-[#233975]/20 text-sm text-[#233975] focus:outline-none focus:border-[#EC4689] focus:ring-1 focus:ring-[#EC4689]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pmp-budget"
                      className="block text-xs font-semibold text-[#233975] mb-1.5"
                    >
                      Teléfono o presupuesto
                    </label>
                    <input
                      id="pmp-budget"
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Opcional"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7FC] border border-[#233975]/20 text-sm text-[#233975] focus:outline-none focus:border-[#EC4689] focus:ring-1 focus:ring-[#EC4689]"
                    />
                  </div>
                </div>
              )}

              {mode === 'question' && (
                <div>
                  <label
                    htmlFor="pmp-phone"
                    className="block text-xs font-semibold text-[#233975] mb-1.5"
                  >
                    Teléfono de contacto (opcional)
                  </label>
                  <input
                    id="pmp-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7FC] border border-[#233975]/20 text-sm text-[#233975] focus:outline-none focus:border-[#EC4689] focus:ring-1 focus:ring-[#EC4689]"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="pmp-message"
                  className="block text-xs font-semibold text-[#233975] mb-1.5"
                >
                  {mode === 'plan'
                    ? 'Preferencias de hotel, comidas, personajes o detalles de vuestro viaje'
                    : 'Escribe tu duda o consulta *'}
                </label>
                <textarea
                  id="pmp-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos cómo imaginas vuestro viaje y nosotros empezaremos a darle forma..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F7FC] border border-[#233975]/20 text-sm text-[#233975] focus:outline-none focus:border-[#EC4689] focus:ring-1 focus:ring-[#EC4689]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <Button variant="ghost" size="md" onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="primary-pink"
                  size="md"
                  fullWidthOnMobile
                  className="font-semibold"
                >
                  {mode === 'plan'
                    ? 'Quiero planificar mi viaje'
                    : 'Pregunta cualquier duda'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

interface SubmenuTopicModalProps {
  item: SubmenuItem | null;
  onClose: () => void;
  onOpenPlanModal: (mode: 'plan' | 'question', topicLabel: string) => void;
}

export const SubmenuTopicModal: React.FC<SubmenuTopicModalProps> = ({
  item,
  onClose,
  onOpenPlanModal,
}) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="submenu-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#233975]/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-white text-[#233975] border border-[#EC4689]/30 shadow-2xl overflow-hidden">
        <div className="bg-pmp-corporate text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-11 rounded-xl bg-white p-1 shrink-0">
              <img
                src="/marca-grafica-pmp-simbolo-01.svg"
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs text-[#FCE7F3]">Disneyland Paris</p>
              <h2
                id="submenu-modal-title"
                className="font-serif text-2xl sm:text-3xl font-semibold text-white"
              >
                {item.label}
              </h2>
            </div>
          </div>

          <button
            type="button"
            aria-label="Cerrar ventana"
            onClick={onClose}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/85 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-4 rounded-xl bg-[#F8F7FC] border border-dashed border-[#EC4689]/50 text-sm text-[#233975]/80 leading-relaxed">
            [Espacio preparado para el contenido editorial específico de la
            sección <strong>“{item.label}”</strong> dentro del menú Disneyland
            Paris.]
          </div>

          <p className="text-base text-[#233975]/85 leading-relaxed">
            Planificamos contigo cada detalle de tu viaje a Disneyland Paris:
            alojamiento, entradas, planes de comidas, vuelos, traslados,
            restaurantes, experiencias con personajes, espectáculos y la
            organización de tus días en los parques.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <Button
              variant="secondary-dark"
              size="md"
              fullWidthOnMobile
              onClick={() => {
                const label = item.label;
                onClose();
                onOpenPlanModal('question', label);
              }}
            >
              Pregunta cualquier duda
            </Button>
            <Button
              variant="primary-pink"
              size="md"
              fullWidthOnMobile
              onClick={() => {
                const label = item.label;
                onClose();
                onOpenPlanModal('plan', label);
              }}
            >
              Quiero planificar mi viaje
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface InfoModalProps {
  title: string | null;
  categoryOrSubtitle?: string;
  bodyText: string | null;
  onClose: () => void;
  onOpenPlanModal: () => void;
}

export const InfoPreviewModal: React.FC<InfoModalProps> = ({
  title,
  categoryOrSubtitle,
  bodyText,
  onClose,
  onOpenPlanModal,
}) => {
  if (!title || !bodyText) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#233975]/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-white text-[#233975] border border-[#EC4689]/30 shadow-2xl overflow-hidden">
        <div className="bg-pmp-corporate text-white px-6 sm:px-8 py-6 flex items-center justify-between border-b border-white/20">
          <div>
            {categoryOrSubtitle && (
              <p className="text-xs text-[#FCE7F3] mb-1">{categoryOrSubtitle}</p>
            )}
            <h2
              id="info-modal-title"
              className="font-serif text-xl sm:text-2xl font-semibold text-white"
            >
              {title}
            </h2>
          </div>

          <button
            type="button"
            aria-label="Cerrar ventana"
            onClick={onClose}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white/85 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-5 rounded-xl bg-[#F8F7FC] border border-dashed border-[#EC4689]/50 text-sm text-[#233975]/80 leading-relaxed">
            {bodyText}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
            <Button variant="ghost" size="md" onClick={onClose}>
              Cerrar
            </Button>
            <Button
              variant="primary-pink"
              size="md"
              onClick={() => {
                onClose();
                onOpenPlanModal();
              }}
            >
              Quiero planificar mi viaje
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
