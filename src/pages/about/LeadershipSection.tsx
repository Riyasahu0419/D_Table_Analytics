import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // npm install react-icons

export const LeadershipSection: React.FC = () => {
    const leaders = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    loc: "San Francisco, CA",
    desc: "Former Google executive with 15+ years in technology leadership, specializing in scaling high-growth companies.",
    tags: ["Digital Transformation", "Growth Strategy", "Enterprise Leadership"],
    img: "/media/hero/about1.png"
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    loc: "Boston, MA",
    desc: "AI and machine learning pioneer with background at MIT and OpenAI. Built scalable platforms serving millions.",
    tags: ["Artificial Intelligence", "Cloud Architecture", "Scalability"],
    img: "/media/hero/about1.png"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    loc: "New York, NY",
    desc: "Award-winning marketer with experience at Apple and Nike. Specializes in brand building and market strategies.",
    tags: ["Brand Strategy", "Growth Marketing", "Digital Advertising"],
     img: "/media/hero/about1.png"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    loc: "New York, NY",
    desc: "Award-winning marketer with experience at Apple and Nike. Specializes in brand building and market strategies.",
    tags: ["Brand Strategy", "Growth Marketing", "Digital Advertising"],
     img: "/media/hero/about1.png"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Marketing Officer",
    loc: "New York, NY",
    desc: "Award-winning marketer with experience at Apple and Nike. Specializes in brand building and market strategies.",
    tags: ["Brand Strategy", "Growth Marketing", "Digital Advertising"],
     img: "/media/hero/about1.png"
  },
];
  return (
    <section className="about-section py-5 bg-white">
      <Container>
        <div className="section-header text-center mb-5">
           <span
              className="d-inline-block mb-3 px-3 py-2 "
              style={{
                background:
                  "linear-gradient(135deg, #ffd6d6 0%, #fff3cd 50%, #ffd6d6 100%)",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: "10px",
              }}
            >Leadership Team</span>
          <h2 className="fw-bold mt-3">
            Meet Our <span className="text-yellow-custom">Executive Leadership</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Guided by industry veterans and innovative thinkers who combine decades of experience with forward-thinking strategies.
          </p>
        </div>

        <Row className="g-4">
          {leaders.map((l, i) => (
            <Col md={4} key={i}>
              <Card className="leader-card border-0 shadow-sm h-100 p-3">
                <Card.Body>
                  <div className="leader-header d-flex align-items-start mb-3">
                    <div className="avatar-wrapper me-3">
                      <img src={l.img} alt={l.name} className="avatar-img" />
                    </div>
                    <div>
                      <h5 className="mb-1 fw-bold">{l.name}</h5>
                      <div className="role-badge mb-1">{l.role}</div>
                      <div className="location-text"><i className="bi bi-geo-alt me-1"></i>{l.loc}</div>
                    </div>
                  </div>
                  
                  <p className="leader-desc text-muted mb-4">{l.desc}</p>
                  
                  <div className="chips-container d-flex flex-wrap gap-2 mb-4">
                    {l.tags.map((t, idx) => (
                      <span key={idx} className="skill-chip">{t}</span>
                    ))}
                  </div>

                  <div className="social-footer d-flex gap-2 border-top pt-3">
                    <button className="social-btn"><FaLinkedinIn /></button>
                    <button className="social-btn"><FaEnvelope /></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};