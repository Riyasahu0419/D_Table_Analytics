// import React from "react";
// import "./Certificate.css";

// const Certificate = () => {
//   const certificates = [
//     {
//       company: "INSTAA TOOL",
//       type: "Certificate of Appreciation",
//       img: "./media/certificate/c1.jpg",
//     },
//     {
//       company: "AVANTI Overseas Pvt. Ltd.",
//       type: "Certificate of Appreciation",
//       img: "./media/certificate/c2.jpg",
//       active: true,
//     },
//     {
//       company: "RMC Switchgears Ltd.",
//       type: "Certificate of Appreciation",
//       img: "./media/certificate/c3.jpg",
//     },
//     {
//       company: "RMC Switchgears Ltd.",
//       type: "Certificate of Appreciation",
//       img: "./media/certificate/c4.jpg",
//     },
//     {
//       company: "RMC Switchgears Ltd.",
//       type: "Certificate of Appreciation",
//       img: "./media/certificate/c5.jpg",
//     },
//     {
//       company: "RMC Switchgears Ltd.",
//       type: "Certificate of Appreciation",
//       img: "./media/certificate/c1.jpg",
//     },
//   ];

//   return (
//     <section className="py-5 bg-white">
//       <div className="container">
//         {/* Header */}
//         <div className="text-center mb-5">
//           <span className="badge trust-badge mb-3">
//             Trust & Recognition
//           </span>

//           <h2 className="fw-bold display-6">
//             Certificates of <span className="text-warning">Appreciation</span>
//           </h2>

//           <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "820px" }}>
//             Recognized by industry leaders for delivering reliable business
//             automation and Google Workspace solutions.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="row g-4 justify-content-center">
//           {certificates.map((cert, index) => (
//             <div key={index} className="col-lg-4 col-md-6">
//               <a
//                 href={cert.img}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-decoration-none text-dark"
//               >
//                 <div className="certificate-card h-100">
//                   {/* Image */}
//                   <div className="certificate-image-wrapper">
//                     <img
//                       src={cert.img}
//                       alt={cert.company}
//                       className="img-fluid certificate-image"
//                     />

//                     <div className="certificate-action">
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="2.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                         <polyline points="15 3 21 3 21 9" />
//                         <line x1="10" y1="14" x2="21" y2="3" />
//                       </svg>
//                     </div>
//                   </div>

//                   {/* Text */}
//                   <div className="p-4">
//                     <h6 className="fw-bold mb-1">{cert.company}</h6>
//                     <p className="text-muted mb-0">{cert.type}</p>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificate;

import React from "react";
import "./Certificate.css";
const Certificate = () => {
const certificates = [
  {
    company: "INSTAA TOOL",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c1.jpg",
  },
  {
    company: "AVANTI Overseas Pvt. Ltd.",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c2.jpg",
  },
  {
    company: "RMC Switchgears Ltd.",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c3.jpg",
  },
  {
    company: "Paramount Products Pvt. Ltd.",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c4.jpg",
  },
  {
    company: "DNS Concrete LLP",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c5.jpg",
  },
  {
    company: "R Khurana & Associates",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c1.jpg",
  },
  {
    company: "Greenfield Industries",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c2.jpg",
    active: true,
  },
  {
    company: "Apex Engineering Works",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c3.jpg",
  },
  {
    company: "BlueStone Technologies",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c4.jpg",
  },
  {
    company: "Orion Manufacturing Co.",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c5.jpg",
  },
  {
    company: "Nova Industrial Solutions",
    type: "Certificate of Appreciation",
    img: "./media/certificate/c1.jpg",
  },
];


  return (
    <>
      <section className="py-5 bg-white">
        <div className="container">

           <div className="text-center mb-5">
          <span className="trust-badge ">
            Trust & Recognition
          </span>

          <h2 className="fw-bold display-6 mt-4">
            Certificates of <span className="text-warning">Appreciation</span>
          </h2>

          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "820px" }}>
            Recognized by industry leaders for delivering reliable business
            automation and Google Workspace solutions.
          </p>
        </div>
          <div className="row g-4 justify-content-center">
            {certificates.map((cert, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="cert-card h-100">
                  <div className="cert-img-wrap p-4">
                    <img
                      src={cert.img}
                      alt={cert.company}
                      className="cert-img img-fluid"
                    />

                    <div className="cert-action">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  </div>

                  <div className="p-4">
                    <h6 className="fw-bold mb-1">{cert.company}</h6>
                    <p className="text-muted mb-0">{cert.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
