/* Single source of truth for the assistant. Offline keyword engine. Plain JS, no JSX. */

export const OPEN_TO_WORK = true;
export const GITHUB_USER = 'CodeWizard-Amir';
export const EMAIL = 'amirwebsajjad@gmail.com';

export const FACTS = `
Name: Amirsajjad Nouri (امیرسجاد نوری). Full-stack web developer based in Karaj, Iran.
Education: B.Sc. Computer Engineering (software track) at Bu-Ali Sina University / Kharazmi University, 2022-2026.
Front-end: JavaScript (core), React (core), Next.js (core), Redux, React Query, Tailwind CSS, TypeScript (working level).
Back-end: PHP and Laravel (core), Laravel Reverb (learning), MySQL.
Tools: Git, VS Code, Postman.
Experience (since 2023): Front-end instructor at Souri Institute (34+ trainees), back-end instructor (4+ trainees), university projects (5+).
Projects: BitBox, Student management system, Tuyserkan news, Novinan, Vexa, Alpha Pack, Pars Air (front+back).
Certificates: Web Training Center, Diploma, TTC, ScrumAlliance Scrum Master.
Contact: ${EMAIL}; LinkedIn; GitHub ${GITHUB_USER}; Telegram @Amir_sjd12; X @AmirSjjad_2003.
`.trim();

export const SYSTEM_PROMPT = `You are the AI assistant on Amirsajjad Nouri's portfolio. (Kept for compatibility; the UI runs fully offline.)`;

/* ===================================================================
 *  UI2 — UI strings per language
 * =================================================================== */
export const UI2 = {
  fa: {
    tabs: { about: 'درباره من', projects: 'پروژه‌ها', skills: 'مهارت‌ها', journey: 'مسیر من' },
    sub: { about: 'من کی هستم و چطور کار می‌کنم', projects: 'نمونه‌کارها با پیش‌نمایش زنده', skills: 'تکنولوژی‌هایی که هر روز با آن‌ها کار می‌کنم', journey: 'تجربه، تحصیلات و گواهینامه‌ها' },
    journeyTitle: 'مسیر من',
    status: 'آماده همکاری', askAi: 'از هوش مصنوعی درباره من بپرس',
    palette: 'جستجوی دستورها…', paletteEmpty: 'چیزی پیدا نشد', pgo: 'رفتن به', pact: 'عملیات', plang: 'زبان',
    copyEmail: 'کپی ایمیل', copied: 'ایمیل کپی شد', theme: 'تغییر تم',
    chatTitle: 'دستیار هوشمند', chatSub: 'هر چیزی درباره امیرسجاد بپرس',
    chatGreeting: 'سلام! من دستیار پورتفولیوی امیرسجاد هستم. درباره مهارت‌ها، پروژه‌ها و تجربه‌هایش هر چیزی بپرسید.',
    chatPlaceholder: 'سؤالت را بنویس…', chatSend: 'ارسال', chatClose: 'بستن',
    chatNote: 'پاسخ‌ها از پایگاه دانش محلی می‌آید و ممکن است ناقص باشد؛ برای موارد مهم مستقیم ایمیل بزنید.',
    teaser: 'سؤالی درباره من داری؟',
    suggestions: ['تخصص اصلی امیرسجاد چیست؟', 'بهترین پروژه‌هایش کدام‌اند؟', 'تجربه تدریسش چقدر است؟', 'چطور می‌توانم با او تماس بگیرم؟'],
    gh: { title: 'فعالیت GitHub', live: 'زنده', repos: 'مخزن عمومی', followers: 'دنبال‌کننده', langs: 'زبان‌های پرکاربرد', last: 'آخرین فعالیت' },
    levels: { core: 'تسلط کامل', proficient: 'مسلط', learning: 'در حال یادگیری' },
    toolsTitle: 'ابزارها', interestsTitle: 'خارج از کد',
  },
  en: {
    tabs: { about: 'About', projects: 'Projects', skills: 'Skills', journey: 'Journey' },
    sub: { about: 'Who I am and how I work', projects: 'Selected work with live previews', skills: 'The technologies I use every day', journey: 'Experience, education and certificates' },
    journeyTitle: 'My journey',
    status: 'Open to opportunities', askAi: 'Ask the AI about me',
    palette: 'Search commands…', paletteEmpty: 'Nothing found', pgo: 'Go to', pact: 'Actions', plang: 'Language',
    copyEmail: 'Copy email', copied: 'Email copied', theme: 'Toggle theme',
    chatTitle: 'AI assistant', chatSub: 'Ask anything about Amirsajjad',
    chatGreeting: "Hi! I'm the assistant on Amirsajjad's portfolio. Ask me about his skills, projects or experience.",
    chatPlaceholder: 'Type your question…', chatSend: 'Send', chatClose: 'Close',
    chatNote: 'Answers come from a local knowledge base and may be incomplete. For anything important, email him directly.',
    teaser: 'Have a question about me?',
    suggestions: ["What is Amirsajjad's main specialty?", 'What are his best projects?', 'What is his teaching experience?', 'How can I contact him?'],
    gh: { title: 'GitHub activity', live: 'live', repos: 'public repos', followers: 'followers', langs: 'Top languages', last: 'Last active' },
    levels: { core: 'Core', proficient: 'Proficient', learning: 'Learning' },
    toolsTitle: 'Tools', interestsTitle: 'Beyond the code',
  },
  es: {
    tabs: { about: 'Sobre mí', projects: 'Proyectos', skills: 'Habilidades', journey: 'Trayectoria' },
    sub: { about: 'Quién soy y cómo trabajo', projects: 'Trabajos con vista previa en vivo', skills: 'Las tecnologías que uso cada día', journey: 'Experiencia, estudios y certificados' },
    journeyTitle: 'Mi trayectoria',
    status: 'Abierto a oportunidades', askAi: 'Pregunta a la IA sobre mí',
    palette: 'Buscar comandos…', paletteEmpty: 'Sin resultados', pgo: 'Ir a', pact: 'Acciones', plang: 'Idioma',
    copyEmail: 'Copiar correo', copied: 'Correo copiado', theme: 'Cambiar tema',
    chatTitle: 'Asistente IA', chatSub: 'Pregunta lo que quieras sobre Amirsajjad',
    chatGreeting: '¡Hola! Soy el asistente del portafolio de Amirsajjad. Pregúntame por sus habilidades, proyectos o experiencia.',
    chatPlaceholder: 'Escribe tu pregunta…', chatSend: 'Enviar', chatClose: 'Cerrar',
    chatNote: 'Las respuestas vienen de una base local y pueden ser incompletas. Para temas importantes, escríbele directamente.',
    teaser: '¿Tienes una pregunta sobre mí?',
    suggestions: ['¿Cuál es la especialidad de Amirsajjad?', '¿Cuáles son sus mejores proyectos?', '¿Qué experiencia docente tiene?', '¿Cómo puedo contactarlo?'],
    gh: { title: 'Actividad en GitHub', live: 'en vivo', repos: 'repos públicos', followers: 'seguidores', langs: 'Lenguajes principales', last: 'Última actividad' },
    levels: { core: 'Dominio total', proficient: 'Competente', learning: 'Aprendiendo' },
    toolsTitle: 'Herramientas', interestsTitle: 'Más allá del código',
  },
};

/* ===================================================================
 *  Suggestion pool — every answer links to 3 follow-up keys
 * =================================================================== */
export const CHAT_SUGGESTIONS = {
  fa: {
    about: 'درباره‌اش بیشتر بگو', frontend: 'مهارت‌های فرانت‌اند', backend: 'مهارت‌های بک‌اند',
    react: 'تجربه React', next: 'تجربه Next.js', laravel: 'تجربه لاراول', php: 'تجربه PHP',
    typescript: 'سطح TypeScript', tailwind: 'Tailwind', database: 'دیتابیس', skills: 'همه مهارت‌ها',
    projects: 'پروژه‌ها را معرفی کن', bitbox: 'پروژه BitBox', parsair: 'پروژه پارس ایر', alphapack: 'پروژه آلفا پک',
    experience: 'سابقه کاری', teaching: 'تجربه تدریس', education: 'تحصیلات', certs: 'گواهینامه‌ها',
    contact: 'راه‌های تماس', email: 'ایمیل', github: 'گیت‌هاب', location: 'کجا زندگی می‌کند؟',
    resume: 'رزومه', crypto: 'تجربه ارز دیجیتال', hobbies: 'علاقه‌مندی‌ها', hire: 'استخدام و همکاری',
    years: 'سابقه چند ساله؟',
  },
  en: {
    about: 'Tell me more about him', frontend: 'Frontend skills', backend: 'Backend skills',
    react: 'React experience', next: 'Next.js experience', laravel: 'Laravel experience', php: 'PHP experience',
    typescript: 'TypeScript level', tailwind: 'Tailwind', database: 'Database', skills: 'All skills',
    projects: 'Show his projects', bitbox: 'The BitBox project', parsair: 'The Pars Air project', alphapack: 'The Alpha Pack project',
    experience: 'Work experience', teaching: 'Teaching experience', education: 'Education', certs: 'Certifications',
    contact: 'Contact options', email: 'Email', github: 'GitHub', location: 'Where does he live?',
    resume: 'Résumé', crypto: 'Crypto experience', hobbies: 'Interests', hire: 'Hiring / collaboration',
    years: 'Years of experience',
  },
  es: {
    about: 'Cuéntame más sobre él', frontend: 'Habilidades front-end', backend: 'Habilidades back-end',
    react: 'Experiencia con React', next: 'Experiencia con Next.js', laravel: 'Experiencia con Laravel', php: 'Experiencia con PHP',
    typescript: 'Nivel de TypeScript', tailwind: 'Tailwind', database: 'Base de datos', skills: 'Todas las habilidades',
    projects: 'Muéstrame sus proyectos', bitbox: 'El proyecto BitBox', parsair: 'El proyecto Pars Air', alphapack: 'El proyecto Alpha Pack',
    experience: 'Experiencia laboral', teaching: 'Experiencia docente', education: 'Educación', certs: 'Certificados',
    contact: 'Formas de contacto', email: 'Correo', github: 'GitHub', location: '¿Dónde vive?',
    resume: 'Currículum', crypto: 'Experiencia en cripto', hobbies: 'Intereses', hire: 'Contratación / colaboración',
    years: 'Años de experiencia',
  },
};

/* ===================================================================
 *  Knowledge base — first match wins (same logic as an if/else chain).
 *  Order matters: specific topics BEFORE generic ones.
 * =================================================================== */
const KB = [
  /* greetings */
  { re: /^(hi|hello|hey|salam|سلام|درود|سلام علیکم|hola|buenas|buenos)/i,
    a: {
      fa: 'سلام! 👋 خوشحالم که اینجایی. درباره مهارت‌ها، پروژه‌ها، تجربه یا راه تماس هر سوالی داری بپرس.',
      en: "Hi! 👋 Glad you're here. Ask me anything about his skills, projects, experience or how to get in touch.",
      es: '¡Hola! 👋 Me alegra que estés aquí. Pregúntame por sus habilidades, proyectos, experiencia o cómo contactarlo.' },
    next: ['about', 'skills', 'projects'] },

  /* thanks */
  { re: /thank|thanks|تشکر|ممنون|مرسی|gracias/i,
    a: {
      fa: 'خوشحالم که کمک کردم! اگر چیز دیگه‌ای هست، در خدمتم.',
      en: "Happy to help! Let me know if there's anything else.",
      es: '¡Encantado de ayudar! Si hay algo más, aquí estoy.' },
    next: ['projects', 'contact', 'about'] },

  /* résumé */
  { re: /résumé|resume|\bcv\b|رزومه|currículum|curriculum/i,
    a: {
      fa: 'رزومه PDF از دکمه «دانلود رزومه» در ستون کناری قابل دانلود است. اگر سوال خاصی داری، همین‌جا بپرس یا ایمیل بزن.',
      en: 'You can download the PDF résumé with the "Download résumé" button in the sidebar. Ask here or email for anything specific.',
      es: 'Puedes descargar el currículum en PDF con el botón «Descargar currículum» de la barra lateral.' },
    next: ['contact', 'projects', 'about'] },

  /* contact / hire / email */
  { re: /contact|hire|email|reach|available|freelance|talk|تماس|استخدام|ایمیل|همکاری|ارتباط|contrat|correo|contacto|disponib|escrib|llamar|فرصت شغلی/i,
    a: {
      fa: `سریع‌ترین راه ایمیل است: ${EMAIL}. تلگرام @Amir_sjd12 و لینکدین هم فعال است. برای همکاری یا استخدام، ایمیل بهترین گزینه است.`,
      en: `Email is fastest: ${EMAIL}. He's also on Telegram (@Amir_sjd12) and LinkedIn. For hiring or collaboration, email is best.`,
      es: `Lo más rápido es el correo: ${EMAIL}. También está en Telegram (@Amir_sjd12) y LinkedIn. Para contratación o colaboración, el correo es lo mejor.` },
    next: ['email', 'resume', 'github'] },

  /* github */
  { re: /github|git hub|گیت ?هاب|repo|source code|کد منبع|repositorio|código/i,
    a: {
      fa: `همه پروژه‌ها روی گیت‌هاب هستن: github.com/${GITHUB_USER}`,
      en: `All his code lives at github.com/${GITHUB_USER}`,
      es: `Todo su código está en github.com/${GITHUB_USER}` },
    next: ['projects', 'contact', 'skills'] },

  /* linkedin */
  { re: /linkedin|لینکدین/i,
    a: {
      fa: 'لینکدین: linkedin.com/in/amirsajjad-nouri-8a0910383',
      en: 'LinkedIn: linkedin.com/in/amirsajjad-nouri-8a0910383',
      es: 'LinkedIn: linkedin.com/in/amirsajjad-nouri-8a0910383' },
    next: ['contact', 'github', 'experience'] },

  /* telegram */
  { re: /telegram|تلگرام/i,
    a: {
      fa: 'تلگرام: @Amir_sjd12',
      en: 'Telegram: @Amir_sjd12',
      es: 'Telegram: @Amir_sjd12' },
    next: ['contact', 'github', 'email'] },

  /* BitBox project */
  { re: /bit ?box|بیت ?باکس|bit-box|صرافی|exchange|bitbox/i,
    a: {
      fa: 'BitBox یک رابط صرافی ارز دیجیتال است که با Next.js، Tailwind، Redux و RTK Query ساخته شده. دمو زنده: bit-box.vercel.app',
      en: 'BitBox is a crypto-exchange UI built with Next.js, Tailwind, Redux and RTK Query. Live demo: bit-box.vercel.app',
      es: 'BitBox es una interfaz de exchange cripto hecha con Next.js, Tailwind, Redux y RTK Query. Demo: bit-box.vercel.app' },
    next: ['projects', 'crypto', 'react'] },

  /* Pars Air */
  { re: /pars ?air|پارس ?ایر|agence|air cargo|بار هوایی/i,
    a: {
      fa: 'پارس ایر یک پلتفرم حمل بار هوایی است. فرانت‌اند با Next.js، NextAuth و React Query و بک‌اند یک REST API با Laravel 12، Sanctum و MySQL.',
      en: 'Pars Air is an air-cargo platform. Front end in Next.js with NextAuth and React Query; back end is a Laravel 12 REST API with Sanctum and MySQL.',
      es: 'Pars Air es una plataforma de carga aérea. Front-end en Next.js con NextAuth y React Query; back-end es una API REST en Laravel 12 con Sanctum y MySQL.' },
    next: ['projects', 'laravel', 'next'] },

  /* Novinan */
  { re: /novin|نوین/i,
    a: {
      fa: 'نوینان یک وب‌سایت شرکتی برای تیم طراحی وب‌اپ مدرن است؛ ساخته‌شده با React، Redux و RTK Query. دمو: novins.vercel.app',
      en: 'Novinan is a company site for a modern web-app design team, built with React, Redux and RTK Query. Demo: novins.vercel.app',
      es: 'Novinan es el sitio de un equipo de diseño de apps web modernas, hecho con React, Redux y RTK Query. Demo: novins.vercel.app' },
    next: ['projects', 'react', 'crypto'] },

  /* Vexa */
  { re: /vexa|وکسا|ویکسا/i,
    a: {
      fa: 'Vexa یک گروه نرم‌افزاری متشکل از سنیورهاست. سایت با Next.js و Framer Motion. دمو: vexxaa1.vercel.app',
      en: 'Vexa is a software group of senior developers. The site is built with Next.js and Framer Motion. Demo: vexxaa1.vercel.app',
      es: 'Vexa es un grupo de software de desarrolladores senior. El sitio usa Next.js y Framer Motion. Demo: vexxaa1.vercel.app' },
    next: ['projects', 'next', 'react'] },

  /* Alpha Pack */
  { re: /alpha ?pack|alphapack|آلفا ?پک|academy|آکادمی/i,
    a: {
      fa: 'آلفا پک یک آکادمی آنلاین است که با Next.js و TypeScript ساخته شده. دمو: alphapacks.vercel.app',
      en: 'Alpha Pack is an online academy built with Next.js and TypeScript. Demo: alphapacks.vercel.app',
      es: 'Alpha Pack es una academia en línea hecha con Next.js y TypeScript. Demo: alphapacks.vercel.app' },
    next: ['projects', 'next', 'typescript'] },

  /* student management */
  { re: /student|myclass|مدیریت دانشجو|سیستم دانشجوی|دانشجویی/i,
    a: {
      fa: 'سیستم مدیریت دانشجویی با Laravel، Reverb (وب‌سوکت)، ربات تلگرام و قابلیت PWA ساخته شده.',
      en: 'The student management system uses Laravel, Reverb (WebSockets), a Telegram bot and PWA support.',
      es: 'El sistema de gestión estudiantil usa Laravel, Reverb (WebSockets), un bot de Telegram y soporte PWA.' },
    next: ['projects', 'laravel', 'react'] },

  /* Tuyserkan news */
  { re: /tuyserkan|تویسرکان|news portal|پایگاه خبری/i,
    a: {
      fa: 'پایگاه خبری تویسرکان با Laravel 11، MySQL، Blade و jQuery ساخته شده.',
      en: 'The Tuyserkan news portal is built with Laravel 11, MySQL, Blade and jQuery.',
      es: 'El portal de noticias de Tuyserkan está hecho con Laravel 11, MySQL, Blade y jQuery.' },
    next: ['projects', 'laravel', 'database'] },

  /* teaching */
  { re: /teach|instruct|trainee|آموزش|مدرس|تدریس|کارآموز|enseñ|docen|instructor|alumno|کلاس/i,
    a: {
      fa: 'از ۲۰۲۳ در آموزشگاه سوری تدریس می‌کند: فرانت‌اند (React و jQuery) به بیش از ۳۴ کارآموز و بک‌اند (Laravel و PHP) به بیش از ۴ کارآموز.',
      en: 'Since 2023 he has taught at Souri Institute: front-end (React, jQuery) to 34+ trainees and back-end (Laravel, PHP) to 4+ trainees.',
      es: 'Desde 2023 enseña en el Instituto Souri: front-end (React, jQuery) a más de 34 alumnos y back-end (Laravel, PHP) a más de 4.' },
    next: ['experience', 'education', 'certs'] },

  /* experience */
  { re: /experience|job|career|work history|تجربه|سابقه|شغل|experiencia|trayectoria|empleo/i,
    a: {
      fa: 'از ۲۰۲۳ مدرس فرانت و بک‌اند در آموزشگاه سوری بوده و همزمان ۵+ پروژه دانشگاهی (با SEO و PWA) توسعه داده. جزئیات در تب «مسیر من».',
      en: 'Since 2023 he has been a front-end and back-end instructor at Souri Institute while building 5+ university projects (with SEO and PWA). Details in the Journey tab.',
      es: 'Desde 2023 es instructor de front-end y back-end en el Instituto Souri y desarrolla más de 5 proyectos universitarios (con SEO y PWA). Detalles en la pestaña Trayectoria.' },
    next: ['teaching', 'projects', 'education'] },

  /* education */
  { re: /educat|degree|universit|study|تحصیل|دانشگاه|مدرک|educaci|universidad|estudi|grado|bu-?ali|kharazmi|بو.?علی|خوارزمی/i,
    a: {
      fa: 'کارشناسی مهندسی کامپیوتر (گرایش نرم‌افزار) در دانشگاه بوعلی سینا / خوارزمی، ۲۰۲۲ تا ۲۰۲۶. دیپلم ریاضی از مدرسه دهخدا (۲۰۱۹-۲۰۲۲).',
      en: 'B.Sc. in Computer Engineering (software track) at Bu-Ali Sina / Kharazmi University, 2022-2026. High-school math diploma from Dehkhoda School (2019-2022).',
      es: 'Grado en Ingeniería Informática (software) en la Universidad Bu-Ali Sina / Kharazmi, 2022-2026. Bachillerato de matemáticas en la Escuela Dehkhoda (2019-2022).' },
    next: ['certs', 'experience', 'about'] },

  /* certifications */
  { re: /certif|scrum|گواهی|مدرک|certificado|گواهینامه/i,
    a: {
      fa: 'گواهینامه‌ها: Web Training Center (net-college, 2022)، دیپلم فنی‌وحرفه‌ای (Aras, 2022)، TTC (Aras, 2021)، ScrumAlliance Scrum Master (2023).',
      en: 'Certificates: Web Training Center (net-college, 2022), Technical & vocational diploma (Aras, 2022), TTC (Aras, 2021), ScrumAlliance Scrum Master (2023).',
      es: 'Certificados: Web Training Center (net-college, 2022), diploma técnico-profesional (Aras, 2022), TTC (Aras, 2021), ScrumAlliance Scrum Master (2023).' },
    next: ['education', 'experience', 'about'] },

  /* React */
  { re: /react(?:js)?|ریکت|راکت|ری ?اکت/i,
    a: {
      fa: 'React قوی‌ترین مهارت فرانتش است (~۹۰٪). با Redux، RTK Query و React Query هم کار می‌کند و در BitBox و Novinan استفاده کرده.',
      en: 'React is his strongest front-end skill (~90%). He also works with Redux, RTK Query and React Query — used in BitBox and Novinan.',
      es: 'React es su habilidad front-end más fuerte (~90%). También trabaja con Redux, RTK Query y React Query — usados en BitBox y Novinan.' },
    next: ['next', 'frontend', 'projects'] },

  /* Next.js */
  { re: /next\.?js|nextjs|نکست|\bnext\b/i,
    a: {
      fa: 'Next.js یکی از تخصص‌های اصلی‌اش است (~۹۵٪). همه پروژه‌های اخیرش (BitBox، Vexa، آلفا پک، پارس ایر) با Next.js ساخته شدن.',
      en: 'Next.js is a core specialty (~95%). All his recent projects (BitBox, Vexa, Alpha Pack, Pars Air) are built with it.',
      es: 'Next.js es una especialidad central (~95%). Todos sus proyectos recientes (BitBox, Vexa, Alpha Pack, Pars Air) lo usan.' },
    next: ['react', 'frontend', 'projects'] },

  /* Laravel */
  { re: /laravel|لاراول/i,
    a: {
      fa: 'لاراول تخصص اصلی بک‌انش است (~۹۰٪). با Laravel 11 و 12، Sanctum و Reverb کار کرده — مثلاً سیستم مدیریت دانشجویی و API پارس ایر.',
      en: 'Laravel is his main back-end specialty (~90%). He has worked with Laravel 11 and 12, Sanctum and Reverb — e.g. the student system and the Pars Air API.',
      es: 'Laravel es su especialidad principal de back-end (~90%). Ha usado Laravel 11 y 12, Sanctum y Reverb — por ejemplo el sistema estudiantil y la API de Pars Air.' },
    next: ['php', 'backend', 'projects'] },

  /* PHP */
  { re: /\bphp\b|پی ?اچ ?پی/i,
    a: {
      fa: 'PHP مهارت اصلی‌اش است (~۹۰٪) و پایهٔ لاراول است. در همه پروژه‌های بک‌اند از آن استفاده کرده.',
      en: 'PHP is a core skill (~90%) and the base of his Laravel work. He uses it in all his back-end projects.',
      es: 'PHP es una habilidad central (~90%) y la base de su trabajo con Laravel. Lo usa en todos sus proyectos de back-end.' },
    next: ['laravel', 'backend', 'database'] },

  /* TypeScript */
  { re: /typescript|type ?script|تایپ ?اسکریپت|\bts\b/i,
    a: {
      fa: 'TypeScript در سطح کاری است (~۶۰٪) و هنوز در حال یادگیری است. در آلفا پک و پارس ایر استفاده کرده.',
      en: 'TypeScript is at working level (~60%) and still growing. Used in Alpha Pack and Pars Air.',
      es: 'TypeScript está a nivel de trabajo (~60%) y sigue creciendo. Usado en Alpha Pack y Pars Air.' },
    next: ['frontend', 'react', 'skills'] },

  /* Tailwind */
  { re: /tailwind|تیلویند|تیل ?ویند/i,
    a: {
      fa: 'Tailwind (~۹۰٪) — تقریباً در همه پروژه‌هایش استفاده می‌شود.',
      en: 'Tailwind (~90%) — used in almost every project.',
      es: 'Tailwind (~90%) — usado en casi todos sus proyectos.' },
    next: ['frontend', 'react', 'next'] },

  /* Redux */
  { re: /redux|rtk|ریداکس|رداکس/i,
    a: {
      fa: 'Redux و RTK Query (~۹۰٪) — استفاده‌شده در BitBox و Novinan برای مدیریت state پیچیده.',
      en: 'Redux and RTK Query (~90%) — used in BitBox and Novinan for complex state.',
      es: 'Redux y RTK Query (~90%) — usados en BitBox y Novinan para estado complejo.' },
    next: ['react', 'frontend', 'projects'] },

  /* Reverb / WebSocket */
  { re: /reverb|websocket|socket|ریورب|وب ?سوکت/i,
    a: {
      fa: 'Laravel Reverb را هنوز یاد می‌گیرد (~۴۵٪) ولی در سیستم مدیریت دانشجویی از آن استفاده کرده است.',
      en: 'He is still learning Laravel Reverb (~45%) but has used it in the student management system.',
      es: 'Todavía aprende Laravel Reverb (~45%), pero ya lo usó en el sistema de gestión estudiantil.' },
    next: ['laravel', 'backend', 'projects'] },

  /* Database */
  { re: /database|sql|mysql|دیتابیس|پایگاه داده|بانک اطلاعاتی|mongo|postgres|قاعدة/i,
    a: {
      fa: 'MySQL (~۸۵٪) دیتابیس اصلی‌اش است؛ در تویسرکان، پارس ایر و سیستم دانشجویی استفاده شده.',
      en: 'MySQL (~85%) is his main database — used in Tuyserkan, Pars Air and the student system.',
      es: 'MySQL (~85%) es su base de datos principal — usada en Tuyserkan, Pars Air y el sistema estudiantil.' },
    next: ['laravel', 'backend', 'php'] },

  /* Frontend general */
  { re: /front ?end|frontend|فرانت|فرانت ?اند/i,
    a: {
      fa: 'فرانت‌اند: React، Next.js، Redux، RTK Query، React Query، Tailwind، TypeScript (در سطح کاری). روزمره با این‌ها کار می‌کند.',
      en: 'Front end: React, Next.js, Redux, RTK Query, React Query, Tailwind, TypeScript (working level). These are his daily tools.',
      es: 'Front-end: React, Next.js, Redux, RTK Query, React Query, Tailwind, TypeScript (nivel de trabajo). Son sus herramientas diarias.' },
    next: ['react', 'next', 'tailwind'] },

  /* Backend general */
  { re: /back ?end|backend|server|api|بک ?اند|بکاند|سرور/i,
    a: {
      fa: 'بک‌اند: PHP و Laravel (تخصص اصلی)، Sanctum برای احراز هویت، MySQL برای دیتابیس و Reverb (در حال یادگیری) برای وب‌سوکت.',
      en: 'Back end: PHP and Laravel (core), Sanctum for auth, MySQL for storage and Reverb (learning) for WebSockets.',
      es: 'Back-end: PHP y Laravel (núcleo), Sanctum para auth, MySQL para almacenamiento y Reverb (aprendiendo) para WebSockets.' },
    next: ['laravel', 'php', 'database'] },

  /* Crypto */
  { re: /crypto|bitcoin|blockchain|ارز|رمزارز|کریپتو|cripto|بلاکچین/i,
    a: {
      fa: 'در حال کسب تجربه در حوزه ارز دیجیتال و ابزارهای آن است؛ نمونه‌اش BitBox است.',
      en: 'He is currently gaining experience in crypto products and tooling; BitBox is the clearest example.',
      es: 'Actualmente gana experiencia en productos y herramientas cripto; BitBox es el ejemplo más claro.' },
    next: ['bitbox', 'projects', 'skills'] },

  /* Location */
  { re: /where|location|live|country|city|کجا|ساکن|شهر|کشور|dónde|vive|ubicaci|país|ciudad|karaj|کرج|iran|ایران/i,
    a: {
      fa: 'در کرج، ایران زندگی می‌کند.',
      en: 'He is based in Karaj, Iran.',
      es: 'Vive en Karaj, Irán.' },
    next: ['contact', 'about', 'email'] },

  /* Hobbies / interests */
  { re: /hobb|interest|fun|free ?time|علاقه|سرگرمی|اوقات فراغت|aficion|interes|tiempo libre/i,
    a: {
      fa: 'کتاب‌های روانشناسی و فلسفی، رپ داستان‌دار، بازی‌های استراتژی، بدنسازی (البته خواب اولویت است!) و کار کردن در کافه.',
      en: 'Psychology and philosophy books, story-driven rap, strategy games, bodybuilding (sleep comes first!) and working from cafés.',
      es: 'Libros de psicología y filosofía, rap con narrativa, juegos de estrategia, musculación (¡el sueño es lo primero!) y trabajar desde cafeterías.' },
    next: ['about', 'projects', 'contact'] },

  /* Years of experience */
  { re: /how many years|years of experience|سال تجربه|چند سال|años de experiencia/i,
    a: {
      fa: 'از ۲۰۲۳ (حدود ۳ سال) تجربه توسعه وب دارد.',
      en: 'Since 2023 — about 3 years of web development experience.',
      es: 'Desde 2023 — alrededor de 3 años de experiencia en desarrollo web.' },
    next: ['experience', 'about', 'projects'] },

  /* salary / visa */
  { re: /salary|pay|rate|money|visa|relocat|حقوق|دستمزد|ویزا|مهاجرت|نقل مکان|sueldo|salario|visa|mudar/i,
    a: {
      fa: 'اطلاعات حقوق، ویزا یا مهاجرت را ندارم. برای این موارد مستقیم ایمیل بزنید.',
      en: 'I don’t have information about salary, visa or relocation. Please email directly for those.',
      es: 'No tengo información sobre salario, visa o reubicación. Escríbele directamente.' },
    next: ['contact', 'email', 'about'] },

  /* age */
  { re: /\bage\b|old are|سن|چند سالت|edad|años tienes/i,
    a: {
      fa: 'سن دقیقش را نمی‌دانم، ولی دانشجوی کارشناسی ۲۰۲۲-۲۰۲۶ است.',
      en: "I don't know his exact age, but he's an undergrad (2022-2026).",
      es: 'No sé su edad exacta, pero es estudiante de grado (2022-2026).' },
    next: ['education', 'about', 'contact'] },

  /* who / about */
  { re: /who|about|introduce|yourself|tell me|کیست|درباره|معرفی|quién|sobre|háblame|hablame/i,
    a: {
      fa: 'امیرسجاد نوری توسعه‌دهنده فول‌استک اهل کرج است. از ۲۰۲۳ وب‌اپ می‌سازد و تدریس می‌کند، با تمرکز روی React، Next.js و Laravel.',
      en: 'Amirsajjad Nouri is a full-stack developer from Karaj, Iran. Since 2023 he has been building web apps and teaching, focused on React, Next.js and Laravel.',
      es: 'Amirsajjad Nouri es un desarrollador full stack de Karaj, Irán. Desde 2023 crea apps web y enseña, centrado en React, Next.js y Laravel.' },
    next: ['skills', 'projects', 'contact'] },

  /* generic projects */
  { re: /project|built|portfolio|best work|پروژه|نمونه|بهترین|proyecto|mejores|trabajos/i,
    a: {
      fa: 'پروژه‌های شاخص: BitBox (صرافی ارز دیجیتال)، سیستم مدیریت دانشجویی (Laravel + Reverb + Telegram bot + PWA)، پارس ایر (Next.js + Laravel API)، آلفا پک (Next.js + TS)، Novinan، Vexa و پایگاه خبری تویسرکان. جزئیات در تب «پروژه‌ها».',
      en: 'Highlights: BitBox (crypto exchange UI), Student management system (Laravel + Reverb + Telegram bot + PWA), Pars Air (Next.js + Laravel API), Alpha Pack (Next.js + TS), Novinan, Vexa and the Tuyserkan news portal. Details in the Projects tab.',
      es: 'Destacan: BitBox (UI de exchange cripto), Sistema de gestión estudiantil (Laravel + Reverb + bot de Telegram + PWA), Pars Air (Next.js + API Laravel), Alpha Pack (Next.js + TS), Novinan, Vexa y el portal de noticias de Tuyserkan. Detalles en la pestaña Proyectos.' },
    next: ['bitbox', 'parsair', 'alphapack'] },

  /* generic skills — LAST */
  { re: /skill|stack|tech|special|tool|مهارت|تکنولوژی|استک|تخصص|ابزار|habilidad|tecnolog|herramient|especialidad|domina/i,
    a: {
      fa: 'فول‌استک: React، Next.js، Redux، Tailwind در فرانت و PHP، Laravel، MySQL در بک. TypeScript در سطح کاری و Reverb در حال یادگیری.',
      en: 'Full stack: React, Next.js, Redux and Tailwind on the front end; PHP, Laravel and MySQL on the back end. TypeScript is working level and Reverb is being learned.',
      es: 'Full stack: React, Next.js, Redux y Tailwind en el front-end; PHP, Laravel y MySQL en el back-end. TypeScript a nivel de trabajo y Reverb en aprendizaje.' },
    next: ['frontend', 'backend', 'react'] },
];

const FALLBACK = {
  fa: `این مورد را دقیق نمی‌دانم. برای جواب مطمئن مستقیم ایمیل بزنید: ${EMAIL}`,
  en: `I don't have that information. For a reliable answer, email him at ${EMAIL}`,
  es: `No tengo esa información. Para una respuesta fiable, escríbele a ${EMAIL}`,
};

/* ===================================================================
 *  deepAnswer — returns { text, next } where next is a list of ready follow-ups
 * =================================================================== */
export function deepAnswer(query, lang) {
  const q = (query || '').trim();
  const sugPool = CHAT_SUGGESTIONS[lang] || CHAT_SUGGESTIONS.en;
  const resolve = (keys) => (keys || []).map((k) => sugPool[k]).filter(Boolean);

  if (!q) return { text: FALLBACK[lang] || FALLBACK.en, next: resolve(['about', 'projects', 'contact']) };

  for (const item of KB) {
    if (item.re.test(q)) {
      return { text: item.a[lang] || item.a.en, next: resolve(item.next) };
    }
  }
  return { text: FALLBACK[lang] || FALLBACK.en, next: resolve(['about', 'projects', 'contact']) };
}

/* Backwards-compatible helper (text only) */
export function localAnswer(q, lang) {
  return deepAnswer(q, lang).text;
}