import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Header from "~/components/header";
import Footer from "~/components/footer";

export const metadata = {
  title: "AUonlineCS",
  description: "Created by Students for Students",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
