import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Portafolio from './components/Portafolio';
import Herramientas from './components/Herramientas';
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import Cv from './components/Cv';

ReactDOM.render(
  // <BrowserRouter>
    <React.StrictMode>
          <App/>   
      {/* <Routes>
          <Route path='/nabvar' element={<Navbar/>}>
            <Route path='portafolio' element={<Portafolio/>}/>
            <Route path='herramientas' element={<Herramientas/>}/>
            <Route path='cv' element={<Cv/>}/>
            <Route path='contacto' element={<Contacto/>}/>
            <Route path="*" element={<Navigate replace to="/" />}/>
          </Route>
          
      </Routes> */}
    </React.StrictMode>,
  // </BrowserRouter>,
    document.getElementById('root')


  
)
