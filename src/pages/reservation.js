function Reservation() {
    return(
        <>
            <h2>Reservation</h2>
            <form method="post" action="">
                <span>Choose the type of table : </span>
                <select name="table">
                    <option value={1}>Table for one</option>
                    <option value={2}>Table for two</option>
                    <option value={4}>Table for four</option>
                    <option value={8}>Table for eight</option>
                </select>
    
                <br></br>
                <span>Time : </span>
                <input name='time' type="time"></input>
                <br></br>
                <span>Name : </span>
                <input placeholder="Ange BHD" name="name"></input>
                <input type="submit"></input>
            </form>
        </>

    )
}

export default Reservation 