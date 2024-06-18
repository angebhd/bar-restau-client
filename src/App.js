import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Gallery from './pages/gallery';
import Reservation from './pages/reservation';
import About from './pages/about';
import Login from './pages/login';
import Singnin from './pages/signin';
import Order from './pages/order';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" exact element={<Home />} />


        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Singnin />} />


        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
