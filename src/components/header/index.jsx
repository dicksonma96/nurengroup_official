"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/img/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";
import { menu } from "../../app/utils/navSetting";
import footer_copywriting from "@/app/utils/footer_copywriting";

function Header() {
  const [OnTop, setOnTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ScrollDirection, setScrollDirection] = useState("scrollingUp");

  useEffect(() => {
    let lastScrollTop = 0;
    const HeaderIsOnTop = () => {
      if (window.scrollY === 0) {
        setOnTop(true);
      } else setOnTop(false);

      let currentScroll = document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setScrollDirection("scrollingDown");
      } else {
        setScrollDirection("scrollingUp");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };
    addEventListener("scroll", HeaderIsOnTop);
    HeaderIsOnTop();

    return () => {
      removeEventListener("scroll", HeaderIsOnTop);
    };
  }, []);

  return (
    <>
      <header
        className={`navbar rowc ${isOpen || OnTop ? "" : "header_top"} ${
          isOpen || OnTop ? "" : ScrollDirection
        }`}
      >
        <Link href="/home" className="logo rowc">
          <Image src={Logo} alt="Nuren group" />
        </Link>

        <div
          className={`navbtn col ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
}

function Menu({ setIsOpen }) {
  return (
    <motion.div
      className="popup_menu"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 100, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
    >
      <nav className="col">
        {menu.map((item, index) => {
          return (
            <div key={index} className="nav_item col">
              <Link
                href={item.path}
                className="mainlink row"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              <div className="sublinks">
                <div className="sublinks_content col">
                  {item.subMenu?.map((sub, index) => (
                    <Link
                      key={index}
                      href={item.path.match(/\/\w+/)[0] + sub.path}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* <div className="menu_footer col">
        <div className="menu_sm rowc"></div>
        <hr />
        <footer>{footer_copywriting}</footer>
      </div> */}
    </motion.div>
  );
}

export default Header;
