"use client";
import React, { useState, useEffect } from "react";
import AdminLogin from "@/components/adminLogin";
import getCookie from "../utils/getCookie";
import "./style.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/img/logo.svg";

function Layout({ children }) {
  const [logged, setLogged] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLogged(getCookie("nurengroup_admin"));
    setMounted(true);
  }, []);

  return mounted ? (
    <div className="admin row">
      <title>Nurengroup Admin Panel</title>
      <meta name="description" content={"Nurengroup Admin Panel"} />
      {logged ? (
        <>
          <div className="admin_menu col">
            <Image className="logo" src={Logo} alt="Nuren group" />
            <Link className="menu_item rowc" href="/admin">
              <span className="material-symbols-outlined icon">
                full_coverage
              </span>
              <span>Mediahub Manager</span>
            </Link>
            <Link className="menu_item rowc" href="/admin/positions">
              <span className="material-symbols-outlined icon">work</span>
              <span>Position Manager</span>
            </Link>
            <Link className="menu_item rowc" href="/admin/finance-reports">
              <span className="material-symbols-outlined icon">finance</span>
              <span>Finance Reports</span>
            </Link>
            <Link
              className="menu_item cta_btn rowc"
              href="/"
              style={{ marginTop: "auto", color: "white" }}
            >
              <span className="material-symbols-outlined icon">home</span>
              <span>Homepage</span>
            </Link>
          </div>
          <div className="admin_body col">{children}</div>
        </>
      ) : (
        <AdminLogin setLogged={setLogged} storageKey={"nurengroup_admin"} />
      )}
    </div>
  ) : (
    <div
      className="loader"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        translate: "-50% -50%",
      }}
    ></div>
  );
}

export default Layout;
