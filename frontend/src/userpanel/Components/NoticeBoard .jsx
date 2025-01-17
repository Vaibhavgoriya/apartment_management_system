import React from 'react';

const NoticeBoard = () => {
  const notices = [
    {
      date: 'Nov 8th, 2023',
      title: 'Meeting',
      description: 'Navratri celebration',
      link: '#'
    }
  ];

  return (
    <div className="container-fluid bg-light min-vh-100">
     
      {/* Notice Section */}
      <div className="container my-5">
        <h1 className="text-dark mb-4">Notice</h1>
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">View Notice</h5>
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
                      <td>{notice.description}</td>
                      <td>
                        <a href={notice.link} className="btn btn-primary btn-sm">
                          Know More
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
