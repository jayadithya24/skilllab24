import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Contact from "./pages/ContactUs";
import LoginSignup from "./pages/LoginSignup";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer"; // Import Footer

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <MyNavbar />
        
        {/* Routes for Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
