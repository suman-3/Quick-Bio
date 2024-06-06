import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Qick Bio",
  description: "Effortless bio creation for everyone.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <GridPattern width={60} height={60} className="-z-10 opacity-75" />
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
