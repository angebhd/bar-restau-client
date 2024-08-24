import "../styles/reservation.css"
import Footer from "../components/footer";
import Header from "../components/header";
function Order() {

    return (
        <>
            <Header></Header>
            <div id='hgallery'>
                <img src="https://framerusercontent.com/images/iP0BsyYh0IYgAchUCKTAQqclxyI.webp" alt="Food delivery "></img>
                <div><p>Some text</p></div>
                <div><p>Some other text</p></div>
                <img src="https://d2w1ef2ao9g8r9.cloudfront.net/images/_sameSizeHero/Best-Food-Delivery-Apps_2022-07-12-002853_qeli.jpg" alt="Table for four"></img>
            </div>

            <form className="reservation" >
                <h1 className="h1-reservation">Order</h1>
                <p className="p-order" >Your order: </p>
                <div id="client-order">
                    <div className="order-container"><p>Item one</p> <i className="fa fa-trash"></i></div>
                    <div className="order-container"><p>Item two</p> <i className="fa fa-trash"></i></div>
                    <div className="order-container"><p>Item three</p> <i className="fa fa-trash"></i></div>

                </div>
                <br />
                <hr />
                <p className="p-order2">Total: <em> XXXXX $</em></p>


                <button type="submit">Order</button>
            </form>
            <Footer></Footer>
        </>

    )
}

export default Order 