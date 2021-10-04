import React, { useState } from "react";

import NormalScreen from "./pages/NormalScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import "./styles/base.scss";

export default function App() {
  // Const
  const rawData = localStorage.getItem("tasks");

  // States
  const [reload, setReload] = useState(false);

  if (rawData === null || undefined) {
    return <WelcomeScreen hook={[reload, setReload]} />;
  } else {
    return (
      <div className="App">
        <main>
          <NormalScreen />
        </main>
      </div>
    );
  }
}
