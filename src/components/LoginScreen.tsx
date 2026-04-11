import { useState, useEffect } from "react";
import { Lock, Eye, EyeOff, Power, Moon } from "lucide-react";
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
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      <img src={bootBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[80px]" />

      <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Clock - macOS style large */}
        <div className="text-center mb-16">
          <p className="text-[80px] sm:text-[96px] font-thin text-foreground leading-none tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {timeString}
          </p>
          <p className="text-lg text-foreground/40 font-light mt-2 tracking-wide">
            {dateString}
          </p>
        </div>

        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-card/60 backdrop-blur-xl border border-foreground/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <img src={mainLogo} alt="User" className="w-full h-full object-contain p-2.5" />
          </div>
        </div>

        <p className="text-base font-medium text-foreground/90 mb-5 tracking-wide">Student</p>

        {/* Password field - clean Apple style */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <div className={`flex items-center gap-2 w-64 h-10 px-3 rounded-xl border backdrop-blur-xl transition-all duration-200 ${
            focused 
              ? 'border-primary/50 bg-foreground/8 shadow-[0_0_0_3px_hsl(215,90%,60%,0.15)]' 
              : 'border-foreground/10 bg-foreground/5'
          } ${error ? 'animate-[shake_0.4s_ease-in-out] border-destructive/50' : ''}`}>
            <Lock className={`w-3.5 h-3.5 shrink-0 transition-colors ${focused ? 'text-foreground/50' : 'text-foreground/25'}`} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="flex-1 bg-transparent border-none outline-none text-[13px] text-foreground placeholder:text-foreground/25 tracking-wide"
              autoFocus
            />
            {password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-foreground/25 hover:text-foreground/50 transition-colors shrink-0"
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          <p className="text-[11px] text-foreground/20 tracking-wide">
            Press Return to log in
          </p>
        </form>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10">
        <button className="w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 backdrop-blur-xl flex items-center justify-center transition-all duration-200">
          <Moon className="w-3.5 h-3.5 text-foreground/30" />
        </button>
        <button className="w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 backdrop-blur-xl flex items-center justify-center transition-all duration-200">
          <Power className="w-3.5 h-3.5 text-foreground/30" />
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
