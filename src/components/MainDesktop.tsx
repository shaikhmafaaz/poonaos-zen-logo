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
import desktopWallpaper from "@/assets/desktop-wallpaper.jpg";

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
    <div className="fixed inset-0 flex flex-col overflow-hidden animate-fade-up">
      <img src={desktopWallpaper} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      
      <TopPanel />
      <div className="flex-1 relative">
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
        <Dock openWindows={openWindows} onAppClick={handleAppClick} />
      </div>
    </div>
  );
};

export default MainDesktop;
