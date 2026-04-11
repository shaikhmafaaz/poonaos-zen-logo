import { useState } from "react";
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

  return (
    <div
      className={`absolute flex flex-col bg-card/90 backdrop-blur-2xl border border-foreground/8 transition-all duration-300 ease-out overflow-hidden ${
        isMaximized 
          ? 'inset-0 rounded-none' 
          : 'top-8 left-4 right-4 bottom-16 rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.5),0_0_0_0.5px_rgba(255,255,255,0.06)]'
      }`}
      style={{ zIndex }}
      onClick={onFocus}
    >
      {/* macOS title bar with traffic lights */}
      <div className="flex items-center h-[38px] px-3 border-b border-foreground/5 shrink-0 cursor-default select-none bg-card/50">
        {/* Traffic lights */}
        <div className="flex items-center gap-2 group">
          <button 
            className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:brightness-90 transition-all"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          />
          <button 
            className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#dea123] hover:brightness-90 transition-all"
            onClick={(e) => { e.stopPropagation(); }}
          />
          <button 
            className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] hover:brightness-90 transition-all"
            onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
          />
        </div>
        {/* Window title */}
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] text-foreground/50 font-medium">
          {app?.label || appId}
        </span>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default AppWindow;
