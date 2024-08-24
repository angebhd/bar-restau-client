import LoginHeader from "../components/loginHeader";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../services/userAuth"

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
            if (error.response.status === 401){
                alert(error.response.data)
            }else{
                alert("An error occurred.");
            }
        }

    }
    return (
        <div className="login" >
            <LoginHeader />
            <h1> Login page </h1>
            <form id="login" onSubmit={handleLogin}>
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" onChange={(e) => { setUsername(e.target.value) }}></input>

                <label htmlFor="password">Password: </label>
                <input name="password" type="password" onChange={(e) => { setPassword(e.target.value) }}></input>

                <button type="submit">Login</button>

            </form>
            {/* <p> Forget password </p> */}
            <p className="signin"> Don't have an account, <Link to="/signin">sign-in</Link></p>

        </div>
    )

}
export default Login