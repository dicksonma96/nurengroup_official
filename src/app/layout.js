import "./globals.css";
import "./style.scss";
import { AppContextProvider } from "./context";
import GlobalClient from "./globalClient";
import { Jost, Urbanist } from "next/font/google";

export const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Newsroom | Nuren Group | Empower Women Life Cycle - Parenting, Education, Health & Wellness",
  description:
    "Nuren Group newsroom, press release & media coverage. Malaysia leading platform for maternity and children - focusing on parenting education, women health, family wellness & kids enrichment.",
  icons: {
    icon: "https://media.nurengroup.com/lib/images/favicon/nuren_favicon2.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://media.nurengroup.com/lib/images/favicon/nuren_favicon2.ico"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <AppContextProvider>
        <GlobalClient>{children}</GlobalClient>
      </AppContextProvider>
    </html>
  );
}
