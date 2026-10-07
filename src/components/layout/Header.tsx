import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { MAIN_NAVIGATION, DISNEYLAND_SUBMENU, SubmenuItem } from '../../data/siteContent';
import { Button } from '../ui/Button';

interface HeaderProps {
  onOpenModal: (mode: 'plan' | 'question', preselectedTopic?: string) => void;
  onSelectSubmenuTopic: (item: SubmenuItem) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenModal,
  onSelectSubmenuTopic,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleNavClick = (id: string, href: string, e: React.MouseEvent) => {
    if (id === 'reserva-tu-viaje') {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      onOpenModal('plan');
      return;
    }
    if (id === 'contacto') {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      onOpenModal('question');
      return;
    }
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleSubmenuItemClick = (item: SubmenuItem, e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onSelectSubmenuTopic(item);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        isScrolled
          ? 'border-[#233975]/15 shadow-sm'
          : 'border-[#233975]/10'
      }`}
    >
      {/* Top Corporate Gradient Accent Line */}
      <div
        className="h-1 w-full bg-gradient-to-r from-[#8D3B82] via-[#EC4689] to-[#233975]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Official Corporate Brand Logo */}
        <a
          href="#"
          aria-label="Paris Magic Plan - Inicio"
          className="inline-flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4689] rounded-xl py-1 transition-transform duration-200 hover:scale-[1.01]"
        >
          <img
            src="/marca-grafica-pmp-simple-01.svg"
            alt="Paris Magic Plan"
            referrerPolicy="no-referrer"
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
          />
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Menú principal"
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#233975]"
        >
          {MAIN_NAVIGATION.map((item) => {
            if (item.submenu) {
              return (
                <div
                  key={item.id}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 py-2 text-[#233975] hover:text-[#EC4689] transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4689] rounded"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#EC4689] transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Submenu Dropdown */}
                  <div
                    role="menu"
                    aria-label="Submenú Disneyland Paris"
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[480px] transition-all duration-200 origin-top ${
                      isDropdownOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white border border-[#233975]/15 rounded-2xl shadow-xl p-5 grid grid-cols-2 gap-x-4 gap-y-1.5">
                      {DISNEYLAND_SUBMENU.map((sub) => (
                        <a
                          key={sub.id}
                          href={sub.href}
                          role="menuitem"
                          onClick={(e) => handleSubmenuItemClick(sub, e)}
                          className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#233975] hover:text-[#EC4689] hover:bg-[#F8F7FC] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4689]"
                        >
                          <span className="truncate">{sub.label}</span>
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#EC4689] opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-hidden="true"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(item.id, item.href, e)}
                className="relative py-2 text-[#233975] hover:text-[#EC4689] transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#EC4689] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4689] rounded"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button
              variant="primary-pink"
              size="sm"
              onClick={() => onOpenModal('plan')}
            >
              Quiero planificar mi viaje
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#233975] hover:text-[#EC4689] hover:bg-[#233975]/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4689]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#233975]/15 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-lg">
          <nav
            aria-label="Menú móvil"
            className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-2"
          >
            {MAIN_NAVIGATION.map((item) => {
              if (item.submenu) {
                return (
                  <div
                    key={item.id}
                    className="border-b border-[#233975]/10 pb-2"
                  >
                    <button
                      type="button"
                      aria-expanded={isMobileSubmenuOpen}
                      onClick={() => setIsMobileSubmenuOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between py-3 text-base font-semibold text-[#233975] hover:text-[#EC4689] transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#EC4689] transition-transform duration-200 ${
                          isMobileSubmenuOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isMobileSubmenuOpen && (
                      <div className="pl-4 py-2 grid grid-cols-1 sm:grid-cols-2 gap-1 border-l-2 border-[#EC4689]/40 ml-2 my-1">
                        {DISNEYLAND_SUBMENU.map((sub) => (
                          <a
                            key={sub.id}
                            href={sub.href}
                            onClick={(e) => handleSubmenuItemClick(sub, e)}
                            className="py-2.5 px-3 rounded-lg text-sm font-medium text-[#233975]/85 hover:text-[#EC4689] hover:bg-[#F8F7FC] transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, item.href, e)}
                  className="block py-3 text-base font-semibold text-[#233975] hover:text-[#EC4689] border-b border-[#233975]/10 transition-colors"
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary-pink"
                size="md"
                fullWidthOnMobile
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal('plan');
                }}
              >
                Quiero planificar mi viaje
              </Button>
              <Button
                variant="secondary-dark"
                size="md"
                fullWidthOnMobile
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal('question');
                }}
              >
                Pregunta cualquier duda
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
