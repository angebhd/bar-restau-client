import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/menu.css"


function Menu() {
    return (
        <>
            <Header></Header>
            <div id='hgallery'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/10d80963172037.5aa8241d03552.jpg" alt="Comfort food"></img>
                <div><p>Some text</p></div>
                <div><p>Some other text</p></div>
                <img src="https://static.vecteezy.com/system/resources/previews/029/510/064/large_2x/cocktails-assortment-served-on-dark-background-classic-drink-menu-concept-front-view-ai-generated-photo.jpg" alt="Cocktails"></img>
                <img src="https://static.vecteezy.com/system/resources/previews/033/738/389/non_2x/food-and-drink-on-a-dark-background-ai-generated-free-photo.jpg" alt="Restaurant"></img>
                <div><p>Some other text</p></div>
            </div>
            <h1>Menu</h1>

            <div id="menu">
                <div className="food type-container" >
                    <h3>Food</h3>
                    <div className="Meat">
                        <h4> Meat </h4>
                        <ul>
                            <li> Beef </li>
                            <li> Chicken </li>
                            <li> Goat </li>
                            <li> Pig </li>
                        </ul>
                    </div>
                    <div className="fish">
                        <h4> Fish </h4>
                        <ul>
                            <li> Tilapia </li>
                            <li> Tuna </li>
                            <li> Salmon </li>
                            <li> Cod </li>
                            <li> Sardines </li>
                        </ul>
                    </div>
                    <div className="fries">
                        <h4> Fries </h4>
                        <ul>
                            <li> Standard cut fries </li>
                            <li> Waffle fries </li>
                            <li> Sweet potato fries </li>
                            <li> Belgian fries </li>
                            <li> Pommes soufflés </li>
                        </ul>
                    </div>

                    <div className="italian-food">
                        <h4> Italian food </h4>
                        <ul>
                            <li> Pizza  </li>
                            <li> Pasta </li>
                            <li> Arancini </li>
                            <li> Focaccia </li>
                            <li> Lasagna </li>
                        </ul>
                    </div>

                </div>
                <div className="drink  type-container">
                    <h3>Drinks</h3>
                    <div className="soft">
                        <h4> Soft drink </h4>
                        <ul>
                            <li> Sprite </li>
                            <li> Fanta </li>
                            <li> Pepsi </li>
                            <li> Coca </li>
                        </ul>
                    </div>
                    <div className="natural-juice">
                        <h4> Natural juice </h4>
                        <ul>
                            <li> Appe </li>
                            <li> Mango </li>
                            <li> Orange </li>
                            <li> Citronade </li>
                            <li> Macedoine </li>
                        </ul>
                    </div>
                    <div className="beer">
                        <h4> Beers </h4>
                        <ul>
                            <li> Castle beer </li>
                            <li> Heinekein </li>
                            <li> Primus </li>
                            <li> Turbo </li>
                            <li> Skol </li>
                        </ul>
                    </div>

                    <div className="wine">
                        <h4> Wine </h4>
                        <ul>
                            <li> Cellar  </li>
                            <li> Drostdy </li>
                            <li> Four cousins </li>
                            <li> Mouton Cadet </li>
                        </ul>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Menu