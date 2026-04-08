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
    <div className="w-14 bg-forest-deep/80 backdrop-blur-xl border-r border-border/50 flex flex-col items-center py-3 gap-1 z-40">
      {apps.map(({ id, label, icon: Icon }) => {
        const isOpen = openWindows.includes(id);
        return (
          <button
            key={id}
            onClick={() => onAppClick(id)}
            className="group relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-foreground/10 transition-all duration-200"
            title={label}
          >
            <Icon className={`w-5 h-5 transition-colors ${isOpen ? 'text-gold' : 'text-muted-foreground group-hover:text-foreground'}`} />
            {isOpen && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full bg-gold" />
            )}
            {/* Tooltip */}
            <span className="absolute left-14 px-2 py-1 bg-card border border-border rounded text-[10px] text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Dock;
