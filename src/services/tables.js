import axios from "axios";
const apiURL = "http://localhost:3001"

const getTables = async () => {
    return await axios.get(`${apiURL}/api/getTables`);
}

const tables = {
    getTables: getTables,
}

export { tables }