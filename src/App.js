import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './pages/Home'
import Menu from './pages/menu'
import Gallery from './pages/gallery';
import Reservation from './pages/reservation';
import About from './pages/about';
import Login from './pages/Login';
import Singnup from './pages/signup';
import Order from './pages/order';
import Orders from './pages/orders';
import Reservations from './pages/reservations';
import "./styles/index.css"

function App() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <div>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />


        <Route path='/login' element={<Login isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} />} />
        <Route path='/signup' element={<Singnup isDark={isDark} toggleTheme={()=>setIsDark(!isDark)}/>} />


        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />

        <Route path='/orders' element={<Orders />} />
        <Route path='/reservations' element={<Reservations />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
