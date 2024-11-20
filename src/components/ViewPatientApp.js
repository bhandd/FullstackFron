import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";

export default function ViewPatientApp(){
    const navigate = useNavigate();
    const { id } = useParams();
    const [patient, setPatient] = useState([]);
    const [journalEntries, setEntries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await getPatient(id);
            await getEntries(id);
            // Add more function calls here as needed
        };
        fetchData();
    }, [id]);

    function getPatient(id) {
        console.log('Fetching patient with id: ', id)
        axios.get(`http://localhost:8080/patients/${id}`)
            .then((response) => onPatientSuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }

    function getEntries(id) {
        console.log('Fetching entry with id: ', id)
        axios.get(`http://localhost:8080/entries/p${id}`)
            .then((response) => onEntrySuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }

    function onPatientSuccess(response) {
        console.log(response);
        setPatient(response.data);
    }
    function onEntrySuccess(response) {
        console.log(response);
        setEntries(response.data);
    }


    function onError(response) {
        console.log(response);
    }

    return (
        <div className="ViewPatientApp container">
            <header>
                <h1>Patient info</h1>
            </header>
            <main>
                <div>
                    <p><strong>ID:</strong>{id}</p>
                    <p><strong>Social number:</strong>{patient.social_number}</p>
                </div>
                <div className="table-container">
                    <h2>Journal Entries</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Start</th>
                            <th>End</th>
                            <th>Condition</th>
                            <th>Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {journalEntries && journalEntries.length > 0 ? (
                            journalEntries.map((entry, index) => (
                                <tr key={index}>
                                    <td>{entry.startDate}</td>
                                    <td>{entry.endDate}</td>
                                    <td>{entry.condition}</td>
                                    <td>{entry.entry}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No journal entries on this patient.</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <Link to={`/createEntry/${id}`}>
                    <button className="green-button element-spacing">Add Entry</button>
                </Link>
                <Link to="/">
                    <button className="button blue-button element-spacing">Main menu</button>
                </Link>
            </main>
        </div>
    )
}