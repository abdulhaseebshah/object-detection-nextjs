import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>{children}</body>
    </html>
  );
}
