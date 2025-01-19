import { useState } from "react";

const NoticeBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const notices = [
    {
      date: "Nov 8th, 2023",
      title: "Meeting",
      description: "Navratri celebration will be held in the community hall. All residents are invited to join the event.",
      link: "#",
    },
    {
      date: "Dec 1st, 2023",
      title: "Maintenance Notice",
      description: "Scheduled power maintenance on Dec 5th, 2023, from 10 AM to 2 PM.",
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
    <div className="container-fluid bg-light">
      {/* Notice Section */}
      <div className="container my-5">
        <h1 className="text mb-4 fw-bold" style={{ color: "#00003E" }}>
          Notice
        </h1>
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#00003E" }}>
              View Notice
            </h5>
            <div className="table-responsive mt-3">
              <table className="table table-bordered table-striped">
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
                          className="btn btn-primary btn-sm"
                          onClick={() => handleShow(notice)}
                        >
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

      {/* Bootstrap Modal */}
      {showModal && selectedNotice && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedNotice.title}</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <p><strong>Date:</strong> {selectedNotice.date}</p>
                <p><strong>Description:</strong> {selectedNotice.description}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleClose}>
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
