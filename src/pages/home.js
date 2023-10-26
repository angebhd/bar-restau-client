import Hgallery from "../components/home/hgallery";
import Hmenu from "../components/home/hmenu";
import Hreservation from "../components/home/hreservation";
import "../styles/home.css"

function Home (){
    return(
        <div>
            <div className="best-flavor-container">
                <p className="best-flavour">The best flavour of the country</p>
            </div>
            <Hgallery/>
            <Hmenu></Hmenu>
            <Hreservation/>
        </div>
    )
}

export default Home ;