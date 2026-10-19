import { useState, useEffect, useRef } from 'react';
import PROFILE from '../public/me.jpg'
import TTC from '../public/TTC.jpg'
import Scrum from '../public/Scrum.jpg'
import WEB from '../public/WEB.jpg'
import Diploma from '../public/Diploma.jpg'
import { BsTwitterX } from 'react-icons/bs';
import {
  FaGithub, FaLinkedin, FaLaravel, FaTelegram, FaTimes, FaInstagram, FaYoutube,
  FaCode, FaLaptopCode, FaServer, FaReact, FaGitAlt, FaRocket, FaGraduationCap,
  FaCertificate, FaHeart, FaCoffee, FaMusic, FaGamepad, FaBook, FaGlobe, FaPhone,
  FaMapMarkerAlt, FaDownload, FaQuoteLeft, FaCheckCircle, FaJs, FaPhp, FaExternalLinkAlt,
  FaSun, FaMoon
} from 'react-icons/fa';
import { MdEmail, MdWork, MdSchool, MdCode, MdPalette } from 'react-icons/md';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiReactquery, SiRedux } from 'react-icons/si';
import { GiCircuitry } from 'react-icons/gi';
import { DiMysql, DiLaravel } from 'react-icons/di';

/* ------------------------------------------------------------------ *
 *  Editable constants — keep these honest, recruiters check them.
 * ------------------------------------------------------------------ */
const YEARS = '3+';
const STUDENTS = '34+';

/* ------------------------------ i18n ------------------------------- */
const LANGS = [
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
];

const UI = {
  fa: {
    loading: 'در حال بارگذاری پورتفولیو...', loadingSub: 'آماده‌سازی نمایش حرفه‌ای',
    light: 'حالت روشن', dark: 'حالت تاریک',
    brand: 'برونگراترین برنامه نویس جهان',
    name: 'امیرسجاد نوری', role: 'Full Stack Developer',
    bio: `عاشق خلق تجربه‌های دیجیتال خارق‌العاده. ${YEARS} سال تجربه در توسعه اپلیکیشن‌های وب فول‌استک.`,
    email: 'ایمیل', phone: 'تلفن', location: 'موقعیت', locationVal: 'ایران، کرج',
    resume: 'دانلود رزومه (PDF)', social: 'شبکه‌های اجتماعی',
    tabs: { about: 'درباره من', skills: 'مهارت‌ها', projects: 'پروژه‌ها', experience: 'تجربه کاری', education: 'تحصیلات', interests: 'علاقه‌مندی‌ها' },
    sub: { about: 'معرفی شخصی و فلسفه کاری', skills: 'تخصص‌ها و تکنولوژی‌های مسلط', projects: 'نمونه کارهای منتخب، با پیش‌نمایش زنده', experience: 'تجربه حرفه‌ای و دستاوردها', education: 'سوابق تحصیلی و گواهینامه‌ها', interests: 'فراتر از کدنویسی' },
    aboutTitle: 'درباره من',
    p1: `به دنیای کدها و الگوریتم‌ها خوش آمدید! من امیرسجاد نوری هستم، توسعه‌دهنده فول‌استک با ${YEARS} سال تجربه در ساخت اپلیکیشن‌های وب مدرن و مقیاس‌پذیر.`,
    p2: 'تخصص اصلی من توسعه وب اپلیکیشن‌های مدرن با تکنولوژی‌های برتر دنیاست و در حال کسب تجربه در زمینه ارزهای دیجیتال و ابزارهای آن هستم.',
    philTitle: 'فلسفه کاری من',
    phil: ['کد تمیز و قابل نگهداری اولویت اول است', 'تست‌نویسی کامل برای کاهش باگ‌ها', 'بهینه‌سازی عملکرد و تجربه کاربری', 'همکاری مؤثر با تیم و مستندسازی کامل'],
    stats: ['سال تجربه', 'پروژه', 'کارآموز آموزش‌دیده', 'گواهینامه'],
    skillsTitle: 'مهارت‌های فنی', tools: 'ابزارها و پلتفرم‌ها',
    cats: { Frontend: 'فرانت‌اند', Backend: 'بک‌اند', Database: 'پایگاه داده' },
    projTitle: 'پروژه‌های برجسته', all: 'همه', liveOnly: 'آنلاین',
    live: 'آنلاین', code: 'کد منبع', view: 'مشاهده پروژه', noLive: 'پیش‌نمایش از گیت‌هاب',
    expTitle: 'سوابق کاری', ach: 'دستاوردهای کلیدی:',
    eduTitle: 'تحصیلات', acad: 'تحصیلات آکادمیک', certs: 'گواهینامه‌ها', open: 'مشاهده', certAbout: 'درباره این گواهینامه',
    intTitle: 'علاقه‌مندی‌ها',
    quote: 'برنامه‌نویسی برای من فقط یک شغل نیست، یک هنر است. هنر حل مسئله، خلق ارزش و ساختن آینده.',
    rights: 'کلیه حقوق محفوظ است', made: 'طراحی و توسعه با ❤️ توسط امیرسجاد نوری',
  },
  en: {
    loading: 'Loading portfolio...', loadingSub: 'Preparing the experience',
    light: 'Light mode', dark: 'Dark mode',
    brand: 'The most extroverted programmer alive',
    name: 'Amirsajjad Nouri', role: 'Full Stack Developer',
    bio: `Passionate about crafting exceptional digital experiences. ${YEARS} years building full-stack web applications.`,
    email: 'Email', phone: 'Phone', location: 'Location', locationVal: 'Karaj, Iran',
    resume: 'Download résumé (PDF)', social: 'Social',
    tabs: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', education: 'Education', interests: 'Interests' },
    sub: { about: 'Who I am and how I work', skills: 'Core technologies I work with', projects: 'Selected work, with live previews', experience: 'Professional experience and results', education: 'Degrees and certificates', interests: 'Beyond the code' },
    aboutTitle: 'About me',
    p1: `Welcome to the world of code and algorithms! I'm Amirsajjad Nouri, a full-stack developer with ${YEARS} years of experience building modern, scalable web applications.`,
    p2: "I specialise in modern web apps built with leading technologies, and I'm currently gaining experience with cryptocurrency products and tooling.",
    philTitle: 'How I work',
    phil: ['Clean, maintainable code comes first', 'Thorough testing to reduce bugs', 'Performance and user experience matter', 'Teamwork and complete documentation'],
    stats: ['Years of experience', 'Projects', 'Trainees taught', 'Certificates'],
    skillsTitle: 'Technical skills', tools: 'Tools & platforms',
    cats: { Frontend: 'Frontend', Backend: 'Backend', Database: 'Database' },
    projTitle: 'Featured projects', all: 'All', liveOnly: 'Live',
    live: 'Live', code: 'Source code', view: 'Open live site', noLive: 'Preview from GitHub',
    expTitle: 'Work experience', ach: 'Key achievements:',
    eduTitle: 'Education', acad: 'Academic background', certs: 'Certificates', open: 'View', certAbout: 'About this certificate',
    intTitle: 'Interests',
    quote: 'Programming is more than a job to me, it is a craft: solving problems, creating value and building the future.',
    rights: 'All rights reserved', made: 'Designed & built with ❤️ by Amirsajjad Nouri',
  },
  es: {
    loading: 'Cargando portafolio...', loadingSub: 'Preparando la experiencia',
    light: 'Modo claro', dark: 'Modo oscuro',
    brand: 'El programador más extrovertido del mundo',
    name: 'Amirsajjad Nouri', role: 'Desarrollador Full Stack',
    bio: `Apasionado por crear experiencias digitales excepcionales. ${YEARS} años desarrollando aplicaciones web full stack.`,
    email: 'Correo', phone: 'Teléfono', location: 'Ubicación', locationVal: 'Karaj, Irán',
    resume: 'Descargar currículum (PDF)', social: 'Redes sociales',
    tabs: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', experience: 'Experiencia', education: 'Educación', interests: 'Intereses' },
    sub: { about: 'Quién soy y cómo trabajo', skills: 'Tecnologías que domino', projects: 'Trabajos seleccionados, con vista previa en vivo', experience: 'Experiencia profesional y logros', education: 'Estudios y certificados', interests: 'Más allá del código' },
    aboutTitle: 'Sobre mí',
    p1: `¡Bienvenido al mundo del código y los algoritmos! Soy Amirsajjad Nouri, desarrollador full stack con ${YEARS} años de experiencia creando aplicaciones web modernas y escalables.`,
    p2: 'Me especializo en aplicaciones web modernas con las mejores tecnologías y actualmente adquiero experiencia en criptomonedas y sus herramientas.',
    philTitle: 'Cómo trabajo',
    phil: ['El código limpio y mantenible es lo primero', 'Pruebas completas para reducir errores', 'Rendimiento y experiencia de usuario', 'Trabajo en equipo y documentación completa'],
    stats: ['Años de experiencia', 'Proyectos', 'Alumnos formados', 'Certificados'],
    skillsTitle: 'Habilidades técnicas', tools: 'Herramientas y plataformas',
    cats: { Frontend: 'Frontend', Backend: 'Backend', Database: 'Base de datos' },
    projTitle: 'Proyectos destacados', all: 'Todos', liveOnly: 'En vivo',
    live: 'En vivo', code: 'Código fuente', view: 'Abrir sitio', noLive: 'Vista previa desde GitHub',
    expTitle: 'Experiencia laboral', ach: 'Logros clave:',
    eduTitle: 'Educación', acad: 'Formación académica', certs: 'Certificados', open: 'Ver', certAbout: 'Sobre este certificado',
    intTitle: 'Intereses',
    quote: 'Para mí programar es más que un trabajo, es un arte: resolver problemas, crear valor y construir el futuro.',
    rights: 'Todos los derechos reservados', made: 'Diseñado y desarrollado con ❤️ por Amirsajjad Nouri',
  },
};

/* ------------------------------ data ------------------------------- */
const socialLinks = [
  { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/CodeWizard-Amir', color: 'bg-gray-900 hover:bg-gray-950' },
  { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/amirsajjad-nouri-8a0910383/', color: 'bg-blue-700 hover:bg-blue-800' },
  { icon: <BsTwitterX />, name: 'X.com', url: 'https://x.com/AmirSjjad_2003', color: 'bg-gray-700 hover:bg-gray-900' },
  { icon: <FaTelegram />, name: 'Telegram', url: 'https://t.me/Amir_sjd12', color: 'bg-blue-500 hover:bg-blue-600' },
  { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com/amirsajjad_nouri', color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' },
  // { icon: <FaYoutube />, name: 'YouTube', url: 'https://youtube.com/...', color: 'bg-red-600 hover:bg-red-700' }, // add a real channel URL first
];

const techStack = [
  { category: 'Frontend', skills: [
    { name: 'JavaScript', icon: <FaJs />, level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', icon: <FaReact />, level: 90, color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 95, color: 'from-gray-800 to-gray-600' },
    { name: 'Redux', icon: <SiRedux />, level: 90, color: 'from-purple-400 to-indigo-600' },
    { name: 'React-Query', icon: <SiReactquery />, level: 90, color: 'from-green-600 to-yellow-500' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 60, color: 'from-blue-600 to-blue-400' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 90, color: 'from-teal-500 to-cyan-400' },
  ] },
  { category: 'Backend', skills: [
    { name: 'PHP', icon: <FaPhp />, level: 90, color: 'from-purple-800 to-blue-600' },
    { name: 'Laravel', icon: <FaLaravel />, level: 90, color: 'from-red-600 to-orange-400' },
    { name: 'Laravel Reverb', icon: <DiLaravel />, level: 45, color: 'from-pink-600 to-red-400' },
  ] },
  { category: 'Database', skills: [
    { name: 'MySQL', icon: <DiMysql />, level: 85, color: 'from-green-600 to-sky-400' },
  ] },
];

const projects = [
  { title: { fa: 'صرافی ارز دیجیتال بیت باکس', en: 'BitBox Crypto Exchange', es: 'BitBox – Exchange de criptomonedas' },
    desc: { fa: 'پلتفرم معاملات ارز دیجیتال با قابلیت‌های پیشرفته تریدینگ', en: 'Crypto trading platform with advanced trading features', es: 'Plataforma de trading de criptomonedas con funciones avanzadas' },
    tech: ['Next.js', 'Tailwind', 'json-server', 'Redux', 'RTK Query'], repo: 'bit-box', live: 'https://bit-box.vercel.app' },
  { title: { fa: 'سیستم مدیریت دانشجویی', en: 'Student Management System', es: 'Sistema de gestión estudiantil' },
    desc: { fa: 'سیستم مدرن با امکانات فراوان مانند ربات تلگرام و PWA', en: 'Modern system with a Telegram bot, realtime features and PWA support', es: 'Sistema moderno con bot de Telegram, tiempo real y soporte PWA' },
    tech: ['Laravel', 'Tailwind', 'jQuery', 'Reverb', 'Telegram Bot', 'PWA'], repo: 'myClass', live: null },
  { title: { fa: 'پایگاه خبری تویسرکان', en: 'Tuyserkan News Portal', es: 'Portal de noticias de Tuyserkan' },
    desc: { fa: 'وبسایت خبری برای شهرستان تاریخی تویسرکان', en: 'News website for the historic city of Tuyserkan', es: 'Sitio de noticias de la histórica ciudad de Tuyserkan' },
    tech: ['Laravel 11', 'Tailwind', 'Blade', 'MySQL', 'jQuery', 'SweetAlert'], repo: 'tuysekannews', live: null },
  { title: { fa: 'وبسایت شرکتی نوینان', en: 'Novinan Company Website', es: 'Sitio corporativo Novinan' },
    desc: { fa: 'شرکت و تیم طراحی وب اپ‌های مدرن و پیشرفته', en: 'Company site of a modern web-app design team', es: 'Sitio de un equipo de diseño de aplicaciones web modernas' },
    tech: ['React', 'json-server', 'Tailwind', 'Redux', 'RTK Query'], repo: 'novins', live: 'https://novins.vercel.app' },
  { title: { fa: 'گروه نرم‌افزاری Vexa', en: 'Vexa Software Group', es: 'Grupo de software Vexa' },
    desc: { fa: 'گروه برنامه‌نویسی متشکل از سنیورها', en: 'Programming group made up of senior developers', es: 'Grupo de programación formado por desarrolladores senior' },
    tech: ['Next.js', 'Framer Motion', 'React Icons', 'Tailwind'], repo: 'Vexa', live: 'https://vexxaa1.vercel.app/' },
  { title: { fa: 'آکادمی آنلاین آلفا پک', en: 'Alpha Pack Online Academy', es: 'Alpha Pack – Academia en línea' },
    desc: { fa: 'پلتفرم آموزش آنلاین', en: 'Online learning platform', es: 'Plataforma de aprendizaje en línea' },
    tech: ['Next.js', 'json-server', 'Tailwind', 'TypeScript'], repo: 'alphapack', live: 'https://alphapacks.vercel.app/' },
  { title: { fa: 'پارس ایر - فرانت‌اند', en: 'Pars Air – Frontend', es: 'Pars Air – Frontend' },
    desc: { fa: 'شرکت حمل‌ونقل بار هوایی', en: 'Air cargo company', es: 'Empresa de carga aérea' },
    tech: ['Next.js', 'json-server', 'Tailwind', 'NextAuth', 'React Query'], repo: 'agence-frontEnd', live: null },
  { title: { fa: 'پارس ایر - بک‌اند', en: 'Pars Air – Backend', es: 'Pars Air – Backend' },
    desc: { fa: 'API شرکت حمل‌ونقل بار هوایی', en: 'REST API for the air cargo company', es: 'API REST de la empresa de carga aérea' },
    tech: ['Laravel 12', 'PHP', 'Sanctum', 'MySQL', 'REST API'], repo: 'agence-backend', live: null },
];

const experience = [
  { role: { fa: 'مدرس برنامه‌نویسی فرانت‌اند', en: 'Front-end Programming Instructor', es: 'Instructor de programación Front-end' },
    company: { fa: 'آموزشگاه سوری', en: 'Souri Institute', es: 'Instituto Souri' },
    period: { fa: '۲۰۲۳ - اکنون', en: '2023 – Present', es: '2023 – Actualidad' },
    desc: { fa: 'تدریس فرانت‌اند: React.js، jQuery و ...', en: 'Teaching front-end development: React.js, jQuery and more', es: 'Enseñanza de desarrollo front-end: React.js, jQuery y más' },
    ach: { fa: ['آموزش حداقل ۳۴ کارآموز فرانت‌اند', 'تجربه کاری تدریس', 'ارتقای مهارت‌های شخصی'], en: ['Trained 34+ front-end trainees', 'Hands-on teaching experience', 'Continuous personal growth'], es: ['Formé a más de 34 alumnos de front-end', 'Experiencia docente real', 'Crecimiento personal continuo'] } },
  { role: { fa: 'مدرس برنامه‌نویسی بک‌اند', en: 'Back-end Programming Instructor', es: 'Instructor de programación Back-end' },
    company: { fa: 'آموزشگاه سوری', en: 'Souri Institute', es: 'Instituto Souri' },
    period: { fa: '۲۰۲۳ - ۲۰۲۴', en: '2023 – 2024', es: '2023 – 2024' },
    desc: { fa: 'تدریس حرفه‌ای لاراول و PHP', en: 'Professional teaching of Laravel and PHP', es: 'Enseñanza profesional de Laravel y PHP' },
    ach: { fa: ['آموزش حداقل ۴ کارآموز بک‌اند', 'تجربه کاری تدریس', 'ارتقای مهارت‌های شخصی'], en: ['Trained 4+ back-end trainees', 'Hands-on teaching experience', 'Continuous personal growth'], es: ['Formé a más de 4 alumnos de back-end', 'Experiencia docente real', 'Crecimiento personal continuo'] } },
  { role: { fa: 'برنامه‌نویس پروژه‌های دانشگاهی', en: 'University Projects Developer', es: 'Desarrollador de proyectos universitarios' },
    company: { fa: 'دانشگاه بوعلی سینا - خوارزمی', en: 'Bu-Ali Sina – Kharazmi University', es: 'Universidad Bu-Ali Sina – Kharazmi' },
    period: { fa: '۲۰۲۳ - اکنون', en: '2023 – Present', es: '2023 – Actualidad' },
    desc: { fa: 'توسعه اپلیکیشن‌های وب با React، Redux و Laravel', en: 'Building web applications with React, Redux and Laravel', es: 'Desarrollo de aplicaciones web con React, Redux y Laravel' },
    ach: { fa: ['توسعه ۵+ پروژه موفق', 'بهینه‌سازی SEO', 'پیاده‌سازی PWA'], en: ['Delivered 5+ successful projects', 'SEO optimisation', 'PWA implementation'], es: ['Entregué más de 5 proyectos exitosos', 'Optimización SEO', 'Implementación de PWA'] } },
];

const education = [
  { degree: { fa: 'دیپلم ریاضی', en: 'High School Diploma, Mathematics', es: 'Bachillerato en Matemáticas' },
    school: { fa: 'مدرسه دهخدا', en: 'Dehkhoda School', es: 'Escuela Dehkhoda' }, period: '2019 - 2022',
    desc: { fa: 'ریاضیات', en: 'Mathematics', es: 'Matemáticas' } },
  { degree: { fa: 'کارشناسی مهندسی کامپیوتر', en: 'B.Sc. Computer Engineering', es: 'Grado en Ingeniería Informática' },
    school: { fa: 'دانشگاه بوعلی - دانشگاه خوارزمی', en: 'Bu-Ali Sina – Kharazmi University', es: 'Univ. Bu-Ali Sina – Kharazmi' }, period: '2022 - 2026',
    desc: { fa: 'گرایش نرم‌افزار', en: 'Software track', es: 'Especialidad en software' } },
];

const interests = [
  { icon: <FaCode />, name: { fa: 'برنامه‌نویسی', en: 'Programming', es: 'Programación' }, d: { fa: 'عاشق کد زدن و حل مسائل پیچیده', en: 'Love writing code and solving hard problems', es: 'Me encanta programar y resolver problemas complejos' } },
  { icon: <FaBook />, name: { fa: 'مطالعه', en: 'Reading', es: 'Lectura' }, d: { fa: 'کتاب‌های روانشناسی و فلسفی', en: 'Psychology and philosophy books', es: 'Libros de psicología y filosofía' } },
  { icon: <FaMusic />, name: { fa: 'موسیقی', en: 'Music', es: 'Música' }, d: { fa: 'رپ داستان‌دار', en: 'Story-driven rap', es: 'Rap con narrativa' } },
  { icon: <FaGamepad />, name: { fa: 'گیمینگ', en: 'Gaming', es: 'Videojuegos' }, d: { fa: 'استراتژی', en: 'Strategy games', es: 'Juegos de estrategia' } },
  { icon: <FaHeart />, name: { fa: 'ورزش', en: 'Fitness', es: 'Deporte' }, d: { fa: 'بدنسازی، اما خواب اولویت است', en: 'Bodybuilding, but sleep comes first', es: 'Musculación, pero el sueño es lo primero' } },
  { icon: <FaCoffee />, name: { fa: 'کافه', en: 'Cafés', es: 'Cafeterías' }, d: { fa: 'عاشق فضای کافه برای کار و مطالعه', en: 'Cafés are my favourite place to work and read', es: 'Mi lugar favorito para trabajar y leer' } },
];

const certifications = [
  { name: 'Web Training Center', issuer: 'net-college', year: '2022', image: WEB, desc: { fa: 'گواهینامه تکمیل دوره آموزش وب', en: 'Web development training completion certificate', es: 'Certificado de finalización del curso de desarrollo web' } },
  { name: 'Diploma', issuer: 'Aras-institute', year: '2022', image: Diploma, desc: { fa: 'دیپلم فنی و حرفه‌ای', en: 'Technical & vocational diploma', es: 'Diploma técnico y profesional' } },
  { name: 'TTC', issuer: 'Aras-institute', year: '2021', image: TTC, desc: { fa: 'گواهینامه آموزش مربی‌گری', en: 'Teacher training certificate', es: 'Certificado de formación docente' } },
  { name: 'ScrumAlliance', issuer: 'Josef Balahan (USA)', year: '2023', image: Scrum, desc: { fa: 'گواهینامه اسکرام مستر بین‌المللی', en: 'International Scrum Master certificate', es: 'Certificado internacional de Scrum Master' } },
];

const TABS = ['about', 'skills', 'projects', 'experience', 'education', 'interests'];


export const ROLES = {
  fa: ['توسعه‌دهنده فول‌استک', 'متخصص React و Next.js', 'مهندس Laravel'],
  en: ['Full Stack Developer', 'React & Next.js Specialist', 'Laravel Engineer'],
  es: ['Desarrollador Full Stack', 'Especialista en React y Next.js', 'Ingeniero Laravel'],
};

export { LANGS, UI, YEARS, STUDENTS, socialLinks, techStack, projects, experience, education, interests, certifications, TABS };