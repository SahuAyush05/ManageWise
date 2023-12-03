import './App.css';
import Home from './Routes/Home';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import './Scroll.js'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
