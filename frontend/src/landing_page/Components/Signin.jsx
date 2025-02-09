import { Link, useNavigate } from "react-router-dom";
import "../Assets/css/landingstyle.css"; // Optional custom styles
import login from "../Assets/image/login.jpg"; // Optional custom styles
import logo from "../Assets/image/rnvlogo.png"; // Optional custom styles

const Signin = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here, e.g., authentication
    // On successful sign-in, navigate to the home page
    navigate("/"); // Redirect to the home page after sign-in
  };

  return (
    <div
      className="signin-container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row w-100">
        <div
          className="w-100"
          style={{ height: "20px", backgroundColor: "#052C65" }}
        ></div>
        {/* Left Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-light p-5">
          <img
            src={login} // Update the path to your image
            alt="Efficient Living"
            className="img-fluid"
          />
          <h2 className="mt-4 text-center">Efficient Living Starts Here</h2>
          <p className="text-center">
            Our platform is built to meet the needs of apartment communities
            with intuitive, practical, and accessible features.
          </p>
        </div>

        {/* Right Section */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-5"
          style={{ paddingTop: "20px" }}
        >
          <div className="text-center mb-4">
            <img
              src={logo} // Update the path to your logo
              //alt="RNV Estate"
              className="img-fluid mb-2"
              style={{ width: "250px" }}
            />
            <h3>Sign In</h3>
            <p className="text-muted">Sign in with your details to continue</p>
          </div>

          <form className="w-100" style={{ maxWidth: "400px" }} onSubmit={handleSignIn}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#052C65" }}
            >
              <span> Sign In</span>
            </button>
          </form>

          <p className="mt-3 text-muted">
            Forgot Password? <Link to="/Forget">Click here</Link>
          </p>
          <Link to="/Signin" className="mt-3 text-muted" style={{ textDecoration: "none" }}>
    &larr; Back
</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
