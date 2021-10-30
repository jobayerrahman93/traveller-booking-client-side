import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./MyOrder.css";


const MyOrder = () => {

    const { user } = useAuth();
    const [myAllOrder, setMyAllOrder] = useState([]);

    useEffect(() => {

        fetch("https://morning-shore-41934.herokuapp.com/myOrder")
            .then(res => res.json())
            .then(data => {
              
                // console.log(data);
                const singleUser = data.filter(single => single.email == user.email);
                
                    setMyAllOrder(singleUser);


        
            })
    }, [myAllOrder]);
    // console.log(myAllOrder);

    let rowCount=1;

    // delete my order
    const deleteMyOrder=(id)=>{
        console.log(id);
        fetch(`https://morning-shore-41934.herokuapp.com/myOrder/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("successfully deleted");
                const remaining=myAllOrder.filter(remain=>remain._id !== id)
                setMyAllOrder(remaining);
            }
        })
    }

    return (
        <div className="my-order">
            <div className="container">
                <h1 className="my-5">My Order</h1>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAllOrder.map(myOrder => <tr key={myOrder._id}>
                                <th scope="row">{rowCount++}</th>
                                <td>{myOrder.orderName}</td>
                                <td>{myOrder.name}</td>
                                <td>{myOrder.email}</td>
                                <td>{myOrder.address}</td>
                                <td>{myOrder.status}</td>
                                <td>
                                    <Link to={`/myOrder/${myOrder._id}`}>
                                        <button onClick={()=>{deleteMyOrder(myOrder._id)}} className="btn btn-danger text-light">X</button>
                                    </Link>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyOrder;