import { Link } from "react-router-dom";

function NavItems (){
    return(
        <nav>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/menu">Menu</Link></p>
            <p><Link to="/reservation">Reservation</Link></p>
            <p><Link to="/gallery">Gallery</Link></p>
            <p><Link to="/contact">Contact</Link></p>
            <p><Link to="/about">About</Link></p>
        </nav>

    )
}

export default NavItems;