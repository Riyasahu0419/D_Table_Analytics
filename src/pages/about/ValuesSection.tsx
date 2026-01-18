import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeart, FaBullseye, FaUsers } from "react-icons/fa";

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

export default function ValuesSection() {
  return (
    <section className="about-section light">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <span
            className="d-inline-block mb-3 px-3 py-2"
            style={{
              background:
                "linear-gradient(135deg, #ffd6d6 0%, #fff3cd 50%, #ffd6d6 100%)",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: "10px",
            }}
          >
            Our Principles
          </span>

          <h2>
            The Values That{" "}
            <span className="text-yellow">Drive Us Forward</span>
          </h2>
          <p className="timeline-description">
            Our core principles guide every decision we make and every solution
            we create for our clients.
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {values.map((v, i) => (
            <Col md={4} key={i}>
              <div className={`value-card ${v.bg}`}>
                <div className="icon-wrapper">
                  <div className="icon-box">{v.icon}</div>
                </div>

                <h5>{v.title}</h5>
                <p>
                  {v.text}

                  <br />
                  {/* <span className="underline"></span> */}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
