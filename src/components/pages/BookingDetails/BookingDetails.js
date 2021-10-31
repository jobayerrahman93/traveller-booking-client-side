import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './BookingDetails.css';

const BookingDetails = () => {
    const { Bookid } = useParams();
    console.log(Bookid);

    const {user}=useAuth();

    const [singleService, setSingleService] = useState({});

    // single serivces
    useEffect(() => {

        fetch(`https://morning-shore-41934.herokuapp.com/bookingDetails/${Bookid}`)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, []);

    const { name, description, imageUrl } = singleService;

    // handle place order

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    const handlePlaceOrder=()=>{
       
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        

        const orderDetails={orderName:singleService.name,name,email,address,status:"pending"};
       
        fetch("https://morning-shore-41934.herokuapp.com/bookingDetails/order",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(orderDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("Successfully placed order")
                console.log(data);
            }
        })

    }

   

    return (
        <div className="booking-details-section text-center">
            <h1 className="my-5">Place Order</h1>
            

            <div className="row container">
                <div className="col-md-6">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
                
            

            <div className="col-md-6 text-start">
                    <div>
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="text" ref={nameRef} value={user.displayName} readOnly className="form-control" id="exampleInputName" />
                    </div>

                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} value={user.email} readOnly className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    <div>
                        <label htmlFor="exampleInputName" className="form-label">Adreess</label>
                        <input ref={addressRef} type="text" className="form-control" id="exampleInputName" />
                    </div>

                    <div className="my-3">
                        <button onClick={handlePlaceOrder} className="btn btn-info">Place order</button>
                    </div>


                   
                </div>

                </div>

        </div>
    );
};

export default BookingDetails;