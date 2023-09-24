import { Link } from "react-router-dom";

function NavItems (){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="#about">About</Link>
        </nav>

    )
}

export default NavItems;