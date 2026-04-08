import { useState, useCallback } from "react";
import TopPanel from "./TopPanel";
import Dock from "./Dock";
import AppWindow from "./AppWindow";
import FilesWindow from "./windows/FilesWindow";
import TerminalWindow from "./windows/TerminalWindow";
import BrowserWindow from "./windows/BrowserWindow";
import SettingsWindow from "./windows/SettingsWindow";
import AboutWindow from "./windows/AboutWindow";
import AcademicsWindow from "./windows/AcademicsWindow";
import CalculatorWindow from "./windows/CalculatorWindow";
import CalendarWindow from "./windows/CalendarWindow";
import LibraryWindow from "./windows/LibraryWindow";
import ResultsWindow from "./windows/ResultsWindow";

const windowComponents: Record<string, React.ComponentType> = {
  files: FilesWindow,
  terminal: TerminalWindow,
  browser: BrowserWindow,
  settings: SettingsWindow,
  about: AboutWindow,
  academics: AcademicsWindow,
  calculator: CalculatorWindow,
  calendar: CalendarWindow,
  library: LibraryWindow,
  results: ResultsWindow,
};

const MainDesktop = () => {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [windowOrder, setWindowOrder] = useState<string[]>([]);

  const handleAppClick = useCallback((id: string) => {
    if (openWindows.includes(id)) {
      // Bring to front
      setWindowOrder(prev => [...prev.filter(w => w !== id), id]);
    } else {
      setOpenWindows(prev => [...prev, id]);
      setWindowOrder(prev => [...prev, id]);
    }
  }, [openWindows]);

  const handleClose = useCallback((id: string) => {
    setOpenWindows(prev => prev.filter(w => w !== id));
    setWindowOrder(prev => prev.filter(w => w !== id));
  }, []);

  const handleFocus = useCallback((id: string) => {
    setWindowOrder(prev => [...prev.filter(w => w !== id), id]);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex flex-col animate-fade-up overflow-hidden">
      <TopPanel />
      <div className="flex-1 flex relative">
        <Dock openWindows={openWindows} onAppClick={handleAppClick} />
        {/* Desktop area */}
        <div className="flex-1 relative">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-forest/15 blur-[150px] animate-glow-pulse" />
          </div>

          {/* Desktop watermark */}
          {openWindows.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-sm text-muted-foreground/20 tracking-[0.3em] uppercase">AKIS Poona College OS</p>
            </div>
          )}

          {/* Windows */}
          {openWindows.map(id => {
            const Component = windowComponents[id];
            if (!Component) return null;
            return (
              <AppWindow
                key={id}
                appId={id}
                zIndex={10 + windowOrder.indexOf(id)}
                onClose={() => handleClose(id)}
                onFocus={() => handleFocus(id)}
              >
                <Component />
              </AppWindow>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainDesktop;
