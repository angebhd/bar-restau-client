import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../services/userData"
import { userAuth } from "../services/userAuth"


function Header() {

    const navigate = useNavigate()
    const [username, setUsername] = useState()

    function showAccountMenu() {
        let divMenu = document.getElementById("account-menu");
        if (divMenu.className === "") {
            divMenu.className = "show-account-menu";
        } else {
            divMenu.className = "";
        }
    }
    function showNavBar() {
        let headerNav = document.getElementById("header-nav");
        if (headerNav.className === "") {
            headerNav.className = "show-header-nav";
        } else {
            headerNav.className = "";
        }
    }
    const getUser = async () => {
        try {
            const resp = await userData.getUsername();
            if (resp.status === 200 && !resp.data.error) {
                setUsername(<>{resp.data}  <i className="fas fa-user" onClick={showAccountMenu}></i></>);
                localStorage.setItem('username', resp.data);
            }
            else {
                setUsername(<Link to="/login">Login</Link>);
            }
        } catch (error) {
            setUsername(<Link to="/login">Login</Link>);
        }
    }
    useEffect(() => {
        getUser();

    }, []);

    const logout = () => {
        const op = userAuth.logout()
        if (op) {
            document.cookie = 'token=; Max-Age=-99999999;';
            navigate('/login')
        }
    }


    return (
        <header>
            <h1>Bar-restau</h1>
            <nav id="header-nav">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/menu">Menu</Link></p>
                <p><Link to="/order">Order</Link></p>
                <p><Link to="/reservation">Reservation</Link></p>
                <p><Link to="/gallery">Gallery</Link></p>
                <p><Link to="/about">About</Link></p>
            </nav>
            <div className="header-button">
                <p id="account-setting" > {username} </p>
                <p id="nav-button" onClick={showNavBar}> <i className="fas fa-bars"></i></p>

            </div>
            <div id="account-menu" >
                <p><Link to="/orders">Orders</Link></p>
                <p><Link to="/reservations">Reservations</Link></p>
                <p onClick={logout}> Log out</p>
            </div>
        </header>
    )
}
export default Header
