import { useState, useEffect } from "react";
import { Wifi, Volume2, Battery, ChevronDown, Search, Bell } from "lucide-react";
import mainLogo from "@/assets/college-main-logo.png";

const TopPanel = () => {
  const [time, setTime] = useState(new Date());
  const [showSystemMenu, setShowSystemMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = time.toLocaleDateString([], { month: 'short', day: 'numeric' });

  return (
    <div className="h-7 bg-forest-deep/95 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-3 text-[11px] text-foreground select-none z-50">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded hover:bg-foreground/10 cursor-pointer">
          <img src={mainLogo} alt="" className="w-3.5 h-3.5 rounded-full" />
          <span className="font-medium text-gold text-[10px]">Activities</span>
        </div>
      </div>

      {/* Center */}
      <div className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-foreground/10 cursor-pointer">
        <span>{dateString}</span>
        <span className="text-muted-foreground mx-1">·</span>
        <span>{timeString}</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <Search className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        <Bell className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        <div
          className="flex items-center gap-1.5 px-1.5 py-0.5 rounded hover:bg-foreground/10 cursor-pointer relative"
          onClick={() => setShowSystemMenu(!showSystemMenu)}
        >
          <Wifi className="w-3 h-3" />
          <Volume2 className="w-3 h-3" />
          <Battery className="w-3 h-3" />
          <ChevronDown className="w-2.5 h-2.5" />
        </div>

        {showSystemMenu && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowSystemMenu(false)} />
            <div className="absolute top-7 right-2 w-64 bg-card/95 backdrop-blur-xl border border-border rounded-lg shadow-2xl z-50 p-3 space-y-3">
              {/* Volume slider */}
              <div className="flex items-center gap-2">
                <Volume2 className="w-3.5 h-3.5 text-muted-foreground" />
                <div className="flex-1 h-1 rounded-full bg-border">
                  <div className="w-3/4 h-full rounded-full bg-gold" />
                </div>
              </div>
              {/* Brightness */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-muted-foreground w-12">Display</span>
                <div className="flex-1 h-1 rounded-full bg-border">
                  <div className="w-2/3 h-full rounded-full bg-gold" />
                </div>
              </div>
              <div className="border-t border-border pt-2 space-y-1">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-foreground/5 cursor-pointer">
                  <Wifi className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Wi-Fi · Connected</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-foreground/5 cursor-pointer">
                  <Battery className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Battery · 85%</span>
                </div>
              </div>
              <div className="border-t border-border pt-2">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-foreground/5 cursor-pointer text-destructive">
                  <span className="text-[11px]">Power Off / Log Out</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopPanel;
