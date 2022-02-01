import React from 'react';
import { Link} from 'react-scroll';
import imgContactame from '../assets/img/contact.png'
import imgLinkedin from '../assets/img/linkedin.png'
import imgGmail from '../assets/img/gmail.png'
import imgGitHub from '../assets/img/github.png'
import imgWhatsapp from '../assets/img/whatsapp.png'
import imgFlechaArriba from '../assets/img/flechas-arriba.png'

const Contacto = () => {
  return (
  
    <div id='contacto'>
        <div  className='bg-slate-800 h-screen h-cel-tablet md:h-full pb-9 flex flex-col items-center justify-start gap-8 '>
          <h1 className=' flex justify-center  md:mt-5 mt-9 md:p-2 font-serif uppercase text-white md:text-4xl text-2xl animate-pulse'>Contactame</h1>
          <img className='w-20 md:w-28' src={imgContactame} alt="img contacto" />

          <div className='flex flex-col items-start gap-8 '>
            <a className=' text-white flex justify-center items-end gap-8 text-xs ' href="https://www.linkedin.com/in/gonzalo-toscano-a511a8180/  " target="_blank"><img className='md:w-16 w-12 ml-5 ' src={imgLinkedin} alt="imglinkedin" />https://www.linkedin.com/in/gonzalo-toscano-a511a8180/</a>
            <a className='text-white flex justify-center items-end gap-8 text-xs' href="mailto:zalo.jat@gmail.com " target="_blank"><img className='md:w-16 w-12 ml-5 ' src={imgGmail} alt="imglinkedin" />zalo.jat@gmail.com</a>
            <a className='text-white flex justify-center items-end gap-8 text-xs' href="https://github.com/GonzaloToscano90 " target="_blank"><img className='md:w-16 w-12 ml-5 ' src={imgGitHub} alt="imglinkedin" />https://github.com/GonzaloToscano90</a>
            <a className='text-white flex justify-center items-end gap-8 text-xs' href="https://api.whatsapp.com/send?phone=+543886301416&text=Hola!%20Sean%20Bienvenidos!!" target="_blank"><img className='md:w-16 w-12 ml-5 ' src={imgWhatsapp} alt="imglinkedin" />3886-301416</a>
          </div>

            <Link to='header' spy={true} smooth={true} offset={-70} duration={1600}><img className='cursor-pointer  flex mt-20 animate-bounce' src={imgFlechaArriba} alt="imgdeveloper" /></Link>
        </div>
    </div>
      
  )
};

export default Contacto;
