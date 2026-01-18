// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="container-fluid" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '40px' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4 col-md-12 mb-4">
//             <div className="card border-0 shadow-sm" style={{ backgroundColor: '#fff9f0', borderLeft: '4px solid #ffd700' }}>
//               <div className="card-body">
//                 <h5 className="card-title fw-bold mb-4">Contact Information</h5>
                
//                 <div className="d-flex align-items-start mb-4">
//                   <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <span style={{ color: '#ffd700', fontSize: '20px' }}>✉️</span>
//                   </div>
//                   <div>
//                     <h6 className="fw-bold mb-1">Email us</h6>
//                     <a href="mailto:ceo@smartitbox.in" className="text-decoration-none" style={{ color: '#ff8c00' }}>
//                       ceo@smartitbox.in
//                     </a>
//                     <p className="text-muted small mb-0">We'll respond within 24 hours</p>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-start mb-4">
//                   <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <span style={{ color: '#ffd700', fontSize: '20px' }}>📞</span>
//                   </div>
//                   <div>
//                     <h6 className="fw-bold mb-1">Call us</h6>
//                     <a href="tel:+918178740797" className="text-decoration-none" style={{ color: '#ff8c00' }}>
//                       +91 8178740797
//                     </a>
//                     <p className="text-muted small mb-0">Mon-Fri from 9am to 5pm</p>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-start mb-4">
//                   <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <span style={{ color: '#ffd700', fontSize: '20px' }}>📍</span>
//                   </div>
//                   <div>
//                     <h6 className="fw-bold mb-1">Visit us</h6>
//                     <p className="mb-1" style={{ color: '#ff8c00' }}>Noida, Sector 63</p>
//                     <p className="text-muted small mb-0">Block A Skytax, Plot 64, A Block,</p>
//                     <p className="text-muted small mb-0">Sector 63, Noida</p>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-start">
//                   <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <span style={{ color: '#ffd700', fontSize: '20px' }}>🕒</span>
//                   </div>
//                   <div>
//                     <h6 className="fw-bold mb-1">Office hours</h6>
//                     <p className="text-muted small mb-0">Monday - Friday</p>
//                     <p className="text-muted small mb-0">9:00 AM - 6:00 PM PST</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-8 col-md-12">
//             <div className="card border-0 shadow-sm">
//               <div className="card-body p-4">
//                 <div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label fw-semibold">
//                         Full Name <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="fullName"
//                         placeholder="Enter your full name"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="col-md-6">
//                       <label className="form-label fw-semibold">
//                         Email Address <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label fw-semibold">Company</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="company"
//                         placeholder="Your company name"
//                         value={formData.company}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="col-md-6">
//                       <label className="form-label fw-semibold">
//                         Subject <span className="text-danger">*</span>
//                       </label>
//                       <select
//                         className="form-select"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Select a subject</option>
//                         <option value="general">General Inquiry</option>
//                         <option value="sales">Sales</option>
//                         <option value="support">Support</option>
//                         <option value="partnership">Partnership</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <label className="form-label fw-semibold mb-0">
//                         Message <span className="text-danger">*</span>
//                       </label>
//                       <small className="text-muted">0/10 min</small>
//                     </div>
//                     <textarea
//                       className="form-control"
//                       name="message"
//                       rows={6}
//                       placeholder="Tell us about your project or inquiry..."
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                     ></textarea>
//                   </div>

//                   <div className="d-flex justify-content-between align-items-center">
//                     <small className="text-muted">
//                       <span style={{ color: '#ffd700' }}>⚠️</span> * Required fields
//                     </small>
//                     <button
//                       onClick={handleSubmit}
//                       className="btn btn-warning px-4 py-2 fw-semibold"
//                       style={{ backgroundColor: '#ffd700', border: 'none', color: '#000' }}
//                     >
//                       Send Message →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;








import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid py-5" style={{ background: '#fafafa' }}>
      <div className="container">
        <div className="row g-4">
          {/* LEFT INFO CARD */}
        <div className="col-lg-4">
  <div
  style={{
    // background: '#fff7ec',
    border: '1px solid #fde3b0',
    borderRadius: '14px',
    overflow: 'hidden',
  }}
>

    {/* HEADER */}
    <div
      style={{
        background: '#fdebd3',
        padding: '16px 20px',
        fontWeight: 600,
        borderLeft: '4px solid #fbbf24',
      }}
    >
      Contact Information
    </div>

    {/* BODY */}
    <div style={{ padding: '22px' }}>
      {/* EMAIL */}
      <div className="d-flex mb-4">
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            border: '1.5px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24',
            marginRight: 14,
            fontSize: 18,
          }}
        >
          ✉
        </div>
        <div>
          <div className="fw-semibold">Email us</div>
          <div style={{ color: '#f59e0b', fontSize: 14 }}>
            ceo@smartitbox.in
          </div>
          <div className="text-muted small">
            We&apos;ll respond within 24 hours
          </div>
        </div>
      </div>

      {/* CALL */}
      <div className="d-flex mb-4">
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            border: '1.5px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24',
            marginRight: 14,
            fontSize: 18,
          }}
        >
          ☎
        </div>
        <div>
          <div className="fw-semibold">Call us</div>
          <div style={{ color: '#f59e0b', fontSize: 14 }}>
            +91 8178740797
          </div>
          <div className="text-muted small">
            Mon–Fri from 9am to 5pm
          </div>
        </div>
      </div>

      {/* VISIT */}
      <div className="d-flex mb-4">
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            border: '1.5px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24',
            marginRight: 14,
            fontSize: 18,
          }}
        >
          📍
        </div>
        <div>
          <div className="fw-semibold">Visit us</div>
          <div style={{ color: '#f59e0b', fontSize: 14 }}>
            Noida, Sector 63
          </div>
          <div className="text-muted small">
            Block A Skytax, Plot 64, A Block,
          </div>
          <div className="text-muted small">Sector 63, Noida</div>
        </div>
      </div>

      {/* HOURS */}
      <div className="d-flex">
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            border: '1.5px solid #fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fbbf24',
            marginRight: 14,
            fontSize: 18,
          }}
        >
          🕒
        </div>
        <div>
          <div className="fw-semibold">Office hours</div>
          <div className="text-muted small">Monday – Friday</div>
          <div className="text-muted small">
            9:00 AM – 6:00 PM PST
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


          {/* RIGHT FORM */}
          <div className="col-lg-8">
            <div
              className="p-4 p-md-5"
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              }}
            >
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Full Name *
                  </label>
                  <input
                    className="form-control rounded-3"
                    placeholder="Enter your full name"
                    name="fullName"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Email Address *
                  </label>
                  <input
                    className="form-control rounded-3"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Company</label>
                  <input
                    className="form-control rounded-3"
                    placeholder="Your company name"
                    name="company"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Subject *
                  </label>
                  <select
                    className="form-select rounded-3"
                    name="subject"
                    onChange={handleChange}
                  >
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Support</option>
                  </select>
                </div>

                <div className="col-12">
                  <div className="d-flex justify-content-between mb-1">
                    <label className="form-label fw-semibold mb-0">
                      Message *
                    </label>
                    <small className="text-muted">0/10 min</small>
                  </div>
                  <textarea
                    className="form-control rounded-3"
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    name="message"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 d-flex justify-content-between align-items-center mt-3">
                  <small className="text-muted">* Required fields</small>
                  <button
                    className="btn px-4 py-2 fw-semibold"
                    style={{
                      background: '#fbbf24',
                      borderRadius: '999px',
                      border: 'none',
                    }}
                  >
                    Send Message →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
