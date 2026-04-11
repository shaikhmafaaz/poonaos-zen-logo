import { useState, useEffect } from "react";
import bootLogo from "@/assets/college-boot-logo.png";
import bootBg from "@/assets/boot-screen-bg.jpg";

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [statusText, setStatusText] = useState("Initializing system...");
  const [showLogo, setShowLogo] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
      size: 1 + Math.random() * 2,
    }))
  );

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 200);

    const statuses = [
      { at: 10, text: "Loading kernel modules..." },
      { at: 25, text: "Initializing hardware..." },
      { at: 40, text: "Starting system services..." },
      { at: 55, text: "Mounting filesystems..." },
      { at: 70, text: "Loading desktop environment..." },
      { at: 85, text: "Preparing workspace..." },
      { at: 95, text: "Almost ready..." },
      { at: 100, text: "Welcome to PoonaOS" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 1.8 + 0.5;
        if (next >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 1000);
          setStatusText("Welcome to PoonaOS");
          return 100;
        }
        const status = statuses.find(s => prev < s.at && next >= s.at);
        if (status) setStatusText(status.text);
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <img src={bootBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/60" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-primary/30"
            style={{
              left: `${p.left}%`,
              bottom: '-10px',
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Central ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] animate-glow-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className={`relative z-10 flex flex-col items-center gap-8 transition-all duration-1000 ${showLogo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Logo with orbital ring */}
        <div className="relative">
          <div className="absolute -inset-10 rounded-full border border-primary/10 animate-[spin-slow_20s_linear_infinite]" />
          <div className="absolute -inset-16 rounded-full border border-accent/5 animate-[spin-slow_30s_linear_infinite_reverse]" />
          <div className="absolute -inset-5 rounded-full bg-primary/8 blur-[30px] animate-glow-pulse" />
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-primary/20 bg-background/30 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_hsl(175,70%,50%,0.15)]">
            <img
              src={bootLogo}
              alt="AKIS Poona College"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-[0_0_30px_hsl(175,70%,50%,0.2)]"
            />
          </div>
          {/* Dot accents */}
          <div className="absolute -top-2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary/60 animate-glow-pulse" />
          <div className="absolute top-1/2 -right-3 w-1 h-1 rounded-full bg-accent/60 animate-glow-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Title */}
        <div className="text-center space-y-2 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <h1 className="text-2xl sm:text-3xl font-extralight tracking-[0.25em] text-foreground">
            Poona<span className="text-primary font-light">OS</span>
          </h1>
          <p className="text-[10px] text-muted-foreground/50 tracking-[0.4em] uppercase">
            AKI's Poona College of Arts, Science & Commerce
          </p>
        </div>

        {/* Progress section */}
        <div className="animate-fade-up flex flex-col items-center gap-4 w-80" style={{ animationDelay: "0.7s", opacity: 0 }}>
          {/* Segmented progress bar */}
          <div className="w-full flex gap-1">
            {Array.from({ length: 30 }, (_, i) => {
              const filled = (progress / 100) * 30 > i;
              return (
                <div
                  key={i}
                  className={`flex-1 h-[3px] rounded-full transition-all duration-200 ${
                    filled 
                      ? 'bg-gradient-to-r from-primary to-accent shadow-[0_0_6px_hsl(175,70%,50%,0.4)]' 
                      : 'bg-foreground/5'
                  }`}
                />
              );
            })}
          </div>
          
          <div className="flex items-center justify-between w-full">
            <p className="text-[9px] text-muted-foreground/40 tracking-[0.2em] uppercase">
              {statusText}
            </p>
            <p className="text-[9px] text-primary/50 font-mono">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </div>
      </div>

      {/* Bottom branding */}
      <div className="absolute bottom-6 flex flex-col items-center gap-1 z-10 animate-fade-up" style={{ animationDelay: "1s", opacity: 0 }}>
        <p className="text-[8px] text-muted-foreground/20 tracking-[0.5em] uppercase">
          Powered by PoonaOS
        </p>
      </div>
    </div>
  );
};

export default BootScreen;
