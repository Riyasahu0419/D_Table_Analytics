import { Container } from "react-bootstrap";
import { FaCalendarAlt, FaBullseye } from "react-icons/fa";

const timelineData = [
  {
    year: "2022",
    title: "Foundation & Vision",
    text: "Established with a bold vision to redefine business automation, beginning our journey with a small dedicated team committed to innovation.",
    icon: <FaCalendarAlt />,
    badge: "Milestone",
  },
  {
    year: "2011",
    title: "Enterprise Breakthrough",
    text: "Secured our first Fortune 500 client, validating our approach and marking entry into the enterprise automation landscape.",
    icon: <FaBullseye />,
  },
  {
    year: "2015",
    title: "Foundation & Vision",
    text: "Established with a bold vision to redefine business automation, beginning our journey with a small dedicated team committed to innovation.",
    icon: <FaCalendarAlt />,
    badge: "Milestone",
  },
  {
    year: "2017",
    title: "Enterprise Breakthrough",
    text: "Secured our first Fortune 500 client, validating our approach and marking entry into the enterprise automation landscape.",
    icon: <FaBullseye />,
  },
];

export default function TimelineSection() {
  return (
    <section className="timeline-section">
      <Container>
        {/* Header */}
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

        {/* Timeline */}
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-row ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              {/* Card */}
              <div className="timeline-card">
                <div className="card-header">
                  <div className="icon-box">{item.icon}</div>

                  <div className="title-wrap">
                    <h4>{item.title}</h4>
                    <span className="underline"></span>
                  </div>

                  {item.badge && (
                    <span className="milestone">{item.badge}</span>
                  )}
                </div>

                <p>{item.text}</p>
              </div>

              {/* Center dot */}
              <span className="timeline-dot"></span>

              {/* Year */}
              <span className="timeline-year">{item.year}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
