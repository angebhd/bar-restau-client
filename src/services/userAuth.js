import axios from "axios";
const apiURL = "http://localhost:3001"

// login, logout,  & signin
const signin = async (fullname, username, mail, password) => {
    return await axios.post(`${apiURL}/signin`, { fullname, username, mail, password })
}
const login = async (username, password) => {
    return await axios.post(`${apiURL}/login`, { username, password }, { withCredentials: true })
}
const test = async () => {
    return await axios.get(`${apiURL}/details`, { withCredentials: true });
}
const userAuth = {
    signin: signin,
    login: login,
    test: test
}

export { userAuth }