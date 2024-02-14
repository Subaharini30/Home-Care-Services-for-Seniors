import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/css/ViewService.css';

const ViewService = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [editedService, setEditedService] = useState({});
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

    const handleEdit = (serviceType) => {
        setEditingService(serviceType);
        const serviceToEdit = services.find(service => service.serviceType === serviceType);
        setEditedService(serviceToEdit);
    };

    const handleSaveChanges = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:8080/service/put/${editingService}`, editedService, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Refresh services data after editing
            const updatedServices = services.map(service => {
                if (service.serviceType === editingService) {
                    return editedService;
                }
                return service;
            });
            setServices(updatedServices);
            setEditingService(null);
            setEditedService({});
        } catch (error) {
            console.error('Error saving changes:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedService(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container my-3 py-3">
            <h2 className="display-5 text-center">Latest Services</h2>
            <hr />
            <div className="services-grid">
                {loading ? <p>Loading...</p> : services.map((service) => (
                    <div className="card" style={{ width: "18rem" }} key={service.serviceId}>
                        <img className="card-img-top" src={service.image} alt="Service" />
                        <div className="card-body">
                            {editingService === service.serviceType ? (
                                <div>
                                    <input type="text" name="serviceType" value={editedService.serviceType} onChange={handleInputChange} />
                                    <input type="text" name="serviceDescription" value={editedService.serviceDescription} onChange={handleInputChange} />
                                    <input type="text" name="duration" value={editedService.duration} onChange={handleInputChange} />
                                    <input type="text" name="charge" value={editedService.charge} onChange={handleInputChange} />
                                    <input type="text" name="available" value={editedService.available} onChange={handleInputChange} />
                                </div>
                            ) : (
                                <div>
                                    <h5 className="card-title">{service.serviceType}</h5>
                                    <p className="card-text">{service.serviceDescription}</p>
                                </div>
                            )}
                        </div>
                        <ul className="list-group list-group-flush" style={{ marginTop: '10px' }}>
                            <li className="list-group-item">Duration: {service.duration}</li>
                            <li className="list-group-item">Charges: {service.charge}</li>
                            <li className="list-group-item">Available: {service.available ? 'Yes' : 'No'}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between"> {/* Added d-flex and justify-content-between classes */}
                        {editingService === service.serviceType ? (
                            <button className="btn btn-dark" onClick={handleSaveChanges}>Save Changes</button>
                        ) : (
                            <button className="btn btn-dark" onClick={() => handleEdit(service.serviceType)}>Edit</button>
                        )}
                        <button className="btn btn-dark" onClick={() => handleDelete(service.serviceType)}>Delete</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewService;
