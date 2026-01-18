import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaBullseye } from "react-icons/fa";
import TeamSection from "./TeamSection";
import { MdArrowOutward, MdOutlineKeyboardArrowRight } from "react-icons/md";


const Team: React.FC = () => {
  return (
    <>
    <div className="about-wrapper ">
      {/* HERO */}
      <section className="about-hero text-center  mb-5" >
        <div className="hero-overlay" />

        <Container className="position-relative">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Home</span>
            <span className="separator">/</span>
            <span className="active">Our Team</span>
          </div>

          <span className="pill-badge">●Our Company</span>

          <h1 className="hero-title">
            Meet Our Experts <br />
            <span className="text-yellow">The People Behind Your Success</span>
          </h1>

          <p className="hero-subtitle1">
            A passionate team of developers, designers, and automation
            specialists dedicated to transforming your business processes and
            driving digital innovation.
          </p>

          {/* <Button className="btn-yellow">Meet Our Team</Button> */}
          <button
            className="footer-btn px-4 me-3"
            style={{ borderRadius: "30px" }}
          >
            Join Our Team
          </button>
          {/* <button className="px-4 py-2 border border-[#FFD84D] " style={{ borderRadius: "30px" }}>
            Contact Us
          </button> */}


        </Container>
      </section>


       <section className="container ">
        <div className="row g-4">
          {[
          
            {
              value: "10+",
              title: "YEARS EXPERIENCE",
              desc: "Collective industry expertise",
              icon: <FaBullseye />,
            },
            {
              value: "200+",
              title: "PROJECTS DELIVERED",
              desc: "Positive long-term partnerships",
              icon: <FaBullseye />,
            },
            {
              value: "200+",
              title: "PROJECTS DELIVERED",
              desc: "Positive long-term partnerships",
              icon: <FaBullseye />,
            },
            
            {
              value: "98%",
              title: "CLIENT SATISFACTION",
              desc: "Positive long-term partnerships",
              icon: <FaBullseye />,
            },
          ].map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="border rounded-4 p-4 h-100 d-flex justify-content-between">
                <div>
                  <h3 className="fw-bold">{item.value}</h3>
                  <p className="text-warning fw-semibold mb-2 small">{item.title}</p>
                  <p className="text-muted small">{item.desc}</p>
                </div>
                <div className="bg-warning bg-opacity-25 rounded-3 d-flex align-items-center justify-content-center fs-4"
                  style={{ width: 48, height: 48 }}>
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </div>
<TeamSection/>

<section
  className="py-5"
  style={{ backgroundColor: "#FFFDF8" }}
>
  <div className="container text-center py-5">

    {/* Heading */}
    <h2 className="fw-bold display-6 mb-3">
      Ready to Join Our{" "}
      <span className="text-warning">Growing Team?</span>
    </h2>

    {/* Subtitle */}
    <p className="text-muted mx-auto mb-5" style={{ maxWidth: 720 }}>
      We're always looking for talented, passionate people who want to make a
      difference. Explore opportunities to grow with us.
    </p>

    {/* Buttons */}
    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mb-5">
      <button
        className="btn text-white fw-semibold px-4 py-3 rounded-pill shadow"
        style={{
          background: "linear-gradient(90deg, #FFD84D, #E0A800)",
          minWidth: 220,
        }}
      >
        View Open Positions  <MdArrowOutward size={18} />
      </button>

      <a
        href="#contact"
        className="fw-semibold text-decoration-none"
        style={{ color: "#B7791F" }}
      >
        Contact Our Team <MdOutlineKeyboardArrowRight size={20} />
      </a>
    </div>

    {/* Divider */}
    <hr className="my-5" />

    {/* Stats */}
    <div className="row text-center g-4">
      <div className="col-6 col-md-3">
        <h3 className="fw-bold text-warning mb-1">50+</h3>
        <p className="text-muted mb-0">Team Members</p>
      </div>

      <div className="col-6 col-md-3">
        <h3 className="fw-bold text-warning mb-1">10+</h3>
        <p className="text-muted mb-0">Years Experience</p>
      </div>

      <div className="col-6 col-md-3">
        <h3 className="fw-bold text-warning mb-1">200+</h3>
        <p className="text-muted mb-0">Projects Delivered</p>
      </div>

      <div className="col-6 col-md-3">
        <h3 className="fw-bold text-warning mb-1">98%</h3>
        <p className="text-muted mb-0">Client Satisfaction</p>
      </div>
    </div>

  </div>
</section>

              </>
  );
};

export default Team;
