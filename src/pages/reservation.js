import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { tables } from "../services/tables";
import { reservations } from "../services/reservations";

function Reservation() {
  const [allTables, setAllTables] = useState([]);
  const [reservationTable, setReservationTable] = useState(null);
  const [reservationDate, setReservationDate] = useState(null);
  const [reservationEndTime, setReservationEndTime] = useState(null);
  const [reservationConflict, setReservationConflict] = useState(null);
  const navigate = useNavigate()
  const getAllTables = async () => {
    try {
      const resp = await tables.getTables();
      setAllTables(resp.data);
    } catch (error) {
      alert('Somthing went wrong when fetching tables, refresh the page');
    }
  }
  const checkConflicts = async ({ table, date, startTime, endTime }) => {
    try {
      const resp = await reservations.checkConflict({ table, date, startTime, endTime });
      return resp;
    } catch (error) {
      alert('Unable to check reservations conflict')
    }
  }
  useEffect(() => {
    getAllTables();
  }, []);
  const getLocalTime = (DBDate) => {
    const localDate = new Date(DBDate);
    const localHour = localDate.getHours().toString().padStart(2, '0')
    const localMinute = localDate.getMinutes().toString().padStart(2, '0')
    return `${localHour} : ${localMinute}`
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = new Date(reservationDate);
    const reservationDateUTC = new Date(date.getTime()).toISOString();


    const getUTCEndTime = (endTime, startDate) => {
      const [endHour, endMinute] = endTime.split(':').map(Number);
      const endDate = new Date(startDate.setHours(endHour, endMinute))
      return new Date(endDate.getTime()).toISOString();
    }
    const reservationEndTimeUTC = getUTCEndTime(reservationEndTime, date)
    const checkConflict = await checkConflicts({ table: reservationTable, date: date.toISOString().split('T')[0], startTime: reservationDateUTC, endTime: reservationEndTimeUTC });
    if (checkConflict.data.conflict) {
      setReservationConflict(<div> <h4> {checkConflict.data.message}</h4> <p>The table is reserved from <strong>{getLocalTime(checkConflict.data.start)}</strong> to <strong>{getLocalTime(checkConflict.data.end)}</strong></p></div>);
      return
    } else {
      setReservationConflict(null);
    }

    const reservation = { tableID: reservationTable, date: date.toISOString().split('T')[0], startTime: reservationDateUTC, endTime: getUTCEndTime(reservationEndTime, date) };
    //////////
    try {
      const resp = await reservations.make(reservation);
      if (resp.status === 200 && !resp.data.error) {
        alert(resp.data);
        navigate('/reservations')
        
      } else if (resp.data.error) {
        alert(resp.data.message);
      }
      else {
        alert('Something went wrong with the reservation')
      }
    } catch (error) {

      alert("An error occurred.");

    }
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
        <select name="table" required onChange={(e) => { setReservationTable(e.target.value); }}>
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
        <input name='time' type="Time" min={"8:00"} max={"23:45"} required onChange={(e) => { setReservationEndTime(e.target.value) }}></input>
        {reservationConflict}
        <button type="submit">Reserve</button>
      </form>
      <br/>
      <Footer></Footer>
    </>

  )
}
export default Reservation 