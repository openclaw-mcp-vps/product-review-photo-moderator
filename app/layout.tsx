import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewGuard – Moderate Review Photos with AI",
  description: "Scan user-generated review photos for inappropriate content, brand violations, and fake reviews. AI-powered moderation for e-commerce brands."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0fad15b7-dc32-4880-9c1b-944b5f2a3b44"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
