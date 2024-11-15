import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdatePatientApp(){

    const { ID } = useParams(); // Capture the patient ID from the URL
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [social_number, setNumber] = useState(0);

    const [patient, setPatient] = useState({
        id: ID,
        name: "",
        social_number: 0,
        role: ""
    });

    useEffect(
        () => getPatient(), []
    )

    function getPatient() {
        axios.get(`http://localhost:8080/patients/${ID}`)
            .then(response => {
                setPatient(response.data); // Populate the form with the existing patient data
            })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    }

    useEffect(() => {
        // Fetch the existing patient data
        axios.get(`http://localhost:8080/patients/${ID}`)
            .then(response => {
                setPatient(response.data); // Populate the form with the existing patient data
            })
            .catch(error => {
                console.error("Error fetching patient data:", error);
            });
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/patients/${ID}`, patient)
            .then(() => {
                navigate("/updateSuccessful"); // Redirect to a success page or wherever needed
            })
            .catch(error => {
                console.error("Error updating patient data:", error);
            });
    };

    return(
        <div>
            <h1>Update Patient</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Social Number</label>
                    <input
                        type="number"
                        name="Social Number"
                        value={social_number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <button className="blue-button" type="submit">Update</button>
            </form>
        </div>
    );
}