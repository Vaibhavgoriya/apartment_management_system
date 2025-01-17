import { Link } from "react-router-dom";
import "../Assets/css/userstyle.css"; // Optional custom styles
import logo from "../Assets/image/rnvlogo.png";

const Confirm = () => {
  return (
    <>
      {/* Top Blue Line */}
      <div
        className="w-100"
        style={{ height: "20px", backgroundColor: "#00003E" }}
      ></div>

      {/* Success Message Section */}
      <div
        className="bg-white shadow-lg rounded text-center p-5 mt-5 mx-auto"
        style={{ maxWidth: "900px" }} // Increased width
      >
        <img
          src={logo}
          alt="RNV Estate Logo"
          className="img-fluid mb-4"
          style={{ width: "200px" }}
        />
        <h3 className="text-dark fw-bold mb-3">
          You have Successfully Reset Your Password
        </h3>
        <p className="text-muted fs-5 mb-4">
          Click the button below to return to the sign-in page.
        </p>
        <button type="submit" className="btn w-100" style={{ backgroundColor: "#00003E" }}>
    <Link to="/sign-in" style={{ color: "#fff", textDecoration: "none", display: "block", width: "100%" }}>
        <span>Click to Sign In</span>
    </Link>
</button>  </div>

      {/* Illustration Section */}
      {/* <div className="mt-4">
        <img
          src={success}
          alt="Password Reset Success"
          className="img-fluid"
          style={{ maxWidth: "350px" }}
        />
      </div> */}
    </>
  );
};

export default Confirm;
