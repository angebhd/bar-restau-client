import axios from "axios";
const apiURL = "http://localhost:3001"


const makereservations = async (reservation) => {
    return await axios.post(`${apiURL}/api/makeBooking`, reservation, { withCredentials: true })

}
const reservations = {
    makereservations: makereservations,

}

export { reservations }