
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect, useCallback } from "react";
import { menu } from "../services/menu";
import { orders } from "../services/orders";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';


import "../styles/Order.css";



function Order({ isDark, toggleTheme }) {
    const [addDiv, setAddDiv] = useState(null);
    const [subElement, setSubElement] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [displayItems, setDisplayItems] = useState();
    const [totalAmount, setTotalAmount] = useState(0)
    const navigate = useNavigate();

    //getting list of meny by subtype and all 
    const [allFoodBySubtype, setAllFoodBySubtype] = useState(null);
    const [allDrinkBySubtype, setAllDrinkBySubtype] = useState(null);
    const [allMenu, setAllMenu] = useState(null);

    const gettingMenu = async () => {
        const foodByType = await menu.getSorted.foodBySubType();
        const drinkByType = await menu.getSorted.drinkBySubType();
        const allmenu = await menu.getAll()
        setAllFoodBySubtype(foodByType);
        setAllDrinkBySubtype(drinkByType);
        setAllMenu(allmenu.data);
    }
    useEffect(() => { // to call it once
        gettingMenu()
    }, [])
    const showSubItems = async (e) => {
        const type = e.target.value;
        if (type === 'food') {
            getSubSelect(type);

        } else if (type === 'drink') {
            getSubSelect(type);
        }
    }
    const getSubSelect = async (type) => {
        if (type === 'drink') {
            // const list = await menu.getSorted.drinkBySubType();
            setSubElement(
                <select onChange={addItem}>
                    <option > Choose an element</option>
                    {
                        allDrinkBySubtype.map((item) => {
                            return (
                                <optgroup key={item.name} label={item.name}>
                                    {
                                        item.element.map((it) => {
                                            return (<option key={it._id} value={it._id}>{it.name} {it.price}</option>);
                                        })
                                    }
                                </optgroup>)
                        })
                    }
                </select>
            )
        } else if (type === 'food') {
            // const list = await menu.getSorted.foodBySubType();
            setSubElement(
                <select onChange={addItem}>
                    <option > Choose an element</option>
                    {
                        allFoodBySubtype.map((item) => {
                            return (
                                <optgroup key={item.name} label={item.name}>
                                    {
                                        item.element.map((it) => {
                                            return (<option key={it._id} value={it._id}>{it.name} {it.price}</option>);
                                        })
                                    }
                                </optgroup>)
                        })
                    }
                </select>
            )

        }
    }
    const addItem = (e) => {
        const _id = e.target.value
        const getItem = (id) => { return allMenu.find(item => item._id === id); }
        const item = getItem(_id)
        item.qty = 1;
        setOrderItems(prevItems => [...prevItems, item]);
        setTimeout(setAddDiv(null), 1000);
        setTimeout(setSubElement(null), 800)

    }

    const addQty = useCallback(async (id) => {

        const getItem = async (dd) => { return orderItems.find(item => item._id === dd); };
        const modifiedItem = await getItem(id);

        modifiedItem.qty = modifiedItem.qty + 1;

        const newOrders = orderItems.map(item =>
            item._id === id ? { ...item, ...modifiedItem } : item)

        setOrderItems(newOrders);

    }, [orderItems])

    const reduceQty = useCallback((qty, id) => {
        if (qty <= 1) {
            alert("Cannot reduce the number, delete it intead")
        } else {
            const getitem = (dd) => { return orderItems.find(item => item._id === dd); };
            const ModifiedItem = getitem(id);
            ModifiedItem.qty = ModifiedItem.qty - 1;

            const newOrders = orderItems.map(item =>
                item._id === id ? { ...item, ...ModifiedItem } : item)

            setOrderItems(newOrders);

        }
    }, [orderItems])

    const deleteItem = useCallback(async (id) => {

        const newOrders = orderItems.filter(item => item._id !== id)
        setOrderItems(newOrders);

    }, [orderItems])

    const addMenu = async () => {
        setAddDiv(<div>
            <select onChange={showSubItems} id="addTypeSelect">
                <option value=""> Choose an option</option>
                <option value="food"> Food</option>
                <option value="drink">Drink</option>
            </select>
        </div>)

    }


    useEffect(() => {
        if (orderItems.length > 0) {
            const getTotalAmount = () => {
                var total = 0
                orderItems.forEach((orderItem) => {
                    total += (orderItem.price * orderItem.qty)
                })
                return total;
            }
            setTotalAmount(getTotalAmount())
            var sn = 0
            const getSn = () => { sn = sn + 1; return sn; }

            setDisplayItems(<>
                <p className="p-order" >Your order: </p>
                <table id="client-order">
                    <tr className="header">
                        <th>SN</th>
                        <th> Item name</th>  <th>Qty</th> <th>+ / -</th> <th>Price</th> <th>Total price</th> <th><i>Delete</i></th>
                    </tr>
                    {orderItems.map((item) => (
                        <tr className="order-container" key={item._id}>
                            <td className="sn">{getSn()} </td>
                            <td>{item.name}</td>  <td>{item.qty}</td>
                            <td>
                                <button type="button" onClick={() => addQty(item._id)} className="add"><FontAwesomeIcon icon={faPlus} /></button>
                                <button type="button" onClick={() => reduceQty(item.qty, item._id)} className="reduce"><FontAwesomeIcon icon={faMinus} /></button>
                            </td>
                            <td>RWF {item.price}</td>
                            <td>RWF {item.price * item.qty}</td>
                            <td><button type="button" onClick={() => deleteItem(item._id)} className="delete"><FontAwesomeIcon icon={faTrash} /> </button>                </td>
                        </tr>
                    ))}
                </table>
                <hr />
            </>
            );
        } else {
            setDisplayItems(null);
            setTotalAmount(0)
        }
    }, [orderItems, addQty, reduceQty, deleteItem]);
    const submitOrder = async (e) => {
        e.preventDefault();
        if(orderItems.length <=0) return;
        const items = [];
        orderItems.forEach(item => {
            items.push({ id: item._id, quantity: item.qty });
        })
        const order = { items: items, totalAmount: totalAmount, address: e.target.address.value }
        try {
            const sendOrder = await orders.make(order);
            if (sendOrder.status === 200 && !sendOrder.data.error) {
                alert(sendOrder.data);

                navigate('/orders');

            } else if (sendOrder.data.error) {
                alert(sendOrder.data.message)
            } else {
                throw new Error("");
            }


        } catch (error) {
            alert('Something went wrong')

        }
    }

    return (
        <>
            <Header isDark={isDark} toggleTheme={toggleTheme}/>

            <div id="customer-orders">
                <h1 className="h1-reservation">Order</h1>

                {displayItems}

                <div id="client-order-add">
                    <div className="addmenu" onClick={addMenu}> <p> Add items </p><FontAwesomeIcon icon={faPlus} /></div>
                    {addDiv}
                    {subElement}
                    <br />
                    <hr />
                    <p className="p-order2">Total: <em> RWF {totalAmount}</em></p>
                </div>
                <form className="reservation" onSubmit={submitOrder} >
                    <label htmlFor="address"> Type your address of delivery make your order:  </label>
                    <input name="address" required></input>
                    <button >ORDER</button>
                </form>
            </div>
            <div id='Ogallery'>
                <img src="https://framerusercontent.com/images/iP0BsyYh0IYgAchUCKTAQqclxyI.webp" alt="Food delivery "></img>
                <div><p>Some text</p></div>
                <div><p>Some other text</p></div>
                <img src="https://d2w1ef2ao9g8r9.cloudfront.net/images/_sameSizeHero/Best-Food-Delivery-Apps_2022-07-12-002853_qeli.jpg" alt="Table for four"></img>
            </div>
            <Footer></Footer>
        </>

    )
}

export default Order 