import Footer from "../components/footer";
import Header from "../components/header";

import DrinkList from "../components/items/drink";
import MealList from "../components/items/meals";
import TableList from "../components/items/tables";



function Home() {

    return (
        <>
            <Header></Header>

            <div id='hgallery'>
                <img src="https://c1.wallpaperflare.com/preview/260/821/271/bangkok-chairs-dining-photos.jpg" alt="Restaurant"></img>
                <div><p>Some text</p></div>
                <div><p>Some other text</p></div>
                <img src="https://c0.wallpaperflare.com/preview/565/228/846/japanese-japan-restaurant-culture.jpg" alt="Restaurant"></img>
            </div>
            <div className="menu" id="hmenu">
                <h1>MENU</h1>
                <section>
                    <h2 className="hmenu">Meals</h2>
                    <MealList></MealList>
                    <p>See all...</p>
                </section>
                <section>
                    <h2 className="hmenu">Drinks</h2>
                    <DrinkList></DrinkList>
                    <p>See all</p>
                </section>
                <h1>Tables</h1>
                <section>
                    <TableList />
                    
                </section>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Home;