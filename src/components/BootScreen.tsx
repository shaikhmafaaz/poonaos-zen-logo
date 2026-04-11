import { useState, useEffect } from "react";
import bootLogo from "@/assets/college-boot-logo.png";
import bootBg from "@/assets/boot-screen-bg.jpg";

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 300);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 2 + 0.8;
        if (next >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-800 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <img src={bootBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/50" />

      <div className={`relative z-10 flex flex-col items-center gap-12 transition-all duration-1000 ease-out ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Apple-style centered logo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-[22px] bg-card/40 backdrop-blur-2xl border border-border/30 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <img
              src={bootLogo}
              alt="PoonaOS"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>

        {/* Minimal progress bar */}
        <div className="w-48 flex flex-col items-center gap-6">
          <div className="w-full h-1 rounded-full bg-foreground/10 overflow-hidden">
            <div 
              className="h-full rounded-full bg-foreground/80 transition-all duration-100 ease-linear"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="absolute bottom-8 z-10">
        <p className="text-[10px] text-foreground/20 tracking-[0.4em] uppercase font-light">
          PoonaOS
        </p>
      </div>
    </div>
  );
};

export default BootScreen;
