import SocialNetwork from "./contact/socialnetwork"
import NavItems from "./navitems"

import "../styles/Footer.css";

function Footer (){
    return(
        <footer>
            <SocialNetwork/>
            <NavItems></NavItems>
            <p className="copy">Copyright &copy; <a href="https://github.com/angebhd">Ange BUHENDWA</a></p>
        </footer>
    )

}

export default Footer