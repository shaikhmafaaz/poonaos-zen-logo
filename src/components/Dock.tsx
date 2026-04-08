import { FolderOpen, Terminal, Settings, Globe, BookOpen, GraduationCap, Calculator, Calendar, FileText, Info } from "lucide-react";

export interface DockApp {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const apps: DockApp[] = [
  { id: "files", label: "Files", icon: FolderOpen },
  { id: "browser", label: "Browser", icon: Globe },
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "academics", label: "Academics", icon: GraduationCap },
  { id: "library", label: "Library", icon: BookOpen },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "calculator", label: "Calculator", icon: Calculator },
  { id: "results", label: "Results", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "about", label: "About", icon: Info },
];

const Dock = ({ openWindows, onAppClick }: { openWindows: string[]; onAppClick: (id: string) => void }) => {
  return (
    <div className="w-[52px] bg-black/40 backdrop-blur-2xl border-r border-foreground/5 flex flex-col items-center py-2 gap-0.5 z-40">
      {apps.map(({ id, label, icon: Icon }) => {
        const isOpen = openWindows.includes(id);
        return (
          <button
            key={id}
            onClick={() => onAppClick(id)}
            className="group relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-foreground/10 active:scale-90 transition-all duration-200"
            title={label}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
              isOpen 
                ? 'bg-gradient-to-br from-gold/20 to-gold/5 shadow-[0_0_12px_hsl(43,72%,55%,0.1)]' 
                : 'group-hover:bg-foreground/5'
            }`}>
              <Icon className={`w-[18px] h-[18px] transition-colors duration-200 ${
                isOpen ? 'text-gold' : 'text-foreground/50 group-hover:text-foreground/80'
              }`} />
            </div>
            {isOpen && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-3 rounded-r-full bg-gold shadow-[0_0_6px_hsl(43,72%,55%,0.5)]" />
            )}
            {/* Tooltip */}
            <span className="absolute left-[56px] px-2.5 py-1.5 bg-card/95 backdrop-blur-xl border border-foreground/10 rounded-lg text-[10px] text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-[0_8px_30px_rgba(0,0,0,0.4)] translate-x-1 group-hover:translate-x-0">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Dock;
