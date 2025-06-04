import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./lib/font";
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
