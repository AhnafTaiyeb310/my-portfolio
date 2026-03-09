import { VT323, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Ahnaf Portfolio | Retro Terminal",
  description: "A retro terminal-style personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${jetbrains.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
