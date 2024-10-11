import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import LoginHeader from "../components/loginHeader"
import { userAuth } from "../services/userAuth"

export default function Singnup({ isDark, toggleTheme }) {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/login');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === c_password) {
            const response = await userAuth.signin(fullname, username, mail, password);
            alert(response.data);
            redirect();

        } else {
            alert("Different password !")
        }
    }

    return (
        <div className={`login-container ${isDark ? "dark-mode" : "light-mode"}`} >
            <LoginHeader isDark={isDark} toggleTheme={toggleTheme} />
            <div className="login-card">
                <h1> Sign up </h1>
                <form id="login" onSubmit={handleSubmit}>

                    <label htmlFor="fullname">Fullname: </label>
                    <input name="fullname" type="text" onChange={(e) => setFullname(e.target.value)}></input>

                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} ></input>

                    <label htmlFor="mail">Mail: </label>
                    <input name="mail" type="email" onChange={(e) => setMail(e.target.value)} ></input>

                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} ></input>

                    <label htmlFor="c_password">Confirm password: </label>
                    <input name="c_password" type="password" onChange={(e) => setC_password(e.target.value)} ></input>

                    <button type="submit" className="login-button">Sign up</button>

                </form>
                <p className="signin"> Already have an account, <Link to="/login">login</Link></p>
            </div>
        </div>
    )

}