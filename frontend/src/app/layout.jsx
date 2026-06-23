  
import ThemeContext from "@/context/themeContext";
import "./globals.css";

export const metadata = {
  title: "An Idea Tech | Growth-Driven Tech & Branding Solutions",
  description: "An Idea Tech excels in creating fast, user-friendly websites with a focus on aesthetic design and SEO optimization, ensuring a standout online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-white dark:bg-slate-900`}>
        <ThemeContext>
          {children}
        </ThemeContext>
      </body>
    </html>
  );
}
