import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../services/userData";
import { userAuth } from "../services/userAuth";

import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

function Header( { isDark, toggleTheme } ) {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const accountMenuRef = useRef(null);

 

    const toggleAccountMenu = () => setIsAccountMenuOpen(prev => !prev);
    const toggleNavBar = () => setIsNavOpen(prev => !prev);

    const getUser = async () => {
        try {
            const resp = await userData.getUsername();
            if (resp.status === 200 && !resp.data.error) {
                setUsername(<>{resp.data} <FontAwesomeIcon icon={faUser} onClick={toggleAccountMenu} /></>);
                localStorage.setItem('username', resp.data);
            } else {
                setUsername(<Link to="/login">Login</Link>);
            }
        } catch (error) {
            setUsername(<Link to="/login">Login</Link>);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const logout = () => {
        const op = userAuth.logout();
        if (op) {
            document.cookie = 'token=; Max-Age=-99999999;';
            navigate('/login');
        }
    };

    // Close account menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
                setIsAccountMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [accountMenuRef]);

    return (
        <header className="main">
            <div className="head-1">
                <h1>Bar-restau</h1>
                <div className="header-right">
                    <button onClick={toggleTheme}><FontAwesomeIcon icon={isDark ? faSun : faMoon} /></button>
                </div>



            </div>
            <div className="head-1 head-2">

                <nav id="header-nav" className={isNavOpen ? "show-header-nav" : ""}>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/menu">Menu</Link></p>
                    <p><Link to="/order">Order</Link></p>
                    <p><Link to="/reservation">Reservation</Link></p>
                    <p><Link to="/gallery">Gallery</Link></p>
                    <p><Link to="/about">About</Link></p>
                </nav>

                <div className="header-button">
                    <p id="nav-button" onClick={toggleNavBar}><FontAwesomeIcon icon={faBars} /></p>
                    <p id="account-setting">{username}</p>

                </div>
            </div>





            {isAccountMenuOpen && (
                <div id="account-menu" ref={accountMenuRef} className="show-account-menu">
                    <p><Link to="/orders">Orders</Link></p>
                    <p><Link to="/reservations">Reservations</Link></p>
                    <p onClick={logout} className="logout">Log out</p>
                </div>
            )}

        </header>
    );
}

export default Header;
