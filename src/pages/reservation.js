import { useState } from "react";
import "../styles/reservation.css"
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

    return(
        <>
            <h2>Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="table">Choose the type of table : </label>
                <select name="table" value={formData.table} onChange={handleChange} required>
                    <option value={1}>Table for one</option>
                    <option value={2}>Table for two</option>
                    <option value={4}>Table for four</option>
                    <option value={8}>Table for eight</option>
                </select>
    
                <br></br>
                <label htmlFor="time">Date and time : </label>
                <input name='time' type="datetime-local" value={formData.time} onChange={handleChange} required></input>
                <br></br>
                <label htmlFor="name">Name : </label>
                <input placeholder="Your name" name="name" value={formData.name} onChange={handleChange} required></input>
                <button type="submit"><p>Reserve</p></button>
            </form>
        </>

    )
}

export default Reservation 