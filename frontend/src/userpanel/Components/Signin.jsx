import { useState } from "react";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!credentials.email || !credentials.password) {
      setMessage("Please enter both email and password.");
      return;
    }

    // Mock authentication logic
    setMessage(`Welcome back, ${credentials.email}!`);
    setCredentials({
      email: "",
      password: "",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default SignIn;
