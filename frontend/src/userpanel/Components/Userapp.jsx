import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./Home";
import Maintenance from "./Maintenance ";
import Complain from "./Complain ";
import Booking from "./Booking ";
import NoticeBoard from "./NoticeBoard ";
import VehicleInfo from "./VehicleInfo ";
import Footer from "./Footer";
import Signin from "./Signin";

const Userapp = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/vehicle-info" element={<VehicleInfo />} />
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default Userapp;