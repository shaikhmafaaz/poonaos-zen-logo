import { useState } from "react";
import BootScreen from "@/components/BootScreen";
import MainDesktop from "@/components/MainDesktop";

const Index = () => {
  const [booted, setBooted] = useState(false);

  return booted ? <MainDesktop /> : <BootScreen onComplete={() => setBooted(true)} />;
};

export default Index;
