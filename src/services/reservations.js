import axios from "axios";
const apiURL = "http://localhost:3001"


const makereservations = async (reservation) => {
    return await axios.post(`${apiURL}/api/reservation/make`, reservation, { withCredentials: true })
}
const checkConflict = async (reservation) => {
    return await axios.post(`${apiURL}/api/reservation/checkConflicts`, reservation, { withCredentials: true })

}
const reservations = {
    make: makereservations,
    checkConflict: checkConflict,
}

export { reservations }