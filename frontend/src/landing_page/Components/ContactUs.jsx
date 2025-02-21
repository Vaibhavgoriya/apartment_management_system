import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize the duration or add other options
  }, []);

  return (
    <div id="contactUs" className="container my-5">
      {/* Title Section */}
      <h2 className="text-center fw-bold mb-2" data-aos="fade-up">
        Contact Us
      </h2>
      <p
        className="text-center text-muted mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Get in touch with us for any inquiries or assistance
      </p>

      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="row">
            {/* Row 1 */}
            <div
              className="col-md-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="300"
            >
              {/* Card 1: Address */}
              <div className="card border-0 shadow-sm h-100 text-center p-3">
                <div className="card-body">
                  <div className="display-5 mb-2 text-primary">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <h5 className="card-title">Address</h5>
                  <p className="card-text text-muted">
                    Street 7 , Main Jaljit socity , Near Mavdi , 150oot Ring
                    Road , Rajkot - 360001.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              {/* Card 2: Email */}
              <div className="card border-0 shadow-sm h-100 text-center p-3">
                <div className="card-body">
                  <div className="display-5 mb-2 text-danger">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h5 className="card-title">Email</h5>
                  <p className="card-text text-muted">rnv1924@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Row 2 */}
            <div
              className="col-md-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="500"
            >
              {/* Card 3: Phone */}
              <div className="card border-0 shadow-sm h-100 text-center p-3">
                <div className="card-body">
                  <div className="display-5 mb-2 text-success">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text text-muted">+91 7984767883</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 mb-4"
              data-aos="flip-left"
              data-aos-delay="600"
            >
              {/* Card 4: Additional Info */}
              <div className="card border-0 shadow-sm h-100 text-center p-3">
                <div className="card-body">
                  <div className="display-5 mb-2 text-info">
                    <i className="bi bi-clock"></i>
                  </div>
                  <h5 className="card-title">Open Hours</h5>
                  <p className="card-text text-muted">
                    Monday-Friday 9:00 AM to 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
          <div
            className="card p-4 border-0"
            style={{ backgroundColor: "#052C65", color: "#fff" }}
          >
            <h4 className="text-center mb-4">Send a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  style={{ backgroundColor: "#052C65", color: "#fff" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  style={{ backgroundColor: "#052C65", color: "#fff" }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control "
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  style={{ backgroundColor: "#052C65", color: "#fff" }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-light w-100"
                style={{
                  border: "1px solid #fff",
                }}
              >
                Learn More
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
