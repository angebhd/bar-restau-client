import Header from "../components/header";
import LoginHeader from "../components/loginHeader";
import "../styles/login.css";
import { Link } from "react-router-dom";
function Login() {
    return (

        <div className="login" >
            <LoginHeader />
            <h1> Login page </h1>
            <form id="login" method="post">
                <label htmlFor="username">Username: </label>
                <input name="username"></input>

                <label htmlFor="password">Password: </label>
                <input name="password" type="password"></input>

                <button type="submit">Login</button>

            </form>
            {/* <p> Forget password </p> */}
            <p className="signin"> Don't have an account, <Link to="/signin">sign-in</Link></p>

        </div>
    )

}
export default Login