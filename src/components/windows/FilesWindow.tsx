import { Folder, FileText, Image, Music, Film } from "lucide-react";

const folders = [
  { name: "Documents", icon: Folder, items: "12 items" },
  { name: "Downloads", icon: Folder, items: "5 items" },
  { name: "Pictures", icon: Image, items: "28 items" },
  { name: "Music", icon: Music, items: "15 items" },
  { name: "Videos", icon: Film, items: "3 items" },
  { name: "Academic Records", icon: Folder, items: "8 items" },
  { name: "Assignments", icon: FileText, items: "22 items" },
  { name: "Research Papers", icon: FileText, items: "6 items" },
];

const FilesWindow = () => (
  <div className="p-4">
    <div className="flex items-center gap-2 mb-4 px-2">
      <span className="text-xs text-muted-foreground">Home</span>
      <span className="text-xs text-muted-foreground">/</span>
      <span className="text-xs text-foreground">Files</span>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {folders.map(({ name, icon: Icon, items }) => (
        <div key={name} className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-foreground/5 cursor-pointer transition-colors group">
          <Icon className="w-10 h-10 text-gold/70 group-hover:text-gold transition-colors" />
          <span className="text-xs text-foreground text-center leading-tight">{name}</span>
          <span className="text-[10px] text-muted-foreground">{items}</span>
        </div>
      ))}
    </div>
  </div>
);

export default FilesWindow;
