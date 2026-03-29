import poonaLogo from "@/assets/poonaos-logo.png";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest/30 blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/10 blur-[80px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo */}
        <div className="animate-logo-reveal">
          <img
            src={poonaLogo}
            alt="PoonaOS Logo"
            width={200}
            height={200}
            className="drop-shadow-[0_0_40px_hsl(43,72%,55%,0.3)]"
          />
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-7xl font-extralight tracking-[0.2em] text-foreground animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Poona<span className="text-gold font-light">OS</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl text-muted-foreground font-light tracking-widest max-w-md animate-fade-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          Designed for the future. Built for you.
        </p>

        {/* Divider */}
        <div
          className="w-16 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-fade-up"
          style={{ animationDelay: "1s", opacity: 0 }}
        />

        {/* Feature pills */}
        <div
          className="flex flex-wrap justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "1.2s", opacity: 0 }}
        >
          {["Seamless", "Intelligent", "Secure", "Beautiful"].map((feature) => (
            <span
              key={feature}
              className="px-5 py-2 rounded-full border border-border text-sm text-muted-foreground tracking-wider hover:border-gold/40 hover:text-gold transition-colors duration-500"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade text */}
      <p
        className="absolute bottom-8 text-xs text-muted-foreground/40 tracking-[0.3em] uppercase animate-fade-up"
        style={{ animationDelay: "1.6s", opacity: 0 }}
      >
        Coming Soon
      </p>
    </div>
  );
};

export default Index;
