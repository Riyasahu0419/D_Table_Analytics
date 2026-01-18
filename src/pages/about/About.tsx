import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "./About.css";
import { FaBullseye, FaHeart, FaUsers } from "react-icons/fa";
import ValuesSection from "./ValuesSection";
import TimelineSection from "./TimelineData";
import { LeadershipSection } from "./LeadershipSection";

const AboutPage: React.FC = () => {
  const timelineData = [
    {
      year: "2015",
      title: "Foundation & Vision",
      text: "Established with a bold vision to redefine business automation.",
    },
    {
      year: "2017",
      title: "Enterprise Breakthrough",
      text: "Secured our first Fortune 500 client.",
    },
    {
      year: "2019",
      title: "Platform Revolution",
      text: "Launched our comprehensive automation suite.",
    },
  ];

  const values = [
    {
      title: "Customer-Centric Approach",
      text: "We put our clients at the heart of everything we do, ensuring their success is our top priority.",
      icon: <FaHeart />,
      bg: "value-yellow",
    },
    {
      title: "Excellence in Execution",
      text: "We deliver high-quality solutions with precision, attention to detail, and commitment to excellence.",
      icon: <FaBullseye />,
      bg: "value-blue",
    },
    {
      title: "Collaborative Teamwork",
      text: "We believe in the power of collaboration, working together to achieve extraordinary results.",
      icon: <FaUsers />,
      bg: "value-orange",
    },
  ];

  return (
    <div className="about-wrapper">
      {/* HERO */}
      <section className="about-hero text-center mb-5">
        <div className="hero-overlay" />

        <Container className="position-relative">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Home</span>
            <span className="separator">/</span>
            <span className="active">About</span>
          </div>

          <span className="pill-badge">● About Our Company</span>

          <h1 className="hero-title">
            Building the Future of <br />
            <span className="text-yellow">Business Automation</span>
          </h1>

          <p className="hero-subtitle1">
            We are passionate about helping businesses work smarter, not harder.
            Our team of experts combines technical expertise with business
            understanding to deliver transformative solutions.
          </p>

          {/* <Button className="btn-yellow">Meet Our Team</Button> */}
           <button className="footer-btn px-4" style={{borderRadius:"30px"}}>Meet Our Team</button>
        </Container>
      </section>

      {/* EVOLUTION */}
      {/* <section className="">
        <Container>
          <div className="section-header">
           
            <span
              className="d-inline-block mb-3 px-3 py-2 "
              style={{
                background:
                  "linear-gradient(135deg, #ffd6d6 0%, #fff3cd 50%, #ffd6d6 100%)",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: "10px",
              }}
            >
              Our Evolution
            </span>
            <h2>
              Charting the Course of{" "}
              <span className="text-yellow">Innovation & Excellence</span>
            </h2>
            <p className="timeline-description">
              Witness our transformative journey from visionary beginnings to
              becoming industry pioneers, marked by strategic milestones and
              groundbreaking achievements.
            </p>
          </div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      <TimelineSection/>

      {/* VALUES */}
      {/* <section className="about-section light ">
        <Container>
          <div className="section-header">
            <span
              className="d-inline-block mb-3 px-3 py-2 "
              style={{
                background:
                  "linear-gradient(135deg, #ffd6d6 0%, #fff3cd 50%, #ffd6d6 100%)",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: "10px",
              }}
            >
              Our Principles
            </span>
            <h2>
              The Values That{" "}
              <span className="text-yellow">Drive Us Forward</span>
            </h2>
          </div>

          <Row className="g-4">
            {values.map((v, i) => (
              <Col md={4} key={i}>
                <Card className={`value-card ${v.bg}`}>
                  <div className="icon-box">{v.icon}</div>
                  <h5>{v.title}</h5>
                  <p>{v.text}</p>
                  <span className="underline"></span>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      <ValuesSection/>

      {/* LEADERSHIP */}

      <LeadershipSection/>
      {/* <section className="about-section">
        <Container>
          <div className="section-header">
            <span className="pill-badge pink">Leadership Team</span>
            <h2>
              Meet Our <span className="text-yellow">Executive Leadership</span>
            </h2>
          </div>

          <Row className="g-4">
            {leaders.map((l, i) => (
              <Col md={4} key={i}>
                <Card className="leader-card">
                  <div className="leader-header">
                    <div className="avatar" />
                    <div>
                      <h6>{l.name}</h6>
                      <Badge className="role">{l.role}</Badge>
                      <div className="location">📍 {l.loc}</div>
                    </div>
                  </div>
                  <p className="leader-desc">{l.desc}</p>
                  <div className="chips">
                    {l.tags.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
    </div>
  );
};

export default AboutPage;

/* ------------------ */
const TimelineItem = ({ year, title, text, left }: any) => (
  <Row className={`timeline-item ${left ? "left" : ""}`}>
    <Col md={5}>
      {left && (
        <Card className="timeline-card">
          <h5>{title}</h5>
          <p>{text}</p>
        </Card>
      )}
    </Col>

    <Col md={2} className="timeline-year">
      <span>{year}</span>
    </Col>

    <Col md={5}>
      {!left && (
        <Card className="timeline-card">
          <h5>{title}</h5>
          <p>{text}</p>
        </Card>
      )}
    </Col>
  </Row>
);

const leaders = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    loc: "San Francisco, CA",
    desc: "Former Google executive with 15+ years in technology leadership.",
    tags: ["Digital Transformation", "Growth Strategy"],
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    loc: "Boston, MA",
    desc: "AI & ML pioneer with scalable platform expertise.",
    tags: ["AI", "Cloud Architecture"],
  },
  {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    loc: "New York, NY",
    desc: "Award-winning marketer with Apple & Nike experience.",
    tags: ["Brand Strategy", "Growth Marketing"],
  },
];
