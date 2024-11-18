import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function CreateEntryApp () {

    const { id } = useParams();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [entry, setEntry] = useState('');
    const [condition, setCondition] = useState(0);

    useEffect(() => {
        console.log("Patient ID : " + id);
    }, []);

    function createEntry(newEntry) {
        console.log('Creating new entry:', newEntry);
        axios.post('http://localhost:8080/entries', newEntry)
            .then(response => onSuccess(response))
            .catch(error => onError(error))
            .finally(() => console.log('Finished creating entry'));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const patientId = id;
        const newEntry = { patientId, entry, startDate, endDate, condition };
        createEntry(newEntry);

        console.log("PatientId: " + id);

        setStartDate('');
        setEndDate('');
        setEntry('');
        setCondition(0);
    };

    return (
        <div className="form-container">
            <h2>Add Entry for Patient ID: {id}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Start date:
                    <input
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    End date:
                    <input
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Entry:
                    <textarea
                        name="entry"
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        required
                    />
                </label>
                <div>
                    <label>Health status:</label>
                    <select
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        required>
                        <option value={-1}>Select Status</option>
                        <option value={0}>Well</option>
                        <option value={1}>Cold</option>
                        <option value={2}>Pain</option>
                        <option value={3}>Broken bone</option>
                        <option value={4}>Unknown</option>
                    </select>
                </div>
                <div className="form-buttons">
                    <button type="submit" className="button green-button element-spacing">Save Entry</button>
                    <Link to="/">
                        <button className="blue-button element-spacing">Main menu</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

function onSuccess(response) {
    console.log('Entry created successfully:', response.data);
    alert('Entry created successfully!');
}

function onError(error) {
    console.error('Error creating entry:', error);
    alert('Failed to create entry. Please try again.');
}