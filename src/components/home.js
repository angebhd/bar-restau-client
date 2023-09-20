import Footer from "./footer";
import Hgallery from "./home/hgallery";
import Hmenu from "./home/hmenu";
import Hreservation from "./home/hreservation";
import Header from "./header";

function Home (){
    return(
        <div>
            <Header/>
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