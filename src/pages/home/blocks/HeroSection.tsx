
import "bootstrap/dist/css/bootstrap.min.css";

import { MdArrowOutward, MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeroSection: React.FC = () => {
 

  // const targetStats = [750, 2400, 1200, 98];

  // Animate statistics counter
  // useEffect(() => {
  //   const duration = 2000;
  //   const steps = 60;
  //   const increment = duration / steps;

  //   const intervals = targetStats.map((target, index) => {
  //     let current = 0;
  //     const step = target / steps;

  //     return setInterval(() => {
  //       current += step;
  //       if (current >= target) {
  //         current = target;
  //         clearInterval(intervals[index]);
  //       }
  //       setAnimatedStats((prev:any) => {
  //         const newStats = [...prev];
  //         newStats[index] = Math.floor(current);
  //         return newStats;
  //       });
  //     }, increment);
  //   });

  //   return () => intervals.forEach((interval) => clearInterval(interval));
  // }, []);



  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Navigation */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/" style={{ color: '#1e3a5f', fontSize: '24px' }}>
            SMART ITBOX
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="py-5 position-relative overflow-hidden bg-light mt-4">
        {/* ONLY KEYFRAMES – NO CLASSES */}
        <style>{`
    @keyframes dotPulse {
      0%,100% { transform: scale(1); opacity: .6; }
      50% { transform: scale(1.6); opacity: 1; }
    }
    @keyframes underlineMove {
      0% { background-position: 0%; }
      100% { background-position: 200%; }
    }
  `}</style>

        <div className="container" style={{marginTop:'5%'}}>
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-lg-6">
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
                Custom Automation. Real Results. Zero Chaos.
              </span>

              <h1
                className="fw-bold"
                style={{ fontSize: 34, lineHeight: 1.4, color: "#0b1f44" }}
              >
                No Gimmicks,
                {/* LINE 1 */}
                <div className="d-flex align-items-center gap-3 ">
                  <div className="d-flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        style={{
                          width: 8,
                          height: 8,
                          background: "#ffc107",
                          borderRadius: "50%",
                          animation: `dotPulse 1.6s ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="position-relative fw-bold text-warning">
                    No Templates,
                    <span
                      className="position-absolute start-0"
                      style={{
                        bottom: -6,
                        width: "100%",
                        height: 4,
                        background:
                          "linear-gradient(90deg, transparent, #ffc107, transparent)",
                        backgroundSize: "200% 100%",
                        animation: "underlineMove 1.8s linear infinite",
                      }}
                    />
                  </span>
                </div>
                {/* LINE 2 */}
                <div className="d-flex align-items-center gap-3 ">
                  <div className="d-flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        style={{
                          width: 8,
                          height: 8,
                          background: "#ffc107",
                          borderRadius: "50%",
                          animation: `dotPulse 1.6s ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="position-relative fw-bold text-dark">
                    No Fake Commitments,
                  </span>
                </div>
                {/* LINE 3 */}
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        style={{
                          width: 8,
                          height: 8,
                          background: "#ffc107",
                          borderRadius: "50%",
                          animation: `dotPulse 1.6s ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="position-relative fw-bold text-dark">
                    Actual work, manual to
                    {/* <span
                className="position-absolute start-0"
                style={{
                  bottom: -6,
                  width: "100%",
                  height: 4,
                  background: "linear-gradient(90deg, transparent, #0b1f44, transparent)",
                  backgroundSize: "200% 100%",
                  animation: "underlineMove 1.8s linear infinite"
                }}
              /> */}
                  </span>
                </div>
                {/* LINE 4 */}
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        style={{
                          width: 8,
                          height: 8,
                          background: "#ffc107",
                          borderRadius: "50%",
                          animation: `dotPulse 1.6s ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="position-relative fw-bold text-warning">
                    Massive — Automation
                    <span
                      className="position-absolute start-0"
                      style={{
                        bottom: -6,
                        width: "100%",
                        height: 4,
                        background:
                          "linear-gradient(90deg, transparent, #ffc107, transparent)",
                        backgroundSize: "200% 100%",
                        animation: "underlineMove 1.8s linear infinite",
                      }}
                    />
                  </span>
                </div>
              </h1>

              <p className="text-secondary">
                Transform your business operations with intelligent automation
                and custom-built web applications that actually deliver results.
              </p>

              <p className="text-secondary">
                We help you streamline processes, reduce manual work, and scale
                efficiently with smart technology solutions.
              </p>

              <p className="fst-italic text-muted mb-4">
                SMART ITBOX – Your Business Process Automation Partner…
              </p>

              <div className="d-flex align-items-center gap-4">
                <button
                  className="btn rounded-pill px-5 py-3 fw-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #FFD84D 0%, #e8bb3e 45%, #cb7c05 100%)",
                    border: "none",
                    boxShadow: "0 6px 18px rgba(203,124,5,0.35)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 26px rgba(203,124,5,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 18px rgba(203,124,5,0.35)";
                  }}
                >
                  Start Free Trial <MdOutlineKeyboardArrowRight size={20} />
                </button>

                <a
                  href="/case-studies"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#cb7c05" }}
                >
                  View Case Studies <MdArrowOutward size={18} />
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 mt-5 mt-lg-0 ">
              <div className="rounded-4 overflow-hidden shadow mb-5">
                <iframe
                  width="100%"
                  height="320"
                  src="https://www.youtube.com/embed/B4z8t1AEqTg?start=4"
                  title="SMART ITBOX"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="row g-2 mt-4">
                {[
                  ["750+", "Automated Workflows"],
                  ["2,400+", "Active Integrations"],
                  ["1,200+", "Hours Saved Monthly"],
                  ["98+", "Client Satisfaction"],
                ].map(([value, label], i) => (
                  <div key={i} className="col-6 col-md-3 py-2">
                    <div
                      className="text-center h-100"
                      style={{
                        background:
                          "linear-gradient(135deg, #fffaf2 0%, #ffffff 100%)",
                        borderRadius: "20px",
                        padding: "28px 20px",
                        // boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                        border: "1px solid #f1f1f1",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px)";
                        // e.currentTarget.style.boxShadow =
                        //   "0 14px 30px rgba(0,0,0,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        // e.currentTarget.style.boxShadow =
                        //   "0 8px 20px rgba(0,0,0,0.08)";
                      }}
                    >
                      <h3
                        className="fw-bold "
                        style={{
                          fontSize: "24px",
                          color: "#0b1f44",
                        }}
                      >
                        {value}
                      </h3>

                      {/* Yellow underline */}
                      <div
                        className="mx-auto "
                        style={{
                          width: "40px",
                          height: "2px",
                          borderRadius: "2px",
                          background: "#cb7c05",
                        }}
                      />

                      <p
                        className="mb-0"
                        style={{
                          fontSize: "13px",
                          color: "#4a5a6a",
                          fontWeight: 500,
                        }}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


{/* services cards*/}

<div className="container my-5">
  <div className="row g-4 align-items-stretch">
    {/* Image Card */}
    <div className="col-md-4">
      <div
        className="h-100 p-4"
        style={{
          background: "#fff3da",
          borderRadius: "15px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Web Design"
          className="img-fluid"
          // style={{ borderRadius: "18px" }}
        />
      </div>
    </div>

    {/* Web Design */}
    <div className="col-md-4">
      <div
        className="h-100 text-center d-flex flex-column justify-content-center px-4"
        style={{
          background:
            "linear-gradient(135deg, #ffe6b3 0%, #f7d79a 100%)",
          borderRadius: "15px",
        }}
      >
        <h4 className="fw-bold my-4">Web Design</h4>
        <div
          className="mx-auto mb-3"
          style={{
            width: "50px",
            height: "2px",
            background: "#e0a800",
            borderRadius: "2px",
          }}
        />
        <p className="text-secondary">
          Web design usually refers to the user experience aspects of
          website development rather than software development.
        </p>
      </div>
    </div>

    {/* Digital Transformation */}
    <div className="col-md-4">
      <div
        className="h-100 text-center d-flex flex-column justify-content-center px-4"
        style={{
          background: "#ffe9c6",
          borderRadius: "15px",
        }}
      >
        <h4 className="fw-bold my-4">Digital Transformation</h4>
        <div
          className="mx-auto mb-3"
          style={{
            width: "50px",
            height: "2px",
            background: "#e0a800",
            borderRadius: "2px",
          }}
        />
        <p className="text-secondary">
          Digital transformation is the incorporation of computer-based
          technologies into an organization’s products, processes and
          strategies.
        </p>
      </div>
    </div>
  </div>
</div>



      {/* About Section */}
      {/* <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span className="text-warning fw-bold mb-2 d-block">
                Welcome to SMART ITBOX
              </span>
              <h2
                className="mb-4"
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  color: "#1e3a5f",
                }}
              >
                Comprehensive Business Process Automation
              </h2>
              <p className="mb-3" style={{ color: "#6c757d" }}>
                Streamline, simplify, and scale your operations with tailored
                automation solutions.
              </p>
              <p className="mb-4" style={{ color: "#6c757d" }}>
                At SMART ITBOX, we specialize in building end-to-end business
                systems using Google Sheets–based automation and custom Web
                Apps. Our solutions are designed to bring efficiency, accuracy,
                transparency, and control to your core business processes.
              </p>

              <div className="row g-3 mb-4">
                {[
                  "Automate workflows",
                  "Centralize data",
                  "Enable real-time insights",
                  "Reduce manual tasks",
                ].map((item, idx) => (
                  <div key={idx} className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#ffc107",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      ></div>
                      <span style={{ color: "#1e3a5f", fontWeight: "500" }}>
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="btn btn-warning px-4 py-2"
                style={{ borderRadius: "25px" }}
              >
                More About Us
              </button>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-12">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop"
                    alt="Team"
                    style={{ width: "100%", borderRadius: "15px" }}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop"
                    alt="Workspace"
                    style={{ width: "100%", borderRadius: "15px" }}
                  />
                </div>
                <div className="col-6">
                  <div
                    className="bg-warning d-flex align-items-center justify-content-center"
                    style={{
                      height: "100%",
                      borderRadius: "15px",
                      padding: "30px",
                    }}
                  >
                    <div className="text-center">
                      <h3
                        style={{
                          fontSize: "48px",
                          fontWeight: "700",
                          color: "#fff",
                        }}
                      >
                        100%
                      </h3>
                      <p
                        style={{ color: "#fff", fontWeight: "600", margin: 0 }}
                      >
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section style={{ padding: "80px 0", backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-warning fw-bold mb-2 d-block">
              Our Services
            </span>
            <h2
              style={{ fontSize: "40px", fontWeight: "700", color: "#1e3a5f" }}
            >
              Boost your Business Growth with excellent effective services
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Google Sheets Automation",
                icon: "📊",
                desc: "Automate manual workflows using Google Apps Script with real-time data sync.",
              },
              {
                title: "Custom ERP & MIS Systems",
                icon: "⚙️",
                desc: "Tailored ERP solutions for SMEs with modules for Order, Inventory, Sales, HR.",
              },
              {
                title: "WhatsApp API Integration",
                icon: "💬",
                desc: "Auto-replies, lead capture, reminders via WhatsApp integrated with your CRM.",
              },
              {
                title: "Dynamic Web Applications",
                icon: "🌐",
                desc: "Modern websites and dashboards using React.js, Next.js, and Node.js.",
              },
              {
                title: "Field Team Automation",
                icon: "📱",
                desc: "Sales tracking, quotation flow, and customer follow-up tools for field reps.",
              },
              {
                title: "Voice-to-Text Automation",
                icon: "🎤",
                desc: "Convert WhatsApp voice messages into structured text automatically.",
              },
            ].map((service, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{ borderRadius: "15px", transition: "transform 0.3s" }}
                >
                  <div className="card-body p-4">
                    <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                      {service.icon}
                    </div>
                    <h4
                      className="mb-3"
                      style={{ color: "#1e3a5f", fontWeight: "600" }}
                    >
                      {service.title}
                    </h4>
                    <p style={{ color: "#6c757d" }}>{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Scrolling Services Banner */}
      {/* <section
        style={{
          padding: "40px 0",
          backgroundColor: "#1e3a5f",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "scroll 30s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...services, ...services].map((service, idx) => (
            <span
              key={idx}
              style={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: "500",
                padding: "0 40px",
                display: "inline-block",
              }}
            >
              {service}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section> */}

      {/* Work Process Section */}
      {/* <section style={{ padding: "80px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="text-warning fw-bold mb-2 d-block">
              Work Process
            </span>
            <h2
              style={{ fontSize: "40px", fontWeight: "700", color: "#1e3a5f" }}
            >
              Our Working Process Faster And Easier
            </h2>
            <p className="text-muted">
              Our structured 7-step methodology ensures precision, efficiency,
              and quality.
            </p>
          </div>

          <div className="row g-4">
            {workProcess.map((step, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div
                  className="card border-0 shadow-sm h-100"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#ffc107",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#fff",
                          marginRight: "15px",
                        }}
                      >
                        {step.number}
                      </div>
                      <div>
                        <h5
                          style={{
                            color: "#1e3a5f",
                            margin: 0,
                            fontWeight: "600",
                          }}
                        >
                          {step.title}
                        </h5>
                        <small className="text-warning">{step.phase}</small>
                      </div>
                    </div>
                    <p style={{ color: "#6c757d", marginBottom: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section style={{ padding: "60px 0", backgroundColor: "#ffc107" }}>
        <div className="container">
          <div className="row text-center">
            {[
              { value: "3K+", label: "Successful Projects" },
              { value: "20+", label: "Experienced Team" },
              { value: "150+", label: "Happy Customers" },
              { value: "50+", label: "Client 5 Star Review" },
            ].map((stat, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h2
                  style={{ fontSize: "48px", fontWeight: "700", color: "#fff" }}
                >
                  {stat.value}
                </h2>
                <p
                  style={{ color: "#fff", fontWeight: "600", marginBottom: 0 }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    
    
    </div>
  );
};

export default HeroSection;
