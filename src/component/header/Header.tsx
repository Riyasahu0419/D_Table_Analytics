import React, { useEffect, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import {
  FaUsers,
  FaAward,
  FaFileAlt,
  FaComments,
  FaShieldAlt,
  FaBalanceScale,
  FaPhone,
  FaLightbulb,
  FaFlask,
  FaPalette,
  FaLock,
  FaDatabase,
  FaMobile,
  FaRegUserCircle,
} from "react-icons/fa";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    icon: <FaUsers />,
    title: "IT Consulting",
    description:
      "Strategic technology advisory to optimize your IT infrastructure and processes",
    features: ["Technology Audit", "Digital Strategy", "Process Optimization"],
  },

  {
    icon: <FaFlask />,
    title: "QA & Testing",
    description: "Comprehensive quality assurance and testing services",
    features: ["Automated Testing", "Manual Testing", "Performance Testing"],
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance user experience",
    features: ["User Research", "Wireframing", "Prototyping"],
  },

  {
    icon: <FaLock />,
    title: "Cybersecurity",
    description:
      "End-to-end security solutions to protect your digital assets and data",
    features: [
      "Security Audit",
      "Penetration Testing",
      "Compliance Management",
    ],
  },

  {
    icon: <FaDatabase />,
    title: "Data Analytics",
    description:
      "Turn your data into actionable insights with advanced analytics platforms",
    features: [
      "Data Visualization",
      "Business Intelligence",
      "Predictive Analytics",
    ],
  },
  {
    icon: <FaMobile />,
    title: "Mobile Solutions",
    description:
      "Cross-platform mobile applications for iOS and Android ecosystems",
    features: ["Native Apps", "Hybrid Apps", "Progressive Web Apps"],
  },
];

const companyData = [
  {
    icon: <FaAward />,
    title: "About Us",
    path: "/about",
  },
  {
    icon: <FaUsers />,
    title: "Our Team",
    path: "/team",
  },
  {
    icon: <FaLightbulb />,
    title: "Careers",
    path: "/career",
  },
  {
    icon: <FaFileAlt />,
    title: "Case Studies",
    path: "/case-studies",
  },
  {
    icon: <FaComments />,
    title: "Blogs",
    path: "/blogs",
  },
  {
    icon: <FaShieldAlt />,
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    icon: <FaBalanceScale />,
    title: "Terms of Service",
    path: "/policies/terms",
  },
  {
    icon: <FaPhone />,
    title: "Contact Us",
    path: "/contact",
  },
];

const ProductData = [
  {
    icon: <FaAward />,
    title: "Enterprise Solutions",
    description:
      "Scalable and secure software solutions for growing businesses",
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration Suite",
    description: "Tools that empower teams to collaborate and work efficiently",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation Platform",
    description: "Smart platforms designed to accelerate digital innovation",
  },
  {
    icon: <FaFileAlt />,
    title: "Business Intelligence",
    description: "Data-driven insights to improve decision-making and growth",
  },
  {
    icon: <FaComments />,
    title: "Customer Engagement",
    description: "Solutions that enhance communication and customer experience",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Compliance",
    description:
      "Advanced protection and compliance for critical business data",
  },
  {
    icon: <FaBalanceScale />,
    title: "Governance & Risk",
    description: "Tools to manage policies, risk, and operational compliance",
  },
  {
    icon: <FaPhone />,
    title: "Support & Communication",
    description: "Integrated support systems for seamless customer interaction",
  },
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav className="navbar navbar-expand-lg sticky-top header-navbar">
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

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-1">
            <li>
              <a href="/certificate" className="nav-pill">
                Certificate
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className={`nav-pill ${
                  activeDropdown === "product" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("product");
                }}
              >
                Product
                <FiChevronDown
                  size={16}
                  className={`dropdown-icon ${
                    activeDropdown === "product" ? "rotate" : ""
                  }`}
                />
              </a>
              {activeDropdown === "product" && (
                <div className="mega-dropdown-product company-dropdown mt-2">
                  <div className="mega-dropdown-content container-fluid">
                    <div className="row g-4 align-items-stretch">
                      {/* LEFT: 3-column card grid */}
                      <div className="col-8">
                        <div className="row g-4">
                          {ProductData.map((item, index) => (
                            <div key={index} className="col-6">
                              <a
                                href="#"
                                className="company-card d-flex align-items-start gap-3 p-3 h-100 text-decoration-none border rounded-3"
                              >
                                <div className="company-icon">{item.icon}</div>

                                <div className="company-content">
                                  <h6 className="mb-1 text-black">
                                    {item.title}
                                  </h6>

                                  <p className="small text-muted mb-1">
                                    {item.description}
                                  </p>
                                  <span className="text-[#d4a017] fw-medium">
                                    Learn more →
                                  </span>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* RIGHT: Feature column */}
                      <div className="col-4">
                        <div className="company-feature d-flex flex-column align-items-center text-center p-4 rounded-4 text-white">
                          <div className=" mb-3">
                            <FaLightbulb size={28} />
                          </div>

                          <div>
                            <h4 className="fw-bold">Innovation Lab</h4>

                            <p className="small my-3">
                              Experience the future of digital transformation
                              with our adaptive AI solutions that learn and
                              scale in real-time.
                            </p>
                          </div>

                          <a
                            href="#"
                            className="btn btn-light fw-semibold mt-4"
                          >
                            Explore Innovation →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Services Dropdown */}
            <li className="dropdown">
              <a
                href="#"
                className={`nav-pill  ${
                  activeDropdown === "services" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("services");
                }}
              >
                Services
                <FiChevronDown
                  size={16}
                  className={`dropdown-icon ${
                    activeDropdown === "services" ? "rotate" : ""
                  }`}
                />
              </a>
              {activeDropdown === "services" && (
                <div className="mega-dropdown-service services-dropdown mt-2">
                  <div className="mega-dropdown-content">
                    <div className="services-grid row g-4">
                      {servicesData.map((service, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                          <div className="service-card h-100">
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <div className="service-icon">{service.icon}</div>

                              <h5 className="fw-bold">{service.title}</h5>
                            </div>

                            <div className="service-content">
                              <p className="text-muted mb-3">
                                {service.description}
                              </p>

                              <ul className="service-features list-unstyled mb-4">
                                {service.features.map((feature, idx) => (
                                  <li key={idx}>
                                    <span className="dot"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <hr
                                style={{
                                  // width: "48px",
                                  height: "0.5px",
                                  backgroundColor: "#f4b400",
                                  border: "none",
                                  // margin: "16px 0",
                                  opacity: 0.2,
                                }}
                              />

                              <a href="#" className="service-link">
                                Learn more →
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Company Dropdown */}
            <li className="dropdown">
              <a
                href="#"
                className={`nav-pill ${
                  activeDropdown === "company" ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("company");
                }}
              >
                Company
                <FiChevronDown
                  size={16}
                  className={`dropdown-icon ${
                    activeDropdown === "company" ? "rotate" : ""
                  }`}
                />
              </a>
              {activeDropdown === "company" && (
                <div className="mega-dropdown company-dropdown mt-2">
                  <div className="mega-dropdown-content container-fluid">
                    <div className="row g-4 align-items-stretch">
                      {/* LEFT: 3-column card grid */}
                      <div className="col-9">
                        <div className="row g-4">
                          {companyData.map((item, index) => (
                            <div key={index} className="col-4">
                              <a
                                href={item.path}
                                className="company-card d-flex align-items-start gap-3 p-3 h-100 text-decoration-none border rounded-3"
                              >
                                <div className="company-icon">{item.icon}</div>

                                <div className="company-content">
                                  <h6 className="mb-1 text-black">
                                    {item.title}
                                  </h6>
                                  <span className="text-[#d4a017] fw-medium">
                                    Learn more →
                                  </span>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* RIGHT: Feature column */}
                      <div className="col-3">
                        <div className="company-feature d-flex flex-column align-items-center text-center p-3 rounded-4 text-white">
                          <div className=" mb-3">
                            <FaLightbulb size={28} />
                          </div>

                          <div>
                            <h4 className="fw-bold">
                              Driving Digital Innovation
                            </h4>

                            <p className="small mt-3">
                              With over a decade of experience, we help
                              businesses transform through technology. Our team
                              of...
                            </p>
                          </div>

                          <a
                            href="#"
                            className="btn btn-light fw-semibold mt-4"
                          >
                            Learn Our Story →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>

          <FaRegUserCircle
            onClick={() => navigate("/sign-up")}
            size={20}
            style={{ cursor: "pointer", marginRight: "12px" }}
          />
          <FiSearch
            size={20}
            style={{ cursor: "pointer", marginRight: "12px" }}
          />
          <a href="/contact" className="nav-pill nav-pill-cta">
            Talk to us →
          </a>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div className="dropdown-overlay" onClick={closeDropdown}></div>
      )}
    </nav>
  );
};

export default Header;





