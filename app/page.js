'use client'
import { useState, useEffect } from 'react';
import PROFILE from '../public/me.jpg'
import TTC from '../public/TTC.jpg'
import Scrum from '../public/Scrum.jpg'
import WEB from '../public/WEB.jpg'
import Diploma from '../public/Diploma.jpg'

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLaravel,
  FaTelegram,
  FaTimes,
  FaInstagram,
  FaYoutube,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaRocket,
  FaStar,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaHeart,
  FaCoffee,
  FaMusic,
  FaGamepad,
  FaBook,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaQuoteLeft
} from 'react-icons/fa';
import {
  MdEmail,
  MdWork,
  MdSchool,
  MdVerified,
  MdCode,
  MdPalette
} from 'react-icons/md';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiFigma
} from 'react-icons/si';
import { GiCircuitry } from 'react-icons/gi';
import { DiMysql } from "react-icons/di";
import { DiLaravel } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import Image from 'next/image';

const DeveloperPortfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // شبیه‌سازی لودینگ اولیه
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/CodeWizard-Amir', color: 'bg-gray-900 hover:bg-gray-950', text: 'github/username' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/amirsajjad-nouri-8a0910383/', color: 'bg-blue-700 hover:bg-blue-800', text: 'linkedin/username' },
    { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com/#', color: 'bg-sky-500 hover:bg-sky-600', text: '@username' },
    { icon: <FaTelegram />, name: 'Telegram', url: 'https://t.me/Amir_sjd12', color: 'bg-blue-500 hover:bg-blue-600', text: 't.me/username' },
    { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com/amirsajjad_nouri', color: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700', text: '@username' },
    { icon: <FaYoutube />, name: 'YouTube', url: 'https://youtube.com/c/#', color: 'bg-red-600 hover:bg-red-700', text: 'youtube/username' },
  ];

  const techStack = [
    {
      category: 'Frontend', skills: [
        { name: 'javascript', icon: <FaJs />, level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'React', icon: <FaReact />, level: 90, color: 'from-blue-400 to-cyan-400' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: 'from-gray-800 to-gray-600' },
        { name: 'redux', icon: <SiRedux />, level: 90, color: 'from-purple-400 to-indigo-600' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 45, color: 'from-blue-600 to-blue-400' },
        { name: 'Tailwind', icon: <SiTailwindcss />, level: 90, color: 'from-teal-500 to-cyan-400' },
      ]
    },
    {
      category: 'Backend', skills: [
        { name: 'PHP', icon: <FaPhp />, level: 85, color: 'from-purple-800 to-blue-600' },
        { name: 'Laravel', icon: <FaLaravel />, level: 85, color: 'from-red-600 to-orange-400' },
        { name: 'laravel-reverb', icon: <DiLaravel />, level: 85, color: 'from-pink-600 to-red-400' },
      ]
    },
    {
      category: 'Database', skills: [
        { name: 'mySql', icon: <DiMysql />, level: 85, color: 'from-green-600 to-sky-400' },
      ]
    },
  ];

  const projects = [
    {
      title: 'صرافی ارز دیجیتال بیت باکس',
      description: 'پلتفرم معاملات ارز دیجیتال با قابلیت‌های پیشرفته تریدینگ',
      tech: ['Next,js', 'tailwind', 'json-server', 'redux', 'RtkQuery'],
      github: 'https://github.com/CodeWizard-Amir/bit-box',
      live: 'https://bit-box.vercel.app',
      stars: 245,
      featured: true
    },
    {
      title: 'سیستم مدیریت دانشجویی کلاس',
      description: 'سیستم مدرن مجهز به بسیاری از امکانات مانند ربات تلگرام و PWA',
      tech: ['laravel', 'tailwind', 'jQuery', 'reverb', 'telegram-bot', 'pwa'],
      github: '#',
      live: '#',
      stars: 189,
      featured: true
    },
    {
      title: 'پایگاه خبری تویسرکان',
      description: 'وبسایت خبری برای شهرستان تاریخی تویسرکان',
      tech: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
      github: '#',
      live: 'https://tuyserkanmafakher.ir/',
      stars: 156,
      featured: false
    },
    {
      title: 'وبسایت شرکتی نوینان',
      description: 'شرکت و تیم طراحی وب اپ های مدرن و پیشرفته',
      tech: ['React.js', 'json-server', 'tailwind', 'redux',],
      github: 'https://github.com/CodeWizard-Amir/novins',
      live: 'https://novins.vercel.app',
      stars: 312,
      featured: true
    },
  ];

  const experience = [
    {
      role: 'مدرس برنامه نویسی فرانت',
      company: 'آموزشگاه سوری',
      period: '2023 - حال حاضر',
      description: 'مدرس برنامه نویسی فرانت اند React.js jQuery , ...',
      achievements: ['اموزش حداقل 34 کاراموز برنامه نویسی فرانت', 'تجربه کاری تدریس', 'ارتقای مهارت های شخصی']
    },
    {
      role: 'مدرس برنامه نویسی باک اند',
      company: 'آموزشگاه سوری',
      period: '2023 - 2024',
      description: 'تدریس فریمم وورک لاراول و زبان برنامه PHP به صورت حرفه ای',
      achievements: ['اموزش حداقل 4 کاراموز برنامه نویسی بک اند', 'تجربه کاری تدریس', 'ارتقای مهارت های شخصی']
    },
    {
      role: 'برنامه نویسی پروژه های دانشگاهی',
      company: 'بوعلی سینا - خوارزمی',
      period: '2023 - حال حاضر',
      description: 'توسعه اپلیکیشن‌های وب با React و Redux , laravel',
      achievements: ['توسعه 5+ پروژه موفق', 'بهینه‌سازی SEO', 'پیاده‌سازی PWA']
    }
  ];

  const education = [
    {
      degree: 'دیپلم ریاضی ',
      university: 'مدرسه دهخدا',
      period: '2019 - 2022',
      description: 'ریاضیات'
    },
    {
      degree: 'کارشناسی مهندسی کامپیوتر',
      university: 'دانشگاه بوعلی - دانشگاه خوارزمی',
      period: '2022 - 2026',
      description: 'گرایش نرم‌افزار'
    }
  ];

  const interests = [
    { icon: <FaCode />, name: 'برنامه‌نویسی', description: 'عاشق کد زدن و حل مسائل پیچیده' },
    { icon: <FaBook />, name: 'مطالعه', description: 'کتاب‌های روانشناسی دارک و فلسفی' },
    { icon: <FaMusic />, name: 'موسیقی', description: 'رپ مبتذل داستان دار' },
    { icon: <FaGamepad />, name: 'گیمینگ', description: 'استراتژی' },
    { icon: <FaHeart />, name: 'ورزش', description: 'بدنسازی اما خواب اولویت' },
    { icon: <FaCoffee />, name: 'کافه', description: 'عاشق فضای کافه برای کار و مطالعه' },
  ];

  const certifications = [
    {
      name: 'Web Training Center',
      issuer: 'net-college',
      year: '2022',
      image: WEB, // مسیر تصویر خودت را قرار بده
      description: 'گواهینامه تکمیل دوره آموزش وب'
    },
    {
      name: 'Diploma',
      issuer: 'Aras-institute',
      year: '2022',
      image: Diploma,
      description: 'دیپلم فنی و حرفه‌ای'
    },
    {
      name: 'TTC',
      issuer: 'Aras-institute',
      year: '2021',
      image: TTC,
      description: 'گواهینامه آموزش مربی‌گری'
    },
    {
      name: 'ScrumAlliance',
      issuer: 'josef-balahan-from-America',
      year: '2023',
      image: Scrum,
      description: 'گواهینامه اسکرام مستر بین‌المللی'
    },
  ];
  // تابع‌های openModal و closeModal را اضافه کنید:
  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
            <div className="mt-6">
              <div className="text-2xl font-bold text-gray-800">در حال بارگذاری پورتفولیو...</div>
              <div className="text-gray-600 mt-2">آماده‌سازی نمایش حرفه‌ای</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-indigo-50'}`}>
      {/* هدر اصلی */}
      <div className="relative overflow-hidden">
        {/* گرادیان پس‌زمینه */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>

        {/* الگوی دایره‌ای */}
        <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-xl mr-3">
                <FaLaptopCode className="text-2xl text-white" />
              </div>
              <h1 className="text-sm mx-2 lg:text-2xl  font-bold">برونگراترین برنامه نویس جهان</h1>
            </div>

            {/* دکمه Dark Mode */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800 shadow-lg'}`}
            >
              {isDarkMode ? 'حالت روشن' : 'حالت تاریک'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* سایدبار سمت راست - اطلاعات شخصی */}
            <div className={`lg:col-span-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-2xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-8`}>
              {/* تصویر پروفایل */}
              <div className="relative mx-auto w-48 h-48 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                  {/* جایگزین عکس شما */}
                  <Image alt='#' src={PROFILE} width={1000} quality={100} height={1000} />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {/* اول حرف اسم شما */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* اطلاعات شخصی */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">امیرسجاد نوری</h2>
                <div className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4">
                  Full Stack Developer
                </div>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  عاشق خلق تجربه‌های دیجیتال خارق‌العاده. بیش از 5 سال تجربه در توسعه اپلیکیشن‌های وب فول استک.
                </p>
              </div>

              {/* اطلاعات تماس */}
              <div className="space-y-4 mb-8">
                <div className={`flex items-center p-3 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg ml-3">
                    <MdEmail className="text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">ایمیل</div>
                    <div className="font-medium">amirwebsajjad@gmail.com</div>
                  </div>
                </div>

                <div className={`flex items-center p-3 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg ml-3">
                    <FaPhone className="text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">تلفن</div>
                    <div className="font-medium">09104816785</div>
                  </div>
                </div>

                <div className={`flex items-center p-3 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg ml-3">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">موقعیت</div>
                    <div className="font-medium">ایران، کرج</div>
                  </div>
                </div>
              </div>

              {/* دکمه دانلود رزومه */}
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition duration-300 flex items-center justify-center mb-8">
                <FaDownload className="ml-2" />
                دانلود رزومه (PDF)
              </button>

              {/* شبکه‌های اجتماعی */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <FaGlobe className="ml-2" />
                  شبکه‌های اجتماعی
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition duration-300`}
                    >
                      <div className="text-xl mb-1">{social.icon}</div>
                      <div className="text-xs font-medium">{social.name}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* محتوای اصلی */}
            <div className="lg:col-span-2">
              {/* نویگیشن تب‌ها */}
              <div className={`rounded-2xl p-2 mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex flex-wrap gap-2">
                  {['about', 'skills', 'projects', 'experience', 'education', 'interests'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-xl font-medium transition duration-300 ${activeTab === tab
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                      {tab === 'about' && 'درباره من'}
                      {tab === 'skills' && 'مهارت‌ها'}
                      {tab === 'projects' && 'پروژه‌ها'}
                      {tab === 'experience' && 'تجربه کاری'}
                      {tab === 'education' && 'تحصیلات'}
                      {tab === 'interests' && 'علاقه‌مندی‌ها'}
                    </button>
                  ))}
                </div>
              </div>

              {/* محتوای تب‌ها */}
              <div className={`rounded-3xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} p-8`}>
                {/* تب درباره من */}
                {activeTab === 'about' && (
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="bg-gradient-to-r ml-2! from-indigo-500 to-purple-500 p-3 rounded-xl mr-4">
                        <MdPalette className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl  font-bold">درباره من</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>معرفی شخصی و فلسفه کاری</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed">
                        به دنیای کدها و الگوریتم‌ها خوش آمدید! من امیرسجاد نوری هستم، یک توسعه‌دهنده فول‌استک با بیش از 5 سال تجربه در خلق اپلیکیشن‌های وب مدرن و مقیاس‌پذیر.
                      </p>

                      <p className="leading-relaxed">
                        تخصص اصلی من توسعه انواع وب اپلیکیشن‌های مدرن با تکنولوژی های برتر جهان است و درحال کسب تجربه در زمینه ارزهای دیجیتال و ابزارها ی آن هستم.
                      </p>

                      <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} border ${isDarkMode ? 'border-gray-600' : 'border-blue-100'}`}>
                        <h3 className="font-bold text-lg mb-4 flex items-center">
                          <GiCircuitry className="ml-2" />
                          فلسفه کاری من
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="bg-green-100 dark:bg-green-900 p-1 rounded ml-3 mt-1">
                              {/* <FaCheckCircle className="text-green-600 dark:text-green-300 text-sm" /> */}
                            </div>
                            <span>کد تمیز و قابل نگهداری اولویت اول است</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-green-100 dark:bg-green-900 p-1 rounded ml-3 mt-1">
                              {/* <FaCheckCircle className="text-green-600 dark:text-green-300 text-sm" /> */}
                            </div>
                            <span>تست نویسی کامل برای کاهش باگ‌ها</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-green-100 dark:bg-green-900 p-1 rounded ml-3 mt-1">
                              {/* <FaCheckCircle className="text-green-600 dark:text-green-300 text-sm" /> */}
                            </div>
                            <span>بهینه‌سازی عملکرد و تجربه کاربری</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-green-100 dark:bg-green-900 p-1 rounded ml-3 mt-1">
                              {/* <FaCheckCircle className="text-green-600 dark:text-green-300 text-sm" /> */}
                            </div>
                            <span>همکاری مؤثر با تیم و مستندسازی کامل</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {[
                          { value: '5+', label: 'سال تجربه' },
                          { value: '5+', label: 'پروژه موفق' },
                          { value: '80%', label: 'رضایت کارفرما' },
                          { value: '24/7', label: 'پشتیبانی' },
                        ].map((stat, index) => (
                          <div key={index} className={`text-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                            <div className="text-sm mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* تب مهارت‌ها */}
                {activeTab === 'skills' && (
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="bg-gradient-to-r ml-2! from-green-500 to-emerald-500 p-3 rounded-xl mr-4">
                        <MdCode className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">مهارت‌های فنی</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>تخصص‌ها و تکنولوژی‌های مسلط</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {techStack.map((category, catIndex) => (
                        <div key={catIndex} className="mb-6">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <FaCode className="ml-2" />
                            {category.category}
                          </h3>
                          <div className="space-y-4">
                            {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <div className={`bg-gradient-to-r ${skill.color} p-2 rounded-lg ml-3`}>
                                      {skill.icon}
                                    </div>
                                    <span className="font-medium">{skill.name}</span>
                                  </div>
                                  <span className="text-sm font-bold">{skill.level}%</span>
                                </div>
                                <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                  <div
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                    style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* ابزارها */}
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <FaGitAlt className="ml-2" />
                          ابزارها و پلتفرم‌ها
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {[
                            { name: 'Git', icon: <FaGitAlt /> },
                            { name: 'VS Code', icon: <FaCode /> },
                            { name: 'Postman', icon: <FaServer /> },
                          ].map((tool, index) => (
                            <div key={index} className={`flex items-center px-4 py-2 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                              <span className="ml-2">{tool.icon}</span>
                              <span>{tool.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* تب پروژه‌ها */}
                {activeTab === 'projects' && (
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="bg-gradient-to-r ml-2! from-purple-500 to-pink-500 p-3 rounded-xl mr-4">
                        <FaRocket className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">پروژه‌های برجسته</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>نمونه کارهای منتخب</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projects.map((project, index) => (
                        <div key={index} className={`rounded-2xl overflow-hidden border ${isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'} hover:shadow-xl transition duration-300`}>
                          {project.featured && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 text-sm font-bold">
                              <FaStar className="inline ml-1" />
                              Featured
                            </div>
                          )}

                          <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-xl font-bold">{project.title}</h3>
                              <div className="flex items-center text-white dark:bg-gray-800 px-2 py-1 rounded-lg">
                                <FaStar className="text-yellow-500 ml-1" />
                                <span>{project.stars}</span>
                              </div>
                            </div>

                            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="flex justify-between">
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-black">
                                <FaGithub className="ml-1" />
                                کد منبع
                              </a>
                              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 hover:dark:text-indigo-300">
                                <FaExternalLinkAlt className="ml-1" />
                                مشاهده پروژه
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* تب تجربه کاری */}
                {activeTab === 'experience' && (
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="bg-gradient-to-r ml-2! from-blue-500 to-cyan-500 p-3 rounded-xl mr-4">
                        <MdWork className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">سوابق کاری</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>تجربه حرفه‌ای و دستاوردها</p>
                      </div>
                    </div>

                    <div className="relative">
                      {/* خط عمودی */}
                      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-purple-400"></div>

                      <div className="space-y-8">
                        {experience.map((exp, index) => (
                          <div key={index} className="relative">
                            <div className="hidden md:block absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                            <div className={`ml-0 md:ml-16 p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                  <h3 className="text-xl font-bold">{exp.role}</h3>
                                  <div className="text-lg text-indigo-600 dark:text-indigo-400">{exp.company}</div>
                                </div>
                                <div className={`px-4 py-1 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-indigo-100'} text-indigo-600 dark:text-indigo-300 font-medium mt-2 md:mt-0`}>
                                  {exp.period}
                                </div>
                              </div>

                              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>

                              <div>
                                <h4 className="font-bold mb-2">دستاوردهای کلیدی:</h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="flex items-start">
                                      <div className="bg-green-100 dark:bg-green-900 p-1 rounded ml-3 mt-1">
                                        {/* <FaCheckCircle className="text-green-600 dark:text-green-300 text-sm" /> */}
                                      </div>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* تب تحصیلات */}
                {activeTab === 'education' && (
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="bg-gradient-to-r ml-2! from-amber-500 to-orange-500 p-3 rounded-xl mr-4">
                        <MdSchool className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">تحصیلات</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>سوابق تحصیلی و گواهینامه‌ها</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* تحصیلات */}
                      <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                          <FaGraduationCap className="ml-2" />
                          تحصیلات آکادمیک
                        </h3>
                        <div className="space-y-6">
                          {education.map((edu, index) => (
                            <div key={index} className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} border ${isDarkMode ? 'border-gray-600' : 'border-blue-100'}`}>
                              <div className="text-lg font-bold mb-2">{edu.degree}</div>
                              <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">{edu.university}</div>
                              <div className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</div>
                              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* گواهینامه‌ها */}
                      <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center">
                          <FaCertificate className="ml-2" />
                          گواهینامه‌ها
                        </h3>
                        <div className="space-y-4">
                          {certifications.map((cert, index) => (
                            <div
                              key={index}
                              onClick={() => openModal(cert)}
                              className={`flex items-center p-4 rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}
                            >
                              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-lg ml-4">
                                <FaCertificate className="text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold">{cert.name}</div>
                                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {cert.issuer} • {cert.year}
                                </div>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                                مشاهده
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {isModalOpen && selectedCert && (
                        <>
                          {/* Background Overlay */}
                          <div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300"
                            onClick={closeModal}
                          />

                          {/* Modal */}
                          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <div
                              className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl animate-fadeIn`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Header */}
                              <div className={`flex justify-between items-center p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <div className="flex items-center">
                                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg ml-3">
                                    <FaCertificate className="text-white text-xl" />
                                  </div>
                                  <div>
                                    <h2 className="text-2xl font-bold">{selectedCert.name}</h2>
                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      {selectedCert.issuer} • {selectedCert.year}
                                    </p>
                                  </div>
                                </div>

                                <button
                                  onClick={closeModal}
                                  className={`p-3 rounded-full hover:scale-110 transition-transform ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                                >
                                  <FaTimes className="text-2xl" />
                                </button>
                              </div>

                              {/* Content */}
                              <div className="p-6">
                                {/* Image Container */}
                                <div className="relative p-5 w-full h-60 md:h-[500px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900/20 to-indigo-900/20">  
                                  {/* اگر تصویر واقعی دارید، این را فعال کنید */}
                                  <Image
                                    src={selectedCert.image}
                                    alt={selectedCert.name}
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    className=" !w-full !h-full"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                  />
                                </div>

                                {/* Description */}
                                <div className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                  <h3 className="text-lg font-bold mb-3 flex items-center">
                                    <FaCertificate className="ml-2" />
                                    درباره این گواهینامه
                                  </h3>
                                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    {selectedCert.description || 'این گواهینامه نشان دهنده تسلط و مهارت در زمینه مربوطه است.'}
                                  </p>
                                </div>
                              </div>

                              {/* Footer */}
                            </div>
                          </div>

                          {/* CSS Animation */}
                          <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
    `}</style>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* تب علاقه‌مندی‌ها */}
                {activeTab === 'interests' && (
                  <div>
                    <div className="flex items-center mb-8">
                      <div className="bg-gradient-to-r ml-2! from-pink-500 to-rose-500 p-3 rounded-xl mr-4">
                        <FaHeart className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">علاقه‌مندی‌ها</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>فراتر از کدنویسی</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {interests.map((interest, index) => (
                        <div key={index} className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-200'} text-center hover:shadow-lg transition duration-300`}>
                          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 p-4 rounded-xl inline-block mb-4">
                            <div className="text-2xl text-indigo-600 dark:text-indigo-300">
                              {interest.icon}
                            </div>
                          </div>
                          <h3 className="font-bold text-lg mb-2">{interest.name}</h3>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{interest.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* جمله پایانی */}
                    <div className={`mt-8 p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-50 to-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="flex items-center">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl ml-4">
                          <FaQuoteLeft className="text-white" />
                        </div>
                        <div>
                          <p className="text-lg italic">
                            "برنامه‌نویسی برای من فقط یک شغل نیست، یک هنر است. هنر حل مسئله، خلق ارزش و ساختن آینده."
                          </p>
                          <div className="mt-4 font-bold">امیرسجاد نوری</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* فوتر */}
      <div className={`mt-12 py-8 border-t ${isDarkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="bg-gradient-to-r ml-2!  from-indigo-500 to-purple-500 p-2 rounded-lg mr-3">
                  <FaLaptopCode className="text-white" />
                </div>
                <div>
                  <div className="font-bold">امیرسجاد نوری</div>
                  <div className="text-sm">Full Stack Developer</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              {socialLinks.slice(0, 4).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-4 md:mt-0 text-center md:text-right">
              <div className="text-sm">© {new Date().getFullYear()} کلیه حقوق محفوظ است</div>
              <div className="text-xs mt-1">طراحی و توسعه با ❤️ توسط امیرسجاد نوری</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPortfolio;