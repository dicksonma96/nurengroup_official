import Header from "@/components/header";
import Footer from "@/components/footer/footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
