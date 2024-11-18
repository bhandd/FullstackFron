import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function ListStaffApp(){
    const [staff, setStaff] = useState([])

    useEffect(
        () => getStaff(), []
    )

    function getStaff() {
        const token = localStorage.getItem('token');
        console.log('Fetching Patients ', token)
        axios.get('http://localhost:8080/staff', {
            headers: {
                Authorization: `Bearer ${token}`, // Add the token to the Authorization header
            },
        })
            .then((response) => onSuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }

    function onSuccess(response) {
        console.log(response);
        setStaff(response.data);
    }

    function onError(response) {
        console.log(response);
    }

    return (
        <div className="ListPatientsApp container">
            <header>
                <h1>Staff List</h1>
            </header>
            <main>
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>Role</th>
                            <th>Social number</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            staff.map(
                                s => (

                                    <tr key={s.id}>

                                        <td>{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.role}</td>
                                        <td>{s.social_number}</td>
                                        <td><Link to="/">
                                            <button className="update-btn">Update Staff</button>
                                        </Link></td>
                                        <td><Link to="/">
                                            <button className="delete-btn">Delete Staff</button>
                                        </Link></td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <Link to="/">
                    <button className="button blue-button">Main menu</button>
                </Link>
            </main>
        </div>
    )
}