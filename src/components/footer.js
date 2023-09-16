import SocialNetwork from "./contact/socialnetwork"
import NavItems from "./navitems"

function Footer (){
    return(
        <footer>
            <SocialNetwork/>
            <NavItems></NavItems>
            <p>Copyright &copy; <a href="https://github.com/angebhd">Ange BUHENDWA</a></p>
        </footer>
    )

}

export default Footer