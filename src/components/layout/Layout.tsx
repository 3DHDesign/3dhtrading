import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "../common/WhatsAppFloat";

export default function Layout() {
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setHideTopBar(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const TOPBAR_H = 40;   // must match TopBar height
  const HEADER_H = 92;   // approx your header (py-6). adjust if needed


  
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <TopBar hidden={hideTopBar} />
      <Header topOffset={hideTopBar ? 0 : TOPBAR_H} />

      {/* Spacer so content doesn't go behind fixed bars */}
      <div style={{ height: (hideTopBar ? 0 : TOPBAR_H) + HEADER_H }} />

      <main>
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
