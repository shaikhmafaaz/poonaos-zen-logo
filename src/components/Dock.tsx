import { FolderOpen, Terminal, Settings, Globe, BookOpen, GraduationCap, Calculator, Calendar, FileText, Info } from "lucide-react";

export interface DockApp {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const apps: DockApp[] = [
  { id: "files", label: "Finder", icon: FolderOpen, color: "from-blue-400 to-blue-600" },
  { id: "browser", label: "Browser", icon: Globe, color: "from-sky-400 to-indigo-500" },
  { id: "terminal", label: "Terminal", icon: Terminal, color: "from-gray-600 to-gray-800" },
  { id: "academics", label: "Academics", icon: GraduationCap, color: "from-violet-400 to-purple-600" },
  { id: "library", label: "Library", icon: BookOpen, color: "from-amber-400 to-orange-500" },
  { id: "calendar", label: "Calendar", icon: Calendar, color: "from-red-400 to-red-600" },
  { id: "calculator", label: "Calculator", icon: Calculator, color: "from-gray-500 to-gray-700" },
  { id: "results", label: "Results", icon: FileText, color: "from-emerald-400 to-green-600" },
  { id: "settings", label: "Settings", icon: Settings, color: "from-zinc-400 to-zinc-600" },
  { id: "about", label: "About", icon: Info, color: "from-teal-400 to-cyan-600" },
];

const Dock = ({ openWindows, onAppClick }: { openWindows: string[]; onAppClick: (id: string) => void }) => {
  return (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-end">
      <div className="flex items-end gap-1 px-2 py-1.5 bg-foreground/5 backdrop-blur-2xl border border-foreground/8 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.4)]">
        {apps.map(({ id, label, icon: Icon, color }) => {
          const isOpen = openWindows.includes(id);
          return (
            <button
              key={id}
              onClick={() => onAppClick(id)}
              className="group relative flex flex-col items-center"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-b ${color} flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200 group-hover:scale-125 group-hover:-translate-y-3 group-active:scale-110`}>
                <Icon className="w-5 h-5 text-white drop-shadow-sm" />
              </div>
              {isOpen && (
                <div className="w-1 h-1 rounded-full bg-foreground/50 mt-1 absolute -bottom-1.5" />
              )}
              {/* Tooltip */}
              <span className="absolute -top-9 px-2 py-1 bg-card/90 backdrop-blur-xl border border-foreground/10 rounded-md text-[11px] text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 shadow-lg">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
