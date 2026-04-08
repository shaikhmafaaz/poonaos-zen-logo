import { useState } from "react";

const initialLines = [
  "student@poonacollege:~$ neofetch",
  "",
  "  ██████╗  ██████╗ █████╗  ",
  "  ██╔══██╗██╔════╝██╔══██╗ ",
  "  ██████╔╝██║     ███████║ ",
  "  ██╔═══╝ ██║     ██╔══██║ ",
  "  ██║     ╚██████╗██║  ██║ ",
  "  ╚═╝      ╚═════╝╚═╝  ╚═╝ ",
  "",
  "  OS: AKIS Poona College OS 1.0",
  "  Kernel: Education 5.15.0-golden",
  "  Uptime: Since 1970",
  "  Shell: pca-shell 3.2",
  "  Resolution: Knowledge × Wisdom",
  "  Theme: Gold-Forest [Dark]",
  "  Terminal: pca-terminal",
  "",
  "student@poonacollege:~$ _",
];

const TerminalWindow = () => {
  const [lines] = useState(initialLines);

  return (
    <div className="h-full bg-[hsl(150,30%,4%)] p-3 font-mono text-xs leading-relaxed">
      {lines.map((line, i) => (
        <div key={i} className={`${line.startsWith("student@") ? "text-gold" : "text-green-400/80"} whitespace-pre`}>
          {line || "\u00A0"}
        </div>
      ))}
    </div>
  );
};

export default TerminalWindow;
