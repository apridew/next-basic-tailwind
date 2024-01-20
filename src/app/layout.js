import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing Page - Tailwind",
  description: "This landing page using Tailwind and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-green_primary pb-10 h-screen">{children}</div>
      </body>
    </html>
  );
}
