// import React from "react";
// import "./header.css";
// import { FiSearch } from "react-icons/fi";

// const navItems = ["Certificate", "Products", "Services", "Company"];

// const Header: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg sticky-top header-navbar">
//       <div className="container">

//         {/* Logo */}
//         <a className="navbar-brand" href="/">
//           <img src="./media/logo/logo.png" alt="Smart IT Box" height={42} />
//         </a>

//         {/* Mobile Toggle */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNavbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation */}
//         <div className="collapse navbar-collapse" id="mainNavbar">
//           <ul className="navbar-nav mx-auto gap-1">
//             {navItems.map(item => (
//               <li key={item}>
//                 <a href="#" className="nav-pill">
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
// <FiSearch size={20}/>
//           <a href="/contact" className="nav-pill nav-pill-cta">
//             Talk to us →
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import {
  FaCode,
  FaUsers,
  FaAward,
  FaFileAlt,
  FaComments,
  FaShieldAlt,
  FaBalanceScale,
  FaPhone,
  FaLightbulb,
  FaCogs,
  FaHeadphones,
  FaFlask,
  FaPalette,
  FaCloud,
  FaLock,
  FaChartLine,
  FaDatabase,
  FaMobile,
  FaGlobe,
} from "react-icons/fa";
import "./header.css";

const servicesData = [
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built to meet your specific business requirements",
    features: ["Web Applications", "Desktop Applications", "API Development"],
  },
  {
    icon: <FaUsers />,
    title: "IT Consulting",
    description:
      "Strategic technology advisory to optimize your IT infrastructure and processes",
    features: ["Technology Audit", "Digital Strategy", "Process Optimization"],
  },
  {
    icon: <FaCogs />,
    title: "DevOps & Automation",
    description:
      "Streamline your development and deployment processes with CI/CD pipelines",
    features: [
      "CI/CD Pipeline Setup",
      "Containerization",
      "Infrastructure as Code",
    ],
  },
  {
    icon: <FaHeadphones />,
    title: "24/7 Support & Maintenance",
    description:
      "Round-the-clock technical support and proactive system maintenance",
    features: [
      "Proactive Monitoring",
      "Incident Management",
      "Performance Optimization",
    ],
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
    icon: <FaCloud />,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions with AWS, Azure, and Google Cloud platform integration",
    features: ["Cloud Migration", "Infrastructure Setup", "Cloud Optimization"],
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
    icon: <FaChartLine />,
    title: "Digital Transformation",
    description:
      "Modernize your business processes with cutting-edge digital solutions",
    features: ["Process Automation", "Digital Strategy", "Change Management"],
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
  {
    icon: <FaGlobe />,
    title: "Web Development",
    description:
      "Responsive and scalable web applications with modern frameworks",
    features: ["React/Angular/Vue", "Backend Development", "API Integration"],
  },
];

const companyData = [
  { icon: <FaAward />, title: "About Us" },
  { icon: <FaUsers />, title: "Our Team" },
  { icon: <FaLightbulb />, title: "Careers" },
  { icon: <FaFileAlt />, title: "Case Studies" },
  { icon: <FaComments />, title: "Blogs" },
  { icon: <FaShieldAlt />, title: "Privacy Policy" },
  { icon: <FaBalanceScale />, title: "Terms of Service" },
  { icon: <FaPhone />, title: "Contact Us" },
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top header-navbar">
      <div className="container">
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
              <a href="#" className="nav-pill">
                Certificate
              </a>
            </li>
            <li>
              <a href="#" className="nav-pill">
                Products
              </a>
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
                <div className="mega-dropdown services-dropdown">
                  <div className="mega-dropdown-content">
                    <div className="services-grid">
                      {servicesData.map((service, index) => (
                        <div key={index} className="service-card">
                          <div className="service-icon">{service.icon}</div>
                          <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                              {service.features.map((feature, idx) => (
                                <li key={idx}>
                                  <span>●</span> {feature}
                                </li>
                              ))}
                            </ul>
                            <a href="#" className="service-link">
                              Learn more →
                            </a>
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
                <div className="mega-dropdown company-dropdown">
                  <div className="mega-dropdown-content container-fluid">
                    <div className="row g-4 align-items-stretch">
                      {/* LEFT: 3-column card grid */}
                      <div className="col-9">
                        <div className="row g-4">
                          {companyData.map((item, index) => (
                            <div key={index} className="col-4">
                              <a
                                href="#"
                                className="company-card d-flex align-items-start gap-3 p-3 h-100 text-decoration-none border rounded-3"
                              >
                                <div className="company-icon">{item.icon}</div>

                                <div className="company-content">
                                  <h6 className="mb-1">{item.title}</h6>
                                  <span className="text-warning fw-medium">
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
                        <div className="company-feature h-100 d-flex flex-column justify-content-between p-4 rounded-4 text-white bg-warning">
                          <div className="company-feature-icon mb-3">
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
                            className="btn btn-light fw-semibold mt-4 align-self-start"
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
