import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/navbar';
import Portfolio from './pages/portfolio.jsx/portfolio';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Footer from './layout/footer';




const App = () => {
 
 
  return (
    <div>
      <Navbar/>
     <Routes>
      
<Route path='/' element={<Portfolio />} />
<Route path='/about' element={<About />} />
<Route path='/projects' element={<Projects />} />
<Route path='/contact' element={<Contact />} />

</Routes>

<Footer></Footer>
     
    </div>
  );
};

export default App;
 