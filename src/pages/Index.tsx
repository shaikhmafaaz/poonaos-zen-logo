import { useState, useEffect } from "react";
import { GraduationCap, BookOpen, Users, FlaskConical, Globe, Calendar, Clock } from "lucide-react";
import collegelogo from "@/assets/poona-college-logo.png";
import bootBg from "@/assets/boot-screen-bg.jpg";

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <img
        src={bootBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <img
          src={collegelogo}
          alt="AKIS Poona College"
          className="w-28 h-28 rounded-full drop-shadow-[0_0_40px_hsl(43,72%,55%,0.4)] animate-logo-reveal"
        />

        <div className="animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <h1 className="text-2xl font-light tracking-[0.15em] text-foreground text-center">
            AKIS <span className="text-gold">Poona College</span>
          </h1>
          <p className="text-xs text-muted-foreground tracking-widest text-center mt-1">
            of Arts, Science & Commerce
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="w-64 h-1 rounded-full bg-border/30 overflow-hidden animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <div
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const Desktop = () => {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

  const features = [
    { label: "Academic Excellence", icon: GraduationCap },
    { label: "Research & Innovation", icon: FlaskConical },
    { label: "Holistic Learning", icon: BookOpen },
    { label: "Global Exposure", icon: Globe },
    { label: "Student Community", icon: Users },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col animate-fade-up">
      {/* Top bar */}
      <div className="relative z-20 flex items-center justify-between px-6 py-3 bg-forest-deep/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-3">
          <img src={collegelogo} alt="College Logo" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium text-foreground tracking-wide">AKIS Poona College</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{dateString}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{timeString}</span>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest/20 blur-[120px] animate-glow-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="animate-logo-reveal">
          <img src={collegelogo} alt="AKIS Poona College" width={140} height={140} className="drop-shadow-[0_0_30px_hsl(43,72%,55%,0.2)] rounded-full" />
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <h1 className="text-2xl sm:text-4xl font-light tracking-[0.1em] text-foreground leading-tight">
            AKIS <span className="text-gold font-normal">Poona College</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground font-light tracking-widest mt-1">
            of Arts, Science &amp; Commerce
          </p>
        </div>

        <p className="text-base sm:text-lg text-gold/80 font-light tracking-widest italic animate-fade-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          "Knowledge is Power"
        </p>

        <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0 }} />

        <div className="flex flex-wrap justify-center gap-3 max-w-xl animate-fade-up" style={{ animationDelay: "1s", opacity: 0 }}>
          {features.map(({ label, icon: Icon }) => (
            <span key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground tracking-wider hover:border-gold/40 hover:text-gold transition-colors duration-500">
              <Icon className="w-3.5 h-3.5" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 flex items-center justify-center px-6 py-4 border-t border-border bg-forest-deep/60 backdrop-blur-md">
        <p className="text-xs text-muted-foreground/60 tracking-[0.2em] uppercase">
          Estd. 1970 · Empowering Minds, Shaping Futures
        </p>
      </div>
    </div>
  );
};

const Index = () => {
  const [booted, setBooted] = useState(false);

  return booted ? <Desktop /> : <BootScreen onComplete={() => setBooted(true)} />;
};

export default Index;
