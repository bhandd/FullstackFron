import axios from "axios";
import {useEffect, useState} from "react";

export default function ListPatientsApp(){
    const [patients, setPatient] = useState([])

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

    function onSuccess(response) {
        console.log(response);
        setPatient(response.data);
    }

    function onError(response) {
        console.log(response);
    }

    return (
        <div className="ListPatientsApp">
            <h1>Patient List</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patients.map(
                            patient => (

                                    <tr key={patient.id}>

                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-success" onClick={getPatients}>Refresh</button>
        </div>
    )
}