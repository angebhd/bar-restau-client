import { Link } from "react-router-dom"

function Header() {
    function showAccountMenu() {
        let divMenu = document.getElementById("account-menu");
        console.log(divMenu);
        if (divMenu.className === "") {
            divMenu.className = "show-account-menu";
        } else {
            divMenu.className = "";
        }
    }
    function showNavBar() {
        let headerNav = document.getElementById("header-nav");
        console.log(headerNav);
        if (headerNav.className === "") {
            headerNav.className = "show-header-nav";
        } else {
            headerNav.className = "";
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
                <p id="account-setting" onClick={showAccountMenu}> <i className="fas fa-user"></i></p>
                <p id="nav-button" onClick={showNavBar}> <i className="fas fa-bars"></i></p>

            </div>
            <div id="account-menu" >
                <p>My orders</p>
                <p>My reservations</p>
                <p>Log out</p>
            </div>

        </header>
    )
}
export default Header
