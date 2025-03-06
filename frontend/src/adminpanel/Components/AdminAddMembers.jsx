import { useEffect, useState } from "react";

const AdminAddMembers = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [newMember, setNewMember] = useState({
    name: "",
    apartment: "",
    contact: "",
    email: "",
    wing: "",
    familyMembersCount: "",
  });
  const [editMember, setEditMember] = useState(null);

  // Fetch members from API
  useEffect(() => {
    fetch("http://localhost:4545/api/members/")
      .then((response) => response.json())
      .then((data) => setMembers(Array.isArray(data) ? data : []))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  // Add Member (POST request)
  const handleAddMember = () => {
    if (Object.values(newMember).some((value) => value.trim() === "")) {
      alert("Please fill out all fields.");
      return;
    }
    fetch("http://localhost:4545/api/members/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newMember, status: "Active" }),
    })
      .then((response) => response.json())
      .then((data) => setMembers((prev) => [...prev, data]))
      .catch((error) => console.error("Error adding member:", error));

    setNewMember({
      name: "",
      apartment: "",
      contact: "",
      email: "",
      wing: "",
      familyMembersCount: "",
    });
  };

  // Toggle Member Status (PATCH request)
  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    fetch(`http://localhost:4545/api/members/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then(() => {
        setMembers((prev) =>
          prev.map((member) =>
            member.id === id ? { ...member, status: newStatus } : member
          )
        );
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  // Edit Member (PUT request)
  const handleSaveEdit = () => {
    fetch(`http://localhost:4545/api/members/${editMember.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editMember),
    })
      .then(() => {
        setMembers((prev) =>
          prev.map((member) =>
            member.id === editMember.id ? editMember : member
          )
        );
        setEditMember(null);
      })
      .catch((error) => console.error("Error updating member:", error));
  };

  const filteredMembers = members.filter(
    (member) =>
      (filterStatus === "All" || member.status === filterStatus) &&
      ((member.name &&
        member.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (member.apartment && member.apartment.includes(searchTerm)) ||
        (member.email &&
          member.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (member.contact && member.contact.includes(searchTerm)))
  );

  return (
    <main className="content px-5 py-5 bg-light">
      <div className="container">
        <div className="mb-4">
          <h2 className="fw-bold mb-2">Add Members</h2>
          <p className="text-muted">Add new members to the Apartment.</p>
        </div>

        <div className="card shadow-sm border-0 mb-4">
          <div className="card-header bg-dark py-3 text-white">
            <h5 className="mb-0 fw-bold">Add Member</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {Object.keys(newMember).map((key) => (
                <div className="col-md-6" key={key}>
                  <label className="form-label">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={key}
                    className="form-control"
                    value={newMember[key]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <div className="col-12 text-end">
                <button className="btn btn-primary" onClick={handleAddMember}>
                  Add Member
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-header bg-white py-3 d-flex justify-content-between">
            <h5 className="mb-0 fw-bold">Members List</h5>
            <select
              className="form-select form-select-sm w-auto"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <input
              type="text"
              className="form-control form-control-sm w-25"
              placeholder="Search by Name or Apartment"
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
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member, index) => (
                    <tr key={member.id || index}>
                      <td>{index + 1}</td>
                      <td>{member.name}</td>
                      <td>{member.apartment}</td>
                      <td>{member.contact}</td>
                      <td>{member.email}</td>
                      <td>{member.wing}</td>
                      <td>{member.familyMembersCount}</td>
                      <td>
                        <button
                          className={`btn btn-sm ${
                            member.status === "Active"
                              ? "btn-success"
                              : "btn-danger"
                          }`}
                          onClick={() =>
                            handleToggleStatus(member.id, member.status)
                          }
                        >
                          {member.status}
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => setEditMember(member)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-3">
                      No members found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminAddMembers;
