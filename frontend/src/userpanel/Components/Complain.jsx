import { useState } from "react";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    description: "",
  });

  const [complaints, setComplaints] = useState([]); // Store complaints
  const [showComplaintList, setShowComplaintList] = useState(false); // Toggle between form and list

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Submitted:", formData);
    
    // Add new complaint to the list
    const newComplaint = { id: complaints.length + 1, ...formData };
    setComplaints([...complaints, newComplaint]);

    alert("Complaint submitted successfully!");
    setFormData({ date: "", title: "", description: "" }); // Reset form
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="container my-5">
        <div className="row">
          {/* Sidebar Navigation */}
          <div className="col-md-3">
            <div className="d-grid gap-2 navigation-buttons">
              <button
                className={`btn ${!showComplaintList ? "btn-primary" : "btn-light border"} rounded-3 py-2 d-flex justify-content-between align-items-center`}
                style={{ backgroundColor: !showComplaintList ? "#00003E" : "white" }}
                onClick={() => setShowComplaintList(false)} // Show form
              >
                <span>Complain</span>
                <span>&gt;</span>
              </button>
              <button
                className={`btn ${showComplaintList ? "btn-primary" : "btn-light border"} rounded-3 py-2 d-flex justify-content-between align-items-center`}
                style={{ backgroundColor: showComplaintList ? "#00003E" : "white" }}
                onClick={() => setShowComplaintList(true)} // Show complaints list
              >
                <span>Complain List</span>
                <span>&gt;</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            {showComplaintList ? (
              // Complaint List
              <div>
                <h2 className="mb-4 fw-bold" style={{ color: "#00003E" }}>Complaint List</h2>
                {complaints.length === 0 ? (
                  <p>No complaints submitted yet.</p>
                ) : (
                  <table className="table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complaints.map((complaint) => (
                        <tr key={complaint.id}>
                          <td>{complaint.id}</td>
                          <td>{complaint.date}</td>
                          <td>{complaint.title}</td>
                          <td>{complaint.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ) : (
              // Complaint Form
              <div>
                <h2 className="mb-4 fw-bold" style={{ color: "#00003E" }}>Complaint Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">Complaint Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Complaint Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="form-control"
                      placeholder="Type Complaint Here"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      placeholder="Type Description Here"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ backgroundColor: "#00003E" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
