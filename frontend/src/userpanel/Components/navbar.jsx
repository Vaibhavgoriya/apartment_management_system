import "../Assets/css/style.css"; // Ensure this file exists and contains the required styles

const Navbar = () => {
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-logo">RNV</div>
        <ul className="navbar-links">
          <li>
            <a href="#home" className="active">Home</a>
          </li>
          <li>
            <a href="#maintenance">Maintenance</a>
          </li>
          <li>
            <a href="#complain">Complain</a>
          </li>
          <li>
            <a href="#booking">Booking</a>
          </li>
          <li>
            <a href="#noice board"> Noice Board</a>
          </li>
          <li>
            <a href="#vechile info"> Vechile Info</a>
          </li>
        </ul>
        <button className="navbar-signin">Sign In</button>
      </nav>

      {/* Footer Section */}
      
    </>
  );
};

export default Navbar;
