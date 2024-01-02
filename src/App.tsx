import React from 'react';
import './App.css';
import './styles/style.css';
import Navbar from './Components/Navigation';
import Footer from './Components/Footer';
import Login from './Pages/Logins';
import Landing from './Pages/Landing';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup';
import PassLogin from './Pages/PassLogin';
import About from './Pages/About';
import Routess from './Pages/Routess';
import Pickup from './Pages/Pickup';
import ScrollToTop from './Scrolltop';
import { useAppSelector } from './redux/hooks/Hooks';
import Checkout from './Components/payment/checkout';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <ScrollToTop>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='verify' element={<PassLogin />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/checkout' element={<Checkout />} />
        {/* <Route path='/route' element={<Routess />} /> */}
        <Route path='/route/:id1?/:id2?/:id3?/:id4?' element={<Routess />} />
        <Route path='/pickup' element={<Pickup />} />
      </Routes>
      </ScrollToTop>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
