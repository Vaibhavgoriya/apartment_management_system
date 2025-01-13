import { useState } from "react";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    {
      id: 1,
      name: "John Doe",
      apartment: "101",
      contact: "123-456-7890",
      email: "john.doe@example.com",
      wing: "A",
      familyMembersCount: 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      apartment: "102",
      contact: "987-654-3210",
      email: "jane.smith@example.com",
      wing: "B",
      familyMembersCount: 3,
    },
    {
      id: 3,
      name: "Sam Wilson",
      apartment: "103",
      contact: "555-555-5555",
      email: "sam.wilson@example.com",
      wing: "C",
      familyMembersCount: 2,
    },
    {
      id: 4,
      name: "Anna Johnson",
      apartment: "104",
      contact: "444-444-4444",
      email: "anna.johnson@example.com",
      wing: "D",
      familyMembersCount: 5,
    },
  ];


  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.apartment.includes(searchTerm) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.contact.includes(searchTerm)
  );


  return (
    <main className="content px-3 py-4 bg-light">
      <div className="container-fluid">
        {/* Header Section */}
        <div className="mb-4">
          <h3 className="fw-bold fs-4 mb-2">Admin Dashboard</h3>
          <p className="text-muted">
            Welcome, Admin! Heres an overview of the system.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="row mb-4">
          {[
            { title: "Total Residents", value: "120", change: "+5.0%" },
            { title: "Pending Fees", value: "$8,540", change: "-2.0%" },
            { title: "Hall Bookings", value: "45", change: "+12.0%" },
            { title: "Resolved Issues", value: "78", change: "+8.0%" },
          ].map((metric, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-body py-4 text-center">
                  <h5 className="fw-bold mb-2">{metric.title}</h5>
                  <p className="fs-4 fw-bold text-primary">{metric.value}</p>
                  <span
                    className={`badge ${
                      metric.change.includes("+") ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {metric.change}
                  </span>
                  <span className="text-muted ms-2">Since Last Month</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Recent Activities</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {[
                    "New hall booking request from John Doe",
                    "Maintenance fee paid by Apartment 101",
                    "Feedback received from Resident 302",
                  ].map((activity, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {activity}
                      <span className="text-muted">2 hrs ago</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Maintenance Fees Table */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Maintenance Fees</h5>
              </div>
              <div className="card-body">
                <table className="table table-sm table-hover">
                  <thead>
                    <tr>
                      <th>Apartment</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { apt: "101", status: "Paid", amount: "$300" },
                      { apt: "102", status: "Pending", amount: "$300" },
                      { apt: "103", status: "Pending", amount: "$300" },
                    ].map((fee, index) => (
                      <tr key={index}>
                        <td>{fee.apt}</td>
                        <td>
                          <span
                            className={`badge ${
                              fee.status === "Paid"
                                ? "bg-success"
                                : "bg-warning"
                            }`}
                          >
                            {fee.status}
                          </span>
                        </td>
                        <td>{fee.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Total Members Table */}
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-3 d-flex justify-content-between">
                <h5 className="mb-0 fw-bold">Total Members</h5>
                <input
                  type="text"
                  className="form-control form-control-sm w-25"
                  placeholder="Search by Apartment or Name Or Phone Number"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>SR NO</th>
                      <th>Name</th>
                      <th>Apartment</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Wing</th>
                      <th>Family Members</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers.length > 0 ? (
                      filteredMembers.map((member, index) => (
                        <tr key={index}>
                          <td>{member.id}</td>
                          <td>{member.name}</td>
                          <td>{member.apartment}</td>
                          <td>{member.contact}</td>
                          <td>{member.email}</td>
                          <td>{member.wing}</td>
                          <td>{member.familyMembersCount}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center text-muted">
                          No members found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
