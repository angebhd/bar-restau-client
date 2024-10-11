import LoginHeader from "../components/loginHeader";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../services/userAuth";
import "../styles/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';




function Login({ isDark, toggleTheme }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const submit = await userAuth.login(username, password);
            if (submit.status === 200) {
                navigate("/home");
            } else {
                alert(submit.data || "An error occurred.");
            }
        } catch (error) {
            if (error.response.status === 401) {
                alert(error.response.data)
            } else {
                alert("An error occurred.");
            }
        }

    }
    return (
        <div className={`login-container ${isDark ? "dark-mode" : "light-mode"}`} >
            <LoginHeader isDark={isDark} toggleTheme={toggleTheme} />
            <div className="login-card">
                <h1> Login </h1>
                <form id="login" onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="text" onChange={(e) => { setUsername(e.target.value) }}></input>

                    <label htmlFor="password">Password: </label>
                    <input name="password" type={showPassword ? "text" : "password"} onChange={(e) => { setPassword(e.target.value) }}></input>
                    <br></br> 
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />  {showPassword ? "Hide password" : "Show password"}
                    </button>

                    <button type="submit" className="login-button">Login</button>

                </form>
                <p className="signin"> Don't have an account, <Link to="/signup">sign up</Link></p>
            </div>

        </div>
    )

}
export default Login