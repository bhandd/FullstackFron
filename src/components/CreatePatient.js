import axios from "axios";
import {useEffect, useState} from "react";

export default function CreatePatientApp(){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [condition, setCondition] = useState('');
    function createPatient(newPatient) {
        console.log('Creating new patient:', newPatient);
        axios.post('http://localhost:8080/patients', newPatient)
            .then(response => onSuccess(response))
            .catch(error => onError(error))
            .finally(() => console.log('Finished creating patient'));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPatient = { name, age, condition };
        createPatient(newPatient);


        setName('');
        setAge('');
        setCondition('');
    };

    return (
        <div className="CreatePatientApp">
            <h2>Create New Patient</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Condition:
                        <input
                            type="text"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Create Patient</button>
            </form>
        </div>
    );
}

function onSuccess(response) {
    console.log('Patient created successfully:', response.data);
    alert('Patient created successfully!');
}

function onError(error) {
    console.error('Error creating patient:', error);
    alert('Failed to create patient. Please try again.');
}