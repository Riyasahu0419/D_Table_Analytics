import React from "react";
import { Container } from "react-bootstrap";
import { FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";
import "./CaseStudy.css";

const CaseStudy: React.FC = () => {
    const [activeView, setActiveView] = React.useState("grid");
  return (
    <>
      <div className="about-wrapper ">
        {/* HERO */}
        <section className="about-hero text-center">
          <div className="hero-overlay" />

          <Container className="position-relative">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">Case Studies</span>
            </div>

            <span className="pill-badge">● Case Studies & Success Stories</span>

            <h1 className="hero-title">
              Real World Impact <br />
              <span className="text-yellow">Client Success Stories</span>
            </h1>

            <p className="hero-subtitle1">
              Explore how we've helped businesses transform their operations,
              increase efficiency, and drive growth through our automation
              solutions.
            </p>

            <button
              className="footer-btn px-4 me-3"
              style={{ borderRadius: "30px" }}
            >
              View Our Work
            </button>
          </Container>
        </section>

        <section className="container my-5">
          {/* Search & Filter Row */}
          <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
            <div className="search-box flex-grow-1 ">
              <FaSearch />
              <input type="text" placeholder="Search stories..." />
            </div>

            <div className="view-box">
              <button
                className={`view-btn ${activeView === "grid" ? "active" : ""}`}
                onClick={() => setActiveView("grid")}
              >
                ▦
              </button>
              <button
                className={`view-btn ${activeView === "list" ? "active" : ""}`}
                onClick={() => setActiveView("list")}
              >
                ☰
              </button>
            </div>

            <select className="filter-select">
              <option>All Stories</option>
            </select>
          </div>

          {/* Info Row */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="text-muted mb-0">
              Showing <strong>5</strong> of <strong>5</strong> stories
            </p>
            <button className="refresh-btn">⟳ Refresh</button>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {[
              {
                title:
                  "DR Coats Chemical Sample Distribution Monitoring System",
                desc: "The custom-built sample management system transformed how DR Coats manages R&D samples...",
                img: "https://dummyimage.com/600x400/00c2a8/ffffff",
                time: "2 min",
                date: "Jan 16, 2026",
              },
              {
                title:
                  "Imast Improving Online Visibility with Dynamic Website Development",
                desc: "Building a strong digital foundation for long-term organic growth.",
                img: "https://dummyimage.com/600x400/eeeeee/000000",
                time: "1 min",
                date: "Jan 15, 2026",
              },
              {
                title:
                  "Tender Management Custom Software Solution for Business Process Automation",
                desc: "Reducing manual work and improving accuracy through smart automation.",
                img: "https://dummyimage.com/600x400/cccccc/000000",
                time: "2 min",
                date: "Jan 15, 2026",
              },
            ].map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="story-card h-100">
                  <div className="story-img">
                    <span className="featured-badge">Featured</span>
                    <img src={item.img} alt={item.title} />
                    <div className="story-meta">
                      <span>
                        <FaClock /> {item.time}
                      </span>
                      <span>
                        <FaCalendarAlt /> {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="story-content">
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudy;
