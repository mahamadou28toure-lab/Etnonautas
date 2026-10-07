export interface SubmenuItem {
  id: string;
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface HighlightedConcept {
  id: string;
  title: string;
  iconName: 'compass' | 'shield' | 'tag' | 'sparkles';
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | 'compass'
    | 'badge-euro'
    | 'castle'
    | 'utensils'
    | 'smartphone'
    | 'calendar-clock'
    | 'building'
    | 'life-buoy'
    | 'shield-check'
    | 'wallet';
  featured?: boolean;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  opinion: string;
  rating: number;
  image: string;
  imageAlt: string;
  isPlaceholder: boolean;
}

export interface BlogArticleItem {
  id: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readButtonLabel: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isPlaceholder: boolean;
}

export const IMAGES = {
  heroCastle: '/src/assets/images/hero_disneyland_castle_1791363375130.jpg',
  bannerFamilyMagic: '/src/assets/images/banner_family_magic_1791363390212.jpg',
  planningDetail: '/src/assets/images/planning_editorial_detail_1791363403764.jpg',
  bannerEmotionalPlanning: '/src/assets/images/banner_emotional_planning_1791363414529.jpg',
  closingNightCastle: '/src/assets/images/closing_night_castle_1791363427381.jpg',
} as const;

export const DISNEYLAND_SUBMENU: SubmenuItem[] = [
  { id: 'hoteles', label: 'Hoteles', href: '#disneyland-hoteles' },
  { id: 'restaurantes', label: 'Restaurantes', href: '#disneyland-restaurantes' },
  { id: 'personajes', label: 'Personajes', href: '#disneyland-personajes' },
  { id: 'atracciones', label: 'Atracciones', href: '#disneyland-atracciones' },
  { id: 'espectaculos', label: 'Espectáculos', href: '#disneyland-espectaculos' },
  { id: 'adventure-world', label: 'Adventure World', href: '#disneyland-adventure-world' },
  { id: 'world-of-frozen', label: 'World of Frozen', href: '#disneyland-world-of-frozen' },
  { id: 'viajar-con-ninos', label: 'Viajar con niños', href: '#disneyland-viajar-con-ninos' },
  {
    id: 'viajar-con-personas-mayores',
    label: 'Viajar con personas mayores',
    href: '#disneyland-viajar-con-personas-mayores',
  },
  { id: 'accesos-preferentes', label: 'Accesos preferentes', href: '#disneyland-accesos-preferentes' },
  { id: 'traslados', label: 'Traslados', href: '#disneyland-traslados' },
];

export const MAIN_NAVIGATION: NavItem[] = [
  { id: 'reserva-tu-viaje', label: 'Reserva tu viaje', href: '#reserva-tu-viaje' },
  {
    id: 'disneyland-paris',
    label: 'Disneyland Paris',
    href: '#disneyland-paris',
    submenu: DISNEYLAND_SUBMENU,
  },
  { id: 'ventajas', label: 'Ventajas', href: '#ventajas' },
  { id: 'opiniones', label: 'Opiniones', href: '#opiniones' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const HERO_CONTENT = {
  title: 'Tu viaje a Disneyland Paris empieza aquí.',
  subtitle: 'Nosotros lo planificamos. Tú solo tienes que vivir la magia.',
  text: 'Planificamos contigo cada detalle de tu viaje a Disneyland Paris: alojamiento, entradas, planes de comidas, vuelos, traslados, restaurantes, experiencias con personajes, espectáculos y la organización de tus días en los parques.',
  primaryCta: 'Quiero planificar mi viaje',
  secondaryCta: 'Pregunta cualquier duda',
} as const;

export const HIGHLIGHTED_CONCEPTS: HighlightedConcept[] = [
  {
    id: 'planificacion-personalizada',
    title: 'Planificación personalizada',
    iconName: 'compass',
  },
  {
    id: 'reserva-agencia',
    title: 'Reserva a través de agencia',
    iconName: 'shield',
  },
  {
    id: 'precio-oficial-disney',
    title: 'Precio oficial Disney',
    iconName: 'tag',
  },
  {
    id: 'asesoramiento-continuo',
    title: 'Asesoramiento antes y durante tu viaje',
    iconName: 'sparkles',
  },
];

export const EXPLANATORY_SECTION_CONTENT = {
  text: 'Planificamos contigo cada detalle de tu viaje a Disneyland Paris: alojamiento, entradas, planes de comida, vuelos, traslados, restaurantes, personajes, espectáculos y organización de tus días en los parques.',
  primaryCta: 'Quiero planificar mi viaje',
  secondaryCta: 'Pregunta cualquier duda',
} as const;

export const FIRST_HORIZONTAL_BANNER = {
  quote:
    'El viaje más mágico a Disneyland Paris para ti y tu familia existe, y nosotros lo hacemos posible.',
} as const;

export const MAIN_PLANNING_CONTENT = {
  title: 'Planificamos tu viaje a Disneyland Paris de principio a fin.',
  text1:
    'Te acompañamos desde el momento en que empiezas a soñarlo hasta que llegas al Castillo, para que disfrutes de la experiencia sin preocuparte por toda la planificación que hay detrás.',
  subtitle: 'Un viaje a Disneyland Paris no es solo reservar un hotel y unas entradas.',
  text2:
    'Hay que elegir fechas, hotel, plan de comidas, vuelos, traslados, restaurantes, experiencias, atracciones y espectáculos; organizar cada día y conseguir que todo encaje para aprovechar al máximo vuestro tiempo, vuestro presupuesto y todo lo que Disneyland Paris puede ofreceros.',
} as const;

export const ADVANTAGES_CONTENT = {
  title: 'Tú sueñas el viaje. Nosotros hacemos que todo encaje.',
  items: [
    {
      id: 'travel-planner-personalizado',
      title: 'Travel Planner personalizado',
      description:
        'Por 200 € planificamos y organizamos tu viaje al completo, adaptándolo a tu familia, tus días, tus prioridades y tu presupuesto.',
      iconName: 'compass',
      featured: true,
    },
    {
      id: 'mismo-precio-disneyland-paris',
      title: 'El mismo precio de Disneyland Paris',
      description:
        'Tu paquete de hotel + entradas + plan de comidas mantiene el precio disponible de Disneyland Paris en el momento de formalizar la reserva. Tú pagas nuestro servicio de planificación, no un sobreprecio sobre el paquete Disney.',
      iconName: 'badge-euro',
      featured: true,
    },
    {
      id: 'conocemos-disneyland-paris',
      title: 'Conocemos Disneyland Paris',
      description:
        'Hoteles, parques, atracciones, espectáculos, restaurantes, personajes y experiencias. Te ayudamos a decidir qué merece la pena para vuestro viaje.',
      iconName: 'castle',
    },
    {
      id: 'restaurantes-organizados-reservados',
      title: 'Tus restaurantes, organizados y reservados',
      description:
        'Te recomendamos dónde comer según tus gustos y planificación, preparamos tu calendario de comidas y gestionamos las reservas disponibles de restaurantes y experiencias con personajes.',
      iconName: 'utensils',
    },
    {
      id: 'ensenamos-utilizar-app',
      title: 'Te enseñamos a utilizar la app',
      description:
        'Te ayudamos a configurar y vincular tu reserva y a entender las herramientas digitales que necesitarás antes y durante el viaje.',
      iconName: 'smartphone',
    },
    {
      id: 'plan-aprovechar-cada-dia',
      title: 'Un plan para aprovechar cada día',
      description:
        'Qué parque visitar, cuándo ir a determinadas atracciones, cómo organizar los espectáculos, dónde verlos y cómo aprovechar mejor vuestro tiempo sin hacer colas de más.',
      iconName: 'calendar-clock',
    },
    {
      id: 'reserva-gestionada-agencia',
      title: 'Reserva gestionada por una agencia de viajes',
      description:
        'Trabajamos con una agencia especializada que formaliza las reservas que hemos preparado contigo: paquete Disney, vuelos y traslados, sin añadir gastos de gestión de agencia a tu reserva.',
      iconName: 'building',
    },
    {
      id: 'asistencia-incidencias',
      title: 'Asistencia ante incidencias',
      description:
        'Tendrás el respaldo de la agencia para gestionar modificaciones, cancelaciones o incidencias relacionadas con las reservas contratadas a través de ella.',
      iconName: 'life-buoy',
    },
    {
      id: 'seguro-viaje-opcional',
      title: 'Seguro de viaje opcional',
      description:
        'Desde 25 € por persona, con coberturas como asistencia médica, cancelación en los supuestos contemplados en la póliza, equipaje y asistencia 24 horas en español.',
      iconName: 'shield-check',
    },
    {
      id: 'reserva-ahora-paga-poco-a-poco',
      title: 'Reserva ahora y paga poco a poco',
      description:
        'Confirma tu viaje desde 400 € y completa los pagos cómo prefieras desde la plataforma de la agencia hasta 30 días antes de viajar. Los vuelos se abonan al realizar su reserva.',
      iconName: 'wallet',
      featured: true,
    },
  ] as AdvantageItem[],
} as const;

export const HOW_IT_WORKS_CONTENT = {
  title: '¿Cómo funciona Paris Magic Plan?',
  steps: [
    {
      number: '1',
      title: '1. Cuéntanos cómo imaginas tu viaje',
      description: 'Fechas, viajeros, edades, preferencias y presupuesto.',
    },
    {
      number: '2',
      title: '2. Diseñamos tu viaje',
      description: 'Hotel, entradas, comidas, vuelos, traslados y presupuesto completo.',
    },
    {
      number: '3',
      title: '3. La agencia formaliza tus reservas',
      description: 'Una vez elegido el viaje, se realizan las reservas correspondientes.',
    },
    {
      number: '4',
      title: '4. Preparamos vuestra experiencia',
      description:
        'Restaurantes, personajes, app, itinerarios, atracciones, espectáculos y todos los detalles para disfrutar de los parques.',
    },
  ] as StepItem[],
} as const;

export const TESTIMONIALS_CONTENT = {
  title: 'Familias que ya han vivido la magia con nosotros',
  items: [
    {
      id: 'testimonio-placeholder-1',
      name: '[Placeholder Testimonio 1 — Nombre de la familia]',
      opinion:
        '[Espacio reservado para opinión real de cliente #1. Sustituir por el testimonio verificado proporcionado por Paris Magic Plan.]',
      rating: 5,
      image: IMAGES.bannerFamilyMagic,
      imageAlt: 'Fotografía representativa de familia en Disneyland Paris - Testimonio 1',
      isPlaceholder: true,
    },
    {
      id: 'testimonio-placeholder-2',
      name: '[Placeholder Testimonio 2 — Nombre de la familia]',
      opinion:
        '[Espacio reservado para opinión real de cliente #2. Sustituir por el testimonio verificado proporcionado por Paris Magic Plan.]',
      rating: 5,
      image: IMAGES.bannerEmotionalPlanning,
      imageAlt: 'Fotografía representativa de familia en Disneyland Paris - Testimonio 2',
      isPlaceholder: true,
    },
    {
      id: 'testimonio-placeholder-3',
      name: '[Placeholder Testimonio 3 — Nombre de la familia]',
      opinion:
        '[Espacio reservado para opinión real de cliente #3. Sustituir por el testimonio verificado proporcionado por Paris Magic Plan.]',
      rating: 5,
      image: IMAGES.heroCastle,
      imageAlt: 'Fotografía representativa de viaje a Disneyland Paris - Testimonio 3',
      isPlaceholder: true,
    },
    {
      id: 'testimonio-placeholder-4',
      name: '[Placeholder Testimonio 4 — Nombre de la familia]',
      opinion:
        '[Espacio reservado para opinión real de cliente #4. Sustituir por el testimonio verificado proporcionado por Paris Magic Plan.]',
      rating: 5,
      image: IMAGES.planningDetail,
      imageAlt: 'Fotografía representativa de planificación de viaje - Testimonio 4',
      isPlaceholder: true,
    },
  ] as TestimonialItem[],
} as const;

export const SECOND_HORIZONTAL_BANNER = {
  quote:
    'La magia de Disneyland Paris no empieza cuando llegas al parque. Empieza cuando planificas tu viaje.',
} as const;

export const BLOG_CONTENT = {
  title: 'Todo lo que necesitas saber antes de viajar a Disneyland Paris',
  articles: [
    {
      id: 'blog-cms-slot-1',
      slug: 'articulo-blog-1',
      image: IMAGES.heroCastle,
      imageAlt: 'Castillo de Disneyland Paris al anochecer',
      category: 'Planificación · [Categoría CMS]',
      title: '[Placeholder Artículo #1 — Título del artículo del blog desde CMS]',
      excerpt:
        '[Extracto del artículo #1 pendiente de publicación desde el gestor de contenidos (CMS). Espacio preparado para mostrar el resumen editorial.]',
      date: '[Fecha de publicación]',
      readButtonLabel: 'Leer artículo',
      isPlaceholder: true,
    },
    {
      id: 'blog-cms-slot-2',
      slug: 'articulo-blog-2',
      image: IMAGES.planningDetail,
      imageAlt: 'Planificación personalizada de itinerario y restaurantes',
      category: 'Guía del parque · [Categoría CMS]',
      title: '[Placeholder Artículo #2 — Título del artículo del blog desde CMS]',
      excerpt:
        '[Extracto del artículo #2 pendiente de publicación desde el gestor de contenidos (CMS). Espacio preparado para mostrar el resumen editorial.]',
      date: '[Fecha de publicación]',
      readButtonLabel: 'Leer artículo',
      isPlaceholder: true,
    },
    {
      id: 'blog-cms-slot-3',
      slug: 'articulo-blog-3',
      image: IMAGES.bannerEmotionalPlanning,
      imageAlt: 'Experiencia en familia en Disneyland Paris',
      category: 'Viaje en familia · [Categoría CMS]',
      title: '[Placeholder Artículo #3 — Título del artículo del blog desde CMS]',
      excerpt:
        '[Extracto del artículo #3 pendiente de publicación desde el gestor de contenidos (CMS). Espacio preparado para mostrar el resumen editorial.]',
      date: '[Fecha de publicación]',
      readButtonLabel: 'Leer artículo',
      isPlaceholder: true,
    },
  ] as BlogArticleItem[],
} as const;

export const FAQ_CONTENT = {
  title: 'Preguntas frecuentes',
  items: [
    {
      id: 'faq-placeholder-1',
      question: '[Placeholder Pregunta Frecuente #1 — Pendiente de incorporar por el cliente]',
      answer:
        '[Espacio preparado para la respuesta oficial #1 de Paris Magic Plan. Estructura editable preparada para incorporar el texto definitivo.]',
      isPlaceholder: true,
    },
    {
      id: 'faq-placeholder-2',
      question: '[Placeholder Pregunta Frecuente #2 — Pendiente de incorporar por el cliente]',
      answer:
        '[Espacio preparado para la respuesta oficial #2 de Paris Magic Plan. Estructura editable preparada para incorporar el texto definitivo.]',
      isPlaceholder: true,
    },
    {
      id: 'faq-placeholder-3',
      question: '[Placeholder Pregunta Frecuente #3 — Pendiente de incorporar por el cliente]',
      answer:
        '[Espacio preparado para la respuesta oficial #3 de Paris Magic Plan. Estructura editable preparada para incorporar el texto definitivo.]',
      isPlaceholder: true,
    },
    {
      id: 'faq-placeholder-4',
      question: '[Placeholder Pregunta Frecuente #4 — Pendiente de incorporar por el cliente]',
      answer:
        '[Espacio preparado para la respuesta oficial #4 de Paris Magic Plan. Estructura editable preparada para incorporar el texto definitivo.]',
      isPlaceholder: true,
    },
  ] as FaqItem[],
} as const;

export const HOME_CLOSING_CONTENT = {
  mainHeadline: 'Si sueñas con ir a Disneyland Paris nosotros lo hacemos posible.',
  subHeadline1: 'Tu viaje a Disneyland Paris puede empezar hoy.',
  subHeadline2:
    'Cuéntanos cómo imaginas vuestro viaje y nosotros empezaremos a darle forma.',
  cta: 'QUIERO PLANIFICAR MI VIAJE',
} as const;

export const FOOTER_CONTENT = {
  brandName: 'Paris Magic Plan',
  contactPlaceholders: {
    email: '[Email de contacto — Pendiente de incorporar]',
    phone: '[Teléfono / WhatsApp — Pendiente de incorporar]',
    schedule: '[Horario de atención — Pendiente de incorporar]',
  },
  socialPlaceholders: [
    { id: 'instagram', label: 'Instagram [Enlace pendiente]' },
    { id: 'facebook', label: 'Facebook [Enlace pendiente]' },
    { id: 'youtube', label: 'YouTube [Enlace pendiente]' },
    { id: 'tiktok', label: 'TikTok [Enlace pendiente]' },
  ],
  legalLinks: [
    { id: 'aviso-legal', label: 'Aviso legal' },
    { id: 'politica-privacidad', label: 'Política de privacidad' },
    { id: 'politica-cookies', label: 'Política de cookies' },
  ],
} as const;
