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
      className={`absolute flex flex-col bg-card/95 backdrop-blur-xl border border-border shadow-2xl transition-all duration-200 ${
        isMaximized 
          ? 'inset-0 rounded-none' 
          : 'top-8 left-16 right-4 bottom-8 rounded-xl'
      }`}
      style={{ zIndex }}
      onClick={onFocus}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between h-9 px-3 border-b border-border/50 shrink-0 cursor-default select-none">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-3.5 h-3.5 text-gold" />}
          <span className="text-xs font-medium text-foreground">{app?.label || appId}</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors" onClick={(e) => { e.stopPropagation(); }}>
            <Minus className="w-3 h-3 text-muted-foreground" />
          </button>
          <button className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-foreground/10 transition-colors" onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}>
            <Maximize2 className="w-3 h-3 text-muted-foreground" />
          </button>
          <button className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-destructive/20 transition-colors" onClick={(e) => { e.stopPropagation(); onClose(); }}>
            <X className="w-3 h-3 text-destructive" />
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
