if (typeof window !== "undefined") {
  // Only run in browser environment
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.log("SW registration failed: ", err);
    });
  }
}
