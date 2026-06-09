"use client";

/* ───────────────────────────────────────────────────────────
   SiteProvider — central client state for the light/dark theme.
   The visual settings (density, motion, card style, accent) are
   now fixed in CSS, so this only handles theme persistence /
   system sync and exposes the motion scale used by the Framer
   animations (gated by prefers-reduced-motion).
   ─────────────────────────────────────────────────────────── */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type SiteContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  /** Duration multiplier for JS (Framer) animations. 0 = reduced motion. */
  motionScale: number;
  prefersReducedMotion: boolean;
};

const THEME_KEY = "nt-theme";
/** Fixed "Full" motion setting. */
const FULL_MOTION = 1.25;

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
  return ctx;
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  // Theme is set on <html> by the blocking script in layout.tsx before
  // hydration; start from "light" and reconcile on mount to avoid SSR drift.
  const [theme, setTheme] = useState<Theme>("light");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // ── Hydrate from the DOM / storage ──────────────────────────
  // These initial syncs are client-only (the pre-hydration data-theme and
  // matchMedia); reading them in a lazy initializer would break hydration.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "dark" || current === "light") setTheme(current);

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(rm.matches);
    const onRm = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    rm.addEventListener("change", onRm);

    // Follow system theme only while the user hasn't explicitly chosen one.
    const sys = window.matchMedia("(prefers-color-scheme: dark)");
    const onSys = (e: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(THEME_KEY);
      } catch {
        /* ignore */
      }
      if (!stored) setTheme(e.matches ? "dark" : "light");
    };
    sys.addEventListener("change", onSys);

    return () => {
      rm.removeEventListener("change", onRm);
      sys.removeEventListener("change", onSys);
    };
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // ── Apply theme to <html> ───────────────────────────────────
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const motionScale = prefersReducedMotion ? 0 : FULL_MOTION;

  const value = useMemo<SiteContextValue>(
    () => ({ theme, toggleTheme, motionScale, prefersReducedMotion }),
    [theme, toggleTheme, motionScale, prefersReducedMotion]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
