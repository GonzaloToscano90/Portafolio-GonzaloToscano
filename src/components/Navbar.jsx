import { Link} from 'react-scroll';
import { motion } from 'framer-motion'
import Portafolio from './Portafolio';
import Herramientas from './Herramientas';
import Cv from './Cv';
import Contacto from './Contacto';
import AlgoDeMi from './AlgoDeMi';


const Navbar = () => {

  return (
    <div className=''>
        <div className='w-full z-50 md:hidden sticky top-0 cursor-pointer bg-cyan-500 font-bold text-xl text-white font-sans flex p-2 '>
          <span className='text-black text-2xl mt-1 ml-3 font-serif hover:text-white animate-pulse'>
            <Link to='header' spy={true} smooth={true} offset={-60} duration={1800}><ion-icon name="arrow-up-outline"></ion-icon></Link>
          </span>
            <motion.div className='w-full flex  gap-x-5 sm:ml-80 md:hidden ml-20 mt-1 text-2xl'
              animate={{
                x: 3,
                opacity:1
              }}
              initial={{
                x:200,
                opacity:0.1
              }}
              transition={{
                type: 'spring' ,           
              
              }}
            >
            <Link to= 'portafolio' spy={true} smooth={true} offset={-60} duration={800} className='hover:text-blue-800 hover:animate-bounce '><ion-icon name="folder-open-outline"></ion-icon></Link>
            <Link to= 'herramientas' spy={true} smooth={true} offset={-17} duration={800} className='hover:text-blue-800 hover:animate-bounce '><ion-icon name="hammer-outline"></ion-icon></Link>
            <Link to= 'cv'  spy={true} smooth={true} offset={-50} duration={800} className='hover:text-blue-800 hover:animate-bounce '><ion-icon name="document-attach-outline"></ion-icon></Link>
            <Link to= 'contacto' spy={true} smooth={true} offset={-48} duration={1600} className='hover:text-blue-800 hover:animate-bounce '><ion-icon name="mail-unread-outline"></ion-icon></Link>
            <Link to= 'algo-de-mi' spy={true} smooth={true} offset={-48} duration={1600} className='hover:text-blue-800 hover:animate-bounce '><ion-icon name="person-circle-outline"></ion-icon></Link>

           </motion.div>

        </div>
        <nav 
           className='ocultar z-50 cursor-pointer sticky top-10 md:top-0 flex  md:flex-row items-center md:justify-end  justify-evenly md:gap-8 md:pr-10  md:h-12  bg-cyan-400 shadow-lg shadow-cyan-500/50 font-mono text-green-100'>
             
            <Link to="portafolio" spy={true} smooth={true} offset={-70} duration={800}  className=' hover:bg-white p-2  hover:text-black hover:font-extrabold duration-500' >Portafolio</Link>
            <Link to="herramientas" spy={true} smooth={true} offset={-7} duration={800}  className='hover:bg-white p-2  hover:text-black hover:font-extrabold duration-500' >Herramientas</Link>
            <Link to="cv" spy={true} smooth={true} offset={-45} duration={800}  className='hover:bg-white p-2  hover:text-black hover:font-extrabold duration-500' >Hoja de vida</Link>
            <Link to="contacto" spy={true} smooth={true} offset={-48} duration={1600}  className='hover:bg-white p-2  hover:text-black hover:font-extrabold duration-500' >Habláme</Link>
            <Link to="algo-de-mi" spy={true} smooth={true} offset={-200} duration={1600}  className='hover:bg-white p-2  hover:text-black hover:font-extrabold duration-500' >Algo de Mí</Link>
        </nav>
        <Portafolio/>
        <Herramientas/>
        <Cv/>
        <Contacto/>
        <AlgoDeMi/>
        
    </div>
  )
 
};

export default Navbar;
