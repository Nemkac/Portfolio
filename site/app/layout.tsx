import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/components/SiteProvider";
import { Grain } from "@/components/Grain";
import { CursorDot } from "@/components/CursorDot";

// Geist and Geist Mono are variable fonts — no explicit weight needed.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='14' fill='%23131312'/%3E%3Ctext x='50' y='66' text-anchor='middle' font-family='Georgia, serif' font-size='56' font-weight='500' fill='%23FAFAF7'%3ENT%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Nemanja Todorović — Software Engineer",
  description:
    "Software engineer based in Novi Sad, Serbia. Frontend-leaning, full-stack capable. Building large-scale web apps in HealthTech, logistics, and fintech. Available for remote work worldwide.",
  icons: { icon: favicon },
  openGraph: {
    title: "Nemanja Todorović — Software Engineer",
    description:
      "Frontend-leaning software engineer. Available for remote work worldwide.",
    type: "website",
  },
};

// Runs before paint so the saved/system theme is applied with no flash.
const themeScript = `
(function () {
  try {
    var k = 'nt-theme';
    var saved = localStorage.getItem(k);
    var sys = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', saved || sys);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <SiteProvider>
          <Grain />
          {children}
          <CursorDot />
        </SiteProvider>
      </body>
    </html>
  );
}
