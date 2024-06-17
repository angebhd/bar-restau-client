import Footer from "../components/footer"
import Header from "../components/header"
import DrinkList from "../components/items/drink"
import MealList from "../components/items/meals"

function Menu() {
    return (
        <>
            <Header></Header>
            <h2>Menu</h2>
            <div>
                <h3>Drinks</h3>
                <div>
                    <div>
                        {/* <label for="search-menu"></label> */}
                        <input name='search-menu' type="search" placeholder="search..."></input>
                    </div>
                    <DrinkList />
                </div>
                <h3>Meals</h3>
                <div>
                    <div>SearchBar</div>
                    <MealList />
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Menu