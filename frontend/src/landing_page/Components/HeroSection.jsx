import "../Assets/css/landingstyle.css";
import { Carousel } from "react-bootstrap";
import logo from "../Assets/image/rnvlogo.png";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="hero-section d-flex align-items-center justify-content-between px-5 scroll-section"
      style={{ height: "100vh" }}
    >
      {/* Left Content */}
      <div>
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="mb-4"
          style={{ maxWidth: "250px", marginTop: "-20x0px" }}
        />

        <h6 className="text-uppercase text-muted mb-3">
          RNV Apartment Management System
        </h6>
        <h1 className="display-4 fw-bold">
          Effortless Living, <br /> Smarter Management
        </h1>
        <p className="mt-3">
          Managing your apartment complex has never been easier – experience
          convenience at your fingertips with RNV.
        </p>
        <button className="btn  mt-4 d-flex align-items-center" style={{backgroundcolor:"#052C65"}}>
          <span className="dots me-2">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
          Ready to serve you
        </button>
      </div>

      {/* Right Image Carousel */}
      <div style={{ width: "40%" }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded-circle"
              src="https://via.placeholder.com/200"
              alt="Slide 1"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded-circle"
              src="https://via.placeholder.com/200/0000FF"
              alt="Slide 2"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded-circle"
              src="https://via.placeholder.com/200/FF0000"
              alt="Slide 3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;