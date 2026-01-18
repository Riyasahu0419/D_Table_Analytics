// import React from "react";

// const BusinessAutomation = () => {
//   return (
//     <div className="container my-5">
//       <div className="row align-items-center g-5">
//         {/* LEFT CONTENT */}
//         <div className="col-lg-6">
//           <span
//             className="d-inline-block mb-3 px-3 py-2 "
//             style={{
//               background:
//                 "linear-gradient(135deg, #ffd6d6 0%, #fff3cd 50%, #ffd6d6 100%)",
//               fontSize: 14,
//               fontWeight: 500,
//               borderRadius: "10px",
//             }}
//           >
//             Welcome to SMART ITBOX
//           </span>

//           <h1 className="fw-bold mt-3">
//             Comprehensive Business Process{" "}
//             <span style={{ color: "#f4b400" }}>Automation</span>
//           </h1>

//           <p className="text-secondary mt-3">
//             Streamline, simplify, and scale your operations with tailored
//             automation solutions.
//           </p>

//           <div className="row mt-4">
//             {[
//               "Automate workflows",
//               "Enable real-time insights",
//               "MD Dashboard",
//               "Live Sales Survey",
//               "Centralize data",
//               "Reduce manual tasks",
//             ].map((item, i) => (
//               <div key={i} className="col-6 mb-2">
//                 <span className="me-2">✅</span>
//                 <small className="fw-semibold">{item}</small>
//               </div>
//             ))}
//           </div>

//           <button
//             className="btn rounded-pill mt-4 px-4 py-3 text-white"
//             style={{
//               background:
//                 "linear-gradient(135deg, #FFD84D 0%, #e8bb3e 45%, #cb7c05 100%)",
//               border: "none",
//             }}
//           >
//             More About Us →
//           </button>
//         </div>

//         {/* RIGHT IMAGES */}
//         <div className="col-lg-6">
//           <div className="row g-3">
//             <div className="col-6">
//               <img
//                 src="./media/hero/about1.png"
//                 className="img-fluid"
//                 style={{ borderRadius: "20px" }}
//                 alt="Business automation"
//               />
//             </div>
//             <div className="col-6">
//               {/* IMAGE BOX */}
//               <img
//                 src="./media/hero/about2.png"
//                 className="img-fluid mb-4"
//                 style={{
//                   borderRadius: "24px",
//                   minHeight: "205px",
//                   objectFit: "cover",
//                   width: "100%",
//                 }}
//                 alt="Team discussion"
//               />

//               {/* STATS BOX */}
//               <div
//                 className="d-flex flex-column justify-content-center align-items-center text-center"
//                 style={{
//                   background: "#fff4dc",
//                   borderRadius: "24px",
//                   minHeight: "205px",
//                   width: "100%",
//                 }}
//               >
//                 <h2 className="fw-bold text-warning mb-1">100%</h2>
//                 <p className="mb-0 fw-semibold" style={{ fontSize: "13px" }}>
//                   Client Satisfaction
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessAutomation;


import { MdArrowOutward } from "react-icons/md";

const BusinessAutomation = () => {
  return (
    <div className="container my-5">
      <div className="row g-5">
        {/* LEFT CONTENT */}
        <div className="col-lg-6">
          {/* HEADING SECTION */}
          <div className="mb-4">
            <span
              className="d-inline-block mb-3 px-3 py-2"
              style={{
                background:
                  "linear-gradient(135deg, #ffd6d6 0%, #fff3cd 50%, #ffd6d6 100%)",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "10px",
              }}
            >
              Welcome to SMART ITBOX
            </span>

            <h1 className="fw-bold mt-2">
              Comprehensive Business Process{" "}
              <span style={{ color: "#f4b400" }}>Automation</span>
            </h1>

            <p className="text-secondary mt-3">
              Streamline, simplify, and scale your operations with tailored
              automation solutions.
            </p>
          
            <p
              className="mt-3"
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#4b5563",
                maxWidth: "520px",
              }}
            >
              At <strong>SMART ITBOX</strong>, we specialize in building
              end-to-end business systems using Google Sheets–based automation
              and custom Web Apps. Our solutions are designed to bring
              efficiency, accuracy, transparency, and control to your core
              business processes—helping you reduce manual effort, eliminate
              errors, and scale operations with confidence.
            </p>
          </div>

          {/* FEATURES */}
          <div className="row">
            {[
              "Automate workflows",
              "Enable real-time insights",
              "Enable real-time insights",
              "MD Dashboard",
              "Live Sales Survey",
              "Centralize data",
              "Reduce manual tasks",
            ].map((item, i) => (
              <div key={i} className="col-6 mb-3 d-flex align-items-center">
                <span
                  className="me-2 d-flex align-items-center justify-content-center"
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "#fff4dc",
                    color: "#f4b400",
                    fontSize: 14,
                  }}
                >
                  ✓
                </span>
                <span className="fw-semibold">{item}</span>
              </div>
            ))}
          </div>

            <p className="text-secondary mt-3">
             Whether you're managing inventory, sales, Market Survey, or client onboarding — we make your business smarter, faster, and future-ready.
            </p>

          <button
            className="btn rounded-pill mt-4 px-5 py-3 text-white"
            style={{
              background:
                "linear-gradient(135deg, #FFD84D 0%, #e8bb3e 45%, #cb7c05 100%)",
              border: "none",
            }}
          >
            More About Us <MdArrowOutward size={18} />
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="row g-3 w-100">
            <div className="col-6">
              <img
                src="./media/hero/about1.png"
                className="img-fluid h-100"
                style={{ borderRadius: "24px", objectFit: "cover" }}
                alt="Business automation"
              />
            </div>

            <div className="col-6 d-flex flex-column gap-3">
              <img
                src="./media/hero/about2.png"
                className="img-fluid"
                style={{
                  borderRadius: "24px",
                  height: "205px",
                  objectFit: "cover",
                }}
                alt="Team discussion"
              />

              <div
                className="d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                  background: "#fff4dc",
                  borderRadius: "24px",
                  height: "205px",
                }}
              >
                <h2 className="fw-bold text-warning mb-1">100%</h2>
                <p className="mb-0 fw-bold" style={{ fontSize: "13px" }}>
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAutomation;
