import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div  >
      <div className='min-h-screen px-5 py-6 w-[100vw] bg-[#0F0F0F] '>
         <h1 className='text-white font-[Home] text-4xl '>Chapter 1 – The Curious Girl</h1>  
         <div className='h-[70vh] w-[100%] mt-[6vh]  flex items-center gap-9'>
            <img className='h-full w-[40%] object-cover transition-all duration-500 hover:scale-105 hover:brightness-110' src="public/Photos/HomeImg.jpeg" alt="" />
            <motion.h2 initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
             className='font-[Home] text-white text-4xl'>In Kazemura, a town cradled by hills, lived Airi.  While other children ran after toys, she chased the wind, convinced it was whispering secrets only she could hear.</motion.h2>
            </div>
      </div>
    </div>
  )
}

export default Home
