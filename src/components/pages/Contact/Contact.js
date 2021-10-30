import React from 'react';

const Contact = () => {
    return (
        <div style={{fontFamily:"'Saira',sans-serif"}}>
            <div className="container text-center">
                <div className="my-5">
                    <h1>Leave us your info</h1>
                    <h4 className="text-secondary">and we will get back to you.</h4>
                </div>
                <div className="my-5 w-50 mx-auto pb-5">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Subject</label>
                    </div>


                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                        <label htmlFor="floatingTextarea2">Message</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-5">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;