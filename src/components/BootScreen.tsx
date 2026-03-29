import { useState, useEffect } from "react";
import bootLogo from "@/assets/college-boot-logo.png";
import bootBg from "@/assets/boot-screen-bg.jpg";

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* Background */}
      <img
        src={bootBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Boot content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Golden Jubilee Logo */}
        <img
          src={bootLogo}
          alt="AKIS Poona College - Golden Jubilee"
          className="w-40 h-40 object-contain drop-shadow-[0_0_50px_hsl(43,72%,55%,0.4)] animate-logo-reveal"
        />

        {/* College name */}
        <div
          className="animate-fade-up text-center"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <h1 className="text-xl sm:text-2xl font-light tracking-[0.15em] text-foreground">
            AKI'S <span className="text-gold">Poona College</span>
          </h1>
          <p className="text-xs text-muted-foreground tracking-widest mt-1">
            of Arts, Science & Commerce
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="w-64 h-[3px] rounded-full bg-border/20 overflow-hidden animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <div
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-200 ease-out shadow-[0_0_10px_hsl(43,72%,55%,0.5)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <p
          className="text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase animate-fade-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          {progress < 100 ? "Starting up..." : "Welcome"}
        </p>
      </div>
    </div>
  );
};

export default BootScreen;
