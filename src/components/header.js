import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { userData } from "../services/userData"


function Header() {

    const [username, setUsername] = useState("")

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
                setUsername(`${resp.data}`);
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
                <p id="account-setting" onClick={showAccountMenu}> {username} <i className="fas fa-user"></i></p>
                <p id="nav-button" onClick={showNavBar}> <i className="fas fa-bars"></i></p>

            </div>
            <div id="account-menu" >
                <p>My orders</p>
                <p>My reservations</p>
                <p> <a href="http://localhost:3001/logout">Log out </a> </p>
            </div>

        </header>
    )
}
export default Header
