import { useState } from "react";
import { X, Minus, Maximize2 } from "lucide-react";
import { apps } from "./Dock";

interface AppWindowProps {
  appId: string;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

const AppWindow = ({ appId, zIndex, onClose, onFocus, children }: AppWindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const app = apps.find(a => a.id === appId);
  const Icon = app?.icon;

  return (
    <div
      className={`absolute flex flex-col bg-card/95 backdrop-blur-2xl border border-border/50 transition-all duration-300 ease-out overflow-hidden ${
        isMaximized 
          ? 'inset-0 rounded-none shadow-none' 
          : 'top-6 left-14 right-3 bottom-6 rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_1px_rgba(255,255,255,0.05)]'
      }`}
      style={{ zIndex }}
      onClick={onFocus}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between h-9 px-3 border-b border-border/50 shrink-0 cursor-default select-none bg-secondary/30">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-3.5 h-3.5 text-primary/70" />}
          <span className="text-[11px] font-medium text-foreground/70 tracking-wide">{app?.label || appId}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button 
            className="w-3 h-3 rounded-full bg-gold/50 hover:bg-gold flex items-center justify-center transition-all duration-200 group" 
            onClick={(e) => { e.stopPropagation(); }}
          >
            <Minus className="w-2 h-2 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button 
            className="w-3 h-3 rounded-full bg-primary/50 hover:bg-primary flex items-center justify-center transition-all duration-200 group" 
            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
          >
            <Maximize2 className="w-1.5 h-1.5 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button 
            className="w-3 h-3 rounded-full bg-destructive/50 hover:bg-destructive flex items-center justify-center transition-all duration-200 group" 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          >
            <X className="w-2 h-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default AppWindow;
