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
      <AppContextProvider>
        <GlobalClient>{children}</GlobalClient>
      </AppContextProvider>
    </html>
  );
}
