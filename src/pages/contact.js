import SocialNetwork from "../components/contact/socialnetwork"
import "../styles/contact.css"

function Contact () {
    return(
        <>
        <h1 className="about">Contact</h1>
        <p className="about"> <i class='fas fa-map-marker'></i> Venue 123 street Apple, Fruit City, Vegetable</p>
        <div className="about"><SocialNetwork/></div>
        </>
    )
}

export default Contact