import React from 'react';
import { Link } from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';
import './MainNav.css';

const MainNav = () => {

    const {user,logOut}=useFirebase();

    return (
        <div className="main-nav">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Traveller</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addBooking" >Add Booking Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tour" >Tours</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            { user.email&&<li className="nav-item">
                                <Link to="/myOrder" >My Order</Link>
                            </li>
                            }
                            { user.email&&<li className="nav-item">
                                <Link to="/manageOrder" >Manage Order</Link>
                            </li>
                            }

                            <span className="mt-3 mx-2">{user.displayName} </span>

                            {!user.email? <h1 className="mx-3 mt-2"><i className="fas fa-user-circle"></i> </h1> :
                            <img src={user.photoURL} width="50px" height="50px" className="rounded-circle mx-3 mt-2" alt=""/>}
                       
                            {user?.email?<li className="nav-item">
                              <button onClick={logOut} className="btn btn-outline-info">Log Out</button>
                            </li>:
                             <li className="nav-item">
                             <Link to="/login">Login</Link>
                         </li>}
                    
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default MainNav;