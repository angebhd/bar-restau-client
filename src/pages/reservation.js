import { useState, useEffect } from "react";
import "../styles/reservation.css"
import Footer from "../components/footer";
import Header from "../components/header";
import { tables } from "../services/tables";
import { reservations } from "../services/reservations";

function Reservation() {
  const [allTables, setAllTables] = useState([]);
  const [reservationTable, setReservationTable] = useState(null);
  const [reservationDate, setReservationDate] = useState(null);
  const [reservationEndTime, setReservationEndTime] = useState(null);
  const getAllTables = async () => {
    try {
      const resp = await tables.getTables();
      setAllTables(resp.data);

    } catch (error) {
      alert('Somthing went wrong when fetching tables, refresh the page');
    }
  }
  useEffect(() => {
    getAllTables();

  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(reservationDate);
    
    const date = new Date(reservationDate);
    const reservationDateUTC = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    console.log(date.getTime()); // get the date to date
    // const r
      


    const reservation = { tableID: reservationTable, date: reservationDateUTC, endtime: reservationEndTime };
    console.log(reservation);
    
    // try {
    //   const resp = await reservations.makereservations(reservation);
    //   if (resp.status === 200) {
    //     alert(resp.data);
    //   } else {
    //     alert('Something went wrong with the reservation')
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     if (error.response.data) {
    //       alert(error.response.data)
    //     } else {
    //       alert("An error occurred.");
    //     }
    //   } else {
    //     alert("An error occurred.");
    //   }
    // }
  };

  return (
    <>
      <Header></Header>
      <div id='hgallery'>
        <img src="https://i.etsystatic.com/16086164/r/il/857dec/3350335768/il_fullxfull.3350335768_c6of.jpg" alt="Table for Ten"></img>
        <div><p>Some text</p></div>
        <div><p>Some other text</p></div>
        <img src="https://cdnimg.webstaurantstore.com/uploads/seo_category/2019/5/table-dining-sets.jpg" alt="Table for four"></img>
      </div>
      <form onSubmit={handleSubmit} className="reservation" >
        <h1 className="h1-reservation">Reservation</h1>
        <label htmlFor="table">Choose the type of table : </label>
        <select name="table" required onChange={(e) => { setReservationTable(e.target.value) }}>
          <option value="" disabled selected>Choose a table</option>
          {allTables.map(table => (
            <option key={table._id} value={table._id}>
              {table.name}
            </option>
          ))}
        </select>
        <label htmlFor="Date">Date and time: </label>
        <input name='time' type="datetime-local" required onChange={(e) => { setReservationDate(e.target.value) }}></input>
        <label htmlFor="time">Expected end time: </label>
        <input name='time' type="Time" min={"8:00"} max={"23:00"} required onChange={(e) => { setReservationEndTime(e.target.value) }}></input>

        <button type="submit">Reserve</button>
      </form>
      <Footer></Footer>
    </>

  )
}
export default Reservation 