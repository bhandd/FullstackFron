import axios from "axios";

async function registerUser(user) {
    try {
        const response = await axios.post('http://localhost:8080/register', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        onSuccess(response)
        return response.data;
    } catch (error) {
        onError(error);
    }
}

export default function Register() {

}