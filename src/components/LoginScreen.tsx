import { useState, useEffect } from "react";
import { Lock, Power, Moon, Accessibility, Eye, EyeOff } from "lucide-react";
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
    setLoaded(true);
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
      
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest/20 to-transparent" />
      </div>

      <div className={`relative z-10 flex flex-col items-center gap-5 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Time & Date */}
        <div className="text-center mb-6">
          <p className="text-6xl sm:text-8xl font-extralight text-foreground tracking-wider drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            {timeString}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/70 tracking-[0.25em] mt-3 uppercase font-light">
            {dateString}
          </p>
        </div>

        {/* Avatar with glow ring */}
        <div className="relative group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-gold/30 via-gold/10 to-forest/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-28 h-28 rounded-full border-2 border-gold/40 overflow-hidden bg-forest-deep/50 backdrop-blur-sm shadow-[0_0_40px_hsl(43,72%,55%,0.15)]">
            <img src={mainLogo} alt="User" className="w-full h-full object-contain p-3" />
          </div>
        </div>

        <p className="text-lg font-light text-foreground/90 tracking-[0.15em]">Student</p>

        {/* Password field */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-72">
          <div className={`w-full flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-foreground/5 border backdrop-blur-sm transition-all duration-400 ${
            focused 
              ? 'border-gold/40 shadow-[0_0_20px_hsl(43,72%,55%,0.12),0_0_60px_hsl(43,72%,55%,0.05)] bg-foreground/8' 
              : 'border-foreground/10 hover:border-foreground/20'
          } ${error ? 'animate-[shake_0.4s_ease-in-out] border-destructive/50' : ''}`}>
            <Lock className="w-4 h-4 text-muted-foreground/60 shrink-0" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/40 tracking-wide"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors shrink-0"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-gold/25 to-gold/15 border border-gold/30 text-gold text-sm tracking-[0.15em] font-medium hover:from-gold/35 hover:to-gold/25 hover:shadow-[0_0_30px_hsl(43,72%,55%,0.15)] active:scale-[0.98] transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-[10px] text-muted-foreground/30 tracking-[0.25em] mt-2">
          PRESS ENTER OR CLICK SIGN IN
        </p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-10">
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl hover:bg-foreground/8 transition-all duration-200 group">
            <Accessibility className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 rounded-xl hover:bg-foreground/8 transition-all duration-200 group">
            <Moon className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground" />
          </button>
          <button className="p-2.5 rounded-xl hover:bg-foreground/8 transition-all duration-200 group">
            <Power className="w-4 h-4 text-muted-foreground/50 group-hover:text-destructive" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
