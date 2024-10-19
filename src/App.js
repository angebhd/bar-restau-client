import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Gallery from './pages/gallery';
import Reservation from './pages/reservation';
import About from './pages/about';
import Login from './pages/Login';
import Singnup from './pages/signup';
import Order from './pages/Order';
import Orders from './pages/orders';
import Reservations from './pages/reservations';
import "./styles/index.css"

function App() {

  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log(`Retrieved theme: ${savedTheme}`); // Add this line
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);
  console.log('Component rendered');
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div>

      <Routes>
        <Route path="/" exact element={<Home isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
        <Route path="/home" exact element={<Home isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />


        <Route path='/login' element={<Login isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
        <Route path='/signup' element={<Singnup isDark={isDark} toggleTheme={()=>setIsDark(!isDark)}/>} />


        <Route path="/menu" element={<Menu isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
        <Route path="/reservation" element={<Reservation isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
        <Route path="/order" element={<Order isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />

        <Route path='/orders' element={<Orders isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
        <Route path='/reservations' element={<Reservations isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />

        <Route path="/gallery" element={<Gallery isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
        <Route path="/about" exact element={<About isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
      </Routes>
    </div>
  );
}

export default App;
