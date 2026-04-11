import { useState, useEffect } from "react";
import { Lock, Power, Moon, Accessibility, Eye, EyeOff, ChevronRight } from "lucide-react";
import mainLogo from "@/assets/college-main-logo.png";
import bootBg from "@/assets/boot-screen-bg.jpg";

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [time, setTime] = useState(new Date());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length > 0) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      <img src={bootBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-110" />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-2xl" />
      
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-primary/3 blur-[150px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-accent/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/3 to-transparent" />
      </div>

      <div className={`relative z-10 flex flex-col items-center gap-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
        {/* Clock */}
        <div className="text-center mb-4">
          <p className="text-7xl sm:text-8xl font-extralight text-foreground tracking-wider drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)]" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {timeString}
          </p>
          <p className="text-sm text-muted-foreground/50 tracking-[0.3em] mt-3 uppercase font-light">
            {dateString}
          </p>
        </div>

        {/* Avatar */}
        <div className="relative group cursor-pointer">
          {/* Animated ring */}
          <div className="absolute -inset-3 rounded-full border-2 border-transparent bg-gradient-to-br from-primary/40 via-transparent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '2px', borderRadius: '9999px' }} />
          <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-28 h-28 rounded-full border border-primary/20 overflow-hidden bg-secondary/50 backdrop-blur-xl shadow-[0_0_50px_hsl(175,70%,50%,0.1)]">
            <img src={mainLogo} alt="User" className="w-full h-full object-contain p-3" />
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_10px_hsl(175,70%,50%,0.5)]" />
        </div>

        <div className="text-center">
          <p className="text-lg font-light text-foreground/90 tracking-[0.15em]">Student</p>
          <p className="text-[10px] text-muted-foreground/40 tracking-wider mt-1">AKIS Poona College</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-72">
          <div className={`w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
            focused 
              ? 'border-primary/40 bg-primary/5 shadow-[0_0_30px_hsl(175,70%,50%,0.1),inset_0_0_20px_hsl(175,70%,50%,0.03)]' 
              : 'border-foreground/8 bg-foreground/5 hover:border-foreground/15'
          } ${error ? 'animate-[shake_0.4s_ease-in-out] border-destructive/50' : ''}`}>
            <Lock className={`w-4 h-4 shrink-0 transition-colors duration-300 ${focused ? 'text-primary/70' : 'text-muted-foreground/40'}`} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/30 tracking-wider"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors shrink-0"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/15 to-accent/15 border border-primary/25 text-primary text-sm tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:from-primary/30 hover:via-primary/25 hover:to-accent/25 hover:shadow-[0_0_40px_hsl(175,70%,50%,0.15)] hover:border-primary/40 active:scale-[0.98] transition-all duration-300 group"
          >
            <span>Sign In</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        <p className="text-[9px] text-muted-foreground/20 tracking-[0.3em] mt-1 uppercase">
          Press enter to sign in
        </p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <button className="p-2.5 rounded-xl hover:bg-foreground/5 transition-all duration-200 group">
          <Accessibility className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground/60" />
        </button>
        <div className="flex items-center gap-1.5">
          <button className="p-2.5 rounded-xl hover:bg-foreground/5 transition-all duration-200 group">
            <Moon className="w-4 h-4 text-muted-foreground/30 group-hover:text-muted-foreground/60" />
          </button>
          <button className="p-2.5 rounded-xl hover:bg-foreground/5 transition-all duration-200 group">
            <Power className="w-4 h-4 text-muted-foreground/30 group-hover:text-destructive/70" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
