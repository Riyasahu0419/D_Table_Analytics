import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import AppRouting from "./component/app-routing/AppRouting";


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header stays at the top on all pages */}
        <Header />

        {/* Dynamic content changes here based on URL */}
        <main>
          <AppRouting />
        </main>

        {/* Footer stays at the bottom on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;