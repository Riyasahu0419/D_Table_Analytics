
import { MdArrowOutward } from "react-icons/md";

const CoreOfferings = () => {
  const servicesData = [
    {
      title: "Google Sheets Automation",
      items: [
        "Automate manual workflows using Google Apps Script",
        "Real-time data sync between sheets, dashboards, and forms",
        "Auto PDF generation, email triggers, data imports/exports",
        "Custom ERP & MIS Systems",
        "Modules: Order Management, Inventory, Purchase, Sales, Dispatch, HR, etc",
        "Auto-replies, lead capture, reminders, and notifications via WhatsApp",
        "Tailored ERP solutions for SMEs and manufacturers",
        "Tailored ERP solutions for SMEs and manufacturers",
      ],
    },
  
    {
      title: "Dynamic Web Applications",
      items: [
        "Modern websites and dashboards using React.js, Next.js, and Node.js",
        "Admin panels with real-time control and reporting",
        "Field Team Automation Tools",
        "Sales activity tracking, quotation flow, customer follow-up tools",
        "Modern websites and dashboards using React.js, Next.js, and Node.js",
        "Admin panels with real-time control and reporting",
        "Field Team Automation Tools",
        "Sales activity tracking, quotation flow, customer follow-up tools",
        "Mobile-friendly for field reps and distributors",
      ],
    },
    {
      title: "Voice-to-Text Automation",
      items: [
        "Convert WhatsApp voice messages into structured text using Google Cloud Speech-to-Text",
        "PDF & Excel Document Automation",
        "Create and send formatted invoices, job cards, quotations dynamically",
      ],
    },
  ];

  return (
    <div className="container my-5 py-5">
      {/* SECTION HEADER */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Business Automation & Custom Software Solutions
        </h1>

        <h2
          className="fw-bold mt-2"
          style={{
            color: "#f4b400",
          }}
        >
          Core Offerings
        </h2>

        <p className="mt-3  fw-semibold">
          Transform your business with intelligent automation
        </p>
      </div>

      {/* CONTENT */}
      <div className="row align-items-start g-5">
        {/* LEFT IMAGE */}
        <div className="col-lg-6">
          <div
            className="mx-auto my-3"
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#e5e7eb",
            }}
          ></div>

          <div
            className="overflow-hidden"
            style={{
              borderRadius: "24px",
            }}
          >
            <img
              src="./media/hero/team.png"
              alt="Business Expert"
              className="img-fluid w-100"
            />
          </div>

          <button
            className="btn rounded-pill px-5 py-3 mt-4 text-white"
            style={{
              background:"#e8bb3e",
              border: "none",
            }}
          >
            Contact Us <MdArrowOutward size={18} />
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6">
          {servicesData.map((section, index) => (
            <div key={index} className="mb-5">
              <h5 className="fw-bold mb-3">{section.title}</h5>

              <ul className="list-unstyled">
                {section.items.map((item, i) => (
                  <li key={i} className="d-flex align-items-start mb-2">
                    <span
                      className="me-3 mt-1 d-flex align-items-center justify-content-center"
                      style={{
                        width: 25,
                        height: 25,
                        background: "#fff2cc",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          background: "#f4b400",
                          borderRadius: "50%",
                        }}
                      />
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreOfferings;
