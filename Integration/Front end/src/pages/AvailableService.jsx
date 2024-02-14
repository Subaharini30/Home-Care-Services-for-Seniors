import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/css/ViewService.css';

const AvailableService = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get("http://localhost:8080/service/get", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setServices(response.data);
                }
                else {
                    navigate('/Admin_Login');
                }
            }
            catch (error) {
                console.error("Error fetching services:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, [navigate]);

    return (
        <div className="container my-3 py-3">
            <h2 className="display-5 text-center">Latest Services</h2>
            <hr />
            <div className="services-grid">
                {loading ? <p>Loading...</p> : services.map((service) => (
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={service.image} alt="Service" />
                        <div className="card-body">
                            <h5 className="card-title">{service.serviceType}</h5>
                            <p className="card-text">{service.serviceDescription}</p>
                        </div>
                        <ul className="list-group list-group-flush" style={{ marginTop: '10px' }}>
                            <li className="list-group-item">Duration: {service.duration}</li>
                            <li className="list-group-item">Charges: {service.charge}</li>
                            <li className="list-group-item">Available: {service.available ? 'Yes' : 'No'}</li>
                        </ul>
                        <div className="card-body">
                            {service.available ? (
                                <Link to='/BookService' className="card-link">
                                    <button className="btn btn-dark">Book now</button>
                                </Link>
                            ) : (
                                <button className="btn btn-dark" disabled>Booking not available</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/UserDashboard'><button style={{width:"100px",float:"right",backgroundColor:"green",color:"white"}}>Back to Dashboard</button></Link>
        </div>
    );
};

export default AvailableService;
