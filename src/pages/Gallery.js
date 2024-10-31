import Footer from "../components/Footer"
import Header from "../components/Header"

import "../styles/Gallery.css";

function Gallery({ isDark, toggleTheme }) {
    return (
        <>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <h1 className="gallery">Gallery</h1>
            <div className="gallery">
                <p><img src='https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Bar"></img></p>
                <p><img src='https://c2.peakpx.com/wallpaper/926/640/64/4k-brick-wall-restaurant-table-wallpaper-preview.jpg' alt="Resaurant"></img></p>
                <p><img src='https://c0.wallpaperflare.com/preview/4/553/242/tucker-united-states-coco-cabana-restaurant-coco-cabana.jpg' alt="Menu"></img></p>
            </div>
            <Footer></Footer>
        </>

    )
}
export default Gallery