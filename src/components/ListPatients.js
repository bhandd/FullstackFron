import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function ListPatientsApp(){
    const [patients, setPatient] = useState([]);
    const navigate = useNavigate();

    useEffect(
        () => getPatients(), []
    )

    function getPatients() {
        console.log('Fetching Patients')
        axios.get('http://localhost:8080/patients')
            .then((response) => onSuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }


    function deletePatient(id) {
        console.log('Deleting patient with id: ', id)
        axios.delete(`http://localhost:8080/patients/${id}`)
            .then((response) => onDeleteSuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }

    function onDeleteSuccess(response) {
        console.log(response);
        setPatient(response.data);
        navigate("/deleteSuccessful");
    }

    function onSuccess(response) {
        console.log(response);
        setPatient(response.data);
    }

    function onError(response) {
        console.log(response);
    }

    return (
        <div className="ListPatientsApp container">
            <header>
                <h1>Patient List</h1>
            </header>
            <main>
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>Social number</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            patients.map(
                                patient => (

                                        <tr key={patient.id}>

                                        <td>{patient.id}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.social_number}</td>

                                        <td><Link to={`/updatePatient/${patient.id}`}><button className="update-btn">Update Patient</button></Link></td>

                                        <td><button className="delete-btn" onClick={() => deletePatient(patient.id)}>Delete Patient</button></td>
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