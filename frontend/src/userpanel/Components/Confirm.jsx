import "../Assets/css/userstyle.css"; // Optional custom styles
import logo from "../Assets/image/rnvlogo.png"; // Update the path to your logo
import forget from "../Assets/image/forget.jpg"; // Update the path to your logo


const Confirm = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      {/* Card Section */}
      <div className="card shadow-lg text-center p-4" style={{ width: "40rem" }}>
        {/* Logo */}
        <div className="card-body">
          <img
            src={logo}
            alt="Logo"
            className="mb-3"
          />
          <h3 className="card-title text-primary">
            You have Successfully Reset Your Password.
          </h3>
          <p className="card-text text-muted mt-3">
            Click on the Sign In button to return to the Sign In page.
          </p>
          <a href="/signin" className="btn btn-primary mt-3">
            Click to Sign In
          </a>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="mt-4">
        <img
          src={forget}
          alt="Success Illustration"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Confirm;
