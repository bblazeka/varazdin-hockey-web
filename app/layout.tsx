import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { JoinUsComponent } from "@/components/join-us";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/icon.ico",
    shortcut: "/white-logo.png",
    apple: "/white-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 flex-grow w-full max-w-5xl">
              {children}
            </main>
            <div className="px-2 sm:px-6 py-2">
              <JoinUsComponent />
            </div>
            <footer
              className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4 sm:px-8"
              style={{ justifyContent: "space-around" }}
            >
              <div className="flex flex-col items-center sm:items-start">
                <h5 className="font-semibold">IHK Varaždin</h5>
                <p className="text-sm text-center sm:text-left">
                  Ulica ulica 12
                  <br />
                  4200 Varazdin
                </p>
              </div>
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
