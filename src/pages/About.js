import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/About.css"
function About({ isDark, toggleTheme }) {
    return (
        <>
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <div className="about">
                <div id='hgallery'>
                    <img src="https://c1.wallpaperflare.com/preview/260/821/271/bangkok-chairs-dining-photos.jpg" alt="Restaurant"></img>
                    <div><p>Discover a cozy ambiance where every meal is crafted with passion.</p></div>
                    <div><p>Enjoy fine dining with an authentic touch.</p></div>
                    <img src="https://c0.wallpaperflare.com/preview/565/228/846/japanese-japan-restaurant-culture.jpg" alt="Restaurant"></img>
                </div>
                <h1 className="about">About</h1>
                <p className="about">
                    Welcome to bar-restau! Our passion for exceptional dining experiences drives us to serve delicious, high-quality dishes made from the finest ingredients. With a commitment to authenticity and warmth, we strive to make every visit a memorable one.
                </p>
                <p className="about">
                    Our talented chefs take pride in crafting a menu that blends traditional flavors with modern twists, providing a diverse selection that caters to all tastes. Whether you're joining us for a family meal, a romantic evening, or a special celebration, we are honored to be part of your experience.
                </p>
            </div>
            <Footer></Footer>
        </>

    )
}

export default About