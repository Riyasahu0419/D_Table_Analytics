

const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      {/* Page Title */}
     

      {/* Table of Contents */}
      <div
        className="border rounded-4 p-4 mb-5"
        // style={{ backgroundColor: "#fff8e6", borderColor: "#f5c26b" }}
      >
        <h5 className="fw-semibold mb-3">
          <span className="me-2">•</span>Table of Contents
        </h5>
        <ul className="list-unstyled mb-0 " style={{color:'#cb7c05'}}>
          <li className="mb-2">Terms and Conditions for SmartITBox Solutions Pvt Ltd</li>
          <li className="mb-2">License to Use Website</li>
          <li className="mb-2">Acceptable Use</li>
          <li className="mb-2">Services Agreement</li>
          <li className="mb-2">IT Solutions and Services</li>
          <li className="mb-2">Subscription Services</li>
          <li className="mb-2">Intellectual Property</li>
          <li className="mb-2">User Content</li>
          <li className="mb-2">No Warranties</li>
          <li className="mb-2">Limitation of Liability</li>
          <li className="mb-2">Indemnification</li>
          <li className="mb-2">Severability</li>
          <li className="mb-2">Variation of Terms</li>
          <li className="mb-2">Force Majeure</li>
          <li className="mb-2">Dispute Resolution</li>
          <li className="mb-2">Contact Information</li>
        </ul>
      </div>

      {/* Acceptable Use */}
      <section className="mb-5">
         <h1 className="fw-bold mb-4">
        Terms and Conditions for SmartITBox Solutions Pvt Ltd
      </h1>

      {/* Intro */}
      <p className="text-muted mb-4">
        Welcome to SmartITBox Solutions Pvt Ltd. These terms and conditions outline
        the rules and regulations for the use of SmartITBox's Website, located at
        <strong> https://smartitbox.in</strong>.
      </p>
        <h3 className="fw-semibold mb-3">Acceptable Use</h3>
        <p className="text-muted">
          You must not use this website in any way that causes, or may cause,
          damage to the website or impairment of the availability or accessibility
          of SmartITBox.in; or in any way which is unlawful, illegal, fraudulent or
          harmful.
        </p>
        <p className="text-muted">
          You must not use this website to copy, store, host, transmit, send, use,
          publish or distribute any material which consists of (or is linked to)
          any spyware, computer virus, Trojan horse, worm, keystroke logger,
          rootkit or other malicious computer software.
        </p>
      </section>

      {/* Services Agreement */}
      <section className="mb-5">
        <h3 className="fw-semibold mb-3">Services Agreement</h3>
        <p className="text-muted">
          By using our services, you agree to comply with all applicable laws and
          regulations and acknowledge that SmartITBox Solutions Pvt Ltd may update
          these terms at any time without prior notice.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
