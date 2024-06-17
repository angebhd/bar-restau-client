import { Link } from "react-router-dom"
import Header from "../components/header"
import "../styles/login.css"
import LoginHeader from "../components/loginHeader"
export default function Singnin() {
    return (
        <div className="login" >
            <LoginHeader/>
            <h1> Sign-in page </h1>
            <form id="login" method="post">

                <label htmlFor="fullname">Fullname: </label>
                <input name="fullname" type="text"></input>

                <label htmlFor="username">Username: </label>
                <input name="username" type="text"></input>

                <label htmlFor="mail">Mail: </label>
                <input name="mail" type="email"></input>

                <label htmlFor="password">Password: </label>
                <input name="password" type="password"></input>

                <label htmlFor="c-password">Confirm password: </label>
                <input name="c-password" type="password"></input>

                <button type="submit">Sign in</button>

            </form>
            {/* <p> Forget password </p> */}
            <p className="signin"> Already have an account, <Link to="/login">login</Link></p>

        </div>
    )

}