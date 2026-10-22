import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper font-mono p-6"
        >
          <div className="w-full max-w-md">
            <div className="flex justify-between mb-2 text-xs tracking-widest">
              <span>AUZIA / PORTFOLIO</span>
              <span>2026</span>
            </div>
            
            <div className="text-[12vw] md:text-[8vw] font-bold font-sans leading-none text-acid mb-8 text-center tracking-tighter">
              A<span className="text-hotpink">.</span>
            </div>

            <div className="flex justify-between mb-2 text-xs text-muted-foreground">
              <span>INITIALIZING SYSTEM...</span>
              <span className="text-acid">{Math.min(progress, 100)}%</span>
            </div>
            
            <div className="w-full h-4 neo-border-sm p-0.5 bg-transparent">
              <motion.div 
                className="h-full bg-hotpink"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-[10px] opacity-50">
              <div>{">"} LOAD_MODULES: UI_UX</div>
              <div>{">"} CORE_INIT: READY</div>
              <div>{">"} ASSETS_SYNC: OK</div>
              <div>{">"} SYSTEM_BOOT: SUCCESS</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
