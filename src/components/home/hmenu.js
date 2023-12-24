import DrinkList from "../items/drink";
import MealList from "../items/meals";

function Hmenu (){
    return(
        <div className="menu" id="hmenu">
            <h1>Menu</h1>
            <section>
                <h2 className="hmenu">Meals</h2>
                <MealList/>
                <p>Others...</p>
            </section>
            <section>
                <h2 className="hmenu">Drinks</h2>
                <DrinkList/>
                <p>Others...</p>
            </section>
        </div>
    )
}


export default Hmenu;