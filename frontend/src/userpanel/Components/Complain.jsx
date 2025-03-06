import { useState } from "react";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    description: "",
  });

  const [complaints, setComplaints] = useState([]);
  const [showComplaintList, setShowComplaintList] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComplaint = { id: complaints.length + 1, ...formData };
    setComplaints([...complaints, newComplaint]);
    alert("Complaint submitted successfully!");
    setFormData({ date: "", title: "", description: "" });
  };

  return (
    <div className="container-fluid bg-light min-vh-100 px-5 py-5">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold text-dark mb-1">Complaint Management</h1>
          <p className="text-muted mb-0">Submit and view your complaints easily.</p>
        </div>
      </div>

      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3">
          <div
            className="p-4 rounded-4 shadow"
            style={{
              backgroundColor: "#F5F5F5",
              border: "1px solid #E0E0E0",
            }}
          >
            <div className="d-grid gap-3">
              <button
                className={`btn ${
                  !showComplaintList ? "btn-primary" : "btn-light border"
                } rounded-3 py-2`}
                onClick={() => setShowComplaintList(false)}
                style={{
                  backgroundColor: !showComplaintList ? "#052C65" : "white",
                  color: !showComplaintList ? "white" : "#052C65",
                  fontWeight: "bold",
                }}
              >
                Complaint Form
              </button>
              <button
                className={`btn ${
                  showComplaintList ? "btn-primary" : "btn-light border"
                } rounded-3 py-2`}
                onClick={() => setShowComplaintList(true)}
                style={{
                  backgroundColor: showComplaintList ? "#052C65" : "white",
                  color: showComplaintList ? "white" : "#052C65",
                  fontWeight: "bold",
                }}
              >
                Complaint List
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {showComplaintList ? (
            // Complaint List
            <div
              className="shadow-sm rounded bg-white p-4"
              style={{ border: "1px solid #ddd" }}
            >
              <h2 className="fw-bold mb-4" style={{ color: "#00003E" }}>
                Complaint List
              </h2>
              {complaints.length === 0 ? (
                <p className="text-muted">No complaints submitted yet.</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-bordered table-striped table-hover">
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
                </div>
              )}
            </div>
          ) : (
            // Complaint Form
            <div
              className="shadow-sm rounded bg-white p-4"
              style={{ border: "1px solid #ddd" }}
            >
              <h2 className="fw-bold mb-4" style={{ color: "#00003E" }}>
                Complaint Form
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Complaint Date
                  </label>
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
                  <label htmlFor="title" className="form-label">
                    Complaint Title
                  </label>
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
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
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
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-dark w-40"
                    style={{
                      backgroundImage:
                      "linear-gradient(to right, #052C65, #0056b3)",
                    }}
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
