import { useState } from "react";
import "../styles/reservation.css"
import Footer from "../components/footer";
import Header from "../components/header";
function Reservation() {

  const [formData, setFormData] = useState({
    name: '',
    table: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/submit-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Data sent successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error sending data');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network error', error);
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
        <select name="table" value={formData.table} onChange={handleChange} required>
          <option value={1}>Table for one</option>
          <option value={2}>Table for two</option>
          <option value={3}>Table for three</option>
          <option value={4}>Table for four</option>
          <option value={8}>Table for eight</option>
          <option value={10}>Table for ten</option>
          <option value={99}> Special</option>
        </select>

        <label htmlFor="time">Date: </label>
        <input name='time' type="date" value={formData.time} onChange={handleChange} required></input>
        <label htmlFor="time">Time: </label>
        <input name='time' type="Time" value={formData.time} onChange={handleChange} min={"8:00"} max={"23:00"} required></input>

        <button type="submit">Reserve</button>
      </form>
      <Footer></Footer>
    </>

  )
}

export default Reservation 