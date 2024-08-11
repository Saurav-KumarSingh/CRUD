import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Table({ Deletuser, UpdatedUser }) {
    const [data, setData] = useState([])



    useEffect(() => {
        async function FeatchData() {
            try {
                const user = await axios.get('/api/get')
                const response = user.data
                // console.log(response.users)
                setData(response)
                // console.log(response.data.users.email, 'email')
            } catch (error) {
                console.log(error)
            }
        }
        FeatchData()

    }, [data]);


    return (
        <>
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title mt-5 text-center" style={{background:' linear-gradient(90deg, rgba(0,220,255,1) 24%, rgba(9,9,121,0.8412407199207808) 85%)'}}>
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>User</b></h2>
                            </div>
                            <div className="col-sm-6 my-2">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                    <span className=" text-italic">&#8853;</span> <span>Add New Employee</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center ">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Father</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.users?.map((elem, index) => {
                                return (
                                    <tr key={index}>
                                        <td></td>
                                        <td>{elem.name}</td>
                                        <td>{elem.fathername}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer px-2 py-1 rounded mx-2" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdatedUser(elem._id)} style={{textDecoration:'none',color:'white',backgroundColor:'blue'}}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">edit</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer px-2 py-1 rounded mx-2" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => Deletuser(elem._id)} style={{textDecoration:'none',color:'white',backgroundColor:'red'}}>
                                                <i class="bi bi-trash ">delete</i>
                                            </a>
                                            {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div >


        </>
    );
}