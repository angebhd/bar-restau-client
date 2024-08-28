import axios from "axios";
const apiURL = "http://localhost:3001"


const makereservations = async (reservation) => {
    return await axios.post(`${apiURL}/api/reservation`, reservation, { withCredentials: true })
}
const checkConflict = async (reservation) => {
    return await axios.post(`${apiURL}/api/reservation/checkConflicts`, reservation, { withCredentials: true })

}
const getReservations = async () => {
    try {
        const op = await axios.get(`${apiURL}/api/reservation`, { withCredentials: true })      
        if (op.data.error) {
            alert(op.data.message);
        } else {
            return op.data
        }

    } catch (error) {
        alert('Something went wrong')

    }

}
const reservations = {
    make: makereservations,
    checkConflict: checkConflict,
    get: getReservations,
}

export { reservations }