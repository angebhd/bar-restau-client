import SocialNetwork from "../components/contact/socialnetwork"
import Header from "../components/header"
import Footer from "../components/footer"
function About() {
    return (
        <>
            <Header></Header>
            <h1 className="about">About</h1>
            <p className="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere iure facilis, pariatur quod neque doloremque obcaecati hic vitae quasi voluptas harum consectetur! Minus, illum vel. Eaque molestias exercitationem ullam dolores excepturi, optio, minima fugiat quisquam vel earum numquam minus ratione, ab expedita porro consequatur explicabo animi doloremque nemo perspiciatis nesciunt modi voluptatibus. Saepe quia laborum error sit, exercitationem nesciunt obcaecati molestias pariatur ad esse perferendis vel aliquid quas aliquam. Obcaecati, dicta molestias dolorem aut laudantium omnis adipisci natus eos fugit eius suscipit optio qui repellat accusantium dolore minima veritatis aperiam soluta expedita quasi sit? Officiis odio rem veritatis consequuntur?
            </p>
            <div>
                <h1 className="about">Contact</h1>
                <p className="about"> <i class='fas fa-map-marker'></i> Venue 123 street Apple, Fruit City, Vegetable</p>
                <div className="about"><SocialNetwork /></div>
            </div>
            <Footer></Footer>
        </>

    )
}

export default About