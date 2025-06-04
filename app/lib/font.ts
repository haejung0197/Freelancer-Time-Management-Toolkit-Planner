// lib/fonts.ts
import { DM_Sans, DM_Serif_Display } from "next/font/google";

export const dmSans = DM_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
