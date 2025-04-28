import type { Metadata } from "next";
import "./globals.css";
import  Providers  from "@/providers";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Modern Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
    <body className={`antialiased`}>
      {/* Use ThemeProvider properly for SSR */}
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
  );
}
