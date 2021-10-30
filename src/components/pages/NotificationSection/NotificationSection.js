import React from 'react';
import './NotificationSection.css';

const NotificationSection = () => {
    return (
        <div className="h-75 notification">
            <div className="container d-flex py-5">
                <div>
                    <h1>Get Booking Notification</h1>
                </div>
                <div className="input-group mb-3 w-50 mx-auto">
                    <input type="text" className="form-control" placeholder="Enter email.." aria-label="Search by country" aria-describedby="button-addon2" />
                    <button className="btn btn-info" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default NotificationSection;