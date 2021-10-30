import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import "./ManageOrder.css";



const ManageOrder = () => {

    const [managOrder, setManageOrder] = useState([]);
    const [approveModifiedCount,setApproveModifiedCount]=useState(0);

    useEffect(() => {

        fetch("https://morning-shore-41934.herokuapp.com/manageOrder")
            .then(res => res.json())
            .then(data => setManageOrder(data))
    }, [approveModifiedCount]);

    let rowCount = 1;
    // console.log(managOrder);
    // handle delete

    const handleDelete = (id) => {
        fetch(`https://morning-shore-41934.herokuapp.com/manageOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Succesfully deleted");
                    const remaining = managOrder.filter(remain => remain._id !== id);
                    setManageOrder(remaining)

                }
            })

    }

    const {status}=managOrder;
    const updatePending={
        status:"Approve"
    }

    // handle status update

    const handleUpdateStatus = (id) => {

        console.log(id);
        fetch(`https://morning-shore-41934.herokuapp.com/manageOrder/${id}`, {
            method: "PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatePending)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount>0){
                    setApproveModifiedCount(data.modifiedCount)
                }
            })
    }






    return (
        <div className="manage-order">

            <div className="container">
                <h1 className="my-5">Manage Order</h1>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Name</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            managOrder.map(manage => <tr key={manage._id}>
                                <th scope="row">{rowCount++}</th>
                                <td>{manage.orderName}</td>
                                <td>{manage.name}</td>
                                <td>{manage.email}</td>
                                <td>{manage.address}</td>
                                <td>{manage.status}</td>
                                <td>
                                    <Link to={`/manageOrder/${manage._id}`}>
                                        <button onClick={() => handleUpdateStatus(manage._id)} className="btn btn-dark text-light">Update status</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/manageOrder/${manage._id}`}>
                                        <button onClick={() => { handleDelete(manage._id) }} className="btn btn-danger text-light">X</button>
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

export default ManageOrder;