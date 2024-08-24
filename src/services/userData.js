import axios from "axios";
const apiURL = "http://localhost:3001"

const getUsername = async () => {
    return await axios.get(`${apiURL}/getUsername`, { withCredentials: true });
}

const userData = {
    getUsername: getUsername,
}

export { userData }