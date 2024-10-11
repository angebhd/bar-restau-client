import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function SocialNetwork() {
    return (
        <div className="socialNetwork">
            <p><a href="/"> <FontAwesomeIcon icon={faPhoneAlt} /></a> </p>
            <p><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></p>
            <p><a href="/"><FontAwesomeIcon icon={faFacebookF} /></a></p>
            <p><a href="/"> <FontAwesomeIcon icon={faTwitter} /></a></p>
            <p><a href="/"><FontAwesomeIcon icon={faWhatsapp} /></a></p>
        </div>

    )

}
export default SocialNetwork