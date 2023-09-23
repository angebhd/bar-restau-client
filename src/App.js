import Home from './pages/home'
import Menu from './pages/menu'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Gallery from './pages/gallery';

function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/gallery" element={<Gallery/>} />

        </Routes>
      </div>
  );
}

export default App;
