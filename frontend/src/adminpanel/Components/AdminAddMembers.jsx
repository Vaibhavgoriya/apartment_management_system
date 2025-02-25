import { useState } from "react";

const AdminAddMembers = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Radhesh",
      apartment: "101",
      contact: "123-456-7890",
      email: "rjoshi123@rku.ac.in",
      wing: "A",
      familyMembersCount: 4,
      status: "Active",
    },
    {
      id: 2,
      name: "Vaibhav",
      apartment: "102",
      contact: "987-654-3210",
      email: "vgoriya456@rku.ac.in",
      wing: "B",
      familyMembersCount: 3,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Nishant",
      apartment: "103",
      contact: "555-555-5555",
      email: "ntalavita789@rku.ac.in",
      wing: "C",
      familyMembersCount: 2,
      status: "Active",
    },
  ]);

  

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMember = () => {
    if (Object.values(newMember).some((value) => value.trim() === "")) {
      alert("Please fill out all fields.");
      return;
    }
    setMembers((prev) => [
      ...prev,
      { ...newMember, id: members.length + 1, status: "Active" },
    ]);
    setNewMember({
      name: "",
      apartment: "",
      contact: "",
      email: "",
      wing: "",
      familyMembersCount: "",
    });
  };

  const handleToggleStatus = (id) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === id
          ? {
              ...member,
              status: member.status === "Active" ? "Inactive" : "Active",
            }
          : member
      )
    );
  };

  const handleEditClick = (member) => {
    setEditMember({ ...member });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    setMembers((prev) =>
      prev.map((member) => (member.id === editMember.id ? editMember : member))
    );
    setEditMember(null);
  };

  const filteredMembers = members.filter(
    (member) =>
      (filterStatus === "All" || member.status === filterStatus) &&
      (member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.apartment.includes(searchTerm) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.contact.includes(searchTerm))
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
                    {key.replace(/([A-Z])/g, " $1").trim()}
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr key={index}>
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
                        onClick={() => handleToggleStatus(member.id)}
                      >
                        {member.status}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => handleEditClick(member)}
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Edit Member Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Edit Member
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {editMember && (
                <>
                  {Object.keys(editMember).map(
                    (key) =>
                      key !== "id" &&
                      key !== "status" && ( // Prevent editing ID & status
                        <div className="mb-3" key={key}>
                          <label className="form-label">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </label>
                          <input
                            type="text"
                            name={key}
                            className="form-control"
                            value={editMember[key]}
                            onChange={handleEditChange}
                          />
                        </div>
                      )
                  )}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  handleSaveEdit();
                  document.querySelector("#editModal .btn-close").click(); // Close modal after saving
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminAddMembers;
