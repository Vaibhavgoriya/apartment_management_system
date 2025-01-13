import { useState } from "react";

const Noticeboard = () => {
  const [noticeData, setNoticeData] = useState({
    title: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoticeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!noticeData.title || !noticeData.date) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Mock API or save data logic
    setMessage(`Notice added: "${noticeData.title}" on ${noticeData.date}`);

    // Clear form after submission
    setNoticeData({
      title: "",
      date: "",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Noticeboard</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={noticeData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={noticeData.date}
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
          Add Notice
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default Noticeboard;
