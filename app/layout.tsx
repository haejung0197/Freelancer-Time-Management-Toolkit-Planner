import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

export const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
export const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `Freelancer’s Time Management Toolkit`,
  description:
    "End freelance chaos with our free Daily Time-Blocking Planner and full Toolkit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
