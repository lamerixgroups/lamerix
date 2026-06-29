import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://lamerix.com"),

  title: "LAMERIX",

  description: "Premium futuristic brand experience",

  verification: {
    google: "3_oez95g_w0__XZjE4-IHZirgTW3YSWe6svlKO9Ant4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}