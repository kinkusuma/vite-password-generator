import { useState } from "react";
import { AuroraBackground } from "./components/aurora-background";
import { PasswordGenerator } from "./components/password-generator";

function App() {
  return (
    <AuroraBackground>
      <PasswordGenerator />
    </AuroraBackground>
  );
}

export default App;
