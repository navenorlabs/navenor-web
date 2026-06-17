import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es" | "ca";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.pricing": "Pricing",
    "nav.method": "Method",
    "nav.audit": "Get Your Free Tech Audit",
    
    "hero.badge": "Premium Technology Agency · Est. 2026",
    "hero.title1": "We Don't Just Write Code.",
    "hero.title2": "We Build Digital Assets That Scale Your Business.",
    "hero.desc": "Navenor is a premium technology agency specializing in ultra-fast web architectures, B2B digital transformation, and custom software. Stop losing clients to slow, insecure websites.",
    "hero.cta.primary": "Book a Free Infrastructure Audit",
    "hero.cta.secondary": "View Our Solutions",
    "hero.feat1": "Sub-second load times",
    "hero.feat2": "Enterprise security",
    "hero.feat3": "ROI-focused engineering",

    "method.label": "The Anti-Chaos System",
    "method.title": "Engineering discipline, not improvisation.",
    "method.desc": "Three non-negotiable principles drive every project we ship. They are the reason our clients sleep at night.",
    "method.i1.title": "Zero Over-engineering",
    "method.i1.body": "We use the exact technology your business needs to maximize ROI. No bloated stacks, no vanity features — every line of code earns its place.",
    "method.i2.title": "Extreme Performance",
    "method.i2.body": "Sub-second load times using static frameworks for maximum SEO and conversion. Speed isn't a feature — it's the foundation of trust.",
    "method.i3.title": "Bulletproof Security",
    "method.i3.body": "Isolated infrastructures and enterprise-grade database management. Your data, your users, and your reputation — locked down by default.",

    "services.label": "Services",
    "services.title": "Two tiers. One engineering standard.",
    "services.desc": "Whether you need a high-converting presence or a full custom platform, we deliver with the same discipline.",
    "services.t1.tag": "Tier 1 · For SMEs",
    "services.t1.title": "High-Performance Digital Presence",
    "services.t1.desc": "Lightning-fast static webs (Next.js / Astro), SEO dominance, and lead-generation funnels engineered to convert.",
    "services.t1.b1": "Custom Next.js / Astro architecture",
    "services.t1.b2": "Conversion-driven UI & UX design",
    "services.t1.b3": "Technical SEO & Core Web Vitals",
    "services.t1.b4": "Funnel and lead-capture systems",
    "services.t2.tag": "Tier 2 · For Startups & Medium Businesses",
    "services.t2.title": "Custom Enterprise Software",
    "services.t2.desc": "Bespoke full-stack architecture, corporate dashboards, internal tools, and robust database management — like our flagship project, MarketHub.",
    "services.t2.b1": "Full-stack product engineering",
    "services.t2.b2": "Database & API architecture",
    "services.t2.b3": "Internal dashboards & ops tools",
    "services.t2.b4": "Third-party integrations at scale",

    "pricing.label": "Pricing",
    "pricing.title": "Transparent investment. Compounding returns.",
    "pricing.desc": "Predictable setup fees and a Continuity Plan that keeps your asset secure, fast, and evolving.",
    "pricing.p1.name": "Business Web Presence",
    "pricing.p1.setup": "Starting at €1,200",
    "pricing.setupLabel": "Setup Fee",
    "pricing.p1.f1": "Professional custom website development",
    "pricing.p1.f2": "High-conversion UI & UX",
    "pricing.p1.f3": "Technical SEO optimization",
    "pricing.p1.f4": "Performance-tuned deployment",
    "pricing.p1.cont": "€49/month",
    "pricing.contLabel": "Continuity Plan",
    "pricing.p1.cf1": "Premium hosting",
    "pricing.p1.cf2": "SSL certificates",
    "pricing.p1.cf3": "Uptime monitoring",
    "pricing.p1.cf4": "Weekly backups",
    "pricing.p1.cf5": "1 hr/mo content updates",
    "pricing.p2.name": "Custom Software Architecture",
    "pricing.p2.setup": "Custom Quote",
    "pricing.p2.f1": "Full-stack development",
    "pricing.p2.f2": "Database architecture",
    "pricing.p2.f3": "Internal dashboards",
    "pricing.p2.f4": "API integrations",
    "pricing.p2.cont": "€99/month",
    "pricing.p2.cf1": "Advanced server infrastructure",
    "pricing.p2.cf2": "Database isolation",
    "pricing.p2.cf3": "Enterprise security",
    "pricing.p2.cf4": "Uptime monitoring",
    "pricing.badge": "Most requested",
    "pricing.cta": "Request a proposal",

    "cta.title": "Are you losing money due to an outdated web infrastructure?",
    "cta.desc": "Let us analyze your current setup. We'll send you a custom video audit highlighting critical vulnerabilities and performance bottlenecks — free of charge.",
    "cta.btn": "Request Video Audit",
    "cta.note": "No commitment. Delivered within 72 business hours.",

    "footer.ready": "Ready to scale? We engineer digital assets that compound revenue and operational efficiency.",
    "footer.btn": "Ready to scale?",
    "footer.nav": "Navigate",
    "footer.legal": "Legal",
    "footer.rights": "All rights reserved.",
    "footer.engineered": "Engineered with discipline in Europe.",

    "privacy.title": "Privacy Policy",
    "terms.title": "Terms of Service",

    "contact.label": "Contact",
    "contact.title": "Let's talk about your project.",
    "contact.desc": "Fill out the form and our team will get back to you within 24 hours.",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Message",
    "contact.privacy": "I have read and accept the",
    "contact.privacyLink": "Privacy Policy",
    "contact.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.desc": "Reach out through any of the following channels. We are available 24/7, 365 days a year.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.hours": "Hours",
    "contact.info.hoursValue": "24/7 — 365 days a year",
  },
  es: {
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.pricing": "Precios",
    "nav.method": "Método",
    "nav.audit": "Obtén tu Auditoría Gratis",
    
    "hero.badge": "Agencia Tecnológica Premium · Est. 2026",
    "hero.title1": "No Solo Escribimos Código.",
    "hero.title2": "Construimos Activos Digitales que Escalan tu Negocio.",
    "hero.desc": "Navenor es una agencia tecnológica premium especializada en arquitecturas web ultrarrápidas, transformación digital B2B y software a medida. Deja de perder clientes por webs lentas e inseguras.",
    "hero.cta.primary": "Reserva una Auditoría de Infraestructura Gratuita",
    "hero.cta.secondary": "Ver Nuestras Soluciones",
    "hero.feat1": "Tiempos de carga inferiores a un segundo",
    "hero.feat2": "Seguridad de nivel empresarial",
    "hero.feat3": "Ingeniería enfocada en el ROI",

    "method.label": "El Sistema Anti-Caos",
    "method.title": "Disciplina de ingeniería, no improvisación.",
    "method.desc": "Tres principios innegociables impulsan cada proyecto que lanzamos. Son la razón por la que nuestros clientes duermen tranquilos por la noche.",
    "method.i1.title": "Cero Sobreingeniería",
    "method.i1.body": "Utilizamos la tecnología exacta que tu negocio necesita para maximizar el ROI. Sin stacks inflados, sin características inútiles — cada línea de código se gana su lugar.",
    "method.i2.title": "Rendimiento Extremo",
    "method.i2.body": "Tiempos de carga ultrarrápidos utilizando frameworks estáticos para el máximo SEO y conversión. La velocidad no es una característica — es la base de la confianza.",
    "method.i3.title": "Seguridad a Prueba de Balas",
    "method.i3.body": "Infraestructuras aisladas y gestión de bases de datos a nivel empresarial. Tus datos, tus usuarios y tu reputación — bloqueados por defecto.",

    "services.label": "Servicios",
    "services.title": "Dos niveles. Un estándar de ingeniería.",
    "services.desc": "Ya sea que necesites una presencia de alta conversión o una plataforma completa a medida, entregamos con la misma disciplina.",
    "services.t1.tag": "Nivel 1 · Para PYMES",
    "services.t1.title": "Presencia Digital de Alto Rendimiento",
    "services.t1.desc": "Webs estáticas ultrarrápidas (Next.js / Astro), dominio de SEO y embudos de generación de leads diseñados para convertir.",
    "services.t1.b1": "Arquitectura personalizada Next.js / Astro",
    "services.t1.b2": "Diseño UI y UX orientado a la conversión",
    "services.t1.b3": "SEO técnico y Core Web Vitals",
    "services.t1.b4": "Sistemas de captura de leads y embudos",
    "services.t2.tag": "Nivel 2 · Para Startups y Medianas Empresas",
    "services.t2.title": "Software Empresarial a Medida",
    "services.t2.desc": "Arquitectura full-stack a medida, dashboards corporativos, herramientas internas y gestión de bases de datos robusta — como nuestro proyecto estrella, MarketHub.",
    "services.t2.b1": "Ingeniería de producto full-stack",
    "services.t2.b2": "Arquitectura de APIs y bases de datos",
    "services.t2.b3": "Dashboards y herramientas operativas internas",
    "services.t2.b4": "Integraciones de terceros a escala",

    "pricing.label": "Precios",
    "pricing.title": "Inversión transparente. Retornos compuestos.",
    "pricing.desc": "Tarifas de configuración predecibles y un Plan de Continuidad que mantiene tu activo seguro, rápido y en evolución.",
    "pricing.p1.name": "Presencia Web Empresarial",
    "pricing.p1.setup": "Desde €1,200",
    "pricing.setupLabel": "Tarifa de Configuración",
    "pricing.p1.f1": "Desarrollo web profesional a medida",
    "pricing.p1.f2": "UI y UX de alta conversión",
    "pricing.p1.f3": "Optimización técnica para SEO",
    "pricing.p1.f4": "Despliegue optimizado para rendimiento",
    "pricing.p1.cont": "€49/mes",
    "pricing.contLabel": "Plan de Continuidad",
    "pricing.p1.cf1": "Hosting premium",
    "pricing.p1.cf2": "Certificados SSL",
    "pricing.p1.cf3": "Monitorización de tiempo de actividad",
    "pricing.p1.cf4": "Copias de seguridad semanales",
    "pricing.p1.cf5": "1 hora/mes de actualizaciones de contenido",
    "pricing.p2.name": "Arquitectura de Software a Medida",
    "pricing.p2.setup": "Presupuesto a Medida",
    "pricing.p2.f1": "Desarrollo full-stack",
    "pricing.p2.f2": "Arquitectura de base de datos",
    "pricing.p2.f3": "Dashboards internos",
    "pricing.p2.f4": "Integraciones API",
    "pricing.p2.cont": "€99/mes",
    "pricing.p2.cf1": "Infraestructura de servidores avanzada",
    "pricing.p2.cf2": "Aislamiento de bases de datos",
    "pricing.p2.cf3": "Seguridad empresarial",
    "pricing.p2.cf4": "Monitorización de tiempo de actividad",
    "pricing.badge": "Más solicitado",
    "pricing.cta": "Solicitar una propuesta",

    "cta.title": "¿Estás perdiendo dinero por una infraestructura web anticuada?",
    "cta.desc": "Déjanos analizar tu configuración actual. Te enviaremos una auditoría en vídeo personalizada destacando vulnerabilidades críticas y cuellos de botella en el rendimiento — sin coste alguno.",
    "cta.btn": "Solicitar Auditoría en Vídeo",
    "cta.note": "Sin compromiso. Entregado en 72 horas laborables.",

    "footer.ready": "¿Listo para escalar? Diseñamos activos digitales que componen ingresos y eficiencia operativa.",
    "footer.btn": "¿Listo para escalar?",
    "footer.nav": "Navegación",
    "footer.legal": "Legal",
    "footer.rights": "Todos los derechos reservados.",
    "footer.engineered": "Diseñado con disciplina en Europa.",

    "privacy.title": "Política de Privacidad",
    "terms.title": "Términos de Servicio",

    "contact.label": "Contacto",
    "contact.title": "Hablemos de tu proyecto.",
    "contact.desc": "Rellena el formulario y nuestro equipo te responderá en menos de 24 horas.",
    "contact.name": "Nombre Completo",
    "contact.email": "Correo Electrónico",
    "contact.phone": "Número de Teléfono",
    "contact.message": "Mensaje",
    "contact.privacy": "He leído y acepto la",
    "contact.privacyLink": "Política de Privacidad",
    "contact.submit": "Enviar Mensaje",
    "contact.info.title": "Información de Contacto",
    "contact.info.desc": "Contáctanos a través de cualquiera de los siguientes canales. Estamos disponibles 24/7, los 365 días del año.",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.hours": "Horario",
    "contact.info.hoursValue": "24/7 — 365 días al año",
  },
  ca: {
    "nav.services": "Serveis",
    "nav.portfolio": "Portafoli",
    "nav.pricing": "Preus",
    "nav.method": "Mètode",
    "nav.audit": "Obté la teva Auditoria Gratuïta",
    
    "hero.badge": "Agència Tecnològica Premium · Est. 2026",
    "hero.title1": "No Només Escrivim Codi.",
    "hero.title2": "Construïm Actius Digitals que Escalen el teu Negoci.",
    "hero.desc": "Navenor és una agència tecnològica premium especialitzada en arquitectures web ultraràpides, transformació digital B2B i programari a mida. Deixa de perdre clients per webs lentes i insegures.",
    "hero.cta.primary": "Reserva una Auditoria d'Infraestructura Gratuïta",
    "hero.cta.secondary": "Veure les Nostres Solucions",
    "hero.feat1": "Temps de càrrega inferiors a un segon",
    "hero.feat2": "Seguretat de nivell empresarial",
    "hero.feat3": "Enginyeria enfocada al ROI",

    "method.label": "El Sistema Anti-Caos",
    "method.title": "Disciplina d'enginyeria, no improvisació.",
    "method.desc": "Tres principis innegociables impulsen cada projecte que llancem. Són la raó per la qual els nostres clients dormen tranquils a la nit.",
    "method.i1.title": "Zero Sobreenginyeria",
    "method.i1.body": "Utilitzem la tecnologia exacta que el teu negoci necessita per maximitzar el ROI. Sense stacks inflats, sense característiques inútils — cada línia de codi es guanya el seu lloc.",
    "method.i2.title": "Rendiment Extrem",
    "method.i2.body": "Temps de càrrega ultraràpids utilitzant frameworks estàtics per al màxim SEO i conversió. La velocitat no és una característica — és la base de la confiança.",
    "method.i3.title": "Seguretat a Prova de Bales",
    "method.i3.body": "Infraestructures aïllades i gestió de bases de dades a nivell empresarial. Les teves dades, els teus usuaris i la teva reputació — bloquejats per defecte.",

    "services.label": "Serveis",
    "services.title": "Dos nivells. Un estàndard d'enginyeria.",
    "services.desc": "Ja sigui que necessitis una presència d'alta conversió o una plataforma completa a mida, entreguem amb la mateixa disciplina.",
    "services.t1.tag": "Nivell 1 · Per a PIMES",
    "services.t1.title": "Presència Digital d'Alt Rendiment",
    "services.t1.desc": "Webs estàtiques ultraràpides (Next.js / Astro), domini de SEO i embuts de generació de leads dissenyats per convertir.",
    "services.t1.b1": "Arquitectura personalitzada Next.js / Astro",
    "services.t1.b2": "Disseny UI i UX orientat a la conversió",
    "services.t1.b3": "SEO tècnic i Core Web Vitals",
    "services.t1.b4": "Sistemes de captura de leads i embuts",
    "services.t2.tag": "Nivell 2 · Per a Startups i Mitjanes Empreses",
    "services.t2.title": "Programari Empresarial a Mida",
    "services.t2.desc": "Arquitectura full-stack a mida, dashboards corporatius, eines internes i gestió de bases de dades robusta — com el nostre projecte estrella, MarketHub.",
    "services.t2.b1": "Enginyeria de producte full-stack",
    "services.t2.b2": "Arquitectura d'APIs i bases de dades",
    "services.t2.b3": "Dashboards i eines operatives internes",
    "services.t2.b4": "Integracions de tercers a escala",

    "pricing.label": "Preus",
    "pricing.title": "Inversió transparent. Retorns compostos.",
    "pricing.desc": "Tarifes de configuració predictibles i un Pla de Continuïtat que manté el teu actiu segur, ràpid i en evolució.",
    "pricing.p1.name": "Presència Web Empresarial",
    "pricing.p1.setup": "Des de €1,200",
    "pricing.setupLabel": "Tarifa de Configuració",
    "pricing.p1.f1": "Desenvolupament web professional a mida",
    "pricing.p1.f2": "UI i UX d'alta conversió",
    "pricing.p1.f3": "Optimització tècnica per a SEO",
    "pricing.p1.f4": "Desplegament optimitzat per rendiment",
    "pricing.p1.cont": "€49/mes",
    "pricing.contLabel": "Pla de Continuïtat",
    "pricing.p1.cf1": "Hàsting premium",
    "pricing.p1.cf2": "Certificats SSL",
    "pricing.p1.cf3": "Monitorització de temps d'activitat",
    "pricing.p1.cf4": "Còpies de seguretat setmanals",
    "pricing.p1.cf5": "1 hora/mes d'actualitzacions de contingut",
    "pricing.p2.name": "Arquitectura de Programari a Mida",
    "pricing.p2.setup": "Pressupost a Mida",
    "pricing.p2.f1": "Desenvolupament full-stack",
    "pricing.p2.f2": "Arquitectura de base de dades",
    "pricing.p2.f3": "Dashboards interns",
    "pricing.p2.f4": "Integracions API",
    "pricing.p2.cont": "€99/mes",
    "pricing.p2.cf1": "Infraestructura de servidors avançada",
    "pricing.p2.cf2": "Aïllament de bases de dades",
    "pricing.p2.cf3": "Seguretat empresarial",
    "pricing.p2.cf4": "Monitorització de temps d'activitat",
    "pricing.badge": "Més sol·licitat",
    "pricing.cta": "Sol·licitar una proposta",

    "cta.title": "Estàs perdent diners per una infraestructura web antiquada?",
    "cta.desc": "Deixa'ns analitzar la teva configuració actual. T'enviarem una auditoria en vídeo personalitzada destacant vulnerabilitats crítiques i colls d'ampolla en el rendiment — sense cap cost.",
    "cta.btn": "Sol·licitar Auditoria en Vídeo",
    "cta.note": "Sense compromís. Lliurat en 72 hores laborables.",

    "footer.ready": "Llest per escalar? Dissenyem actius digitals que componen ingressos i eficiència operativa.",
    "footer.btn": "Llest per escalar?",
    "footer.nav": "Navegació",
    "footer.legal": "Legal",
    "footer.rights": "Tots els drets reservats.",
    "footer.engineered": "Dissenyat amb disciplina a Europa.",

    "privacy.title": "Política de Privacitat",
    "terms.title": "Termes de Servei",

    "contact.label": "Contacte",
    "contact.title": "Parlem del teu projecte.",
    "contact.desc": "Omple el formulari i el nostre equip et respondrà en menys de 24 hores.",
    "contact.name": "Nom Complet",
    "contact.email": "Correu Electrònic",
    "contact.phone": "Número de Telèfon",
    "contact.message": "Missatge",
    "contact.privacy": "He llegit i accepto la",
    "contact.privacyLink": "Política de Privacitat",
    "contact.submit": "Enviar Missatge",
    "contact.info.title": "Informació de Contacte",
    "contact.info.desc": "Contacta'ns a través de qualsevol dels següents canals. Estem disponibles 24/7, els 365 dies de l'any.",
    "contact.info.email": "Email",
    "contact.info.phone": "Telèfon",
    "contact.info.hours": "Horari",
    "contact.info.hoursValue": "24/7 — 365 dies a l'any",
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("navenor-lang") as Language;
      if (savedLang && ["en", "es", "ca"].includes(savedLang)) {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "es") setLanguageState("es");
        else if (browserLang === "ca") setLanguageState("ca");
        else setLanguageState("en");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("navenor-lang", lang);
    }
    setLanguageState(lang);
  };

  const t = (key: string, fallback?: string) => {
    return translations[language][key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
