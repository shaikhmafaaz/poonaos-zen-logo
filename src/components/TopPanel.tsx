import { useState, useEffect } from "react";
import { Wifi, Volume2, Battery, ChevronDown, Search, BatteryCharging, Settings, Power, Moon, Sun, Bluetooth, Globe } from "lucide-react";
import mainLogo from "@/assets/college-main-logo.png";

const TopPanel = () => {
  const [time, setTime] = useState(new Date());
  const [showControlCenter, setShowControlCenter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="h-[26px] bg-background/40 backdrop-blur-2xl flex items-center justify-between px-4 text-[13px] text-foreground/90 select-none z-50 relative">
      {/* Left - Apple menu style */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 px-1 hover:bg-foreground/5 rounded py-0.5 transition-colors">
          <img src={mainLogo} alt="" className="w-[14px] h-[14px]" />
        </button>
        <span className="text-[13px] font-semibold text-foreground/90">Finder</span>
        <div className="flex items-center gap-3 text-[13px] text-foreground/60">
          <button className="hover:text-foreground/90 transition-colors">File</button>
          <button className="hover:text-foreground/90 transition-colors">Edit</button>
          <button className="hover:text-foreground/90 transition-colors">View</button>
          <button className="hover:text-foreground/90 transition-colors">Go</button>
          <button className="hover:text-foreground/90 transition-colors">Help</button>
        </div>
      </div>

      {/* Right - Status icons */}
      <div className="flex items-center gap-2">
        <Bluetooth className="w-[14px] h-[14px] text-foreground/50" />
        <Wifi className="w-[14px] h-[14px] text-foreground/60" />
        <Search className="w-[14px] h-[14px] text-foreground/50" />
        <div
          className="flex items-center gap-2 px-1.5 py-0.5 rounded hover:bg-foreground/5 cursor-pointer transition-colors"
          onClick={() => setShowControlCenter(!showControlCenter)}
        >
          <Volume2 className="w-[14px] h-[14px] text-foreground/60" />
          <BatteryCharging className="w-[16px] h-[14px] text-foreground/60" />
        </div>
        <span className="text-[13px] text-foreground/70 tabular-nums ml-1">{dateString} {timeString}</span>

        {showControlCenter && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowControlCenter(false)} />
            <div className="absolute top-[26px] right-2 w-[320px] bg-card/80 backdrop-blur-3xl border border-foreground/8 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.5),0_0_0_0.5px_rgba(255,255,255,0.05)] z-50 p-3 animate-[slide-up-fade_0.15s_ease-out]">
              {/* Grid toggles */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-foreground/5 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <Wifi className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-foreground/90">Wi-Fi</p>
                      <p className="text-[9px] text-foreground/40">AKIS-Campus</p>
                    </div>
                  </div>
                </div>
                <div className="bg-foreground/5 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <Bluetooth className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-foreground/90">Bluetooth</p>
                      <p className="text-[9px] text-foreground/40">On</p>
                    </div>
                  </div>
                </div>
                <div className="bg-foreground/5 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                      <Globe className="w-3.5 h-3.5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-foreground/90">AirDrop</p>
                      <p className="text-[9px] text-foreground/40">Everyone</p>
                    </div>
                  </div>
                </div>
                <div className="bg-foreground/5 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center">
                      <Moon className="w-3.5 h-3.5 text-foreground/60" />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-foreground/90">Focus</p>
                      <p className="text-[9px] text-foreground/40">Off</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Display slider */}
              <div className="bg-foreground/5 rounded-xl p-3 mb-2">
                <div className="flex items-center gap-3">
                  <Sun className="w-3 h-3 text-foreground/30" />
                  <div className="flex-1 h-1 rounded-full bg-foreground/10 overflow-hidden">
                    <div className="w-2/3 h-full rounded-full bg-foreground/60" />
                  </div>
                  <Sun className="w-4 h-4 text-foreground/50" />
                </div>
              </div>

              {/* Sound slider */}
              <div className="bg-foreground/5 rounded-xl p-3 mb-2">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-3.5 h-3.5 text-foreground/30" />
                  <div className="flex-1 h-1 rounded-full bg-foreground/10 overflow-hidden">
                    <div className="w-3/4 h-full rounded-full bg-foreground/60" />
                  </div>
                </div>
              </div>

              {/* Battery */}
              <div className="bg-foreground/5 rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BatteryCharging className="w-4 h-4 text-primary/70" />
                  <span className="text-[11px] text-foreground/70">Battery</span>
                </div>
                <span className="text-[11px] text-foreground/50">85% · Charging</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopPanel;
