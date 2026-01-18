
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import Certificate from "../../pages/certificate/Certificate";
import About from "../../pages/about/About";
import Team from "../../pages/team/Team";
import Career from "../../pages/career/Career";
import CaseStudy from "../../pages/case-studies/CaseStudy";
import TermsServices from "../../pages/terms-services/TermsServices";
import Contact from "../../pages/Contact/Contact";
import { Login } from "../auth/Login";
import { Signup } from "../auth/Signup";



const AppRouting = () => {
  return (
    <Routes>
      {/* Home Page Route */}
      <Route path="/" element={<Home />} />
      
      {/* Certificate Page Route */}
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/case-studies" element={<CaseStudy/>} />
      <Route path="/blogs" element={<CaseStudy/>} />
      <Route path="/policies/terms" element={<TermsServices/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/sign-up" element={<Signup/>} />

      {/* Redirect any unknown URL to Home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouting;