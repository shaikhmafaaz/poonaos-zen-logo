import { useState, useEffect } from "react";
import { Wifi, Volume2, Battery, ChevronDown, Search, Bell, Power, Settings, User, BatteryCharging, Lock } from "lucide-react";
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
    <div className="h-7 bg-background/80 backdrop-blur-2xl border-b border-border/50 flex items-center justify-between px-3 text-[11px] text-foreground select-none z-50 relative">
      {/* Left */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-2 py-0.5 rounded-md hover:bg-secondary cursor-pointer transition-colors duration-200 group">
          <img src={mainLogo} alt="" className="w-3.5 h-3.5 rounded-sm" />
          <span className="font-medium text-primary/90 text-[11px] tracking-wide">Activities</span>
        </div>
      </div>

      {/* Center */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md hover:bg-secondary cursor-pointer transition-colors duration-200">
        <span className="text-foreground/70 font-medium">{dateString}</span>
        <span className="text-foreground/20 mx-0.5">·</span>
        <span className="text-foreground/90 font-medium tabular-nums">{timeString}</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-0.5">
        <button className="p-1 rounded-md hover:bg-secondary transition-colors duration-200">
          <Search className="w-3.5 h-3.5 text-foreground/50" />
        </button>
        <button className="p-1 rounded-md hover:bg-secondary transition-colors duration-200 relative">
          <Bell className="w-3.5 h-3.5 text-foreground/50" />
          <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_4px_hsl(175,70%,50%,0.5)]" />
        </button>
        <div
          className="flex items-center gap-1 px-1.5 py-0.5 rounded-md hover:bg-secondary cursor-pointer transition-colors duration-200 relative"
          onClick={() => setShowSystemMenu(!showSystemMenu)}
        >
          <Wifi className="w-3.5 h-3.5 text-foreground/60" />
          <Volume2 className="w-3.5 h-3.5 text-foreground/60" />
          <BatteryCharging className="w-3.5 h-3.5 text-primary/70" />
          <ChevronDown className={`w-2.5 h-2.5 text-foreground/40 transition-transform duration-200 ${showSystemMenu ? 'rotate-180' : ''}`} />
        </div>

        {showSystemMenu && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowSystemMenu(false)} />
            <div className="absolute top-7 right-1 w-80 bg-card/95 backdrop-blur-2xl border border-border rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] z-50 p-3 space-y-2 animate-fade-up" style={{ animationDuration: '0.15s' }}>
              {/* Quick toggles */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Wifi, label: "Wi-Fi", active: true },
                  { icon: Volume2, label: "Sound", active: true },
                  { icon: Lock, label: "VPN", active: false },
                ].map(({ icon: Icon, label, active }) => (
                  <button key={label} className={`flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all duration-200 ${active ? 'bg-primary/10 border border-primary/20' : 'bg-secondary/50 border border-transparent hover:bg-secondary'}`}>
                    <Icon className={`w-4 h-4 ${active ? 'text-primary' : 'text-foreground/40'}`} />
                    <span className={`text-[9px] tracking-wide ${active ? 'text-primary/80' : 'text-foreground/40'}`}>{label}</span>
                  </button>
                ))}
              </div>

              {/* Sliders */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 px-2">
                  <Volume2 className="w-3.5 h-3.5 text-foreground/40 shrink-0" />
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="w-3/4 h-full rounded-full bg-gradient-to-r from-primary/70 to-primary shadow-[0_0_8px_hsl(175,70%,50%,0.3)]" />
                  </div>
                </div>
                <div className="flex items-center gap-3 px-2">
                  <span className="text-[9px] text-foreground/30 w-3.5 text-center">☀</span>
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="w-2/3 h-full rounded-full bg-gradient-to-r from-gold/60 to-gold shadow-[0_0_8px_hsl(43,72%,55%,0.3)]" />
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border my-1" />
              
              {[
                { icon: Wifi, label: "Wi-Fi", detail: "AKIS-Campus" },
                { icon: BatteryCharging, label: "Battery", detail: "85% · Charging" },
                { icon: Settings, label: "Settings" },
                { icon: User, label: "Student" },
              ].map(({ icon: Icon, label, detail }) => (
                <button key={label} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-left group">
                  <Icon className="w-4 h-4 text-foreground/40 group-hover:text-foreground/60 transition-colors" />
                  <span className="text-[11px] text-foreground/70 flex-1 group-hover:text-foreground/90 transition-colors">{label}</span>
                  {detail && <span className="text-[10px] text-muted-foreground/40">{detail}</span>}
                </button>
              ))}
              
              <div className="border-t border-border my-1" />
              
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/10 transition-colors group">
                <Power className="w-4 h-4 text-destructive/50 group-hover:text-destructive/80 transition-colors" />
                <span className="text-[11px] text-destructive/60 group-hover:text-destructive/80 transition-colors">Power Off / Log Out</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopPanel;
