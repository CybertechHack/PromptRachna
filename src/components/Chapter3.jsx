import React from 'react'
import { motion } from 'framer-motion';
const Chapter2 = () => {
  return (
    <div className='min-h-screen px-5 py-6 w-[100vw] bg-[#0F0F0F]'>
      <h1 className='text-white font-[Home] text-4xl '>Chapter 3: Feather of the Spirit
      </h1>  
      <div className='h-[70vh] w-[100%] mt-[6vh]  flex items-center gap-9'>
            <img className='h-full w-[40%] object-cover transition-all duration-500 hover:scale-105 hover:brightness-110' src="public/Photos/WhatsApp Image 2025-04-16 at 16.03.24.jpeg" alt="" />
            <motion.h2 initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
             className='font-[Home] text-white text-4xl'>A single feather spiraled down from the sky—glowing, warm. When she touched it, a voice echoed inside her: ‘You have heard me…</motion.h2>
            </div>
    </div>
  )
}

export default Chapter2
