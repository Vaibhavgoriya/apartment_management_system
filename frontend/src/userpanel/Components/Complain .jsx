import  { useState } from 'react';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint Submitted:', formData);
    alert('Complaint submitted successfully!');
    setFormData({ date: '', title: '', description: '' }); // Reset form
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
            <div className="container my-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item list-group-item-dark active text-center">
                <strong>Complain</strong>
              </li>
              <li className="list-group-item text-center">
                <a href="/complain-list" className="text-decoration-none text-dark">Complain List</a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <h2 className="mb-4">Complain Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Complain Date</label>
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
                <label htmlFor="title" className="form-label">Complain Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  placeholder="Type Complain Here"
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
              <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>

      </div>
  );
};

export default ComplaintForm;
