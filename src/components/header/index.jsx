"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../assets/img/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";
import { menu } from "../../data/navSetting";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="navbar rowc">
        <Link href="/about" className="logo rowc">
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
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
    </>
  );
}

function Menu() {
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
              <Link href={item.path} className="mainlink row">
                {item.label}
              </Link>
              <div className="sublinks">
                <div className="sublinks_content col">
                  {item.subMenu?.map((sub, index) => (
                    <Link
                      key={index}
                      href={item.path.match(/\/\w+/)[0] + sub.path}
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
    </motion.div>
  );
}

export default Header;
