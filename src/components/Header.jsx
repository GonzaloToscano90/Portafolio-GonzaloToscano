import React from 'react'
import imgJs from '../assets/img/js.png'
import imgGonzalo from '../assets/img/gonzalo.jpeg'
import imgNodeJs from '../assets/img/nodejs.png'
import { motion } from 'framer-motion'



const Header = () => {
    return (
        <div>            
            <div id='header' className='relative'>

                    <div className='bg-blue-600 w-full h-full absolute opacity-30'></div>

                        <div className='w-full h-full absolute flex flex-col items-center '>              
                           <div className='flex sm:flex sm:gap-32 sm:mt-44 sm:mb-10 md:gap-80 gap-20  md:mt-60 mt-20'>
                                <motion.img 
                                    className='md:w-14 md:h-14  w-10 h-10 mb-6 ' src={imgJs}
                                    animate={{
                                        x: 30,
                                        opacity:1
                                    }}
                                    initial={{
                                        opacity:0.1
                                    }}
                                    transition={{
                                        type: 'spring' ,
                                        stiffness:400,
                                        damping: 100
                                    }}
                                >    
                                </motion.img>                             
                                <img className='rounded-full sm:w-48 sm:h-48 sm:-mt-24 md:w-44 md:h-44 md:-mt-20 w-20 h-20 -mt-6 'src={imgGonzalo} />                            
                                <motion.img 
                                    className='md:w-16 md:h-16 w-10 h-10'src={imgNodeJs} 
                                    animate={{
                                        x: -30,
                                        opacity:1
                                    }}
                                    initial={{
                                        opacity:0.1
                                    }}
                                    transition={{
                                        type: 'spring' ,
                                        stiffness:400,
                                        damping: 100
                                    }}                                
                                > 
                                </motion.img>
                           </div>
                           <div className='flex flex-col items-center mt-5 '>
                                <h1 className=' text-white md:mt-10 font-mono  md:text-3xl text-xl'>Gonzalo Emmanuel Toscano</h1>
                                <h1 className='text-white md:mt-3 font-mono md:text-2xl font-bold'>Frontend Javascript-React</h1>
                           </div>                                                               
                        </div>

                    <div>
                        <img className='fondo-movimiento'  />
                    </div>
               
            </div>         


        </div>
    )
}

export default Header
