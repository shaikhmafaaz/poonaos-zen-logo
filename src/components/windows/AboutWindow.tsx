import mainLogo from "@/assets/college-main-logo.png";

const AboutWindow = () => (
  <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4">
    <img src={mainLogo} alt="AKIS Poona College" className="w-20 h-20 rounded-full object-contain" />
    <div>
      <h2 className="text-lg font-light text-gold tracking-wider">AKIS Poona College OS</h2>
      <p className="text-xs text-muted-foreground mt-1">Version 1.0 · Golden Jubilee Edition</p>
    </div>
    <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    <div className="space-y-1.5 text-[11px] text-muted-foreground">
      <p>AKI's Poona College of Arts, Science & Commerce</p>
      <p>Camp, Pune - 411001, Maharashtra, India</p>
      <p>Established 1970</p>
      <p className="text-gold/70 italic mt-3">"Knowledge is Power"</p>
    </div>
    <div className="mt-4 space-y-1 text-[10px] text-muted-foreground/50">
      <p>OS Kernel: Education 5.15.0-golden</p>
      <p>Desktop Environment: PCA Desktop 44.0</p>
      <p>Memory: ∞ Knowledge</p>
    </div>
  </div>
);

export default AboutWindow;
