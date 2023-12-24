import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Header from './components/header'
import Gallery from './pages/gallery';
import Reservation from './pages/reservation';
import Footer from './components/footer';
import About from './pages/about';

function App() {
  return (
      <div>
        <Header/>

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/about" exact element={<About/>} />
        </Routes>

        <Footer/>
      </div>
  );
}

export default App;
