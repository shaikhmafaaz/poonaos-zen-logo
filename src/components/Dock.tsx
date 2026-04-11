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
    <div className="w-[52px] bg-background/60 backdrop-blur-2xl border-r border-border/50 flex flex-col items-center py-2 gap-0.5 z-40">
      {apps.map(({ id, label, icon: Icon }) => {
        const isOpen = openWindows.includes(id);
        return (
          <button
            key={id}
            onClick={() => onAppClick(id)}
            className="group relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-secondary active:scale-90 transition-all duration-200"
            title={label}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
              isOpen 
                ? 'bg-gradient-to-br from-primary/15 to-accent/10 shadow-[0_0_15px_hsl(175,70%,50%,0.1)]' 
                : 'group-hover:bg-secondary'
            }`}>
              <Icon className={`w-[18px] h-[18px] transition-colors duration-200 ${
                isOpen ? 'text-primary' : 'text-foreground/40 group-hover:text-foreground/70'
              }`} />
            </div>
            {isOpen && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-3 rounded-r-full bg-primary shadow-[0_0_8px_hsl(175,70%,50%,0.5)]" />
            )}
            {/* Tooltip */}
            <span className="absolute left-[56px] px-2.5 py-1.5 bg-card/95 backdrop-blur-xl border border-border rounded-lg text-[10px] text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-[0_8px_40px_rgba(0,0,0,0.5)] translate-x-1 group-hover:translate-x-0 z-[999]">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Dock;
