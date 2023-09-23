import DrinkList from "../components/items/drink"
import MealList from "../components/items/meals"
import Footer from "../components/footer"

function Menu(){
    return(
        <>
            <h1>Menu</h1>
            <div>
                <h2>Drinks</h2>
                <div>
                    <div>SearchBar</div>
                    <DrinkList/>
                </div>
                <h2>Meals</h2>
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