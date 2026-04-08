import { useState, useEffect } from "react";
import { Wifi, Volume2, Battery, ChevronDown, Search, Bell, Power, Settings, User } from "lucide-react";
import mainLogo from "@/assets/college-main-logo.png";

const TopPanel = () => {
  const [time, setTime] = useState(new Date());
  const [showSystemMenu, setShowSystemMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="h-8 bg-black/70 backdrop-blur-2xl border-b border-foreground/5 flex items-center justify-between px-4 text-[11px] text-foreground select-none z-50 relative">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-foreground/8 cursor-pointer transition-colors duration-200 group">
          <img src={mainLogo} alt="" className="w-4 h-4 rounded-full group-hover:shadow-[0_0_8px_hsl(43,72%,55%,0.3)] transition-shadow" />
          <span className="font-medium text-gold/90 text-[11px] tracking-wide">Activities</span>
        </div>
      </div>

      {/* Center - Clock */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-md hover:bg-foreground/8 cursor-pointer transition-colors duration-200">
        <span className="text-foreground/80 font-medium">{dateString}</span>
        <span className="text-foreground/30 mx-0.5">·</span>
        <span className="text-foreground/90 font-medium">{timeString}</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1">
        <button className="p-1.5 rounded-md hover:bg-foreground/8 transition-colors duration-200">
          <Search className="w-3.5 h-3.5 text-foreground/50 hover:text-foreground/80" />
        </button>
        <button className="p-1.5 rounded-md hover:bg-foreground/8 transition-colors duration-200 relative">
          <Bell className="w-3.5 h-3.5 text-foreground/50" />
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-gold" />
        </button>
        <div
          className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-foreground/8 cursor-pointer transition-colors duration-200 relative"
          onClick={() => setShowSystemMenu(!showSystemMenu)}
        >
          <Wifi className="w-3.5 h-3.5 text-foreground/70" />
          <Volume2 className="w-3.5 h-3.5 text-foreground/70" />
          <Battery className="w-3.5 h-3.5 text-foreground/70" />
          <ChevronDown className={`w-2.5 h-2.5 text-foreground/50 transition-transform duration-200 ${showSystemMenu ? 'rotate-180' : ''}`} />
        </div>

        {showSystemMenu && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowSystemMenu(false)} />
            <div className="absolute top-8 right-2 w-72 bg-card/95 backdrop-blur-2xl border border-foreground/10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-50 p-2 space-y-1 animate-fade-up" style={{ animationDuration: '0.2s' }}>
              {/* Volume */}
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg">
                <Volume2 className="w-4 h-4 text-foreground/60 shrink-0" />
                <div className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                  <div className="w-3/4 h-full rounded-full bg-gradient-to-r from-gold/60 to-gold" />
                </div>
              </div>
              {/* Brightness */}
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg">
                <span className="text-[10px] text-foreground/40 w-10 shrink-0">Display</span>
                <div className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                  <div className="w-2/3 h-full rounded-full bg-gradient-to-r from-gold/60 to-gold" />
                </div>
              </div>
              
              <div className="border-t border-foreground/5 my-1" />
              
              {[
                { icon: Wifi, label: "Wi-Fi", detail: "AKIS-Campus" },
                { icon: Battery, label: "Battery", detail: "85%" },
                { icon: Settings, label: "Settings", detail: "" },
                { icon: User, label: "Student", detail: "" },
              ].map(({ icon: Icon, label, detail }) => (
                <button key={label} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors text-left">
                  <Icon className="w-4 h-4 text-foreground/60" />
                  <span className="text-[11px] text-foreground/80 flex-1">{label}</span>
                  {detail && <span className="text-[10px] text-foreground/40">{detail}</span>}
                </button>
              ))}
              
              <div className="border-t border-foreground/5 my-1" />
              
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/10 transition-colors">
                <Power className="w-4 h-4 text-destructive/70" />
                <span className="text-[11px] text-destructive/80">Power Off / Log Out</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopPanel;
