import { useState } from "react";
import { Lock, User, Power, Moon, Accessibility } from "lucide-react";
import mainLogo from "@/assets/college-main-logo.png";
import bootBg from "@/assets/boot-screen-bg.jpg";

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);

  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      <img src={bootBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

      <div className="relative z-10 flex flex-col items-center gap-6 animate-fade-up">
        {/* Time */}
        <div className="text-center mb-4">
          <p className="text-5xl sm:text-7xl font-extralight text-foreground tracking-wider">{timeString}</p>
          <p className="text-sm text-muted-foreground tracking-widest mt-2">{dateString}</p>
        </div>

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full border-2 border-gold/30 overflow-hidden shadow-[0_0_30px_hsl(43,72%,55%,0.15)]">
          <img src={mainLogo} alt="User" className="w-full h-full object-contain p-2" />
        </div>

        <p className="text-lg font-light text-foreground tracking-wide">Student</p>

        {/* Password field */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
          <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-foreground/10 border transition-all duration-300 ${focused ? 'border-gold/50 shadow-[0_0_15px_hsl(43,72%,55%,0.1)]' : 'border-foreground/10'} ${error ? 'animate-[shake_0.3s_ease-in-out]' : ''}`}>
            <Lock className="w-4 h-4 text-muted-foreground" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/50 w-40"
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm tracking-wider hover:bg-gold/30 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-[10px] text-muted-foreground/40 tracking-widest mt-4">
          Press Enter or click Sign In
        </p>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-foreground/10 transition-colors">
            <Accessibility className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-foreground/10 transition-colors">
            <Moon className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-foreground/10 transition-colors">
            <Power className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
