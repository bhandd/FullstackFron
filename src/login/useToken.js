import {useState} from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        if (!tokenString) return null;
        return JSON.parse(tokenString);
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        console.log("I went here")
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    };

    const clearToken = () => {
        console.log("clearing token...")
        sessionStorage.removeItem("token");
        setToken(null);
    };

    return {
        setToken: saveToken,
        clearToken,
        token
    }
}