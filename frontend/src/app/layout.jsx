import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import Provider from "./provider";
import LenisProvider from "./lenis-provider";

export const metadata = {
  title: "An Idea Tech | Growth-Driven Tech & Branding Solutions",
  description:
    "An Idea Tech excels in creating fast, user-friendly websites with a focus on aesthetic design and SEO optimization, ensuring a standout online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body>
        <ThemeProvider>
          <Provider>
            <LenisProvider>{children}</LenisProvider>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
