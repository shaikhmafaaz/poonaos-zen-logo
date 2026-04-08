import { BookOpen, Search } from "lucide-react";

const books = [
  { title: "Introduction to Computer Science", author: "John Smith", available: true },
  { title: "Organic Chemistry Vol. II", author: "Morrison & Boyd", available: false },
  { title: "Principles of Economics", author: "N. Gregory Mankiw", available: true },
  { title: "History of Modern India", author: "Bipan Chandra", available: true },
  { title: "Statistical Methods", author: "S.P. Gupta", available: false },
  { title: "English Literature: A Survey", author: "William J. Long", available: true },
];

const LibraryWindow = () => (
  <div className="p-4 space-y-4">
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50">
      <Search className="w-3.5 h-3.5 text-muted-foreground" />
      <input className="bg-transparent border-none outline-none text-xs text-foreground placeholder:text-muted-foreground/50 flex-1" placeholder="Search books, journals, papers..." />
    </div>
    <div className="space-y-1.5">
      {books.map(({ title, author, available }) => (
        <div key={title} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-gold/20 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-gold/60" />
            <div>
              <p className="text-xs text-foreground">{title}</p>
              <p className="text-[10px] text-muted-foreground">{author}</p>
            </div>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${available ? 'bg-green-500/10 text-green-400' : 'bg-destructive/10 text-destructive'}`}>
            {available ? "Available" : "Issued"}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default LibraryWindow;
