import React from 'react';
import imgCv from '../assets/img/cv.png'
import cvGonzalo from '../assets/img/Currículum-GonzaloToscano.pdf'


const Cv = () => {
  return (
    <div id='cv' className=' -mt-5 '>
            
      <div className=' w-full md:p-10 pb-2 bg-cyan-900 bg-opacity-60 '>
          <div className='flex flex-col items-center  justify-center '>
            <h1 className='flex justify-center mt-7 md:-mt-6 md:mb-5 my-3 md:p-2 font-serif uppercase md:text-4xl text-2xl animate-pulse'>Hoja de Vida</h1>
            <img className='p-5' src={imgCv} alt="cv" />   
          </div>
          <div>
            <a  className='animate-bounce cursor-pointer flex justify-center md:mt-10 mt-5 text-white text-xs md:text-xl font-mono font-bold hover:text-black'  href={cvGonzalo}  download={cvGonzalo} target="_blank">Click aquí para descaragar currículum</a>
          </div>
      </div>

      
    </div>);
};

export default Cv;
