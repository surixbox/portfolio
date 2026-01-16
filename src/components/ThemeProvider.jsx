import { useEffect } from "react";

function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--bg", "#1f2933");
    root.style.setProperty("--surface", "#262a31");
    root.style.setProperty("--accent", "#c084fc");
    root.style.setProperty("--text", "#e5e7eb");
    root.style.setProperty("--muted", "#9ca3af");
  }, []);

  return children;
}

export default ThemeProvider;
