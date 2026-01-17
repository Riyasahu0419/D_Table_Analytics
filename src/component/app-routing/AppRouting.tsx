
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import Certificate from "../../pages/certificate/Certificate";



const AppRouting = () => {
  return (
    <Routes>
      {/* Home Page Route */}
      <Route path="/" element={<Home />} />
      
      {/* Certificate Page Route */}
      <Route path="/certificate" element={<Certificate />} />

      {/* Redirect any unknown URL to Home */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouting;