import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaArrowRight, FaBolt, FaBriefcase, FaBullseye, FaClock, FaDollarSign, FaGraduationCap, FaHeartbeat, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

import { MdArrowOutward, MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Career.css'
const Career: React.FC = () => {
  return (
    <>
      <div className="about-wrapper ">
        {/* HERO */}
        <section className="about-hero text-center mb-5">
          <div className="hero-overlay" />

          <Container className="position-relative">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">Careers</span>
            </div>

            <span className="pill-badge">● Careers</span>

            <h1 className="hero-title">
              Join Our Team <br />
              <span className="text-yellow">
                Build the Future of Automation
              </span>
            </h1>

            <p className="hero-subtitle1">
              Work with passionate innovators creating cutting-edge automation
              solutions. Grow your career while transforming businesses
              worldwide.
            </p>

            {/* <Button className="btn-yellow">Meet Our Team</Button> */}
            <button
              className="footer-btn px-4 me-3"
              style={{ borderRadius: "30px" }}
            >
              View Open Positions
            </button>
            {/* <button className="px-4 py-2 border border-[#FFD84D] " style={{ borderRadius: "30px" }}>
            Contact Us
          </button> */}
          </Container>
        </section>

      <section className="container mb-5">
  <div className="row g-4">
    {[
      {
        title: "Competitive Salary",
        desc: "Above-market compensation with regular reviews",
        icon: <FaDollarSign />,
      },
      {
        title: "Flexible Work",
        desc: "Remote options and flexible hours",
        icon: <FaBriefcase />,
      },
      {
        title: "Career Growth",
        desc: "Learning budget and promotion paths",
        icon: <FaGraduationCap />,
      },
      {
        title: "Health & Wellness",
        desc: "Comprehensive insurance and wellness programs",
        icon: <FaHeartbeat />,
      },
      {
        title: "Latest Tech",
        desc: "Top-of-the-line equipment and tools",
        icon: <FaBolt />,
      },
      {
        title: "Great Team",
        desc: "Collaborative, supportive environment",
        icon: <FaUsers />,
      },
    ].map((item, index) => (
      <div className="col-12 col-md-6 col-lg-4" key={index}>
        <div className="career-card h-100">
          <div className="icon-box">{item.icon}</div>
          <h5 className="fw-bold mt-3">{item.title}</h5>
          <p className="text-muted small mb-0">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>




<section className="container my-5">
  {/* Heading */}
  <div className="mb-4">
    <h2 className="fw-bold">Open Positions</h2>
    <p className="text-muted">Find your perfect role and apply today</p>
  </div>

  <div className="row g-4">
    {[
      {
        title: "Senior Frontend Developer",
        salary: "$120k - $160k",
        dept: "Engineering",
        location: "Remote",
        type: "Full-time",
        exp: "5+ years",
        desc: "Build beautiful, performant user interfaces using modern React and TypeScript.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        posted: "Posted 2 days ago",
      },
      {
        title: "Senior Frontend Developer",
        salary: "$120k - $160k",
        dept: "Engineering",
        location: "Remote",
        type: "Full-time",
        exp: "5+ years",
        desc: "Build beautiful, performant user interfaces using modern React and TypeScript.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        posted: "Posted 2 days ago",
      },
      {
        title: "Senior Frontend Developer",
        salary: "$120k - $160k",
        dept: "Engineering",
        location: "Remote",
        type: "Full-time",
        exp: "5+ years",
        desc: "Build beautiful, performant user interfaces using modern React and TypeScript.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        posted: "Posted 2 days ago",
      },
      {
        title: "Product Designer",
        salary: "$90k - $130k",
        dept: "Design",
        location: "New York, NY",
        type: "Full-time",
        exp: "3+ years",
        desc: "Create intuitive user experiences and beautiful interfaces for our products.",
        skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
        posted: "Posted 1 week ago",
      },
    ].map((job, index) => (
      <div className="col-12 col-lg-6" key={index}>
        <div className="job-card h-100">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="fw-bold mb-0">{job.title}</h5>
            <span className="salary">{job.salary}</span>
          </div>

          {/* Meta */}
          <div className="job-meta mb-3">
            <span><FaBriefcase /> {job.dept}</span>
            <span><FaMapMarkerAlt /> {job.location}</span>
            <span><FaClock /> {job.type}</span>
            <span className="exp">{job.exp}</span>
          </div>

          {/* Description */}
          <p className="text-muted">{job.desc}</p>

          {/* Skills */}
          <div className="mb-3">
            {job.skills.map((skill, i) => (
              <span className="skill-badge" key={i}>
                {skill}
              </span>
            ))}
          </div>

          <hr />

          {/* Footer */}
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{job.posted}</small>
            <button className="btn apply-btn">
              Apply Now <FaArrowRight />
            </button>
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

export default Career;
