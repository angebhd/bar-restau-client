import Hmenu from "./hmenu";
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
        </div>
    )
}

export default Home ;