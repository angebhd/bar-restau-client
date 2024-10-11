
import Footer from "../components/Footer";
import Header from "../components/Header";
import { reservations } from "../services/reservations";
import { useState, useEffect } from "react";


function Reservations() {
    const [reser, setReser] = useState([]);
    const [displayReservation, setDisplayReservation] = useState();

    useEffect(() => {
        const getData = async () => {
            const data = await reservations.get()
            setReser(data)
        }
        getData();
    }, [])
    const getdisplayReservation = () => {
        if (reser.length > 0) {
            setDisplayReservation(<>
                <h1> {reser[0].userID.fullname}' reservations</h1>
                <table className="dash">
                    <tr>
                        <th>Table</th>
                        <th>Date</th>
                        <th>Start time</th>
                        <th>End time</th>
                    </tr>
                    {reser.map((res) => {
                        return <tr key={res._id}>
                            <td>{res.tableID.name} </td>
                            <td>{res.date}</td>
                            <td>{getLocalTime(res.startTime)}</td>
                            <td>{getLocalTime(res.endTime)}</td>
                        </tr>
                    })}
                </table>
                <p> Time zone: {getLocalTimeZone(reser[0].startTime)}</p>
            </>)
        } else {
            setDisplayReservation(<p> No order to diplay</p>)

        }
    }
    useEffect(() => {
        getdisplayReservation()
    }, [reser])

    const getLocalTime = (DBDate) => {
        const localDate = new Date(DBDate);
        const localHour = localDate.getHours().toString().padStart(2, '0')
        const localMinute = localDate.getMinutes().toString().padStart(2, '0')
        return `${localHour} : ${localMinute}`
    }
    const getLocalTimeZone = (DBDate) => {
        const localDate = new Date(DBDate);
        const timezoneOffset = localDate.toTimeString().split(' ')[1]; // GMT+0200
        const timezoneName = localDate.toString().match(/\(([^)]+)\)/)[1];
        return `${timezoneOffset} (${timezoneName})`
    }
    return (
        <>
            <Header></Header>
            <div id="reservations">
                {displayReservation}
            </div>
            <div id="reservationFooter">
                <Footer></Footer>
            </div>
        </>
    )

}
export default Reservations;