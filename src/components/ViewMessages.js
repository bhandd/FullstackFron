import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function ViewMessagesApp(){
    const { id } = useParams();
    const [messages, setMessages] = useState([])
    const [error, setError] = useState(null)

    useEffect(
        () => getMessages(), []
    )

    function getMessages() {
        console.log('Fetching Messages')
        axios.get(`http://localhost:8080/messages/r${id}`)
            .then((response) => onSuccess(response))
            .catch((response) => onError(response))
            .finally(() => console.log('Finally done'))
    }

    return (
        <div className="ListPatientsApp container">
            <header>
                <h1>Staff List</h1>
            </header>
            <main>
                <div className="table-container" style={{ overflowY: "auto", maxHeight: "400px" }}>
                    <table>
                        <thead>
                        <tr>
                            <th>SenderID</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        {messages.length > 0 ? (
                            messages.map((message) => (
                                <tr key={message.id}>
                                    <td>{message.senderId}</td>
                                    <td>{message.message}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">
                                    {error ? `Error: ${error}` : "No messages available"}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <Link to="/">
                    <button className="button blue-button">Main menu</button>
                </Link>
            </main>
        </div>
    )

    function onSuccess(response) {
        console.log(response);
        setMessages(response.data);
    }

    function onError(response) {
        console.log(response);
    }
}