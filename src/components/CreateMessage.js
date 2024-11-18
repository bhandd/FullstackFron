import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function CreateMessageApp(){

    const { id } = useParams();
    const recieverId = id;
    const senderId = 10;
    const [message, setMessage] = useState('');

    function createMessage(newMessage) {
        console.log('Creating new message:', newMessage);
        axios.post('http://localhost:8080/messages', newMessage)
            .then(response => onSuccess(response))
            .catch(error => onError(error))
            .finally(() => console.log('Finished creating message'));
    }

    useEffect(
        () => console.log(id), []
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = { message, recieverId, senderId };
        createMessage(newMessage);

        setMessage('');
    };

    return (
        <div className="CreatenewMessageApp content-box">
            <h1>Write message</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="message">Message: </label>
                    <input
                        type="text"
                        name="message"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button className="green-button" type="submit">Send</button>
                <Link to="/">
                    <button className="blue-button">Main menu</button>
                </Link>
            </form>
        </div>
    );
}

function onSuccess(response) {
    console.log('Message created successfully:', response.data);
    alert('Message created successfully!');
}

function onError(error) {
    console.error('Error creating message:', error);
    alert('Failed to create message. Please try again.');
}