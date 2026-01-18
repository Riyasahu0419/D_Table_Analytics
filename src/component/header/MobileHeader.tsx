import React, { useEffect, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { FaRegUserCircle, FaLightbulb } from "react-icons/fa";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { servicesData, companyData, ProductData } from "./HeaderData"; // import your existing data

const MobileHeader: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name: string) =>
    setActiveDropdown(activeDropdown === name ? null : name);

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top header-navbar ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="container p-2">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src="./media/logo/logo.png" alt="Smart IT Box" height={42} />
        </a>

        {/* Mobile toggle */}
        {isMobile && (
          <div className="d-flex align-items-center gap-2">
            <FaRegUserCircle
              size={20}
              onClick={() => navigate("/sign-up")}
              style={{ cursor: "pointer" }}
            />
            <FiSearch size={20} style={{ cursor: "pointer" }} />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-1">
            <li>
              <a href="/certificate" className="nav-pill">
                Certificate
              </a>
            </li>

            {/* Product */}
            <li className="dropdown">
              <a
                href="#"
                className={`nav-pill ${activeDropdown === "product" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("product");
                }}
              >
                Product <FiChevronDown
                  size={16}
                  className={activeDropdown === "product" ? "rotate" : ""}
                />
              </a>

              {isMobile ? (
                activeDropdown === "product" && (
                  <div className="mobile-dropdown">
                    {ProductData.map((p, i) => (
                      <a key={i} href="#" className="mobile-dropdown-item">
                        {p.title}
                      </a>
                    ))}
                  </div>
                )
              ) : (
                activeDropdown === "product" && (
                  <div className="mega-dropdown-product company-dropdown mt-2">
                    {/* ...existing desktop mega dropdown code */}
                  </div>
                )
              )}
            </li>

            {/* Services */}
            <li className="dropdown">
              <a
                href="#"
                className={`nav-pill ${activeDropdown === "services" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                Services <FiChevronDown
                  size={16}
                  className={activeDropdown === "services" ? "rotate" : ""}
                />
              </a>

              {isMobile ? (
                activeDropdown === "services" && (
                  <div className="mobile-dropdown">
                    {servicesData.map((s, i) => (
                      <a key={i} href="#" className="mobile-dropdown-item">
                        {s.title}
                      </a>
                    ))}
                  </div>
                )
              ) : (
                activeDropdown === "services" && (
                  <div className="mega-dropdown-service services-dropdown mt-2">
                    {/* ...existing desktop mega dropdown code */}
                  </div>
                )
              )}
            </li>

            {/* Company */}
            <li className="dropdown">
              <a
                href="#"
                className={`nav-pill ${activeDropdown === "company" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("company");
                }}
              >
                Company <FiChevronDown
                  size={16}
                  className={activeDropdown === "company" ? "rotate" : ""}
                />
              </a>

              {isMobile ? (
                activeDropdown === "company" && (
                  <div className="mobile-dropdown">
                    {companyData.map((c, i) => (
                      <a key={i} href={c.path} className="mobile-dropdown-item">
                        {c.title}
                      </a>
                    ))}
                  </div>
                )
              ) : (
                activeDropdown === "company" && (
                  <div className="mega-dropdown company-dropdown mt-2">
                    {/* ...existing desktop mega dropdown code */}
                  </div>
                )
              )}
            </li>
          </ul>

          {!isMobile && (
            <>
              <FaRegUserCircle
                onClick={() => navigate("/sign-up")}
                size={20}
                style={{ cursor: "pointer", marginRight: "12px" }}
              />
              <FiSearch
                size={20}
                style={{ cursor: "pointer", marginRight: "12px" }}
              />
            </>
          )}

          <a href="/contact" className="nav-pill nav-pill-cta">
            Talk to us →
          </a>
        </div>
      </div>

      {/* Overlay */}
      {activeDropdown && !isMobile && (
        <div className="dropdown-overlay" onClick={closeDropdown}></div>
      )}
    </nav>
  );
};

export default MobileHeader;
