import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "PROCESS", href: "#process" },
  { name: "STACK", href: "#stack" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className={`modern-nav-wrap ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="modern-nav" aria-label="Main navigation">
        <Link href="/" className="modern-brand" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-mark">A<span>.</span></span>
          <span className="brand-name">AUZIA<span>AKRAMNA</span></span>
        </Link>

        <div className="nav-status"><span /> AVAILABLE FOR PROJECTS</div>

        <div className="desktop-nav-links">
          {navLinks.map((link) => <a key={link.name} href={link.href}>{link.name}</a>)}
        </div>

        <a className="nav-contact" href="#contact">LET’S TALK <ArrowUpRight size={15} /></a>
        <button className="nav-menu-toggle" type="button" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="mobile-nav-panel" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
            {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035 }} onClick={() => setIsMenuOpen(false)}><span>0{index + 1}</span>{link.name}<ArrowUpRight size={17} /></motion.a>)}
            <a className="mobile-contact" href="#contact" onClick={() => setIsMenuOpen(false)}>START A PROJECT <ArrowUpRight size={17} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
