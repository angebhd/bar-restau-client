import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../services/userData"
import { userAuth } from "../services/userAuth"

import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faBars } from '@fortawesome/free-solid-svg-icons';



function Header() {

    const navigate = useNavigate()
    const [username, setUsername] = useState();

    /// dark light mode
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
        }
    }, []);

    useEffect(() => {
        document.body.setAttribute("data-theme", isDark ? "dark" : "light");
        localStorage.setItem("theme", isDark ? "dark" : "light");        
    }, [isDark]);
    const toggleTheme = () => {setIsDark(!isDark)};



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
                setUsername(<>{resp.data}  <FontAwesomeIcon icon={faUser} onClick={showAccountMenu}/></>);
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
        <header className="main">
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
                <p id="nav-button" onClick={showNavBar}> <FontAwesomeIcon icon={faBars} /></p>

            </div>
            <div id="account-menu" >
                <p><Link to="/orders">Orders</Link></p>
                <p><Link to="/reservations">Reservations</Link></p>
                <p onClick={logout}> Log out</p>
            </div>
            {/* dark/light mode */}
            <div className="header-right">
                <button onClick={toggleTheme}><FontAwesomeIcon icon={isDark ? faSun : faMoon} /></button>
            </div>
        </header>
    )
}
export default Header
