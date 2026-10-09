/**
 * PARIS MAGIC PLAN — JAVASCRIPT PURO (VANILLA JS)
 * Gestión de navegación, submenú desplegable, menú móvil, acordeones FAQ,
 * modales interactivos, validación de formularios y animaciones al hacer scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. HEADER SCROLL & NAVEGACIÓN DESKTOP / MÓVIL
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const navDropdown = document.getElementById('nav-dropdown-disneyland');
  const navDropdownTrigger = document.getElementById('nav-dropdown-trigger');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileSubTrigger = document.getElementById('mobile-sub-trigger');
  const mobileSubmenu = document.getElementById('mobile-submenu');
  const iconMenuOpen = document.getElementById('icon-menu-open');
  const iconMenuClose = document.getElementById('icon-menu-close');

  const handleScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 16) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Submenú Desktop Disneyland Paris
  const setDesktopDropdown = (open) => {
    if (!navDropdown || !navDropdownTrigger) return;
    navDropdown.classList.toggle('is-open', open);
    navDropdownTrigger.setAttribute('aria-expanded', String(open));
  };

  if (navDropdown && navDropdownTrigger) {
    navDropdown.addEventListener('mouseenter', () => setDesktopDropdown(true));
    navDropdown.addEventListener('mouseleave', () => setDesktopDropdown(false));
    navDropdownTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navDropdown.classList.contains('is-open');
      setDesktopDropdown(!isOpen);
    });
  }

  // Menú Móvil / Tablet
  const setMobileMenu = (open) => {
    if (!mobileDrawer || !mobileMenuBtn) return;
    mobileDrawer.classList.toggle('is-open', open);
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileMenuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    if (iconMenuOpen && iconMenuClose) {
      iconMenuOpen.style.display = open ? 'none' : 'block';
      iconMenuClose.style.display = open ? 'block' : 'none';
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('is-open');
      setMobileMenu(!isOpen);
    });
  }

  if (mobileSubTrigger && mobileSubmenu) {
    mobileSubTrigger.addEventListener('click', () => {
      const isOpen = mobileSubmenu.classList.contains('is-open');
      mobileSubmenu.classList.toggle('is-open', !isOpen);
      mobileSubTrigger.setAttribute('aria-expanded', String(!isOpen));
      const chevron = mobileSubTrigger.querySelector('.nav-dropdown__icon');
      if (chevron) {
        chevron.style.transform = !isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  // Cerrar menú móvil al hacer clic en enlaces de ancla internos
  document.querySelectorAll('[data-close-mobile]').forEach((link) => {
    link.addEventListener('click', () => {
      setMobileMenu(false);
      setDesktopDropdown(false);
    });
  });

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener('mousedown', (e) => {
    if (navDropdown && !navDropdown.contains(e.target)) {
      setDesktopDropdown(false);
    }
  });

  /* ==========================================================================
     2. ACORDEONES DE PREGUNTAS FRECUENTES (FAQ)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-item__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('is-open');

      // Cerrar otros acordeones y alternar el actual
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('is-open');
        const otherTrigger = otherItem.querySelector('.faq-item__trigger');
        if (otherTrigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (!isCurrentlyOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ==========================================================================
     3. MODALES INTERACTIVOS (PLANIFICACIÓN / CONTACTO, SUBMENÚ E INFO)
     ========================================================================== */
  const modalPlanning = document.getElementById('modal-planning');
  const modalPlanningTitle = document.getElementById('modal-planning-title');
  const modalPlanningIntro = document.getElementById('modal-planning-intro');
  const tabBtnPlan = document.getElementById('tab-btn-plan');
  const tabBtnQuestion = document.getElementById('tab-btn-question');
  const planExtraFields = document.getElementById('plan-extra-fields');
  const questionExtraFields = document.getElementById('question-extra-fields');
  const labelMessage = document.getElementById('label-pmp-message');
  const submitBtnLabel = document.getElementById('submit-btn-label');

  const planningForm = document.getElementById('pmp-planning-form');
  const planningSuccess = document.getElementById('modal-planning-success');
  const formErrorBox = document.getElementById('pmp-form-error');
  const inputName = document.getElementById('pmp-name');
  const inputEmail = document.getElementById('pmp-email');
  const inputPhone = document.getElementById('pmp-phone');
  const inputDates = document.getElementById('pmp-dates');
  const inputTravelers = document.getElementById('pmp-travelers');
  const inputBudget = document.getElementById('pmp-budget');
  const inputMessage = document.getElementById('pmp-message');
  const successUserName = document.getElementById('success-user-name');
  const successUserEmail = document.getElementById('success-user-email');

  const modalSubmenu = document.getElementById('modal-submenu');
  const submenuModalTitle = document.getElementById('submenu-modal-title');
  const submenuModalStrong = document.getElementById('submenu-modal-strong');
  const submenuBtnQuestion = document.getElementById('submenu-btn-question');
  const submenuBtnPlan = document.getElementById('submenu-btn-plan');

  const modalInfo = document.getElementById('modal-info');
  const infoModalSubtitle = document.getElementById('info-modal-subtitle');
  const infoModalTitle = document.getElementById('info-modal-title');
  const infoModalBody = document.getElementById('info-modal-body');
  const infoBtnPlan = document.getElementById('info-btn-plan');

  let currentMode = 'plan'; // 'plan' | 'question'
  let currentSubmenuTopic = '';

  const closeAllModals = () => {
    [modalPlanning, modalSubmenu, modalInfo].forEach((m) => {
      if (m) m.classList.remove('is-open');
    });
  };

  const setPlanningMode = (mode, preselectedTopic = '') => {
    currentMode = mode;
    if (formErrorBox) {
      formErrorBox.classList.remove('is-visible');
      formErrorBox.textContent = '';
    }
    if (planningForm && planningSuccess) {
      planningForm.style.display = 'block';
      planningSuccess.style.display = 'none';
    }

    const isPlan = mode === 'plan';

    if (modalPlanningTitle) {
      modalPlanningTitle.textContent = isPlan
        ? 'Quiero planificar mi viaje'
        : 'Pregunta cualquier duda';
    }

    if (modalPlanningIntro) {
      modalPlanningIntro.textContent = isPlan
        ? '1. Cuéntanos cómo imaginas tu viaje: Fechas, viajeros, edades, preferencias y presupuesto.'
        : 'Cuéntanos cómo imaginas vuestro viaje y nosotros empezaremos a darle forma.';
    }

    if (tabBtnPlan && tabBtnQuestion) {
      tabBtnPlan.classList.toggle('is-active', isPlan);
      tabBtnQuestion.classList.toggle('is-active', !isPlan);
    }

    if (planExtraFields && questionExtraFields) {
      planExtraFields.style.display = isPlan ? 'grid' : 'none';
      questionExtraFields.style.display = isPlan ? 'none' : 'block';
    }

    if (labelMessage) {
      labelMessage.textContent = isPlan
        ? 'Preferencias de hotel, comidas, personajes o detalles de vuestro viaje'
        : 'Escribe tu duda o consulta *';
    }

    if (submitBtnLabel) {
      submitBtnLabel.textContent = isPlan
        ? 'Quiero planificar mi viaje'
        : 'Pregunta cualquier duda';
    }

    if (preselectedTopic && inputMessage) {
      inputMessage.value = `Consulta relacionada con: ${preselectedTopic}\n`;
    }
  };

  const openPlanningModal = (mode = 'plan', preselectedTopic = '') => {
    closeAllModals();
    setMobileMenu(false);
    setDesktopDropdown(false);
    setPlanningMode(mode, preselectedTopic);
    if (modalPlanning) {
      modalPlanning.classList.add('is-open');
    }
  };

  const openSubmenuModal = (topicLabel) => {
    closeAllModals();
    setMobileMenu(false);
    setDesktopDropdown(false);
    currentSubmenuTopic = topicLabel;
    if (submenuModalTitle) submenuModalTitle.textContent = topicLabel;
    if (submenuModalStrong) submenuModalStrong.textContent = `“${topicLabel}”`;
    if (modalSubmenu) {
      modalSubmenu.classList.add('is-open');
    }
  };

  const openInfoModal = (title, subtitle, body) => {
    closeAllModals();
    setMobileMenu(false);
    setDesktopDropdown(false);
    if (infoModalTitle) infoModalTitle.textContent = title;
    if (infoModalSubtitle) infoModalSubtitle.textContent = subtitle || '';
    if (infoModalBody) infoModalBody.textContent = body;
    if (modalInfo) {
      modalInfo.classList.add('is-open');
    }
  };

  // Botones que abren el modal de Planificación o Dudas
  document.querySelectorAll('[data-open-modal]').forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const mode = trigger.getAttribute('data-open-modal') || 'plan';
      openPlanningModal(mode);
    });
  });

  // Pestañas dentro del modal de Planificación / Dudas
  if (tabBtnPlan) {
    tabBtnPlan.addEventListener('click', () => setPlanningMode('plan'));
  }
  if (tabBtnQuestion) {
    tabBtnQuestion.addEventListener('click', () => setPlanningMode('question'));
  }

  // Enlaces del submenú Disneyland Paris (Header, Móvil y Footer)
  document.querySelectorAll('[data-submenu-topic]').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = item.getAttribute('data-submenu-topic') || '';
      openSubmenuModal(topic);
    });
  });

  if (submenuBtnQuestion) {
    submenuBtnQuestion.addEventListener('click', () => {
      openPlanningModal('question', currentSubmenuTopic);
    });
  }

  if (submenuBtnPlan) {
    submenuBtnPlan.addEventListener('click', () => {
      openPlanningModal('plan', currentSubmenuTopic);
    });
  }

  // Artículos del Blog
  document.querySelectorAll('[data-blog-article]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-blog-title') || '';
      const meta = btn.getAttribute('data-blog-meta') || '';
      const excerpt = btn.getAttribute('data-blog-excerpt') || '';
      openInfoModal(
        title,
        meta,
        `${excerpt} [Vista previa del artículo del blog preparada para conectarse con el CMS de Paris Magic Plan.]`
      );
    });
  });

  // Enlaces Legales del Footer
  document.querySelectorAll('[data-legal-link]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const legalId = btn.getAttribute('data-legal-id') || '';
      const label = btn.getAttribute('data-legal-label') || '';
      openInfoModal(
        label,
        'Información legal · Paris Magic Plan',
        `[Espacio reservado para el documento oficial de "${label}" (${legalId}). Pendiente de incorporar los textos legales definitivos proporcionados por el cliente.]`
      );
    });
  });

  if (infoBtnPlan) {
    infoBtnPlan.addEventListener('click', () => {
      openPlanningModal('plan');
    });
  }

  // Cerrar modales con botón X, botón Cancelar o clic en el fondo oscuro
  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => closeAllModals());
  });

  [modalPlanning, modalSubmenu, modalInfo].forEach((backdrop) => {
    if (!backdrop) return;
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      setDesktopDropdown(false);
      setMobileMenu(false);
    }
  });

  /* ==========================================================================
     4. VALIDACIÓN Y ENVÍO DEL FORMULARIO
     ========================================================================== */
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const showError = (msg) => {
    if (!formErrorBox) return;
    formErrorBox.textContent = msg;
    formErrorBox.classList.add('is-visible');
  };

  if (planningForm) {
    planningForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formErrorBox) {
        formErrorBox.classList.remove('is-visible');
      }

      const nameVal = inputName ? inputName.value.trim() : '';
      const emailVal = inputEmail ? inputEmail.value.trim() : '';
      const datesVal = inputDates ? inputDates.value.trim() : '';
      const travelersVal = inputTravelers ? inputTravelers.value.trim() : '';
      const messageVal = inputMessage ? inputMessage.value.trim() : '';

      if (!nameVal) {
        showError('Por favor, introduce tu nombre.');
        return;
      }

      if (!validateEmail(emailVal)) {
        showError('Por favor, introduce un correo electrónico válido.');
        return;
      }

      if (currentMode === 'plan' && !datesVal && !travelersVal) {
        showError(
          'Por favor, indícanos fechas aproximadas o número de viajeros para empezar a darle forma a tu viaje.'
        );
        return;
      }

      if (currentMode === 'question' && !messageVal) {
        showError('Por favor, escribe tu duda o consulta.');
        return;
      }

      // Mostrar confirmación
      if (successUserName) successUserName.textContent = nameVal;
      if (successUserEmail) successUserEmail.textContent = emailVal;

      planningForm.style.display = 'none';
      if (planningSuccess) {
        planningSuccess.style.display = 'block';
      }

      // Limpiar campos opcionales para próximas aperturas
      if (inputPhone) inputPhone.value = '';
      if (inputDates) inputDates.value = '';
      if (inputTravelers) inputTravelers.value = '';
      if (inputBudget) inputBudget.value = '';
      if (inputMessage) inputMessage.value = '';
    });
  }

  /* ==========================================================================
     5. ANIMACIONES SUAVES AL HACER SCROLL (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }
});
