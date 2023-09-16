import Drinks from "../items/drink";
import Meals from "../items/meals";

function Hmenu (){
    return(
        <div className="menu">
            <h1>Menu</h1>
            <section>
                <h3>Meals</h3>
                <Meals/>
                <p>Others...</p>
            </section>
            <section>
                <h3>Drinks</h3>
                <Drinks/>
                <p>Others...</p>
            </section>
        </div>
    )
}


export default Hmenu;