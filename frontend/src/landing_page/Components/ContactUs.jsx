const ContactUs = () => {
    return (
      <div className="container my-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6">
            <div className="row">
              {/* Row 1 */}
              <div className="col-md-6 mb-4">
                {/* Card 1: Address */}
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-geo-alt-fill me-2"></i> Address
                    </h5>
                    <p className="card-text">123 Main Street, Manama, Bahrain</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                {/* Card 2: Email */}
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-envelope-fill me-2"></i> Email
                    </h5>
                    <p className="card-text">contact@bangoonan.com</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="row">
              {/* Row 2 */}
              <div className="col-md-6 mb-4">
                {/* Card 3: Phone */}
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-telephone-fill me-2"></i> Phone
                    </h5>
                    <p className="card-text">+973 1234 5678</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                {/* Card 4: Additional Info */}
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-info-circle-fill me-2"></i> Info
                    </h5>
                    <p className="card-text">
                      Feel free to reach out to us for inquiries or further
                      information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="col-md-6">
            <div
              className="card p-4 border-0"
              style={{ backgroundColor: "#12172d", color: "#fff" }}
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
                    style={{ backgroundColor: "#1c2236", color: "#fff" }}
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
                    style={{ backgroundColor: "#1c2236", color: "#fff" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    style={{ backgroundColor: "#1c2236", color: "#fff" }}
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