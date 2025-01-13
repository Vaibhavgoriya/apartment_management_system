import { Link } from "react-router-dom";

const HomePage = () => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "800px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Apartment Management System</h1>
      <p>Manage everything related to your apartment easily!</p>

      <div style={containerStyle}>
        <div style={cardStyle}>
          <h3>Book a Hall</h3>
          <p>Reserve a hall for your events and gatherings.</p>
          <Link to="/booking" style={{ textDecoration: "none", color: "#4CAF50" }}>
            Go to Booking
          </Link>
        </div>

        <div style={cardStyle}>
          <h3>Maintenance</h3>
          <p>View and manage maintenance details.</p>
          <Link to="/maintenance" style={{ textDecoration: "none", color: "#4CAF50" }}>
            View Maintenance
          </Link>
        </div>

        <div style={cardStyle}>
          <h3>Complaints</h3>
          <p>Submit or check complaints for your apartment.</p>
          <Link to="/complaints" style={{ textDecoration: "none", color: "#4CAF50" }}>
            File a Complaint
          </Link>
        </div>

        <div style={cardStyle}>
          <h3>Noticeboard</h3>
          <p>Check important notices for residents.</p>
          <Link to="/noticeboard" style={{ textDecoration: "none", color: "#4CAF50" }}>
            View Notices
          </Link>
        </div>

        <div style={cardStyle}>
          <h3>Vehicle Information</h3>
          <p>Manage and view vehicle details.</p>
          <Link to="/vehicle-info" style={{ textDecoration: "none", color: "#4CAF50" }}>
            Vehicle Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
