import logo from './logo.svg';
import './App.css';
import Navbar from './website/header/Navbar.jsx';
import Home from './website/home/Home.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './website/footer/Footer.jsx';

function App() {
  return (
   <>
        
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
          <Footer/>
        </Router>
   </>
  );
}

export default App;
