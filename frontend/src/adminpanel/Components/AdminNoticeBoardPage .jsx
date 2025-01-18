import { useState } from "react";

const AdminNoticeBoardPage = () => {
  const [notices, setNotices] = useState([
    { id: 1, title: "Notice 1", date: "2025-01-15", status: "Active" },
    { id: 2, title: "Notice 2", date: "2025-01-16", status: "Active" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editNotice, setEditNotice] = useState(null);
  const [newNotice, setNewNotice] = useState({
    title: "",
    date: "",
    status: "Active",
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setEditNotice(null);
  };

  const handleAddNotice = () => {
    const newNoticeData = { ...newNotice, id: notices.length + 1 };
    setNotices([...notices, newNoticeData]);
    handleClose();
  };

  const handleEditNotice = (notice) => {
    setEditNotice(notice);
    setNewNotice({
      title: notice.title,
      date: notice.date,
      status: notice.status,
    });
    handleShow();
  };

  const handleDeleteNotice = (id) => {
    setNotices(notices.filter((notice) => notice.id !== id));
  };

  const handleSaveNotice = () => {
    setNotices(
      notices.map((notice) =>
        notice.id === editNotice.id ? { ...editNotice, ...newNotice } : notice
      )
    );
    handleClose();
  };

  return (
    <div className="container-fluid mt-4 py-5 px-5 bg-light">
      <h3 className="fw-bold">Admin - Manage Notices</h3>
      <p className="text-muted">
        Manage the notices for your community. Create, edit, and delete notices
        in real-time.
      </p>

      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary" onClick={handleShow}>
          Add New Notice
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.title}</td>
                <td>{notice.date}</td>
                <td>{notice.status}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEditNotice(notice)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteNotice(notice.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit Notice */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block" }}
          onClick={handleClose} // Close when clicking outside
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editNotice ? "Edit Notice" : "Add Notice"}
                </h5>
                <button className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newNotice.title}
                    onChange={(e) =>
                      setNewNotice({ ...newNotice, title: e.target.value })
                    }
                    placeholder="Enter notice title"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={newNotice.date}
                    onChange={(e) =>
                      setNewNotice({ ...newNotice, date: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={newNotice.status}
                    onChange={(e) =>
                      setNewNotice({ ...newNotice, status: e.target.value })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={editNotice ? handleSaveNotice : handleAddNotice}
                >
                  {editNotice ? "Save Changes" : "Add Notice"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNoticeBoardPage;
