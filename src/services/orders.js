import axios from "axios";
const apiURL = "http://localhost:3001"


const makeOrder= async (order) => {
    return await axios.post(`${apiURL}/api/order`, order, { withCredentials: true })
}
const getOrder = async () => {
    try {
        const op = await axios.get(`${apiURL}/api/order`, { withCredentials: true })      
        if (op.data.error) {
            alert(op.data.message);
        } else {
            return op.data
        }

    } catch (error) {
        alert('Something went wrong')

    }

}

const orders = {
    make: makeOrder,
    get: getOrder,
}

export { orders }