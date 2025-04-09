import { useState, useEffect } from "react";
import { registerSW } from "virtual:pwa-register";

import Home from "./pages/Home";
import PWANotification from "./components/PWANotification";

// Custom hook for PWA functionality
function usePWA() {
  const [offlineReady, setOfflineReady] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(false);

  const updateSW = registerSW({
    onNeedRefresh() {
      setNeedRefresh(true);
    },
    onOfflineReady() {
      setOfflineReady(true);
      console.log("App ready to work offline");
    },
  });

  // Reset offline notification after showing
  useEffect(() => {
    if (offlineReady) {
      const timer = setTimeout(() => {
        setOfflineReady(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [offlineReady]);

  return {
    offlineReady,
    needRefresh,
    updateSW: () => updateSW(true),
  };
}

function App() {
  const { offlineReady, needRefresh, updateSW } = usePWA();

  return (
    <div className="relative bg-base-100" data-theme="matsu">
      <div className="texture"></div>
      <Home />
      <PWANotification
        offline={offlineReady}
        update={needRefresh}
        onUpdate={updateSW}
      />
    </div>
  );
}

export default App;
