
const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-section">
            <h2>RNV</h2>
            <p>Copyright © 2023 RNV</p>
            <p>Designed by RNV</p>
          </div>
          {/* About Us */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              To bridge the gap between residents and management through intuitive
              technology, ensuring better communication, transparency, and
              convenience for all.
            </p>
          </div>
          {/* Location */}
          <div className="footer-section">
            <h3>Location</h3>
            <p>RNV Company</p>
            <p>Rajkot, Gujarat</p>
            <p>India.</p>
          </div>
          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Umiya Chowck, Rajkot, Gujarat.</p>
            <p>+91 7984767883</p>
            <p>rnv123@gmail.com</p>
          </div>
        </div>
        {/* Social Links */}
        <div className="footer-social">
          <p>Follow Us</p>
          <div className="social-icons">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-instagram"></i>
          </div>
        </div>
        {/* Bottom Links */}
        <div className="footer-bottom">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </footer>
    </>
  )
}

export default Footer