import axios from "axios";
const apiURL = "http://localhost:3001"


const makeOrder= async (order) => {
    return await axios.post(`${apiURL}/api/order/make`, order, { withCredentials: true })
}

const orders = {
    make: makeOrder,
}

export { orders }