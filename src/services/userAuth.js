import axios from "axios";
const apiURL = "http://localhost:3001"

const signin = async (fullname, username, mail, password) => {
    return await axios.post(`${apiURL}/signin`, { fullname, username, mail, password })
}
const login = async (username, password) => {
    return await axios.post(`${apiURL}/login`, { username, password })
}
const test = async () => {
    await axios.get(`${apiURL}/details`);
}

export { signin, login, test }