import React from "react";
import { Container} from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <div className="about-wrapper ">
        {/* HERO */}
        <section className="text-center my-5">
          <div className="" />

          <Container className="position-relative" style={{marginTop:'8%'}}>
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">Contact</span>
            </div>

            <span className="pill-badge">● Get in Touch</span>

            <h1 className="hero-title">
              Contact Us
              <br />
              <span className="text-yellow">Let's Start Your Project</span>
            </h1>

            <p className="hero-subtitle">
              Ready to transform your business with automation? Reach out to our
              team for a free consultation and discover how we can help you
              achieve your goals.
            </p>

            {/* <Button className="btn-yellow">Meet Our Team</Button> */}
            <button
              className="footer-btn px-4 me-3"
              style={{ borderRadius: "30px" }}
            >
              Schedule a Call
            </button>
            {/* <button className="px-4 py-2 border border-[#FFD84D] " style={{ borderRadius: "30px" }}>
            Contact Us
          </button> */}
          </Container>
        </section>
      <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
