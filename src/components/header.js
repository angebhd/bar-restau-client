import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <h1>Bar-restau</h1>
            <nav>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/menu">Menu</Link></p>
                <p><Link to="/reservation">Reservation</Link></p>
                <p><Link to="/gallery">Gallery</Link></p>
                <p><Link to="/about">About</Link></p>
            </nav>
            <div>
  <p> Log out</p>
            </div>

        </header>
    )
}
export default Header
