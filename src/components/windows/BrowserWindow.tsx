import { ArrowLeft, ArrowRight, RotateCw, Star } from "lucide-react";

const BrowserWindow = () => (
  <div className="flex flex-col h-full">
    {/* URL bar */}
    <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50 bg-secondary/30">
      <ArrowLeft className="w-3.5 h-3.5 text-muted-foreground" />
      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
      <RotateCw className="w-3.5 h-3.5 text-muted-foreground" />
      <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-border/50">
        <span className="text-[11px] text-muted-foreground">🔒</span>
        <span className="text-[11px] text-foreground">www.poonacollege.org</span>
      </div>
      <Star className="w-3.5 h-3.5 text-muted-foreground" />
    </div>
    {/* Page content */}
    <div className="flex-1 p-6 flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-lg font-light text-gold tracking-wider">Welcome to AKIS Poona College</h2>
      <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
        AKI's Poona College of Arts, Science and Commerce is one of the premier educational institutions 
        in Pune, established in 1970. The college offers a wide range of undergraduate and postgraduate programs.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {["Admissions", "Courses", "Faculty"].map(item => (
          <div key={item} className="px-4 py-3 rounded-lg border border-border hover:border-gold/30 cursor-pointer transition-colors">
            <span className="text-[11px] text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BrowserWindow;
