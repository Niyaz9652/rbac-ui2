import React from "react";
import { Routes, Route } from "react-router-dom";
import ResumePage from "./Page/ResumePage";
import TeamPage from "./Page/TeamPage";
import CommunitiesPage from "./Page/CommunitiesPage";
import PropertiesPage from "./Page/Property/PropertiesPage";
import CurrentListingsPage from "./Page/Property/CurrentListingsPage";
import RecentSalesPage from "./Page/Property/RecentSalesPage";
import HomeSearchPage from "./Page/Property/HomeSearchPage";
import PressPage from "./Page/PressPage";
import TestimonialsPage from "./Page/TestimonialsPage";
import ContactPage from "./Page/ContactPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/communities" element={<CommunitiesPage />} />
     

      {/* Properties Routes */}
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/properties/current-listings" element={<CurrentListingsPage />} />
      <Route path="/properties/recent-sales" element={<RecentSalesPage />} />
      <Route path="/properties/home-search" element={<HomeSearchPage />} />

      <Route path="/press" element={<PressPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Default Route */}
      <Route path="/" element={<PropertiesPage />} />
    </Routes>
  );
};

export default AppRoutes;
