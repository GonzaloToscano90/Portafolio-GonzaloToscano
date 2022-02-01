import React from 'react';
import imgTemperatura from '../assets/img/temperatura-ciudad.png'
import imgCrmJs from '../assets/img/crm-js.png'
import imgCotizadorJs from '../assets/img/cotizador-cripto.png'
import imgCitasVeterinaria from '../assets/img/pacientes-veterinaria.png'
import imgBuscadorImagenes from '../assets/img/buscador-imagenes.png'
import imgGastoSemanal from '../assets/img/gastoSemanal.png'
import Trabajos from './trabajos';

const Portafolio = () => {
  return (

    <div id='portafolio'>
        <h1 className=' flex justify-center md:mt-16 mt-3 md:p-2 font-serif uppercase md:text-4xl text-2xl animate-pulse'>Portafolio</h1> 
        <div className=' md:grid md:grid-cols-3 gap-5 p-5 flex snap-x overflow-auto'>
            <a className='w-52 md:w-full snap-x flex-shrink-0 shadow-xl hover:shadow-cyan-500/50 transition-all hover:h-screen-400' href="https://proyecto-crm-js-indexdb.netlify.app/index.html" target="_blank"><img src={imgCrmJs} alt="crmjs" /></a>
            <a className='w-52 md:w-full snap-x flex-shrink-0 shadow-xl hover:shadow-cyan-500/50' href="https://cotizador-criptomonedas-js.netlify.app/" target="_blank"><img src={imgCotizadorJs} alt="cotizador" /></a>
            <a className='w-52 md:w-full snap-x flex-shrink-0 shadow-xl hover:shadow-cyan-500/50' href="https://proyecto-api-temperaturaciudad.netlify.app/" target="_blank"><img  src={imgTemperatura} alt="temperatura" /></a>
            <a className='w-52 md:w-full snap-x flex-shrink-0 shadow-xl hover:shadow-cyan-500/50' href="https://administrador-pacientes1.netlify.app/"><img src={imgCitasVeterinaria} alt="" /></a>
            <a className='w-52 md:w-full snap-x flex-shrink-0 shadow-xl hover:shadow-cyan-500/50' href="https://proyecto-buscador-de-imagenes-pixabay.netlify.app"><img src={imgBuscadorImagenes} alt="" /></a>
            <a className='w-52 md:w-full snap-x flex-shrink-0 shadow-xl hover:shadow-cyan-500/50' href="https://proyecto-js-gasto-semanal.netlify.app"><img src={imgGastoSemanal} alt="" /></a>
        </div>
        {/* <div className='cursor-pointer flex justify-center mt-5 text-cyan-500 text-xl font-mono font-bold hover:text-black'>
            <a className='animate-bounce text-xs md:text-lg' href={<Trabajos/>}>Ver más</a>
        </div> */}
        
    </div>
    ) 

};

export default Portafolio;
