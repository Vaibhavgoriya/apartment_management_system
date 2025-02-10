import { useState } from "react";

const NoticeBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      date: "Nov 8th, 2023",
      title: "Meeting",
      description:
        "Navratri celebration will be held in the community hall. All residents are invited to join the event.",
      link: "#",
    },
    {
      date: "Dec 1st, 2023",
      title: "Maintenance Notice",
      description:
        "Scheduled power maintenance on Dec 5th, 2023, from 10 AM to 2 PM.",
      link: "#",
    },
  ];

  const handleShow = (notice) => {
    setSelectedNotice(notice);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedNotice(null);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 px-5 py-5">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold text-dark mb-1" style={{ color: "#00003E" }}>
            Notice Board
          </h1>
          <p className="text-muted mb-0">Stay updated with the latest notices.</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {/* Notices Section */}
          <div
            className="shadow-sm rounded bg-white p-4"
            style={{ border: "1px solid #ddd" }}
          >
            <h2 className="fw-bold mb-4" style={{ color: "#00003E" }}>
              Latest Notices
            </h2>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>View More</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice, index) => (
                    <tr key={index}>
                      <td>{notice.date}</td>
                      <td>{notice.title}</td>
                      <td>{notice.description.substring(0, 30)}...</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm rounded-3"
                          onClick={() => handleShow(notice)}
                          style={{
                            backgroundImage:
                            "linear-gradient(to right, #052C65, #0056b3)",
                          }}>
                          Know More
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Viewing Notice Details */}
      {showModal && selectedNotice && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-4 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: "#00003E" }}>
                  {selectedNotice.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Date:</strong> {selectedNotice.date}
                </p>
                <p>
                  <strong>Description:</strong> {selectedNotice.description}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary rounded-3"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeBoard;
