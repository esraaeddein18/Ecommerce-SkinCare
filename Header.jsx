import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { BiSolidShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkNavbar = scrolled || location.pathname !== "/";
  const linkClass = isDarkNavbar ? "text-dark" : "text-white";

  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow-sm transition ${isDarkNavbar ? "bg-white" : "bg-transparent"}`}>
      <div className="container-fluid">
        <Link to="/" className={`navbar-brand ms-5 fw-bolder fs-3 ${isDarkNavbar ? "text-dark" : "text-white"}`}>
          TakeCare
        </Link>
        <button
          className={`navbar-toggler ${isDarkNavbar ? "navbar-light" : "navbar-dark"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className={`nav-link ${linkClass}`} to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${linkClass}`} to="/about">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${linkClass}`} to="/shop">Products</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${linkClass}`} to="/shop">Make Up & Skin Care</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="Contact" className={`nav-link ${linkClass}`}>
                Contact US
              </Link>
            </li>
<li className="d-flex align-items-center mx-5">
  <Link
    onClick={toggleSidebar}
    className="position-relative d-flex justify-content-center align-items-center rounded-circle border bg-white shadow"
    style={{
      width: "45px",
      height: "45px",
      color: "#000", // لون الأيقونة أسود
    }}
  >
    <BiSolidShoppingBag size={22} />
    <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {totalItems}
    </div>
  </Link>
</li>

          </ul>
        </div>
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => setTimeout(toggleSidebar(), 6000)} />
      </div>
    </nav>
  );
};

export default Header;
