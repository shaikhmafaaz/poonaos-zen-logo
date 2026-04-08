import { useState } from "react";
import BootScreen from "@/components/BootScreen";
import LoginScreen from "@/components/LoginScreen";
import MainDesktop from "@/components/MainDesktop";

type Phase = "boot" | "login" | "desktop";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("boot");

  return (
    <>
      {phase === "boot" && <BootScreen onComplete={() => setPhase("login")} />}
      {phase === "login" && <LoginScreen onLogin={() => setPhase("desktop")} />}
      {phase === "desktop" && <MainDesktop />}
    </>
  );
};

export default Index;
