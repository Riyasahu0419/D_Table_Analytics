import React from "react";
import { FaGlobe, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type Member = {
  name: string;
  role: string;
  desc: string;
  img: string;
  skills: string[];
  highlight?: boolean;
};

const members: Member[] = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    desc: "Visionary leader with 15+ years in tech innovation. Passionate about building products that change lives.",
    img: "https://i.pravatar.cc/150?img=12",
    skills: ["Strategy", "Product Vision", "Leadership"],
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    desc: "Engineering wizard with expertise in scalable systems and AI. Loves solving complex problems.",
    img: "https://i.pravatar.cc/150?img=32",
    skills: ["AI / ML", "Cloud Architecture", "DevOps"],
    // highlight: true,
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    desc: "Engineering wizard with expertise in scalable systems and AI. Loves solving complex problems.",
    img: "https://i.pravatar.cc/150?img=32",
    skills: ["AI / ML", "Cloud Architecture", "DevOps"],
    // highlight: true,
  },
 
  
];

const TeamSection: React.FC = () => {
  return (
    <section className="container" style={{ marginTop: "15%" }}>
      <div className="row g-5">
        {members.map((m, i) => (
          <div className="col-12 col-md-4" key={i}>
            <div
              className={`position-relative text-center h-100 rounded-4 border p-4 pt-6 ${
                m.highlight ? "bg-warning bg-opacity-10" : "bg-white"
              }`}
            >
              {/* Avatar */}
              <img
                src={m.img}
                alt={m.name}
                className="rounded-circle border border-4 border-white shadow position-absolute top-0 start-50 translate-middle"
                width={110}
                height={110}
              />

              {/* Content */}
              <div className="mt-5">
                <h5 className="fw-bold mb-1">{m.name}</h5>

                <span className="badge rounded-pill bg-warning bg-opacity-25 text-warning px-3 py-2 mb-3">
                  {m.role}
                </span>

                <p className="text-muted small px-3">{m.desc}</p>

                {/* Skills */}
                <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
                  {m.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge rounded-pill bg-light text-dark border px-3 py-2 fw-normal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a
                    href="#"
                    className="border rounded-circle d-flex align-items-center justify-content-center text-dark text-decoration-none"
                    style={{ width: 36, height: 36 }}
                  >
                    <FaLinkedinIn size={16} />
                  </a>

                  <a
                    href="#"
                    className="border rounded-circle d-flex align-items-center justify-content-center text-dark text-decoration-none"
                    style={{ width: 36, height: 36 }}
                  >
                    <FaTwitter size={16} />
                  </a>

                  <a
                    href="#"
                    className="border rounded-circle d-flex align-items-center justify-content-center text-dark text-decoration-none"
                    style={{ width: 36, height: 36 }}
                  >
                    <FaGlobe size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
