import React from "react";
import AppRoutes from "./routes"; // Import the new routes file
import Hero from "./Componets/Hero";  // Fixed typo in the folder name
import Navbar from "./Componets/Navbar";  // Fixed typo in the folder name
import Footer from "./Componets/Footer";  // Fixed typo in the folder name

import './index.css';

const App = () => {
  return (
    <>
      {/* Common components displayed on all pages */}
      <Hero />
      <Navbar />
      
      {/* Routes */}
      <AppRoutes />

      {/* Footer displayed on all pages */}
      <Footer />
    </>
  );
};

export default App;
