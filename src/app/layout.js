import "./globals.css";
import "./style.scss";
import { AppContextProvider } from "./context";
import GlobalClient from "./globalClient";

export const metadata = {
  title:
    "Newsroom | Nuren Group | Empower Women Life Cycle - Parenting, Education, Health & Wellness",
  description:
    "Nuren Group newsroom, press release & media coverage. Malaysia leading platform for maternity and children - focusing on parenting education, women health, family wellness & kids enrichment.",
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
