import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Github,
  Layers3,
  Mail,
  MousePointer2,
  Rocket,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "APP / PERFORMANCE",
    title: "Xeura Projects",
    description:
      "Aplikasi mobile yang berfokus pada utility dan performance control, dengan pengalaman yang cepat dan mudah dipahami.",
    tags: ["Mobile UI", "Device Tools", "Performance"],
    art: "project-art-lilac",
    icon: <Zap size={34} strokeWidth={1.8} />,
    label: "MAKE EVERY TAP COUNT",
  },
  {
    number: "02",
    category: "API / BACKEND",
    title: "API & Automation",
    description:
      "REST API, bot, command system, dan automasi yang membantu menghilangkan proses berulang.",
    tags: ["Node.js", "REST API", "Automation"],
    art: "project-art-dark",
    icon: <Terminal size={34} strokeWidth={1.8} />,
    label: "BUILD · TEST · SHIP",
  },
  {
    number: "03",
    category: "WEB / UI DESIGN",
    title: "Web Experience",
    description:
      "Landing page dan dashboard dengan hierarki informasi yang jelas, interaksi terarah, dan karakter visual kuat.",
    tags: ["React", "UI/UX", "Responsive"],
    art: "project-art-pink",
    icon: <Layers3 size={34} strokeWidth={1.8} />,
    label: "MAKE IT USEFUL.",
  },
];

const process = [
  { number: "01", title: "Listen", description: "Mulai dari problem nyata, kebutuhan pengguna, dan tujuan yang ingin dicapai.", icon: <MousePointer2 /> },
  { number: "02", title: "Shape", description: "Susun ide menjadi struktur dan visual yang punya arah serta prioritas.", icon: <Sparkles /> },
  { number: "03", title: "Build", description: "Wujudkan jadi produk dengan code yang rapi, responsif, dan mudah dirawat.", icon: <Code2 /> },
  { number: "04", title: "Ship", description: "Uji, poles detail, lalu rilis. Setelah itu, terus perbaiki dari feedback.", icon: <Rocket /> },
];

const tools = [
  { initials: "JS", name: "JavaScript", kind: "WEB / LOGIC" },
  { initials: "Nd", name: "Node.js", kind: "BACKEND / API" },
  { initials: "Fl", name: "Flutter", kind: "MOBILE APP" },
  { initials: "UI", name: "HTML / CSS", kind: "INTERFACE" },
  { initials: "GH", name: "GitHub", kind: "VERSION CONTROL" },
  { initials: "API", name: "REST API", kind: "INTEGRATION" },
];

export default function Home() {
  return (
    <main className="modern-portfolio">
      <LoadingScreen />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <Navbar />

      <section className="modern-hero" id="top">
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="modern-container hero-layout">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow-pill">
              <span className="status-dot" />
              <span>DEVELOPER · DESIGNER · BUILDER</span>
              <span className="eyebrow-year">IND / 2026</span>
            </div>
            <h1 className="hero-title">
              Ideas into
              <span className="hero-title-accent">real things<span className="hero-star">✳</span></span>
            </h1>
            <p className="hero-description">
              Saya merancang dan membangun website, aplikasi, API, serta automation yang berguna—dengan interface yang jelas dan karakter yang kuat.
            </p>
            <div className="hero-actions">
              <a href="#work" className="neo-action action-dark">
                <span>EXPLORE PROJECTS</span><ArrowDown size={17} />
              </a>
              <a href="mailto:auzia012@gmail.com" className="neo-action action-lime">
                <span>LET’S TALK</span><ArrowUpRight size={18} />
              </a>
            </div>
            <div className="hero-footnote">
              <div className="avatar-stack" aria-hidden="true"><span>A</span><span>+</span><span>↗</span></div>
              <p><strong>Small details.</strong> Big difference.<br /><span>Made with intent, not just for show.</span></p>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="floating-note note-top"><Sparkles size={15} /><span>DETAIL-DRIVEN</span></div>
            <div className="floating-note note-bottom"><span className="live-dot" /> SYSTEM ONLINE <span className="note-separator">/</span> READY TO BUILD</div>
            <div className="code-glass-panel">
              <div className="code-window-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span className="window-file"><Braces size={13} /> about.ts</span>
                <span className="window-menu">•••</span>
              </div>
              <div className="code-content">
                <div className="code-line-number">01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10</div>
                <div className="code-lines">
                  <div><span className="syntax-purple">const</span> <span className="syntax-blue">creator</span> = {'{'}</div>
                  <div className="indent"><span className="syntax-white">name:</span> <span className="syntax-lime">"Auzia Akramna"</span>,</div>
                  <div className="indent"><span className="syntax-white">role:</span> <span className="syntax-lime">"Digital Builder"</span>,</div>
                  <div className="indent"><span className="syntax-white">focus:</span> [</div>
                  <div className="indent-more"><span className="syntax-pink">"useful products"</span>,</div>
                  <div className="indent-more"><span className="syntax-pink">"thoughtful UI"</span>,</div>
                  <div className="indent-more"><span className="syntax-pink">"clean systems"</span></div>
                  <div className="indent"><span className="syntax-white">],</span></div>
                  <div className="indent"><span className="syntax-white">status:</span> <span className="syntax-lime">"building..."</span></div>
                  <div>{'}'}<span className="syntax-purple">;</span></div>
                </div>
              </div>
              <div className="code-window-footer"><span><i /> ALL SYSTEMS GO</span><span>UTF-8&nbsp; · &nbsp;TS</span></div>
            </div>
            <div className="orbit-sticker sticker-lime">MAKE<br />IT WORK<span>↗</span></div>
            <div className="orbit-sticker sticker-pink">LESS NOISE<br />MORE SIGNAL</div>
            <div className="hero-index">FIG. 01 <span>—</span> THE MAKER’S DESK</div>
          </motion.div>
        </div>
        <a className="scroll-cue" href="#work"><span className="scroll-cue-line" /> SCROLL TO DISCOVER</a>
      </section>

      <section className="skill-ticker" aria-label="Technology stack">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-set" key={i}>
              <span>JAVASCRIPT</span><b>✳</b><span>NODE.JS</span><b>✳</b><span>FLUTTER</span><b>✳</b><span>REST API</span><b>✳</b><span>UI / UX</span><b>✳</b><span>AUTOMATION</span><b>✳</b>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section" aria-label="Portfolio highlights">
        <div className="modern-container stats-grid">
          <div className="stat-card stat-cream"><span className="stat-index">01 / EXPERIENCE</span><strong>04<span>+</span></strong><p>YEARS OF EXPLORING</p></div>
          <div className="stat-card stat-lime"><span className="stat-index">02 / TOOLKIT</span><strong>12</strong><p>TOOLS IN THE KIT</p></div>
          <div className="stat-card stat-blue"><span className="stat-index">03 / MINDSET</span><strong>∞</strong><p>CURIOSITY LEVEL</p></div>
          <div className="stat-card stat-ink"><div className="stat-sparkle"><Sparkles size={24} /></div><strong className="stat-mantra">MAKE IT<br />MATTER<span>.</span></strong><p>INTENTION OVER NOISE</p></div>
        </div>
      </section>

      <section className="modern-section work-section" id="work">
        <div className="modern-container">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow"><span>01</span> SELECTED WORK / 2024—2026</div>
              <h2 className="section-title">Things I<br /><span>make.</span></h2>
            </div>
            <p className="section-intro">Produk digital dengan tujuan jelas: menyederhanakan pekerjaan, mempercepat proses, dan bikin pengalaman yang lebih nyaman dipakai.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card glass-panel"
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-meta"><span>{project.number} / 03</span><span>{project.category}</span></div>
                <div className={`project-art ${project.art}`}>
                  <div className="art-grid" />
                  {index === 0 && <div className="app-visual-card"><div className="app-visual-top"><span>XEURA</span><span>↗</span></div><div className="app-visual-orb"><Zap size={36} /></div><div className="app-visual-bars"><i /><i /><i /></div></div>}
                  {index === 1 && <div className="terminal-visual"><div className="terminal-head"><i /><i /><i /><span>terminal — zsh</span></div><div className="terminal-body"><span>~/workspace $</span><br /><b>npm run build</b><br /><small>✓ bundling modules</small><br /><small>✓ build complete</small><div className="terminal-cursor" /></div></div>}
                  {index === 2 && <div className="design-visual"><div className="design-mini-label">A BETTER WEB,</div><strong>BY<br />DESIGN<span>.</span></strong><div className="design-mini-footer"><i /> CLEAR BY DEFAULT</div></div>}
                  <div className="project-art-label">{project.label}</div>
                  <div className="project-art-icon">{project.icon}</div>
                </div>
                <div className="project-body">
                  <div className="project-overline"><span className="project-status-dot" /> FEATURED CONCEPT</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href="mailto:auzia012@gmail.com?subject=Project%20inquiry"><span>DISCUSS PROJECT</span><span className="project-link-icon"><ArrowUpRight size={17} /></span></a>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="work-bottom-note"><span className="note-cross">✳</span><p>CURIOUS ABOUT THE PROCESS?</p><a href="#process">SEE HOW I WORK <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="modern-container about-layout">
          <div className="about-left">
            <div className="section-eyebrow section-eyebrow-dark"><span>02</span> A LITTLE ABOUT ME</div>
            <h2 className="about-title">Build with<br /><span>intent.</span></h2>
            <div className="about-stamp"><Workflow size={21} /><span>IDEA → INTERFACE<br />→ IMPACT</span></div>
          </div>
          <div className="about-right">
            <p className="about-lead">Coding bukan cuma soal bahasa pemrograman. Yang penting adalah bagaimana sebuah ide berubah menjadi sesuatu yang <em>benar-benar bisa dipakai.</em></p>
            <p className="about-description">Saya senang mengulik JavaScript, Node.js, Flutter, website, API, dan automasi. Detail visual juga penting: setiap ruang, transisi, dan interaksi harus terasa punya alasan.</p>
            <div className="about-quote"><span>“</span><p>Build something useful.<br /><strong>Make it feel good.</strong></p><ArrowUpRight size={22} /></div>
            <div className="about-checklist"><span><Check size={15} /> Utility first</span><span><Check size={15} /> Clear by design</span><span><Check size={15} /> Keep improving</span></div>
          </div>
        </div>
      </section>

      <section className="modern-section process-section" id="process">
        <div className="modern-container">
          <div className="section-heading-row process-heading">
            <div><div className="section-eyebrow"><span>03</span> THE METHOD / NO MAGIC TRICKS</div><h2 className="section-title">Chaos to<br /><span>clarity.</span></h2></div>
            <p className="section-intro">Proses yang fleksibel, tapi tetap punya pegangan. Tujuannya bukan sekadar cepat selesai—hasilnya harus terasa tepat.</p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <motion.article className={`process-card process-card-${index + 1}`} key={item.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.09 }}>
                <div className="process-top"><span>{item.number}</span><div className="process-icon">{item.icon}</div></div>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
                <div className="process-bottom"><span>PHASE {item.number}</span><ArrowUpRight size={17} /></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="modern-container">
          <div className="stack-heading"><div className="section-eyebrow"><span>04</span> MY DIGITAL TOOLBOX</div><h2 className="section-title">Tools I <span>trust.</span></h2><p>Tools hanyalah alat. Yang penting tahu kapan dan bagaimana menggunakannya.</p></div>
          <div className="tools-grid">
            {tools.map((tool, index) => <motion.div className="tool-card glass-panel" key={tool.name} whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1 }}><div className="tool-card-top"><span>0{index + 1}</span><ArrowUpRight size={16} /></div><strong>{tool.initials}</strong><div className="tool-card-bottom"><b>{tool.name}</b><small>{tool.kind}</small></div></motion.div>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="modern-container contact-panel">
          <div className="contact-orb contact-orb-one" /><div className="contact-orb contact-orb-two" />
          <div className="contact-content"><div className="section-eyebrow section-eyebrow-dark"><span>05</span> HAVE SOMETHING IN MIND?</div><h2>Got an<br /><span>idea?</span></h2><p>Nggak harus langsung project besar. Ceritakan idenya, lalu kita lihat apa yang bisa dibuat jadi nyata.</p><a className="neo-action action-dark contact-button" href="mailto:auzia012@gmail.com"><Mail size={19} /><span>AUZIA012@GMAIL.COM</span><ArrowUpRight size={19} /></a></div>
          <div className="contact-side-card"><div className="contact-side-icon"><Sparkles size={24} /></div><span className="contact-side-label">OPEN TO GOOD IDEAS</span><strong>Let's make<br />it <em>real.</em></strong><div className="contact-side-bottom"><span><i /> AVAILABLE FOR PROJECTS</span><ArrowUpRight size={18} /></div></div>
        </div>
      </section>

      <footer className="modern-footer"><div className="modern-container footer-inner"><a className="footer-brand" href="#top"><span>A<span>.</span></span> AUZIA</a><p>DESIGNED WITH INTENT · BUILT WITH CURIOSITY</p><span className="footer-copy">© 2026 AUZIA AKRAMNA</span></div></footer>
    </main>
  );
}
