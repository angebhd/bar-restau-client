import Footer from "./footer";
import Hgallery from "./home/hgallery";
import Hmenu from "./home/hmenu";
import Hreservation from "./home/hreservation";
import NavItems from "./navitems";

function Home (){
    return(
        <div>
            <div>
                <h1>Bar-restau</h1>
                <NavItems></NavItems>
            </div>
            <div>
                <p>The best flavour of the country</p>
            </div>
            <Hmenu></Hmenu>
            <Hreservation/>
            <Hgallery/>
            <Footer/>
        </div>
    )
}

export default Home ;