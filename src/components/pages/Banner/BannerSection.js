import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <div className="banner-section text-center">
          
                <div className="des">
                    <h1 className="title">Ready to start your exciting journey.</h1>
                    <div className="w-50 mx-auto mt-5 pt-5">
                        <div className="input-group mb-3 w-75 mx-auto">
                            <input type="text" className="form-control" placeholder="Search by country" aria-label="Search by country" aria-describedby="button-addon2"/>
                            <button className="btn btn-info" type ="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
          
        </div>
    );
};

export default BannerSection;