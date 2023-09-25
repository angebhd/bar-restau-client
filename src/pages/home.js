import Hgallery from "../components/home/hgallery";
import Hmenu from "../components/home/hmenu";
import Hreservation from "../components/home/hreservation";

function Home (){
    return(
        <div>
            <div>
                <p>The best flavour of the country</p>
            </div>
            <Hmenu></Hmenu>
            <Hreservation/>
            <Hgallery/>
        </div>
    )
}

export default Home ;