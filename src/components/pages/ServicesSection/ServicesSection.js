import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://morning-shore-41934.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div className="services-section">
      <h1 className="py-5 text-center">Our Services</h1>
      <div className="container">
        <div className="w-50 ms-auto">
          {services.length == 0 && (
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {services.map((service) => (
            <div key={service._id} className="col">
              <div className="card h-100">
                <img
                  src={service.imageUrl}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <h4 className="text-success">Price: $ {service.price}</h4>
                  <p className="card-text">{service.description}</p>
                </div>
                <div className="">
                  <Link to={`/bookingDetails/${service._id}`}>
                    <button className="btn btn-info m-2">
                      Booking Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
