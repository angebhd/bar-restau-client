import DrinkList from "../components/items/drink"
import MealList from "../components/items/meals"
import Footer from "../components/footer"

function Menu(){
    return(
        <>
            <h2>Menu</h2>
            <div>
                <h3>Drinks</h3>
                <div>
                    <div>SearchBar</div>
                    <DrinkList/>
                </div>
                <h3>Meals</h3>
                <div>
                    <div>SearchBar</div>
                    <MealList/>
                </div>
            </div>
            <Footer/>
        
        </>
    )
}

export default Menu