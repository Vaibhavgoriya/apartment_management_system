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
    },
    {
      id: 2,
      name: "Vaibhav",
      apartment: "102",
      contact: "987-654-3210",
      email: "vgoriya456@rku.ac.in",
      wing: "B",
      familyMembersCount: 3,
    },
    {
      id: 3,
      name: "Nishant",
      apartment: "103",
      contact: "555-555-5555",
      email: "ntalavita789@rku.ac.in",
      wing: "C",
      familyMembersCount: 2,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newMember, setNewMember] = useState({
    id: "",
    name: "",
    apartment: "",
    contact: "",
    email: "",
    wing: "",
    familyMembersCount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMember = () => {
    if (
      !newMember.name ||
      !newMember.apartment ||
      !newMember.contact ||
      !newMember.email ||
      !newMember.wing ||
      !newMember.familyMembersCount
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setMembers((prev) => [...prev, { ...newMember, id: members.length + 1 }]);
    setNewMember({
      id: "",
      name: "",
      apartment: "",
      contact: "",
      email: "",
      wing: "",
      familyMembersCount: "",
    });
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.apartment.includes(searchTerm) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.contact.includes(searchTerm)
  );

  return (
    <main className="content px-5 py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="fw-bold mb-2">Add Members</h2>
          <p className="text-muted">
            Add the new Members in the Apartment.
          </p>
        </div>
        {/* Add Member Form */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-header bg-white py-3">
            <h5 className="mb-0 fw-bold">Add Member</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  value={newMember.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment"
                  className="form-control"
                  value={newMember.apartment}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  className="form-control"
                  value={newMember.contact}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={newMember.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="wing"
                  placeholder="Wing"
                  className="form-control"
                  value={newMember.wing}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="familyMembersCount"
                  placeholder="Family Members"
                  className="form-control"
                  value={newMember.familyMembersCount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12 text-end">
                <button className="btn btn-primary" onClick={handleAddMember}>
                  Add Member
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Members Table */}
        <div className="card shadow-sm border-0">
          <div className="card-header bg-white py-3 d-flex justify-content-between">
            <h5 className="mb-0 fw-bold">Members List</h5>
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
    </main>
  );
};

export default AdminAddMembers;
