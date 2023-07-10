import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Menu } from './components/pages/Menu';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Details } from './components/pages/Details';
import { useState } from 'react';


function App() {
  return (

    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Menu/:name' element={<Details/>}/>
        </Routes>
        <Footer/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
