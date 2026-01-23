import { Outlet } from "react-router-dom"; 
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "../common/WhatsAppFloat";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
