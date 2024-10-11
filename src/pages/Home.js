import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import DrinkList from "../components/items/drink";
import MealList from "../components/items/meals";
import TableList from "../components/items/tables";

import "../styles/Home.css";


function Home() {

    return (
        <>
            <Header />
            <div className="home">
                <section id="hero" >
                    {/* <img src="https://c1.wallpaperflare.com/preview/260/821/271/bangkok-chairs-dining-photos.jpg" alt="Restaurant" /> */}
                    <div className="hero-text">
                        <h1>Welcome to Bar-restau</h1>
                        <p>Where great food meets great ambiance.</p>
                    </div>
                </section>

                <section id="menu">
                    <h1>Our Menu</h1>
                    <div className="menu-section">
                        <h2>Meals</h2>
                        <MealList />
                        <p><Link to="/menu">See all meals</Link></p>
                    </div>

                    <div className="menu-section">
                        <h2>Drinks</h2>
                        <DrinkList />
                        <p><Link to="/menu">See all drinks</Link></p>
                    </div>
                </section>

                <section id="tables">
                    <h1>Reserve a Table</h1>
                    <TableList />
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;