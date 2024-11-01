import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { orders } from "../services/orders";

import "../styles/Orders.css"


function Orders({ isDark, toggleTheme }) {
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
                    <article key={order._id} className="order-card">
                    <table id="client-order" className="dash">
                        <h4>Customer name:  {rowOrders[0].customerId.fullname} </h4>
                        <p className="p-order">Order #{order._id}</p>
                        <p className="p-order">Order date: {getLocalDateTime(order.orderDate)} </p>

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
                        <p className="p-order">Total Amount: RWF {order.totalAmount} </p>
                        <p className="p-order">Order status: {order.status} </p>
                        <p className="p-order">Order Delivery adress: {order.deliveryAddress} </p>

                    </table>
                    </article>

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
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <h1 id="orderDashbord">My orders</h1>
            <div id="orderDashbord">
                {formattedOrders}

            </div>
            <Footer></Footer>
        </>
    )

}
export default Orders 