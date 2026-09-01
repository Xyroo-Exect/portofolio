import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "PROCESS", href: "#process" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-paper/90 backdrop-blur-md border-b-4 border-ink py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 neo-border bg-hotpink flex items-center justify-center text-paper font-bold text-xl">
              A<span className="text-acid">.</span>
            </div>
            <span className="font-sans font-bold text-xl tracking-tighter hidden sm:block">
              AUZIA<span className="text-hotpink">.</span>
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-[10px] font-mono opacity-70">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            AVAILABLE FOR PROJECTS
          </div>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="font-mono font-bold text-sm hover:text-hotpink transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hotpink transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <a href="#contact" className="neo-btn bg-acid text-ink py-2 text-xs">
            LET'S TALK
          </a>
        </div>

        <button 
          className="md:hidden neo-border p-2 bg-paper"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[76px] bg-paper z-40 md:hidden flex flex-col p-8 gap-8 border-t-4 border-ink"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-sans font-bold hover:text-hotpink flex items-center justify-between group"
              >
                {link.name}
                <span className="text-hotpink opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.a>
            ))}
            <div className="mt-auto">
              <p className="font-mono text-xs opacity-50 mb-4">SOCIALS</p>
              <div className="flex gap-4">
                <a href="#" className="neo-border-sm p-2 bg-cobalt font-bold text-xs">GH</a>
                <a href="#" className="neo-border-sm p-2 bg-hotpink font-bold text-xs">IG</a>
                <a href="#" className="neo-border-sm p-2 bg-acid font-bold text-xs">LI</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
