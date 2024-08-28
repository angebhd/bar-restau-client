import axios from "axios";
const apiURL = "http://localhost:3001"

// login, logout,  & signin
const signin = async (fullname, username, mail, password) => {
    return await axios.post(`${apiURL}/signin`, { fullname, username, mail, password })
}
const login = async (username, password) => {
    return await axios.post(`${apiURL}/login`, { username, password }, { withCredentials: true })
}
const logout = async () => {
    try {
        const op = await axios.get(`${apiURL}/logout`, { withCredentials: true });
        if (op.data.error) {
            alert(op.data.message);
        } else {
            return true;
        }
    } catch (error) {
        alert('Something went wrong');
    }
}

const userAuth = {
    signin: signin,
    login: login,
    logout: logout
}

export { userAuth }