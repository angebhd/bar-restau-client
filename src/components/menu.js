import DrinkList from "./items/drink"
import Header from "./header"
import MealList from "./items/meals"
import Footer from "./footer"

function Menu(){
    return(
        <>
            <Header/>
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