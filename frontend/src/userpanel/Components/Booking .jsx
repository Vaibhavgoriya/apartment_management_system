import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        date: '',
        title: '',
        description: '',
    });

    const [bookings, setBookings] = useState([ // Booking Data
        { id: 1, date: '2024-12-10', startTime: '10:00', endTime: '12:00', purpose: 'Birthday Party' },
        { id: 2, date: '2024-12-11', startTime: '14:00', endTime: '16:00', purpose: 'Meeting' },
        { id: 3, date: '2024-12-12', startTime: '18:00', endTime: '20:00', purpose: 'Event' },
    ]);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to a server
        setFormData({ date: '', title: '', description: '' }); // Clear form
    };

    return (
        <div className="container-fluid bg-light">
           

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-dark active text-center"><strong>Booking</strong></li>
                            <li className="list-group-item text-center"><a href="/booking-list" className="text-decoration-none text-dark">Booking List</a></li>
                        </ul>
                    </div>

                    <div className="col-md-9">
                        <h2 className="mb-4">Hall Booking Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Complain Date</label>
                                <input type="date" id="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Complain Title</label>
                                <input type="text" id="title" name="title" className="form-control" placeholder="Type Complain Here" value={formData.title} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea id="description" name="description" className="form-control" placeholder="Type Description Here" rows="4" value={formData.description} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>

                        <h2 className="mt-4">Past Bookings</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Date</th>
                                    <th>Starting Time</th>
                                    <th>Ending Time</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking.id}>
                                        <td>{booking.id}</td>
                                        <td>{booking.date}</td>
                                        <td>{booking.startTime}</td>
                                        <td>{booking.endTime}</td>
                                        <td>{booking.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-light py-3 mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p>Copyright © 2023 RNV</p>
                            <p>Designed by RNV</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <h5>About Us</h5>
                            <p>To bridge the gap between residents and management through intuitive technology, ensuring better communication, transparency, and convenience for all.</p>
                        </div>
                        <div className="col-md-4 text-end">
                            <h5>Contact Info</h5>
                            <p>Umiya Chowck, Rajkot, Gujarat</p>
                            <p>+91 7984767882</p>
                            <p>mw123@gmail.com</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <p>Follow Us</p>
                        </div>
                        <div className='col-md-6 text-end'>
                            <p>Privacy Terms</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Booking;
