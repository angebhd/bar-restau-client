import "../styles/reservation.css"
import Footer from "../components/footer";
import Header from "../components/header";
import { useState, useEffect } from "react";
import { orders } from "../services/orders";


function Orders() {
    const [rowOrders, setOrders] = useState([])
    const [formattedOrders, setformattedOrders] = useState();


    useEffect(() => {
        const getData = async () => {
            const data = await orders.get()
            setOrders(data)
        }
        getData();
    }, [])

    const formatOrders = () => {
        if (rowOrders.length > 0) {
            setformattedOrders(<>
                <h2> {rowOrders[0].customerId.fullname} </h2>
                {rowOrders.map((order) => <>
                    <div id="client-order" key={order._id}>
                        <p className="p-order" >Order #{order._id} </p>
                        <p className="p-order" >Order date: {order.orderDate} </p>
                        <div className="order-container">
                            {/* <p>SN</p> */}
                            <p> Item name</p>  <p>Qty</p> <p>Price</p> <p>Total price</p>
                        </div>
                        <hr />
                        {order.items.map((item) => (
                            <div className="order-container" key={item._id}>
                                {/* <p>{getSn()} </p> */}
                                <p>{item.id.name}</p>  <p>{item.quantity}</p>
                                <p>RWF {item.id.price}</p>
                                <p>RWF {item.id.price * item.quantity}</p>
                            </div>
                        ))}
                        <p className="p-order" >Total Amount: {order.totalAmount} </p>
                        <p className="p-order" >Order status: {order.status} </p>
                        <p className="p-order" >Order Delivery adress: {order.deliveryAddress} </p>

                    </div>
                    <br /><br /><br /><br />

                </>)
                }
                {/* <p> Time zone: {getLocalTimeZone(rowOrders[0].orderDate)}</p> */}
            </>)
        } else {
            setformattedOrders(<p> No order to diplay</p>)

        }
    }
    useEffect(() => {
        var sn = 0
        const getSn = () => { sn = sn + 1; return sn; }
        formatOrders()
    }, [rowOrders])

    const getLocalTime = (DBDate) => {
        const localDate = new Date(DBDate);
        const localHour = localDate.getHours().toString().padStart(2, '0')
        const localMinute = localDate.getMinutes().toString().padStart(2, '0')
        return `${localHour} : ${localMinute}`
    }
    const getLocalTimeZone = (DBDate) => {
        const localDate = new Date(DBDate);
        const timezoneOffset = localDate.toTimeString().split(' ')[1]; // GMT+0200
        const timezoneName = localDate.toString().match(/\(([^)]+)\)/)[1];
        return `${timezoneOffset} (${timezoneName})`
    }



    return (
        <>
            <Header></Header>
            <h1>My orders</h1>
            {formattedOrders}
            <Footer></Footer>
        </>
    )

}
export default Orders 