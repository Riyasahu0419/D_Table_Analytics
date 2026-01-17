import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Navbar Component
const Navbar: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-box"></div>
          </div>
          <div>
            <div className="logo-text">
              <span className="smart">SMART</span>
              <span className="it">IT</span>
              <span className="box">BOX</span>
            </div>
            <div className="logo-tagline">MAKE IT SMART</div>
          </div>
        </div>
        
        <div className="nav-buttons">
          <button className="btn-yellow" onClick={() => onNavigate('home')}>Certificate</button>
          <button className="btn-yellow" onClick={() => onNavigate('offerings')}>Products</button>
          <button className="btn-yellow" onClick={() => onNavigate('services')}>Services</button>
          <button className="btn-yellow" onClick={() => onNavigate('automation')}>Company</button>
          <button className="btn-talk">
            Talk to us <span>→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

// HomePage Component (Image 1)
const HomePage: React.FC = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-4">
          <div className="service-card">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%23d4a574' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='18' fill='%23fff'%3EWeb Design Workspace%3C/text%3E%3C/svg%3E"
              alt="Web Design"
              className="service-image"
            />
            <h3>Web Design</h3>
            <p>Web design usually refers to the user experience aspects of website development rather than software development.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h3>Web Design</h3>
            <p>Web design usually refers to the user experience aspects of website development rather than software development.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h3>Digital Transformation</h3>
            <p>Digital transformation is the incorporation of computer-based technologies into an organization's products, processes and strategies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// AutomationPage Component (Image 2)
const AutomationPage: React.FC = () => {
  return (
    <div className="automation-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <span className="welcome-badge">Welcome to SMARTITBOX</span>
            <h1>
              Comprehensive Business<br />
              Process<br />
              <span className="highlight">Automation</span>
            </h1>
            <p className="subtitle-text">Streamline, simplify, and scale your operations with tailored automation solutions.</p>
            
            <p className="description-text">
              At <strong>SMARTITBOX</strong>, we specialize in building end-to-end business systems using Google Sheets-based automation and custom Web Apps. Our solutions are designed to bring efficiency, accuracy, transparency, and control to your core business processes—helping you reduce manual effort, eliminate errors, and scale operations with confidence.
            </p>
            
            <ul className="feature-list">
              <li>Automate workflows</li>
              <li>Centralize data</li>
              <li>Enable real-time insights</li>
              <li>Reduce manual tasks</li>
              <li>MD Dashboard</li>
              <li>Realtime Sales Summary</li>
              <li>Live Sales Survey</li>
            </ul>
            
            <p className="description-text">Whether you're managing inventory, sales, Market Survey, or client onboarding — we make your business smarter, faster, and future-ready.</p>
            
            <button className="btn-more">More About Us →</button>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 mb-3">
                <div className="image-box business-woman">
                  <span style={{fontSize: '3rem'}}>👩‍💼</span>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="image-box team-box">
                  <span style={{fontSize: '2.5rem'}}>👥</span>
                  <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666'}}>Professional Team</p>
                </div>
              </div>
              <div className="col-12">
                <div className="client-satisfaction">
                  <h2>100%</h2>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// OfferingsPage Component (Image 3)
const OfferingsPage: React.FC = () => {
  return (
    <div className="offerings-section">
      <div className="container">
        <h1 className="offerings-title">
          Business Automation & Custom Software Solutions<br />
          <span className="highlight">Core Offerings</span>
        </h1>
        <p className="subtitle">Transform your business with intelligent automation</p>
        
        <div className="row">
          <div className="col-md-6">
            <div className="professional-image">
              <span style={{fontSize: '5rem'}}>👨‍💼</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="offering-card">
              <h4>Google Sheets Automation</h4>
              <ul className="offering-list">
                <li>Automate manual workflows using Google Apps Script</li>
                <li>Real-time data sync between sheets, dashboards, and forms</li>
                <li>Auto PDF generation, email triggers, data imports/exports</li>
                <li>Custom ERP & MIS Systems</li>
                <li>Tailored ERP solutions for SMEs and manufacturers</li>
                <li>Modules: Order Management, Inventory, Purchase, Sales, Dispatch, HR, etc</li>
                <li>WhatsApp API Integrations</li>
                <li>Auto-replies, lead capture, reminders, and notifications via WhatsApp</li>
                <li>Integration with Google Sheets or your own CRM</li>
              </ul>
            </div>
            
            <div className="offering-card">
              <h4>Dynamic Web Applications</h4>
              <ul className="offering-list">
                <li>Modern websites and dashboards using React.js, Next.js, and Node.js</li>
                <li>Admin panels with real-time control and reporting</li>
                <li>Field Team Automation Tools</li>
                <li>Sales activity tracking, quotation flow, customer follow-up tools</li>
                <li>Mobile-friendly for field reps and distributors</li>
              </ul>
            </div>
            
            <div className="offering-card">
              <h4>Voice-to-Text Automation</h4>
              <ul className="offering-list">
                <li>Convert voice notes into text for faster documentation</li>
                <li>Integration with CRM or Google Sheets for automatic entry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ServicesPage Component (Image 4)
const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="stat-card">
                <h2>3K+</h2>
                <p>Successful Project</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <h2>20+</h2>
                <p>Experienced Team</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <h2>150+</h2>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card">
                <h2>50+</h2>
                <p>Client 5 Star Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Marquee */}
      <div className="services-marquee">
        <div className="marquee-content">
          <span className="service-tag">Process Automation</span>
          <span className="service-tag">Google Sheets</span>
          <span className="service-tag">FMS Systems</span>
          <span className="service-tag">Full Kitting</span>
          <span className="service-tag">Production Planning</span>
          <span className="service-tag">PMS Solutions</span>
          <span className="service-tag">Machine-Wise Planning</span>
          <span className="service-tag">Workflow Optimization</span>
          <span className="service-tag">Data Integration</span>
          <span className="service-tag">Real-time Analytics</span>
          <span className="service-tag">Custom Solutions</span>
        </div>
      </div>
      
      {/* Services Content */}
      <div className="services-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="our-services-badge">Our Services</span>
              <h1 className="services-title">
                Boost your Business Growth with<br />
                excellent effective services
              </h1>
              
              <div className="service-accordion">
                <h4>
                  Google Sheet Automation
                  <span className="arrow">→</span>
                </h4>
                <p>Unlock the full potential of your business operations with powerful, customized workflow automation built on Google Sheets.</p>
              </div>
              
              <div className="service-accordion">
                <h4>
                  WhatsApp API Integration
                  <span className="arrow">→</span>
                </h4>
              </div>
              
              <div className="service-accordion">
                <h4>
                  Email Integration
                  <span className="arrow">→</span>
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="google-sheets-image">
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📊</div>
                <h3 style={{color: '#34a853', marginBottom: '0.5rem', fontWeight: 'bold'}}>Google</h3>
                <h3 style={{color: '#34a853', marginBottom: '1rem', fontWeight: 'bold'}}>Sheets</h3>
                <h5 style={{color: '#888', letterSpacing: '2px'}}>WORKFLOW AUTOMATION</h5>
                <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem'}}>
                  <div style={{width: '50px', height: '50px', background: '#34a853', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>📊</div>
                  <div style={{width: '50px', height: '50px', background: '#4285f4', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>📝</div>
                  <div style={{width: '50px', height: '50px', background: '#fbbc04', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>📅</div>
                  <div style={{width: '50px', height: '50px', background: '#ea4335', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>📧</div>
                </div>
              </div>
              
              <div style={{textAlign: 'center', marginTop: '2rem'}}>
                <button className="view-all-btn">
                  View All Work →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  return (
    <div className="app">
      <style>{`
        .app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Navbar Styles */
        .navbar-custom {
          background-color: white;
          padding: 1rem 2rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #2c5aa0 0%, #5b8dc9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          position: relative;
        }
        
        .logo-box {
          width: 25px;
          height: 25px;
          border: 2px solid white;
          border-radius: 2px;
        }
        
        .logo-text {
          font-weight: bold;
          font-size: 1.2rem;
        }
        
        .logo-text .smart {
          color: #2c5aa0;
        }
        
        .logo-text .it {
          color: #f9c80e;
        }
        
        .logo-text .box {
          color: #2c5aa0;
        }
        
        .logo-tagline {
          font-size: 0.7rem;
          color: #666;
          margin-top: -5px;
        }
        
        .nav-buttons {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        
        .btn-yellow {
          background-color: #f9c80e;
          border: none;
          color: #333;
          font-weight: 600;
          padding: 0.6rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .btn-yellow:hover {
          background-color: #e0b30d;
          transform: translateY(-2px);
        }
        
        .btn-talk {
          background-color: #f9c80e;
          border: none;
          color: #333;
          font-weight: 600;
          padding: 0.6rem 1.5rem;
          border-radius: 25px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        
        /* HomePage Styles */
        .service-card {
          background: linear-gradient(135deg, #ffe8cc 0%, #ffd9a3 100%);
          border-radius: 15px;
          padding: 2rem;
          margin: 1rem;
          height: 100%;
          min-height: 400px;
          transition: transform 0.3s;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
        }
        
        .service-card h3 {
          font-weight: bold;
          margin: 1.5rem 0;
          color: #333;
        }
        
        .service-card p {
          color: #666;
          line-height: 1.6;
        }
        
        .service-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 10px;
        }
        
        /* AutomationPage Styles */
        .automation-section {
          padding: 3rem 2rem;
          background-color: white;
        }
        
        .welcome-badge {
          background-color: #ffcccc;
          color: #c33;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          display: inline-block;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }
        
        .automation-section h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .automation-section .highlight {
          color: #f9c80e;
        }
        
        .subtitle-text {
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        
        .description-text {
          color: #666;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }
        
        .feature-list li {
          padding: 0.5rem 0;
          color: #666;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .feature-list li:before {
          content: '👍';
          font-size: 1.2rem;
        }
        
        .image-box {
          border-radius: 15px;
          padding: 2rem;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .business-woman {
          background: linear-gradient(135deg, #fff3cd 0%, #ffe4a3 100%);
        }
        
        .team-box {
          background: linear-gradient(135deg, #e8f4f8 0%, #d0e8f0 100%);
        }
        
        .client-satisfaction {
          background-color: #fff9e6;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
        }
        
        .client-satisfaction h2 {
          font-size: 3rem;
          color: #f9c80e;
          margin: 0;
          font-weight: bold;
        }
        
        .client-satisfaction p {
          color: #666;
          margin: 0.5rem 0 0 0;
        }
        
        .btn-more {
          background-color: #f9c80e;
          border: none;
          color: #333;
          font-weight: 600;
          padding: 0.8rem 2rem;
          border-radius: 25px;
          cursor: pointer;
          margin-top: 2rem;
          transition: all 0.3s;
        }
        
        .btn-more:hover {
          background-color: #e0b30d;
          transform: translateY(-2px);
        }
        
        /* OfferingsPage Styles */
        .offerings-section {
          padding: 3rem 2rem;
          background-color: white;
        }
        
        .offerings-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        
        .offerings-section .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
        }
        
        .professional-image {
          width: 100%;
          height: 500px;
          background: linear-gradient(135deg, #f0e6d2 0%, #e0d5c0 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .offering-card {
          background-color: white;
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .offering-card h4 {
          font-weight: bold;
          margin-bottom: 1rem;
          color: #333;
        }
        
        .offering-list {
          list-style: none;
          padding: 0;
        }
        
        .offering-list li {
          padding: 0.4rem 0;
          color: #666;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          line-height: 1.6;
        }
        
        .offering-list li:before {
          content: '👉';
          font-size: 1rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        
        /* ServicesPage Styles */
        .stats-section {
          background: linear-gradient(135deg, #c41e3a 0%, #8b1429 100%);
          padding: 3rem 2rem;
          color: white;
        }
        
        .stat-card {
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          margin: 0.5rem;
          transition: transform 0.3s;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .stat-card h2 {
          font-size: 2.5rem;
          font-weight: bold;
          color: #c41e3a;
          margin: 0;
        }
        
        .stat-card p {
          color: #666;
          margin: 0.5rem 0 0 0;
          font-size: 0.9rem;
        }
        
        .services-marquee {
          background-color: white;
          padding: 1rem 0;
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-block;
          animation: scroll 25s linear infinite;
        }
        
        .service-tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin: 0 0.5rem;
          background-color: #f9f9f9;
          border-radius: 20px;
          color: #666;
          font-size: 0.9rem;
        }
        
        .service-tag:before {
          content: '⭐';
          margin-right: 0.5rem;
        }
        
        .services-content {
          background: linear-gradient(135deg, #c41e3a 0%, #8b1429 100%);
          padding: 3rem 2rem;
          color: white;
        }
        
        .our-services-badge {
          background: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: inline-block;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .services-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: bold;
          line-height: 1.3;
        }
        
        .service-accordion {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 1.5rem;
          margin: 1rem 0;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .service-accordion:hover {
          background-color: rgba(255, 255, 255, 0.15);
          transform: translateX(5px);
        }
        
        .service-accordion h4 {
          margin: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
        }
        
        .service-accordion .arrow {
          font-size: 1.5rem;
        }
        
        .service-accordion p {
          margin: 1rem 0 0 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        
        .google-sheets-image {
          background-color: white;
          border-radius: 15px;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .view-all-btn {
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .view-all-btn:hover {
          background-color: white;
          color: #c41e3a;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <Navbar onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'automation' && <AutomationPage />}
      {currentPage === 'offerings' && <OfferingsPage />}
      {currentPage === 'services' && <ServicesPage />}
    </div>
  );
};

export default App;