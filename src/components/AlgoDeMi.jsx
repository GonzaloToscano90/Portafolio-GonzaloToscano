import React from 'react';
import Gonzalo2 from '../assets/img/gonzalo2.jpeg'

const AlgoDeMi = () => {
  return (
  <div id='algo-de-mi'>
      <div>
          <div className='fondo-movimiento-2 '>
                <div className=' w-full h-full height-sobre-mi bg-green-700 bg-opacity-80 text-gray-800 font-bold md:text-2xl
                    font-sans md:leading-loose leading-normal'>
                        <div className=' md:flex  justify-between items-center gap-10 ml-1 md:p-10 p-5'>
                             <h3 className='md:w-auto md:full'>Hola! un gusto que estés por aquí! Me llamo Gonzalo y soy un apasionado por el frontend, en estos 4 años me dedique a aprender sobre tecnologías basadas en desarrollo web, actualmente estoy desarrollando proyectos para terceros como frelance para poder ganar experiencia junto a un equipo de trabajo que formamos con mis hermanos y aunque trabajo en relación de dependencia como mecánico/electricista automotriz (tiempo-completo), esto no me impide hacer lo que me gusta. En cada proyecto que me enfrento estoy tratando de aplicar las mejores prácticas que pueda, pero me encantaría poder formar parte de un empresa para poder adquirir mejores prácticas trabajando con gente con experiencia!! Sigo en aprendisaje continuo.
                              Espero le gusten mis proyectos y estoy dispuesto a formar parte de este cambio en la vida de las personas!! Un Saludo a vos que te tomaste el tiempo de conocer algo de mí ! Gracias!</h3>        
                             <img className='md:w-80 md:h-80 w-40 h-40 rounded-2xl mt-2' src={Gonzalo2} alt="" />
                        </div>                               
                </div>
          </div>
      </div>
  </div>)
};
                       

export default AlgoDeMi;
