import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function DeletePatientApp(){

    useEffect(
        () => deletePatient(), []
    )

    function deletePatient(id) {
        console.log('Deleting patient with id: ', id)
        axios.delete('http://localhost:8080/patients/${id}')
            .then((response) => onSuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }

    function onSuccess(response) {
        console.log(response);
        alert('Patient deleted successfully');
    }

    function onError(response) {
        console.log(response);
        alert('Failed to delete patient');
    }

    return(
        <div className="DeletePatientApp">
            <Link to="/">
                <button className="blue-button">Main menu</button>
            </Link>
        </div>
    )
}