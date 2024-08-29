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
                <p> Time zone: {getLocalTimeZone(rowOrders[0].orderDate)}</p>

                {rowOrders.map((order) => <>
                    <table id="client-order" key={order._id} className="dash">
                        <tr><h4>Customer name:  {rowOrders[0].customerId.fullname} </h4></tr>
                        <tr className="p-order" ><p>Order #{order._id}</p> </tr>
                        <tr className="p-order" ><p>Order date: {getLocalDateTime(order.orderDate)} </p></tr>
                        <tr className="order-container">
                            {/* <p>SN</p> */}
                            <th> Item name</th>  <th>Qty</th> <th>Price</th> <th>Total price</th>
                        </tr>
                        {order.items.map((item) => (
                            <tr className="order-container" key={item._id}>
                                {/* <p>{getSn()} </p> */}
                                <td>{item.id.name}</td>  <td>{item.quantity}</td>
                                <td>RWF {item.id.price}</td>
                                <td>RWF {item.id.price * item.quantity}</td>
                            </tr>
                        ))}
                        <tr className="p-order" > <p>Total Amount: {order.totalAmount} </p></tr>
                        <tr className="p-order" ><p>Order status: {order.status} </p></tr>
                        <tr className="p-order" ><p>Order Delivery adress: {order.deliveryAddress} </p></tr>

                    </table>
                    <br /><br /><br /><br />

                </>)
                }
            </>)
        } else {
            setformattedOrders(<p> No order to diplay</p>)

        }
    }
    useEffect(() => {
        formatOrders()
    }, [rowOrders])

    const getLocalDateTime = (DBDate) => {
        const date = new Date(DBDate);
        const localDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
        console.log(localDate);

        return localDate
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
            <div id="orderDashbord">
                {formattedOrders}

            </div>
            <Footer></Footer>
        </>
    )

}
export default Orders 