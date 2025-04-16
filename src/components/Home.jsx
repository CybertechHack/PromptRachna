import {useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Home = () => {

  const textRef = useRef(null)
  const h2Ref = useRef(null);
 


  useGSAP(()=>{
 
      let clutter= ""
       const splittedText = textRef.current.textContent.split("");
       splittedText.forEach(function(e){
        clutter +=`<span>${e}</span>`
       });
       
       textRef.current.innerHTML = clutter
      
       console.log(clutter);
       
 
    
  
      gsap.from("span",{
       y:100,
       opacity:0,
       delay:0.8,
       duration:0.89,
       stagger:0.15,

    })
  })
   
  useGSAP(() => {
    gsap.from(h2Ref.current, {
      x: 1000,
      opacity:0,
      
      duration: 2.2,
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top 30%",
        end: "bottom 60%",
        scrub: true,
      
        
       
      },
    });
  }, []);


  return (
    <div className='overflow-x-hidden' >
      <div className='min-h-screen px-5 py-6 w-[100vw] bg-[#0F0F0F] '>
         <h1 ref={textRef} className='text-white font-[Home] text-6xl '>Chapter 1 – The Curious Girl</h1>  
         <div className='h-[70vh] w-[100%] mt-[6vh]  flex items-center gap-9'>
            <img className='h-full w-[40%] object-cover transition-all duration-500 hover:scale-105 hover:brightness-110' src="public/Photos/HomeImg.jpeg" alt="" />
            <h2    ref={h2Ref} className='font-[Home]  duration-1000   text-white text-4xl'>In Kazemura, a town cradled by hills, lived Airi.  While other children ran after toys, she chased the wind, convinced it was whispering secrets only she could hear.</h2>
            </div>
      </div>
    </div>
  )
}

export default Home
