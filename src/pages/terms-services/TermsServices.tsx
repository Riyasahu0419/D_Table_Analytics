import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import TermsAndConditions from "./TermsAndConditions";


const TermsServices: React.FC = () => {
  return (
    <>
      <div className="about-wrapper ">
        {/* HERO */}
        <section className="text-center my-5">
          <div className="" />

          <Container className="position-relative">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="active">Policies</span>
              <span className="separator">/</span>
              <span className="active">Terms</span>
            </div>

            <span className="pill-badge">● Terms & Conditions</span>

            <h1 className="hero-title">
              Terms of Service <br />
              <span className="text-yellow">Legal Agreement</span>
            </h1>

            <p className="hero-subtitle">
              Please read these terms carefully before using our services. By
              accessing or using our platform, you agree to be bound by these
              terms.
            </p>

            {/* <Button className="btn-yellow">Meet Our Team</Button> */}
            {/* <button
              className="footer-btn px-4 me-3"
              style={{ borderRadius: "30px" }}
            >
              View Open Positions
            </button> */}
            {/* <button className="px-4 py-2 border border-[#FFD84D] " style={{ borderRadius: "30px" }}>
            Contact Us
          </button> */}
          </Container>
        </section>
        <TermsAndConditions/>
      </div>
    </>
  );
};

export default TermsServices;
