import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Header from './components/header'
import Gallery from './pages/gallery';
import Reservation from './pages/reservation';

function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/" exact element={<Home/>} />

          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/gallery" element={<Gallery/>} />

        </Routes>
      </div>
  );
}

export default App;
