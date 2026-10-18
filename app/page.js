'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Vazirmatn, Space_Grotesk } from 'next/font/google';
import PROFILE from '../public/me.jpg';
import {
  FaGithub, FaTimes, FaLaptopCode, FaCode, FaGitAlt, FaRocket, FaGraduationCap, FaCertificate,
  FaHeart, FaPhone, FaMapMarkerAlt, FaDownload, FaCheckCircle, FaExternalLinkAlt, FaSun, FaMoon,
  FaRobot, FaPaperPlane, FaSearch, FaCopy, FaLanguage, FaServer
} from 'react-icons/fa';
import { MdEmail, MdWork, MdPalette } from 'react-icons/md';
import { GiCircuitry } from 'react-icons/gi';
import {
  LANGS, UI, ROLES, YEARS, STUDENTS, socialLinks, techStack, projects,
  experience, education, interests, certifications
} from './portfolio-data';
import { UI2, OPEN_TO_WORK, GITHUB_USER, EMAIL, deepAnswer, CHAT_SUGGESTIONS, localAnswer } from './portfolio-ai';

const vazir = Vazirmatn({ subsets: ['arabic', 'latin'], weight: ['400', '500', '700', '800'] });
const grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'] });

const ACCENT = 'from-indigo-400 via-violet-400 to-fuchsia-400';
const TABS = ['about', 'projects', 'skills', 'journey'];
const LANG_COLORS = { JavaScript: '#f1e05a', PHP: '#8892bf', TypeScript: '#3178c6', CSS: '#a78bfa', HTML: '#e34c26', Blade: '#f7523f', SCSS: '#c6538c', Vue: '#41b883' };

/* Orb — slowly rotating point-sphere around the avatar (pure canvas). */
function Orb({ size = 300 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = size * dpr; c.height = size * dpr; ctx.scale(dpr, dpr);
    const N = 380, pts = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
    const nodes = [0, 57, 121, 190, 251, 318, 370].map((i) => pts[i]);
    const R = size * 0.47, mid = size / 2, f = 3;
    let ry = 0, rx = 0.3, tx = 0, ty = 0, raf, visible = true;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const project = (p) => {
      const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
      const x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy;
      const y2 = p[1] * cx - z * sx, z2 = p[1] * sx + z * cx;
      const s = f / (f - z2);
      return [mid + x * R * s * 0.66, mid + y2 * R * s * 0.66, z2, s, p[1]];
    };
    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.beginPath(); ctx.arc(mid, mid, R * 0.99, 0, 7); ctx.strokeStyle = 'rgba(129,140,248,.10)'; ctx.stroke();
      for (const p of pts) {
        const [x, y, z, s, h] = project(p);
        ctx.fillStyle = `hsla(${235 + (h + 1) * 45},85%,72%,${0.12 + 0.55 * (z + 1) / 2})`;
        ctx.beginPath(); ctx.arc(x, y, 0.9 * s, 0, 7); ctx.fill();
      }
      const np = nodes.map(project);
      np.forEach((a, i) => {
        const b = np[(i + 1) % np.length];
        if (a[2] > -0.3 && b[2] > -0.3) {
          ctx.strokeStyle = 'rgba(165,180,252,.28)'; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke();
        }
      });
      ctx.shadowBlur = 14; ctx.shadowColor = '#a78bfa';
      np.forEach((a) => {
        ctx.fillStyle = `rgba(221,214,254,${0.35 + 0.65 * (a[2] + 1) / 2})`;
        ctx.beginPath(); ctx.arc(a[0], a[1], 2.4 * a[3], 0, 7); ctx.fill();
      });
      ctx.shadowBlur = 0;
    };
    const loop = () => {
      if (visible) { ry += 0.0035 + tx * 0.004; rx += (0.25 + ty - rx) * 0.04; draw(); }
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e) => { tx = (e.clientX / innerWidth - 0.5) * 0.8; ty = (e.clientY / innerHeight - 0.5) * 0.5; };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(c);
    if (reduce) draw(); else { window.addEventListener('mousemove', onMove); raf = requestAnimationFrame(loop); }
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); io.disconnect(); };
  }, [size]);
  return <canvas ref={ref} style={{ width: size, height: size }} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}

/* Glass card with a soft cursor spotlight */
function Glass({ children, className = '', D, tilt = 0 }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
    if (tilt) {
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1200px) rotateY(${x * tilt}deg) rotateX(${-y * tilt}deg)`;
    }
  };
  const leave = () => { if (tilt && ref.current) ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0)'; };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave}
      className={`group relative overflow-hidden rounded-2xl border transition-[transform,border-color] duration-500 ease-out backdrop-blur-xl ${D ? 'bg-white/[0.04] border-white/10 hover:border-white/20' : 'bg-white/80 border-slate-200 shadow-sm hover:border-slate-300'} ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at var(--mx,50%) var(--my,50%), ${D ? 'rgba(129,140,248,.14)' : 'rgba(99,102,241,.10)'}, transparent 60%)` }} />
      <div className="relative">{children}</div>
    </div>
  );
}

function Count({ to }) {
  const m = String(to).match(/^(\d+)(.*)$/);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!m) return;
    const n = +m[1]; let st, raf;
    const step = (t) => {
      st = st ?? t;
      const p = Math.min((t - st) / 1100, 1);
      setV(Math.round(n * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]); // eslint-disable-line react-hooks/exhaustive-deps
  return m ? <>{v}{m[2]}</> : <>{to}</>;
}

/* Live iframe preview (lazy + scaled) or GitHub social image */
function Preview({ project, t }) {
  const box = useRef(null);
  const [scale, setScale] = useState(0.3);
  const [visible, setVisible] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  useEffect(() => {
    const el = box.current; if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / 1280));
    ro.observe(el);
    const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { setVisible(true); io.disconnect(); } }, { rootMargin: '200px' });
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
  }, []);
  const og = `https://opengraph.githubassets.com/1/${GITHUB_USER}/${project.repo}`;
  return (
    <div ref={box} className="relative w-full overflow-hidden bg-slate-950" style={{ aspectRatio: '16 / 10' }}>
      <div className="absolute top-0 inset-x-0 z-10 h-6 bg-slate-900/90 flex items-center gap-1.5 px-3" dir="ltr">
        <span className="w-2 h-2 rounded-full bg-red-500/80" /><span className="w-2 h-2 rounded-full bg-yellow-400/80" /><span className="w-2 h-2 rounded-full bg-green-500/80" />
        <span className="ms-3 text-[10px] text-slate-400 truncate">{project.live ? project.live.replace(/^https?:\/\//, '') : `github.com/${GITHUB_USER}/${project.repo}`}</span>
      </div>
      {project.live ? (
        visible && (
          <iframe src={project.live} title={project.title.en} loading="lazy" tabIndex={-1} aria-hidden="true"
            sandbox="allow-scripts allow-same-origin" className="absolute pointer-events-none border-0 bg-white"
            style={{ width: 1280, height: 800, left: 0, top: 24, transformOrigin: 'top left', transform: `scale(${scale})` }} />
        )
      ) : imgOk ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={og} alt={project.title.en} loading="lazy" onError={() => setImgOk(false)} className="absolute inset-0 w-full h-full object-cover pt-6" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-950 to-violet-950"><FaGithub className="text-6xl text-white/40" /></div>
      )}
      <span className={`absolute bottom-2 end-2 z-10 text-[11px] font-bold px-2.5 py-1 rounded-full text-white backdrop-blur ${project.live ? 'bg-emerald-600/90' : 'bg-slate-800/90'}`}>
        {project.live ? `● ${t.live}` : t.noLive}
      </span>
    </div>
  );
}

function SectionHead({ icon, title, sub, muted }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className={`bg-gradient-to-br ${ACCENT} p-3 rounded-xl text-slate-950 text-2xl`}>{icon}</div>
      <div><h2 className="text-2xl font-bold">{title}</h2><p className={muted}>{sub}</p></div>
    </div>
  );
}

/* Real GitHub data */
function GitHubPulse({ lang, t, D, muted, inner }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let dead = false;
    (async () => {
      try {
        const cached = sessionStorage.getItem('gh-pulse');
        if (cached) { const c = JSON.parse(cached); if (Date.now() - c.at < 600000) { setData(c.d); return; } }
      } catch { /* ignore */ }
      try {
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`).then((x) => (x.ok ? x.json() : Promise.reject())),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`).then((x) => (x.ok ? x.json() : Promise.reject())),
        ]);
        const counts = {};
        r.filter((x) => !x.fork && x.language).forEach((x) => { counts[x.language] = (counts[x.language] || 0) + 1; });
        const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
        const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([n, c]) => ({ n, p: Math.round((c / total) * 100) }));
        const d = { repos: u.public_repos, followers: u.followers, langs, pushed: r[0]?.pushed_at };
        if (!dead) setData(d);
        try { sessionStorage.setItem('gh-pulse', JSON.stringify({ at: Date.now(), d })); } catch { /* ignore */ }
      } catch { /* hide card on failure */ }
    })();
    return () => { dead = true; };
  }, []);
  if (!data) return null;
  let last = '';
  if (data.pushed) {
    const days = Math.round((new Date(data.pushed) - Date.now()) / 86400000);
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
    last = Math.abs(days) >= 30 ? rtf.format(Math.round(days / 30), 'month') : rtf.format(days, 'day');
  }
  return (
    <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className={`block p-5 rounded-2xl border transition hover:-translate-y-0.5 ${inner}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 font-bold"><FaGithub /> {t.gh.title}</div>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />{t.gh.live}</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4 text-center">
        <div><div className="text-2xl font-extrabold" dir="ltr">{data.repos}</div><div className={`text-xs ${muted}`}>{t.gh.repos}</div></div>
        <div><div className="text-2xl font-extrabold" dir="ltr">{data.followers}</div><div className={`text-xs ${muted}`}>{t.gh.followers}</div></div>
        <div><div className="text-sm font-bold mt-2.5">{last}</div><div className={`text-xs ${muted}`}>{t.gh.last}</div></div>
      </div>
      {data.langs.length > 0 && (
        <>
          <div className="flex h-2 rounded-full overflow-hidden" dir="ltr">
            {data.langs.map((l) => <div key={l.n} title={`${l.n} ${l.p}%`} style={{ width: `${l.p}%`, background: LANG_COLORS[l.n] || '#94a3b8' }} />)}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs" dir="ltr">
            {data.langs.map((l) => (
              <span key={l.n} className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: LANG_COLORS[l.n] || '#94a3b8' }} />{l.n} <span className={muted}>{l.p}%</span></span>
            ))}
          </div>
        </>
      )}
    </a>
  );
}

/* ---------------------------- AI assistant (fully offline) ---------------------------- */
const linkify = (text) => text.split(/(https?:\/\/[^\s)]+)/g).map((p, i) =>
  /^https?:\/\//.test(p) ? <a key={i} href={p} target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 break-all">{p}</a> : p);

function Chat({ open, setOpen, lang, t, D, muted }) {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [sugs, setSugs] = useState(null); // follow-up suggestions after each answer
  const box = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 150); }, [open]);
  useEffect(() => { if (box.current) box.current.scrollTop = box.current.scrollHeight; }, [msgs, open, sugs]);

  const patchLast = (content) => setMsgs((m) => { const c = [...m]; c[c.length - 1] = { ...c[c.length - 1], content }; return c; });
  const typeOut = async (text) => {
    for (let i = 3; i <= text.length + 3; i += 3) {
      patchLast(text.slice(0, i));
      await new Promise((r) => setTimeout(r, 14));
    }
  };

  /* 100% offline — no fetch to /api/chat */
  const send = async (text) => {
    const q = text.trim();
    if (!q || busy) return;
    setInput(''); setBusy(true); setSugs(null);
    setMsgs((m) => [...m, { role: 'user', content: q }, { role: 'assistant', content: '' }]);
    const res = deepAnswer(q, lang);
    await typeOut(res.text);
    setSugs(res.next && res.next.length ? res.next : null);
    setBusy(false);
  };

  if (!open) return null;

  const chipClass = `text-start text-xs px-3 py-2 rounded-xl border transition hover:-translate-y-0.5 ${D ? 'border-indigo-400/30 bg-indigo-500/10 text-indigo-200 hover:bg-indigo-500/20' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`;

  return (
    <div role="dialog" aria-label={t.chatTitle} onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      className={`pf-fade fixed z-40 bottom-4 end-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[min(620px,82vh)] flex flex-col rounded-3xl border shadow-2xl shadow-black/40 backdrop-blur-2xl overflow-hidden ${D ? 'bg-slate-900/90 border-white/10' : 'bg-white/95 border-slate-200'}`}>
      <div className={`flex items-center gap-3 p-4 border-b ${D ? 'border-white/10' : 'border-slate-200'}`}>
        <div className={`bg-gradient-to-br ${ACCENT} p-2.5 rounded-xl text-slate-950`}><FaRobot /></div>
        <div className="flex-1 min-w-0"><div className="font-bold leading-tight">{t.chatTitle}</div><div className={`text-xs truncate ${muted}`}>{t.chatSub}</div></div>
        <button onClick={() => setOpen(false)} aria-label={t.chatClose} className={`p-2 rounded-full ${D ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}><FaTimes /></button>
      </div>

      <div ref={box} className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        <div className={`self-start max-w-[88%] px-4 py-2.5 rounded-2xl rounded-ss-sm text-sm leading-relaxed ${D ? 'bg-white/[0.07]' : 'bg-slate-100'}`}>{t.chatGreeting}</div>

        {msgs.length === 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {t.suggestions.map((s) => (
              <button key={s} onClick={() => send(s)} className={chipClass}>{s}</button>
            ))}
          </div>
        )}

        {msgs.map((m, i) => (
          <div key={i} className={`max-w-[88%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? `self-end rounded-2xl rounded-se-sm bg-gradient-to-r ${ACCENT} text-slate-950 font-medium` : `self-start rounded-2xl rounded-ss-sm ${D ? 'bg-white/[0.07]' : 'bg-slate-100'}`}`}>
            {m.content ? linkify(m.content) : (
              <span className="inline-flex gap-1 py-1">
                <i className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                <i className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:.15s]" />
                <i className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:.3s]" />
              </span>
            )}
          </div>
        ))}

        {!busy && msgs.length > 0 && msgs[msgs.length - 1].role === 'assistant' && msgs[msgs.length - 1].content && sugs && (
          <div className="flex flex-wrap gap-2 mt-1">
            {sugs.map((s) => (
              <button key={s} onClick={() => send(s)} className={chipClass}>{s}</button>
            ))}
          </div>
        )}
      </div>

      <div className={`p-3 border-t ${D ? 'border-white/10' : 'border-slate-200'}`}>
        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
          <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} dir="auto" maxLength={300} placeholder={t.chatPlaceholder}
            className={`flex-1 min-w-0 px-4 py-2.5 rounded-xl text-sm outline-none border focus:border-indigo-400 transition ${D ? 'bg-white/5 border-white/10 placeholder:text-slate-500' : 'bg-white border-slate-200'}`} />
          <button type="submit" disabled={busy || !input.trim()} aria-label={t.chatSend}
            className={`px-4 rounded-xl bg-gradient-to-r ${ACCENT} text-slate-950 disabled:opacity-40 transition hover:brightness-110`}><FaPaperPlane className="rtl:-scale-x-100" /></button>
        </form>
        <p className={`text-[11px] mt-2 text-center ${muted}`}>{t.chatNote}</p>
      </div>
    </div>
  );
}

/* ---------------------- command palette (Ctrl/⌘ + K) ---------------------- */
function Palette({ open, onClose, items, t, D, muted }) {
  const [q, setQ] = useState('');
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  useEffect(() => { if (open) { setQ(''); setIdx(0); setTimeout(() => ref.current?.focus(), 50); } }, [open]);
  if (!open) return null;
  const list = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
  const run = (i) => { if (i) { onClose(); i.run(); } };
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((x) => Math.min(x + 1, list.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((x) => Math.max(x - 1, 0)); }
    else if (e.key === 'Enter') run(list[idx]);
    else if (e.key === 'Escape') onClose();
  };
  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true">
      <div onClick={(e) => e.stopPropagation()} className={`pf-fade w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden ${D ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}>
        <div className={`flex items-center gap-3 px-4 border-b ${D ? 'border-white/10' : 'border-slate-200'}`}>
          <FaSearch className={muted} />
          <input ref={ref} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }} onKeyDown={onKey} placeholder={t.palette} dir="auto"
            className="flex-1 bg-transparent py-4 outline-none text-sm" />
          <kbd className={`text-[10px] px-1.5 py-0.5 rounded border ${D ? 'border-white/15' : 'border-slate-300'} ${muted}`}>esc</kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {list.length === 0 && <li className={`px-3 py-6 text-center text-sm ${muted}`}>{t.paletteEmpty}</li>}
          {list.map((it, i) => (
            <li key={it.id}>
              <button onClick={() => run(it)} onMouseEnter={() => setIdx(i)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-start transition ${i === idx ? (D ? 'bg-indigo-500/20' : 'bg-indigo-50') : ''}`}>
                <span className="text-indigo-400">{it.icon}</span>{it.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------ page ------------------------------- */
const DeveloperPortfolio = () => {
  const [lang, setLang] = useState('fa');
  const [activeTab, setActiveTab] = useState('about');
  const [D, setD] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [roleIdx, setRoleIdx] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [palette, setPalette] = useState(false);
  const [toast, setToast] = useState('');
  const glowRef = useRef(null);

  const t = { ...UI[lang], ...UI2[lang] };
  const dir = LANGS.find((l) => l.code === lang).dir;
  const L = (o) => (o && typeof o === 'object' && !Array.isArray(o) ? o[lang] : o);
  const flash = (m) => { setToast(m); setTimeout(() => setToast(''), 2000); };
  const openChat = () => { setChatOpen(true); setTeaser(false); };
  const copyEmail = async () => { try { await navigator.clipboard.writeText(EMAIL); flash(t.copied); } catch { window.location.href = `mailto:${EMAIL}`; } };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    try {
      const saved = localStorage.getItem('lang');
      if (saved && UI[saved]) setLang(saved);
      else if (navigator.language?.startsWith('es')) setLang('es');
      else if (!navigator.language?.startsWith('fa')) setLang('en');
    } catch { /* ignore */ }
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try { localStorage.setItem('lang', lang); } catch { /* ignore */ }
  }, [lang, dir]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPalette((p) => !p); }
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { document.body.style.overflow = selectedCert ? 'hidden' : 'auto'; }, [selectedCert]);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % 3), 2800);
    const tt = setTimeout(() => setTeaser(true), 6000);
    return () => { clearInterval(id); clearTimeout(tt); };
  }, []);

  useEffect(() => {
    if (isLoading || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let x = innerWidth / 2, y = innerHeight / 3, tx = x, ty = y, raf;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.06; y += (ty - y) * 0.06;
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${x - 300}px,${y - 300}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move); };
  }, [isLoading]);

  const font = lang === 'fa' ? vazir.className : grotesk.className;

  if (isLoading) {
    return (
      <div className={`${font} min-h-screen bg-[#06060c] flex items-center justify-center`}>
        <div className="w-14 h-14 border-2 border-indigo-400/20 border-t-indigo-400 rounded-full animate-spin" />
      </div>
    );
  }

  const muted = D ? 'text-slate-400' : 'text-slate-600';
  const inner = D ? 'bg-white/[0.05] border-white/10' : 'bg-slate-50 border-slate-200';
  const shownProjects = projects.filter((p) => filter === 'all' || p.live);
  const stats = [YEARS, projects.length + '+', STUDENTS];
  const level = (n) => (n >= 85 ? ['core', 5] : n >= 60 ? ['proficient', n >= 80 ? 4 : 3] : ['learning', n >= 45 ? 2 : 1]);

  const paletteItems = [
    { id: 'ai', label: t.askAi, icon: <FaRobot />, run: openChat },
    ...TABS.map((k) => ({ id: `tab-${k}`, label: `${t.pgo}: ${t.tabs[k]}`, icon: <FaRocket />, run: () => setActiveTab(k) })),
    { id: 'copy', label: t.copyEmail, icon: <FaCopy />, run: copyEmail },
    { id: 'cv', label: t.resume, icon: <FaDownload />, run: () => { const a = document.createElement('a'); a.href = '/res.pdf'; a.download = 'res.pdf'; a.click(); } },
    ...socialLinks.slice(0, 4).map((s) => ({ id: s.name, label: s.name, icon: s.icon, run: () => window.open(s.url, '_blank', 'noopener') })),
    { id: 'theme', label: t.theme, icon: D ? <FaSun /> : <FaMoon />, run: () => setD(!D) },
    ...LANGS.map((l) => ({ id: `l-${l.code}`, label: `${t.plang}: ${l.label}`, icon: <FaLanguage />, run: () => setLang(l.code) })),
  ];

  return (
    <div dir={dir} className={`${font} relative min-h-screen overflow-x-hidden transition-colors duration-500 ${D ? 'bg-[#06060c] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <style>{`
        @keyframes pf-in { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }
        @keyframes pf-fade { from { opacity: 0; transform: translateY(8px) scale(.98) } to { opacity: 1; transform: none } }
        @keyframes pf-role { 0% { opacity: 0; transform: translateY(8px) } 12%,88% { opacity: 1; transform: none } 100% { opacity: 0; transform: translateY(-8px) } }
        .pf-in { animation: pf-in .5s cubic-bezier(.2,.8,.2,1) }
        .pf-fade { animation: pf-fade .28s ease-out }
        .pf-role { animation: pf-role 2.8s ease-in-out both }
        .pf-noise { background-image: radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px); background-size: 3px 3px }
        :focus-visible { outline: 2px solid #818cf8; outline-offset: 2px }
        @media (prefers-reduced-motion: reduce) { .pf-in,.pf-fade,.pf-role { animation: none } }
      `}</style>

      {D && <div aria-hidden="true" className="pf-noise pointer-events-none fixed inset-0 z-0" />}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className={`absolute -top-40 start-1/4 w-[700px] h-[700px] rounded-full blur-[140px] ${D ? 'bg-indigo-600/20' : 'bg-indigo-300/40'}`} />
        <div className={`absolute top-1/2 -end-40 w-[600px] h-[600px] rounded-full blur-[140px] ${D ? 'bg-fuchsia-600/15' : 'bg-fuchsia-300/30'}`} />
        <div ref={glowRef} className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[110px] will-change-transform ${D ? 'bg-violet-500/10' : 'bg-violet-400/15'}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="flex justify-between items-center mb-10 gap-3">
          <div className="flex items-center min-w-0 gap-3">
            <div className={`bg-gradient-to-br ${ACCENT} p-2.5 rounded-xl shrink-0`}><FaLaptopCode className="text-xl text-slate-950" /></div>
            <h1 className="text-sm lg:text-lg font-bold truncate">{t.brand}</h1>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={() => setPalette(true)} aria-label={t.palette}
              className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border text-xs transition ${D ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-slate-200 hover:bg-slate-100'} ${muted}`}>
              <FaSearch /> <kbd className="font-sans">Ctrl K</kbd>
            </button>
            <div role="group" aria-label="Language" className={`flex rounded-full p-1 border ${D ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
              {LANGS.map((l) => (
                <button key={l.code} onClick={() => setLang(l.code)} aria-pressed={lang === l.code}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition ${lang === l.code ? `bg-gradient-to-r ${ACCENT} text-slate-950` : muted}`}>{l.code.toUpperCase()}</button>
              ))}
            </div>
            <button onClick={() => setD(!D)} aria-label={t.theme} title={t.theme}
              className={`p-3 rounded-full border transition ${D ? 'bg-white/5 border-white/10 text-amber-300 hover:bg-white/10' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}>
              {D ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* profile */}
          <Glass D={D} className="lg:col-span-1 lg:sticky lg:top-6 !rounded-3xl">
            <div className="p-8">
              <div className="relative mx-auto w-[300px] h-[300px] max-w-full -mt-3 mb-2">
                <div className="absolute inset-[27%] rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 blur-2xl opacity-40" />
                <div className="absolute inset-[27%] rounded-full p-[3px] bg-gradient-to-br from-indigo-400 via-violet-400 to-fuchsia-400">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <Image alt={t.name} src={PROFILE} width={400} height={400} quality={90} priority className="w-full h-full object-cover" />
                  </div>
                </div>
                <Orb size={300} />
              </div>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold mb-2">{t.name}</h2>
                <div className="h-8 overflow-hidden">
                  <div key={`${lang}-${roleIdx}`} className={`pf-role text-lg font-semibold bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent`}>{ROLES[lang][roleIdx]}</div>
                </div>
                {OPEN_TO_WORK && (
                  <div className={`inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full text-xs font-medium ${D ? 'bg-emerald-500/10 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
                    <span className="relative flex w-2 h-2"><span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" /><span className="relative w-2 h-2 rounded-full bg-emerald-400" /></span>{t.status}
                  </div>
                )}
                <p className={`mt-4 text-sm leading-relaxed ${muted}`}>{t.bio}</p>
              </div>

              <button onClick={openChat} className={`w-full bg-gradient-to-r ${ACCENT} text-slate-950 py-3 rounded-xl font-bold hover:brightness-110 transition flex items-center justify-center gap-2 mb-3`}>
                <FaRobot /> {t.askAi}
              </button>
              <a href="/res.pdf" download="res.pdf" className={`w-full py-3 rounded-xl font-semibold border transition flex items-center justify-center gap-2 mb-6 ${inner} ${D ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}>
                <FaDownload /> {t.resume}
              </a>

              <div className="space-y-2 mb-6">
                {[
                  { onClick: copyEmail, icon: <MdEmail />, label: t.email, val: EMAIL, ltr: true, hint: <FaCopy className="text-xs opacity-60" /> },
                  { href: 'tel:09104816785', icon: <FaPhone />, label: t.phone, val: '09104816785', ltr: true },
                  { icon: <FaMapMarkerAlt />, label: t.location, val: t.locationVal },
                ].map((c) => {
                  const Tag = c.href ? 'a' : c.onClick ? 'button' : 'div';
                  return (
                    <Tag key={c.label} href={c.href} onClick={c.onClick} className={`w-full text-start flex items-center gap-3 p-3 rounded-xl border transition ${inner} ${c.href || c.onClick ? (D ? 'hover:bg-white/10' : 'hover:bg-slate-100') : ''}`}>
                      <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">{c.icon}</div>
                      <div className="min-w-0 flex-1"><div className={`text-xs ${muted}`}>{c.label}</div><div className="font-medium text-sm truncate" dir={c.ltr ? 'ltr' : undefined}>{c.val}</div></div>
                      {c.hint}
                    </Tag>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center text-lg transition hover:-translate-y-0.5 hover:text-indigo-400 ${inner}`}>{s.icon}</a>
                ))}
              </div>
            </div>
          </Glass>

          {/* main */}
          <div className="lg:col-span-2 min-w-0">
            <div role="tablist" className={`flex flex-wrap gap-1.5 p-1.5 rounded-2xl border mb-6 backdrop-blur-xl ${D ? 'bg-white/[0.04] border-white/10' : 'bg-white/80 border-slate-200'}`}>
              {TABS.map((tab) => (
                <button key={tab} role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-medium transition ${activeTab === tab ? `bg-gradient-to-r ${ACCENT} text-slate-950 font-bold` : `${muted} ${D ? 'hover:text-white' : 'hover:text-slate-900'}`}`}>{t.tabs[tab]}</button>
              ))}
            </div>

            <Glass D={D} className="!rounded-3xl">
              <div key={`${activeTab}-${lang}`} className="pf-in p-6 sm:p-8">
                {activeTab === 'about' && (
                  <div>
                    <SectionHead muted={muted} icon={<MdPalette />} title={t.tabs.about} sub={t.sub.about} />
                    <div className="space-y-4 max-w-3xl">
                      <p className="text-lg leading-relaxed">{t.p1}</p>
                      <p className={`leading-relaxed ${muted}`}>{t.p2}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      {stats.map((v, i) => (
                        <div key={i} className={`text-center p-5 rounded-2xl border ${inner}`}>
                          <div className={`text-3xl font-extrabold bg-gradient-to-r ${ACCENT} bg-clip-text text-transparent`} dir="ltr"><Count to={v} /></div>
                          <div className={`text-xs mt-1 ${muted}`}>{t.stats[i]}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6"><GitHubPulse lang={lang} t={t} D={D} muted={muted} inner={inner} /></div>
                    <div className={`mt-6 p-6 rounded-2xl border ${inner}`}>
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><GiCircuitry className="text-indigo-400" /> {t.philTitle}</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {t.phil.map((p) => (<li key={p} className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-emerald-400 mt-1 shrink-0" /><span>{p}</span></li>))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h3 className={`text-sm font-bold mb-3 flex items-center gap-2 ${muted}`}><FaHeart className="text-pink-400" /> {t.interestsTitle}</h3>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((it, i) => (
                          <span key={i} title={L(it.d)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${inner}`}><span className="text-indigo-400">{it.icon}</span>{L(it.name)}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div>
                    <SectionHead muted={muted} icon={<FaRocket />} title={t.projTitle} sub={t.sub.projects} />
                    <div className="flex gap-2 mb-6">
                      {[['all', t.all, projects.length], ['live', t.liveOnly, projects.filter((p) => p.live).length]].map(([k, label, n]) => (
                        <button key={k} onClick={() => setFilter(k)} aria-pressed={filter === k}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${filter === k ? `bg-gradient-to-r ${ACCENT} text-slate-950 border-transparent font-bold` : `${inner} ${muted}`}`}>{label} <span className="opacity-70">({n})</span></button>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {shownProjects.map((p) => (
                        <Glass key={p.repo} D={D} tilt={3} className="hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10">
                          <Preview project={p} t={t} />
                          <div className="p-5">
                            <h3 className="text-lg font-bold mb-2">{L(p.title)}</h3>
                            <p className={`mb-4 text-sm leading-relaxed ${muted}`}>{L(p.desc)}</p>
                            <div className="flex flex-wrap gap-1.5 mb-5" dir="ltr">
                              {p.tech.map((x) => (<span key={x} className={`px-2.5 py-1 rounded-full text-xs border ${D ? 'bg-indigo-500/10 border-indigo-400/20 text-indigo-300' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>{x}</span>))}
                            </div>
                            <div className="flex justify-between gap-3 text-sm font-medium">
                              <a href={`https://github.com/${GITHUB_USER}/${p.repo}`} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1.5 hover:text-indigo-400 transition ${muted}`}><FaGithub /> {t.code}</a>
                              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition"><FaExternalLinkAlt className="text-xs" /> {t.view}</a>}
                            </div>
                          </div>
                        </Glass>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div>
                    <SectionHead muted={muted} icon={<FaCode />} title={t.tabs.skills} sub={t.sub.skills} />
                    <div className="flex flex-wrap gap-4 mb-8 text-xs">
                      {['core', 'proficient', 'learning'].map((k, i) => (
                        <span key={k} className={`flex items-center gap-2 ${muted}`}><Dots n={[5, 3, 1][i]} />{t.levels[k]}</span>
                      ))}
                    </div>
                    <div className="space-y-8">
                      {techStack.map((cat) => (
                        <div key={cat.category}>
                          <h3 className="text-lg font-bold mb-4">{t.cats[cat.category]}</h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {cat.skills.map((s) => {
                              const [lv, dots] = level(s.level);
                              return (
                                <div key={s.name} className={`flex items-center gap-3 p-3 rounded-xl border ${inner}`}>
                                  <div className={`bg-gradient-to-br ${s.color} text-white p-2.5 rounded-lg text-lg`}>{s.icon}</div>
                                  <div className="flex-1 min-w-0"><div className="font-medium truncate">{s.name}</div><div className={`text-xs ${muted}`}>{t.levels[lv]}</div></div>
                                  <Dots n={dots} />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      <div>
                        <h3 className="text-lg font-bold mb-4">{t.toolsTitle}</h3>
                        <div className="flex flex-wrap gap-3">
                          {[{ n: 'Git', i: <FaGitAlt /> }, { n: 'VS Code', i: <FaCode /> }, { n: 'Postman', i: <FaServer /> }].map((x) => (
                            <div key={x.n} className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${inner}`}>{x.i}<span>{x.n}</span></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'journey' && (
                  <div>
                    <SectionHead muted={muted} icon={<MdWork />} title={t.journeyTitle} sub={t.sub.journey} />
                    <div>
                      {experience.map((e, i) => (
                        <div key={i} className={`relative ps-10 ${i < experience.length - 1 ? 'pb-8' : ''}`}>
                          {i < experience.length - 1 && <div className="absolute start-[11px] top-8 -bottom-0 w-px bg-gradient-to-b from-indigo-400/60 to-indigo-400/10" />}
                          <div className="absolute start-1 top-7 w-4 h-4 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20" />
                          <div className={`p-6 rounded-2xl border ${inner}`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                              <div><h3 className="text-xl font-bold">{L(e.role)}</h3><div className="text-indigo-400 font-medium">{L(e.company)}</div></div>
                              <div className={`px-4 py-1 rounded-full text-sm font-medium w-fit ${D ? 'bg-indigo-500/15 text-indigo-300' : 'bg-indigo-100 text-indigo-600'}`}>{L(e.period)}</div>
                            </div>
                            <p className={`mb-4 ${muted}`}>{L(e.desc)}</p>
                            <ul className="space-y-2">
                              {e.ach[lang].map((a) => (<li key={a} className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-emerald-400 mt-1 shrink-0" /><span>{a}</span></li>))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                      <div>
                        <h3 className="text-lg font-bold mb-5 flex items-center gap-2"><FaGraduationCap className="text-indigo-400" /> {t.acad}</h3>
                        <div className="space-y-4">
                          {education.map((ed, i) => (
                            <div key={i} className={`p-5 rounded-2xl border ${inner}`}>
                              <div className="font-bold mb-1">{L(ed.degree)}</div>
                              <div className="text-indigo-400 text-sm font-medium">{L(ed.school)}</div>
                              <div className={`text-sm mt-1 ${muted}`}><span dir="ltr">{ed.period}</span> · {L(ed.desc)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-5 flex items-center gap-2"><FaCertificate className="text-indigo-400" /> {t.certs}</h3>
                        <div className="space-y-3">
                          {certifications.map((c) => (
                            <button key={c.name} onClick={() => setSelectedCert(c)} className={`w-full text-start flex items-center gap-4 p-4 rounded-2xl border transition hover:-translate-y-0.5 ${inner} ${D ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}>
                              <div className={`bg-gradient-to-br ${ACCENT} p-3 rounded-lg text-slate-950`}><FaCertificate /></div>
                              <div className="flex-1"><div className="font-bold">{c.name}</div><div className={`text-sm ${muted}`}>{c.issuer} • {c.year}</div></div>
                              <div className={`px-3 py-1 rounded-full text-xs ${D ? 'bg-white/10' : 'bg-slate-200'}`}>{t.open}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Glass>
          </div>
        </div>
      </div>

      {/* AI assistant */}
      {!chatOpen && (
        <div className="fixed z-40 bottom-5 end-5 flex items-center gap-3">
          {teaser && (
            <button onClick={openChat} className={`pf-fade hidden sm:block px-4 py-2 rounded-2xl text-sm shadow-xl border ${D ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}>{t.teaser}</button>
          )}
          <button onClick={openChat} aria-label={t.askAi} className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${ACCENT} text-slate-950 text-xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 hover:scale-105 transition`}>
            <span className="absolute inset-0 rounded-full bg-indigo-400/40 animate-ping" style={{ animationDuration: '3s' }} />
            <FaRobot className="relative" />
          </button>
        </div>
      )}
      <Chat open={chatOpen} setOpen={setChatOpen} lang={lang} t={t} D={D} muted={muted} />
      <Palette open={palette} onClose={() => setPalette(false)} items={paletteItems} t={t} D={D} muted={muted} />

      {toast && <div className="pf-fade fixed z-[70] bottom-24 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm shadow-xl">{toast}</div>}

      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedCert(null)} role="dialog" aria-modal="true">
          <div onClick={(e) => e.stopPropagation()} className={`pf-fade relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border ${D ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'}`}>
            <div className={`flex justify-between items-center p-6 border-b ${D ? 'border-white/10' : 'border-slate-200'}`}>
              <div className="flex items-center gap-3">
                <div className={`bg-gradient-to-br ${ACCENT} p-2.5 rounded-lg text-slate-950`}><FaCertificate className="text-xl" /></div>
                <div><h2 className="text-2xl font-bold">{selectedCert.name}</h2><p className={muted}>{selectedCert.issuer} • {selectedCert.year}</p></div>
              </div>
              <button onClick={() => setSelectedCert(null)} aria-label="Close" className={`p-3 rounded-full transition ${D ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}><FaTimes className="text-xl" /></button>
            </div>
            <div className="p-6">
              <div className="w-full rounded-2xl overflow-hidden mb-6 bg-black/20 flex justify-center">
                <Image src={selectedCert.image} alt={selectedCert.name} quality={90} sizes="(max-width: 768px) 100vw, 800px" className="w-auto max-h-[60vh] object-contain" />
              </div>
              <div className={`p-6 rounded-2xl border ${inner}`}>
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><FaCertificate className="text-indigo-400" /> {t.certAbout}</h3>
                <p className={muted}>{L(selectedCert.desc)}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className={`relative z-10 mt-8 py-8 border-t ${D ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className={`bg-gradient-to-br ${ACCENT} p-2 rounded-lg text-slate-950`}><FaLaptopCode /></div>
            <div><div className="font-bold">{t.name}</div><div className="text-sm">{t.role}</div></div>
          </div>
          <div className="text-center md:text-end">
            <div className="text-sm">© {new Date().getFullYear()} {t.rights}</div>
            <div className="text-xs mt-1">{t.made}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function Dots({ n }) {
  return (
    <span className="flex gap-1" aria-hidden="true" dir="ltr">
      {[1, 2, 3, 4, 5].map((i) => <i key={i} className={`w-1.5 h-1.5 rounded-full ${i <= n ? 'bg-indigo-400' : 'bg-slate-500/30'}`} />)}
    </span>
  );
}

export default DeveloperPortfolio;