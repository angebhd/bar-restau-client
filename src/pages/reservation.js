function Reservation() {
    return(
        <>
            <h2>Reservation</h2>
            <form>
                <span>Choose the type of table : </span>
                <select name="Table">
                    <option value={"one"}>Table for one</option>
                    <option value={"two"}>Table for two</option>
                    <option value={"four"}>Table for four</option>
                    <option value={"eigt"}>Table for eight</option>
                </select>
    
                <br></br>
                <span>Time : </span>
                <input type="time"></input>
                <br></br>
                <span>Name : </span>
                <input placeholder="Ange BHD"></input>
            </form>
        </>

    )
}

export default Reservation 