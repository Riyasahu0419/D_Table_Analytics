import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
         <hr style={{marginBottom:"80px"}}/>
      <div className="container " >
        {/* Top */}
        <div className="row" style={{marginBottom:"80px"}}>
          {/* Brand */}
          <div className="col-md-4">
            <img src="./media/logo/logo.png" alt="Smart IT Box" height={50} />
            <p className="footer-desc">
              We help businesses transform their operations with intelligent
              automation and custom software solutions. Empowering growth
              through technology innovation.
            </p>

            <div className="footer-socials">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube/>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="footer-title">Quick Links</h6>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h6 className="footer-title">Services</h6>
            <ul>
              <li>Google Sheets Automation</li>
              <li>WhatsApp Integration</li>
              <li>Web Development</li>
              <li>Custom Software</li>
              <li>Business Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 className="footer-title">Get in Touch</h6>
            <p>
              <strong>Address:</strong> Block A Skytex, Plot 64, Sector 63,
              Noida
            </p>
            <p>
              <strong>Phone:</strong> +91 8178740797
            </p>
            <p>
              <strong>Email:</strong> ceo@smartitbox.in
            </p>
          </div>
        </div>

        <hr />

        {/* Newsletter */}
        <div className="row align-items-center justify-content-between  my-5">
          <div className="col-md-6">
            <h5>Stay Updated</h5>
            <p className="text-muted mb-0">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
          </div>

          <div className="col-md-2 d-flex justify-content-end gap-2">
            <input
              type="email"
              className="footer-input"
              placeholder="Enter your email address"
            />
            <button className="footer-btn px-4">Subscribe</button>
          </div>
        </div>

      </div>
        <hr />

        {/* Bottom */}
        <div className="footer-bottom container">
          <p>© 2024 Smart IT Box. All rights reserved.</p>
          <div className="footer-policy">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
