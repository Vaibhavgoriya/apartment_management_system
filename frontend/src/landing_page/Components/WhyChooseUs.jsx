import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }, []);

  return (
    <div className="container py-5" id="whyChooseUs">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-6" data-aos="fade-right">
          <h2 className="fw-bold">Why Choose RNV?</h2>
          <p className="text-muted">
            Connecting Communities, Simplifying Lives
          </p>

          <div className="mb-4">
            <div className="d-flex align-items-start mb-3">
              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center me-3"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-check-lg text-white fs-5"></i>
              </div>
              <div>
                <h6 className="fw-bold">Innovative Solutions</h6>
                <p className="text-muted small mb-0">
                  We bring fresh ideas and modern tools to streamline apartment
                  management.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center me-3"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-check-lg text-white fs-5"></i>
              </div>
              <div>
                <h6 className="fw-bold">User-Centric Design</h6>
                <p className="text-muted small mb-0">
                  Our platform is built with the needs of residents and managers
                  in mind.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center me-3"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-check-lg text-white fs-5"></i>
              </div>
              <div>
                <h6 className="fw-bold">Commitment to Excellence</h6>
                <p className="text-muted small mb-0">
                  Although we are just starting, we are driven by a commitment
                  to deliver exceptional value to our users.
                </p>
              </div>
            </div>
          </div>

          <button className="btn btn-outline-dark">Learn More</button>
        </div>

        {/* Right Content */}
        <div className="col-md-6" data-aos="fade-right">
          <div className="row g-3">
            {/* Box 1 */}
            <div className="col-6">
              <div
                className="d-flex flex-column justify-content-center align-items-center  text-white rounded shadow"
                style={{ height: "150px", backgroundColor:"#052C65"}}
              >
                <i className="bi bi-key fs-1 text-warning"></i>
                <h5 className="mt-2 fw-bold">10,000+</h5>
                <p className="small mb-0">Properties Sold</p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="col-6">
              <div
                className="d-flex flex-column justify-content-center align-items-center bg-warning rounded shadow"
                style={{ height: "150px" }}
              >
                <h5 className="text-dark fw-bold">Placeholder 1</h5>
              </div>
            </div>

            {/* Box 3 */}
            <div className="col-12">
              <div
                className="d-flex flex-column justify-content-center align-items-center bg-warning rounded shadow"
                style={{ height: "150px" }}
              >
                <h5 className="text-dark fw-bold">Placeholder 2</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
