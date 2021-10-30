import React from 'react';
import './TourSection.css';

const ToursSection = () => {
    return (
        <div className="tour-section py-5 overflow-hidden">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <div className="d-flex">
                        <div><h1><i className="fas fa-map-marker-alt"></i></h1></div>
                        <div>
                            <h3>1,000+ Local Tours</h3>
                            <p>Our award-winning coffee tour offers guests an inside look into traditional sustainable farming in Panama and its impact on the coffee industry</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div><h1><i className="fas fa-sun"></i></h1></div>
                        <div>
                            <h3>Winter Destination</h3>
                            <p>Our award-winning coffee tour offers guests an inside look into traditional sustainable farming in Panama and its impact on the coffee industry</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex">
                        <div><h1><i className="far fa-smile"></i></h1></div>
                        <div>
                            <h3>Happy Travellers</h3>
                            <p>Our award-winning coffee tour offers guests an inside look into traditional sustainable farming in Panama and its impact on the coffee industry</p>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default ToursSection;