import { motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import { ArrowDown, Mail, Github, ExternalLink, Code, Terminal, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10"
          >
            <div className="flex items-center gap-2 mb-6 font-mono text-xs font-bold tracking-widest uppercase">
              <span className="w-3 h-3 neo-border-sm bg-hotpink rounded-full" />
              Developer · Designer · Builder
            </div>
            <h1 className="text-[14vw] sm:text-[10vw] lg:text-[7vw] font-black leading-[0.85] tracking-tighter mb-8 uppercase">
              Ideas<br />
              Into <span className="text-hotpink italic">Real</span><br />
              Things<span className="text-acid ml-2">✳</span>
            </h1>
            <p className="text-lg md:text-xl font-mono leading-relaxed max-w-xl mb-10 opacity-80">
              Saya merancang dan membangun website, aplikasi, API, serta automation yang berguna—dengan interface yang jelas dan karakter yang kuat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="neo-btn bg-ink text-paper flex items-center gap-3">
                LIHAT PROJECT <ArrowDown size={18} />
              </a>
              <a href="mailto:auzia012@gmail.com" className="neo-btn bg-acid text-ink flex items-center gap-3">
                KIRIM EMAIL <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute -inset-10 z-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-hotpink rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] border-4 border-cobalt rounded-full rotate-45" />
            </div>

            <div className="relative z-10">
              <div className="absolute -top-10 -right-5 z-20 neo-border bg-acid p-4 neo-shadow rotate-6 font-mono font-bold text-sm hidden sm:block">
                NO<br />FLUFF.
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 neo-border bg-hotpink p-4 neo-shadow -rotate-6 font-mono font-bold text-xs text-paper hidden sm:block">
                USEFUL<br />BY DESIGN.
              </div>
              
              <div className="bg-ink p-1 neo-shadow-lg rotate-2">
                <div className="bg-[#171717] neo-border-sm overflow-hidden">
                  <div className="h-10 border-b-2 border-[#414141] flex items-center gap-2 px-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff6159]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffd24a]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#57d56e]" />
                    <span className="ml-4 text-[10px] font-mono text-[#9e9e9e]">about.js</span>
                  </div>
                  <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                    <code>
                      <span className="text-hotpink">const</span> <span className="text-[#f7f3e9]">me = {"{"}</span><br />
                      &nbsp;&nbsp;name: <span className="text-acid">"Auzia Akramna"</span>,<br />
                      &nbsp;&nbsp;role: <span className="text-acid">"Developer"</span>,<br />
                      &nbsp;&nbsp;likes: [<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-acid">"clean UI"</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-acid">"useful tools"</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-acid">"good ideas"</span><br />
                      &nbsp;&nbsp;],<br />
                      &nbsp;&nbsp;currently: <span className="text-acid">"building..."</span><br />
                      <span className="text-[#f7f3e9]">{"}"};</span><br /><br />
                      <span className="text-hotpink">export default</span> <span className="text-[#f7f3e9]">me;</span>
                    </code>
                  </pre>
                  <div className="h-8 border-t-2 border-[#414141] flex items-center justify-between px-4 text-[9px] font-mono">
                    <span className="text-[#78ff92]">● ONLINE</span>
                    <span className="text-[#9e9e9e]">Indonesia / 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ticker Section */}
      <div className="bg-ink py-4 border-y-4 border-ink overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 items-center text-acid font-mono font-bold text-xl uppercase"
        >
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>JavaScript</span>
              <span className="text-hotpink text-2xl">✳</span>
              <span>Node.js</span>
              <span className="text-hotpink text-2xl">✳</span>
              <span>Flutter</span>
              <span className="text-hotpink text-2xl">✳</span>
              <span>REST API</span>
              <span className="text-hotpink text-2xl">✳</span>
              <span>UI/UX</span>
              <span className="text-hotpink text-2xl">✳</span>
              <span>Automation</span>
              <span className="text-hotpink text-2xl">✳</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="border-b-4 border-ink bg-paper">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x-4 divide-ink border-x-4 border-ink">
          <div className="p-8 bg-orange-400">
            <h3 className="text-5xl font-black mb-2 tracking-tighter">04+</h3>
            <p className="font-mono text-[10px] font-bold leading-tight uppercase">Years<br />Exploring</p>
          </div>
          <div className="p-8 bg-acid">
            <h3 className="text-5xl font-black mb-2 tracking-tighter">12</h3>
            <p className="font-mono text-[10px] font-bold leading-tight uppercase">Tools in<br />the Kit</p>
          </div>
          <div className="p-8 bg-cobalt">
            <h3 className="text-5xl font-black mb-2 tracking-tighter">∞</h3>
            <p className="font-mono text-[10px] font-bold leading-tight uppercase">Curiosity<br />Level</p>
          </div>
          <div className="p-8 bg-ink text-paper flex flex-col justify-center">
            <p className="font-mono font-bold text-sm leading-tight uppercase mb-2">Small Details.<br />Big Difference.</p>
            <ArrowDown size={24} className="text-hotpink" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <div className="font-mono text-xs font-bold text-hotpink mb-4 uppercase tracking-widest">01 / Selected Work</div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
              Things I<br />Make<span className="text-hotpink">.</span>
            </h2>
          </div>
          <p className="font-mono text-sm max-w-xs opacity-70">
            Project yang punya tujuan jelas: mempermudah pekerjaan, membuat proses lebih cepat, atau memberikan pengalaman yang lebih enak dipakai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white neo-border neo-shadow flex flex-col group"
          >
            <div className="p-4 border-b-4 border-ink flex justify-between font-mono text-[10px] font-bold uppercase">
              <span>01</span>
              <span>App / Performance</span>
            </div>
            <div className="h-64 bg-paper overflow-hidden border-b-4 border-ink">
              <img src="/manus-storage/xeura-featured_f0c6e43c.png" alt="Xeura Projects" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex-grow">
              <div className="text-[10px] font-mono font-bold text-muted-foreground mb-2 uppercase">Featured Project</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Xeura Projects</h3>
              <p className="font-mono text-xs mb-8 opacity-70">Aplikasi mobile yang berfokus pada utility dan performance control dengan tampilan sederhana dan modern.</p>
              <a href="#" className="font-mono font-bold text-xs hover:text-hotpink flex items-center gap-2 group/link">
                TANYAKAN PROJECT <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white neo-border neo-shadow flex flex-col group"
          >
            <div className="p-4 border-b-4 border-ink flex justify-between font-mono text-[10px] font-bold uppercase">
              <span>02</span>
              <span>API / Backend</span>
            </div>
            <div className="h-64 bg-ink flex items-center justify-center border-b-4 border-ink p-8">
              <div className="font-mono text-acid text-center">
                <Terminal size={48} className="mx-auto mb-4" />
                <div className="text-xs opacity-50 mb-2">root@auzia:~$</div>
                <div className="text-xl font-bold">build_api()</div>
                <div className="text-xs text-green-400 mt-2">✓ success: true</div>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-[10px] font-mono font-bold text-muted-foreground mb-2 uppercase">Systems That Work</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">API & Automation</h3>
              <p className="font-mono text-xs mb-8 opacity-70">REST API, bot, command system, dan automation untuk mengurangi pekerjaan yang berulang.</p>
              <a href="#" className="font-mono font-bold text-xs hover:text-hotpink flex items-center gap-2 group/link">
                DISKUSIKAN <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white neo-border neo-shadow flex flex-col group"
          >
            <div className="p-4 border-b-4 border-ink flex justify-between font-mono text-[10px] font-bold uppercase">
              <span>03</span>
              <span>Web / UI</span>
            </div>
            <div className="h-64 bg-hotpink relative overflow-hidden border-b-4 border-ink flex items-center justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10 text-center text-paper">
                <Layers size={48} className="mx-auto mb-4" />
                <h4 className="text-4xl font-black leading-none tracking-tighter">MAKE<br />IT<br />USEFUL.</h4>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-[10px] font-mono font-bold text-muted-foreground mb-2 uppercase">Clarity First</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Web Experience</h3>
              <p className="font-mono text-xs mb-8 opacity-70">Landing page, dashboard, dan interface yang dibuat supaya informasi terasa jelas dan mudah dipahami.</p>
              <a href="#" className="font-mono font-bold text-xs hover:text-hotpink flex items-center gap-2 group/link">
                LIHAT LEBIH LANJUT <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-acid border-y-4 border-ink py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="font-mono text-xs font-bold text-ink mb-4 uppercase tracking-widest">02 / About Me</div>
            <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
              Build<br />With<br />Intent<span className="text-hotpink">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-2xl md:text-3xl font-bold leading-tight">
              Coding bukan cuma soal bahasa pemrograman. Yang penting adalah bagaimana sebuah ide berubah menjadi sesuatu yang benar-benar bisa dipakai.
            </p>
            <p className="font-mono text-sm leading-relaxed opacity-80">
              Saya nyaman bekerja dengan JavaScript, Node.js, Flutter, HTML, CSS, API, dan berbagai tools yang membantu proses development. Saya juga suka mengulik detail kecil pada UI sampai semuanya terasa pas.
            </p>
            <div className="bg-paper p-6 neo-border neo-shadow-sm inline-block self-start font-mono font-bold italic">
              “Build something useful. Make it feel good.”
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 container">
        <div className="max-w-xl mb-20">
          <div className="font-mono text-xs font-bold text-hotpink mb-4 uppercase tracking-widest">03 / How I Work</div>
          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
            Chaos<br />To Clarity.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "LISTEN", desc: "Pahami problem, user, dan apa yang harus terasa lebih baik.", color: "bg-white", icon: "◌" },
            { step: "02", title: "SHAPE", desc: "Ubah ide mentah menjadi struktur dan visual yang punya arah.", color: "bg-hotpink text-paper", icon: "✳" },
            { step: "03", title: "BUILD", desc: "Jadikan desain nyata dengan code yang rapi dan mudah dirawat.", color: "bg-cobalt", icon: "⌁" },
            { step: "04", title: "SHIP", desc: "Test, polish, launch. Lalu lihat apa yang bisa dibuat lebih baik.", color: "bg-acid", icon: "↗" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${item.color} neo-border p-6 h-64 flex flex-col justify-between neo-shadow group`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold">{item.step}</span>
                <span className="text-4xl font-black group-hover:rotate-12 transition-transform">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">{item.title}</h3>
                <p className="font-mono text-[10px] leading-tight opacity-80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="py-32 bg-paper border-t-4 border-ink">
        <div className="container">
          <div className="font-mono text-xs font-bold text-hotpink mb-4 uppercase tracking-widest text-center">04 / My Stack</div>
          <h2 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-center mb-20">
            Tools I<br />Trust<span className="text-hotpink">.</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "JS", name: "JavaScript", role: "WEB / LOGIC" },
              { label: "ND", name: "Node.js", role: "BACKEND / API" },
              { label: "FL", name: "Flutter", role: "MOBILE APP" },
              { label: "HT", name: "HTML / CSS", role: "FRONTEND" },
              { label: "GH", name: "GitHub", role: "VERSION CONTROL" },
              { label: "API", name: "REST API", role: "INTEGRATION" }
            ].map((tool, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className="bg-white neo-border p-6 h-48 flex flex-col justify-between neo-shadow hover:bg-hotpink hover:text-paper transition-colors cursor-default"
              >
                <b className="text-4xl font-black tracking-tighter">{tool.label}</b>
                <div>
                  <span className="block font-bold text-sm uppercase">{tool.name}</span>
                  <small className="font-mono text-[8px] opacity-70">{tool.role}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.5fr] gap-8">
          <div className="bg-hotpink p-12 neo-border neo-shadow">
            <div className="font-mono text-xs font-bold text-ink mb-6 uppercase tracking-widest">05 / Contact</div>
            <h2 className="text-6xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-8">
              Got An<br />Idea?
            </h2>
            <p className="font-mono text-lg mb-12 max-w-xl">
              Tidak harus langsung project besar. Ceritakan idenya, lalu kita lihat apa yang bisa dibuat jadi nyata.
            </p>
            <a href="mailto:auzia012@gmail.com" className="neo-btn bg-ink text-paper text-2xl inline-flex items-center gap-4">
              auzia012@gmail.com <ArrowDown className="-rotate-135" size={32} />
            </a>
          </div>

          <div className="bg-cobalt p-8 neo-border neo-shadow flex flex-col justify-between">
            <div className="text-5xl font-black leading-[0.8] tracking-tighter uppercase -rotate-6 mt-8">
              Let's<br />Make<br />It<br />Real.
            </div>
            
            <div className="flex flex-col gap-4 font-mono font-bold text-sm">
              <a href="#" className="flex items-center justify-between hover:text-hotpink">GITHUB <ExternalLink size={16} /></a>
              <a href="#" className="flex items-center justify-between hover:text-hotpink">EMAIL <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-4 border-ink bg-paper">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] font-bold uppercase tracking-widest">
          <span>© 2026 AUZIA AKRAMNA</span>
          <span>MADE WITH REACT / TAILWIND / MANUS</span>
          <span>AUZIA.ZONE.ID</span>
        </div>
      </footer>
    </div>
  );
}
