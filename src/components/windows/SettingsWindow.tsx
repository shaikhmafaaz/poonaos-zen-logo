import { Wifi, Monitor, Bell, Shield, Palette, User, HardDrive, Info } from "lucide-react";

const sections = [
  { label: "Wi-Fi", icon: Wifi, detail: "Connected" },
  { label: "Display", icon: Monitor, detail: "1920 × 1080" },
  { label: "Notifications", icon: Bell, detail: "On" },
  { label: "Privacy & Security", icon: Shield, detail: "" },
  { label: "Appearance", icon: Palette, detail: "Dark" },
  { label: "Users", icon: User, detail: "Student" },
  { label: "Storage", icon: HardDrive, detail: "45.2 GB used" },
  { label: "About", icon: Info, detail: "PCA OS 1.0" },
];

const SettingsWindow = () => (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-48 border-r border-border/50 p-2 space-y-0.5 shrink-0">
      {sections.map(({ label, icon: Icon }, i) => (
        <div
          key={label}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
            i === 0 ? 'bg-gold/10 text-gold' : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
          }`}
        >
          <Icon className="w-4 h-4" />
          <span className="text-xs">{label}</span>
        </div>
      ))}
    </div>
    {/* Content */}
    <div className="flex-1 p-6">
      <h3 className="text-sm font-medium text-foreground mb-4">Wi-Fi</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 rounded-lg border border-border">
          <div className="flex items-center gap-3">
            <Wifi className="w-4 h-4 text-gold" />
            <div>
              <p className="text-xs text-foreground">AKIS-Campus-WiFi</p>
              <p className="text-[10px] text-muted-foreground">Connected · Excellent</p>
            </div>
          </div>
          <div className="w-8 h-4 rounded-full bg-gold/30 flex items-center justify-end px-0.5">
            <div className="w-3 h-3 rounded-full bg-gold" />
          </div>
        </div>
        {["AKIS-Library", "AKIS-Guest", "eduroam"].map(network => (
          <div key={network} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border cursor-pointer transition-colors">
            <Wifi className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{network}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SettingsWindow;
