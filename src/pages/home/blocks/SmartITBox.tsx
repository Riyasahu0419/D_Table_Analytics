// import React from "react";

// /* =======================
//    TYPES
// ======================= */
// interface StatCardProps {
//   number: string;
//   title: string;
// }

// interface ServiceCardProps {
//   title: string;
//   description?: string;
// }

// /* =======================
//    STAT CARD
// ======================= */
// const StatCard: React.FC<StatCardProps> = ({ number, title }) => {
//   return (
//     <div
//       className="text-center h-100 d-flex flex-column justify-content-center"
//       style={{
//         background: "#fde6ea",
//         borderRadius: 20,
//         padding: "28px 20px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//         transition: "all 0.3s ease",
//         cursor: "default",
//       }}
//       onMouseEnter={(e) =>
//         (e.currentTarget.style.transform = "translateY(-6px)")
//       }
//       onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
//     >
//       <h2 className="fw-bold mb-2" >
//         {number}
//       </h2>
//       <div
//         style={{
//           width: 50,
//           height: 3,
//           background: "linear-gradient(135deg,#FFD84D,#cb7c05)",
//           margin: "0 auto 10px",
//           borderRadius: 2,
//         }}
//       />
//       <p className="mb-0 fw-semibold text-secondary">{title}</p>
//     </div>
//   );
// };

// /* =======================
//    SERVICE CARD
// ======================= */
// const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
//   return (
//     <div
//       className="d-flex justify-content-between align-items-start mb-3"
//       style={{
//         background: "#ffffff",
//         borderRadius: 18,
//         padding: "20px 22px",
//         boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//         transition: "all 0.3s ease",
//         cursor: "pointer",
//       }}
//       onMouseEnter={(e) =>
//         (e.currentTarget.style.transform = "translateY(-4px)")
//       }
//       onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
//     >
//       <div>
//         <h6 className="fw-bold mb-1">{title}</h6>
//         {description && (
//           <p className="mb-0 text-secondary" style={{ fontSize: 14 }}>
//             {description}
//           </p>
//         )}
//       </div>

//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{
//           width: 34,
//           height: 34,
//           borderRadius: "50%",
//           background: "linear-gradient(135deg,#FFD84D,#cb7c05)",
//           color: "#fff",
//           fontSize: 14,
//           flexShrink: 0,
//         }}
//       >
//         ↗
//       </div>
//     </div>
//   );
// };

// /* =======================
//    MAIN COMPONENT
// ======================= */
// const SmartITBox: React.FC = () => {
//   /* -----------------------
//      Stats Data
//   ----------------------- */
//   const stats: StatCardProps[] = [
//     { number: "3K+", title: "Successful Projects" },
//     { number: "20+", title: "Experienced Team" },
//     { number: "150+", title: "Happy Customers" },
//     { number: "50+", title: "Client 5 Star Reviews" },
//   ];

//   /* -----------------------
//      Services Data
//   ----------------------- */
//   const serviceCards: ServiceCardProps[] = [
//     {
//       title: "Google Sheet Automation",
//       description:
//         "Customized workflow automation using Google Sheets & Apps Script.",
//     },
//     { title: "WhatsApp API Integration" },
//     { title: "Email Integration" },
//     { title: "Web App Development" },
//   ];

//   const serviceTicker: string[] = [
//     "Web Development",
//     "Process Automation",
//     "Google Sheets",
//     "FMS Systems",
//     "Full Kitting",
//     "Production Planning",
//     "PMS Solutions",
//     "Machine-Wise Planning",
//     "Workflow Optimization",
//     "Data Integration",
//     "Real-time Analytics",
//     "Custom Dashboards",
//     "API Development",
//     "Cloud Solutions",
//     "Mobile Applications",
//     "UI/UX Design",
//   ];

//   return (
//     <div>
//       {/* ================= STATS SECTION ================= */}

//       {/* ================= SERVICES SECTION ================= */}
//       <section
//         className="py-5"
//         style={{
//           background: "#d70745", // ✅ single #
//         }}
//       >
//         <section className="py-5">
//           <div className="container">
//             <div className="row g-4">
//               {stats.map((stat, i) => (
//                 <div key={i} className="col-12 col-sm-6 col-lg-3">
//                   <StatCard {...stat} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section
//           style={{
//             padding: "40px 0",
//             backgroundColor: "#1e3a5f",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               animation: "scroll 30s linear infinite",
//               whiteSpace: "nowrap",
//             }}
//           >
//             {[...serviceTicker, ...serviceTicker].map((service, idx) => (
//               <span
//                 key={idx}
//                 style={{
//                   color: "#fff",
//                   fontSize: "18px",
//                   fontWeight: 500,
//                   padding: "0 40px",
//                   display: "inline-block",
//                 }}
//               >
//                 {service}
//               </span>
//             ))}
//           </div>

//           <style>{`
//             @keyframes scroll {
//               0% { transform: translateX(0); }
//               100% { transform: translateX(-50%); }
//             }
//           `}</style>
//         </section>
//         <div className="container mt-5">
//           <div className="row align-items-center g-5">
//             {/* LEFT */}
//             <div className="col-lg-6">
//               <span
//                 className="d-inline-block mb-3 px-3 py-2 fw-semibold"
//                 style={{
//                   background: "#ffffff",
//                   borderRadius: 999,
//                   fontSize: 13,
//                 }}
//               >
//                 Our Services
//               </span>

//               <h2 className="fw-bold mb-4">
//                 Boost your Business Growth with excellent effective services
//               </h2>

//               <button
//                 className="btn rounded-pill px-4 py-3 fw-semibold mb-4 text-white"
//                 style={{
//                   background: "linear-gradient(135deg,#FFD84D,#cb7c05)",
//                   border: "none",
//                 }}
//               >
//                 View All Work ↗
//               </button>

//               {serviceCards.map((service, i) => (
//                 <ServiceCard key={i} {...service} />
//               ))}
//             </div>

//             {/* RIGHT */}
//             <div className="col-lg-6 d-flex justify-content-center">
//               <div
//                 className="text-center"
//                 style={{
//                   background: "#ffffff",
//                   borderRadius: 26,
//                   padding: 40,
//                   boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
//                   maxWidth: 380,
//                 }}
//               >
//                 <h3 className="fw-bold mb-1" style={{ color: "#0F9D58" }}>
//                   Google Sheets
//                 </h3>
//                 <p className="text-secondary mb-4 fw-semibold">
//                   WORKFLOW AUTOMATION
//                 </p>

//                 <div className="d-flex justify-content-center gap-3">
//                   {["📊", "📄", "📅", "📕"].map((icon, i) => (
//                     <div
//                       key={i}
//                       className="d-flex align-items-center justify-content-center"
//                       style={{
//                         width: 48,
//                         height: 48,
//                         borderRadius: "50%",
//                         background: "#f3f4f6",
//                         fontSize: 20,
//                       }}
//                     >
//                       {icon}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= SCROLLING TICKER ================= */}
//       </section>
//     </div>
//   );
// };

// export default SmartITBox;

import React, { useState } from "react";

interface StatCardProps {
  number: string;
  title: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, title }) => {
  return (
    <div
      className="text-center h-100 d-flex flex-column justify-content-center"
      style={{
        background: "#fde6ea",
        borderRadius: 20,
        padding: "28px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-6px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <h2 className="fw-bold mb-2">{number}</h2>
      <div
        style={{
          width: 50,
          height: 3,
          background: "linear-gradient(135deg,#FFD84D,#cb7c05)",
          margin: "0 auto 10px",
          borderRadius: 2,
        }}
      />
      <p className="mb-0 fw-semibold text-secondary">{title}</p>
    </div>
  );
};

const SmartITBox = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stats = [
    { number: "3K+", title: "Successful Project" },
    { number: "20+", title: "Experienced Team" },
    { number: "150+", title: "Happy Customers" },
    { number: "50+", title: "Client 5 Star Review" },
  ];

  const services = [
    {
      title: "Google Sheet Automation",
      desc: "Unlock the full potential of your business operations with customized workflow automation built on Google Sheets.",
    },
    {
      title: "WhatsApp API Integration",

      desc: "Unlock the full potential of your business operations with customized workflow automation built on Google Sheets.",
    },

    {
      title: "Email Integration",
      desc: "Unlock the full potential of your business operations with customized workflow automation built on Google Sheets.",
    },
    {
      title: "Web App Development",
      desc: "Unlock the full potential of your business operations with customized workflow automation built on Google Sheets.",
    },
  ];

  const tickerItems = [
    "Web Development",
    "Process Automation",
    "Google Sheets",
    "FMS Systems",
    "Full Kitting",
    "Production Planning",
    "PMS Solutions",
  ];

  return (
    <div
      style={{
        backgroundColor: "#c3073f",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* 1. STATS SECTION */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-md-3">
                <StatCard number={stat.number} title={stat.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SCROLLING TICKER BAR */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "18px 0",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          overflow: "hidden",
        }}
      >
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#8d5c32",
                  padding: "0 40px",
                }}
              >
                {item}{" "}
                <span style={{ color: "#d4a017", marginLeft: "40px" }}>★</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. SERVICES SECTION */}
      <section className="py-5 mt-4">
        <div className="container position-relative">
          <div className="row mb-5 align-items-end">
            <div className="col-lg-8">
              <span className="badge bg-white text-dark rounded-pill px-3 py-2 mb-3 fw-bold shadow-sm">
                Our Services
              </span>
              <h1
                className="display-4 fw-bold text-white lh-sm"
                style={{ fontSize: "45px" }}
              >
                Boost your Business Growth with <br />
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "rgba(255,255,255,0.4)",
                    textUnderlineOffset: "8px",
                  }}
                >
                  excellent effective services
                </span>
              </h1>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-end">
              <div className="view-all-btn">
                View All Work <br /> ↗
              </div>
            </div>
          </div>

          <div className="row g-5 align-items-center">
            {/* Left: Interactive Service List */}

            <div className="col-lg-6">
              {services.map((s, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    className="service-item"
                    onMouseEnter={() => setActiveIndex(i)}
                    style={{
                      padding: "30px",
                      cursor: "pointer",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.1)"
                        : "transparent",
                      borderRadius: isActive ? "20px" : "0px",
                      transition: "all 0.4s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h3
                        className="text-white fw-bold mb-2"
                        style={{ fontSize: "1.6rem" }}
                      >
                        {s.title}
                      </h3>
                      <div
                        style={{
                          maxHeight: isActive ? "200px" : "0",
                          opacity: isActive ? "1" : "0",
                          overflow: "hidden",
                          transition: "all 0.4s ease",
                        }}
                      >
                        <p
                          className="text-white-50 mb-0"
                          style={{ fontSize: "1rem", lineHeight: "1.6" }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>
                    <div
                      className="arrow-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        color: "#c3073f",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        transition: "transform 0.3s ease",
                        marginLeft: "20px",
                      }}
                    >
                      ↗
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Feature Showcase (Google Sheets Card) */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div
                className=""
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "15px",
                  // width: "100%",
                  maxWidth: "350px",
                  textAlign: "center",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="./media/hero/googlefile.png"
                  alt="Google Sheets"
                  style={{ width: "280px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS STYLES FOR ANIMATIONS */}
      <style>{`
        .ticker-wrapper { display: flex; width: 100%; }
        .ticker-content { display: flex; animation: scroll 30s linear infinite; white-space: nowrap; }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .service-item { display: flex; align-items: center; padding: 30px 0; border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: 0.3s; }
        .service-item:hover { padding-left: 10px; background: rgba(255,255,255,0.05); }
        .arrow-circle { width: 45px; height: 45px; border-radius: 50%; background: #fff; color: #c3073f; display: flex; align-items: center; justify-content: center; font-weight: bold; }

        .view-all-btn { width: 130px; height: 130px; border-radius: 50%; border: 1.5px solid white; color: white; display: flex; align-items: center; justify-content: center; text-align: center; cursor: pointer; transition: 0.3s; }
        .view-all-btn:hover { background: white; color: #c3073f; transform: rotate(15deg); }

        .showcase-card { background: white; padding: 60px 40px; border-radius: 35px; width: 100%; max-width: 480px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .brand-box { width: 50px; height: 50px; background: #0f9d58; border-radius: 12px; }
        .icon-dot { width: 48px; height: 48px; border-radius: 50%; }
      `}</style>
    </div>
  );
};

export default SmartITBox;
