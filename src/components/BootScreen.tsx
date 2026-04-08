import { useState, useEffect } from "react";
import bootLogo from "@/assets/college-boot-logo.png";
import bootBg from "@/assets/boot-screen-bg.jpg";

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [statusText, setStatusText] = useState("Initializing...");

  useEffect(() => {
    const statuses = [
      { at: 15, text: "Loading kernel modules..." },
      { at: 35, text: "Starting system services..." },
      { at: 55, text: "Mounting filesystems..." },
      { at: 75, text: "Loading desktop environment..." },
      { at: 90, text: "Almost ready..." },
      { at: 100, text: "Welcome" },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 2.5 + 0.8;
        if (next >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 800);
          setStatusText("Welcome");
          return 100;
        }
        const status = statuses.find(s => prev < s.at && next >= s.at);
        if (status) setStatusText(status.text);
        return next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <img src={bootBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold/8 blur-[150px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Logo */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gold/10 blur-[40px] animate-glow-pulse" />
          <img
            src={bootLogo}
            alt="AKIS Poona College - Golden Jubilee"
            className="w-36 h-36 sm:w-44 sm:h-44 object-contain drop-shadow-[0_0_60px_hsl(43,72%,55%,0.3)] animate-logo-reveal relative"
          />
        </div>

        {/* College name */}
        <div className="animate-fade-up text-center" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <h1 className="text-xl sm:text-2xl font-light tracking-[0.2em] text-foreground">
            AKI'S <span className="text-gold font-normal">Poona College</span>
          </h1>
          <p className="text-[11px] text-muted-foreground/60 tracking-[0.3em] mt-2 uppercase">
            of Arts, Science & Commerce
          </p>
        </div>

        {/* Progress bar */}
        <div className="animate-fade-up flex flex-col items-center gap-3" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <div className="w-72 h-[2px] rounded-full bg-foreground/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold/60 via-gold to-gold-light rounded-full transition-all duration-150 ease-out shadow-[0_0_15px_hsl(43,72%,55%,0.4)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-[9px] text-muted-foreground/30 tracking-[0.3em] uppercase h-4">
            {statusText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
