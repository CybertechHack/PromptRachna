import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Chapter2 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imageRef.current,
      {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center"
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",   
          end: "top center",     
          scrub: true,
               
        }
      }
    );
  }, []);

  return (
    <div className='relative h-[100vh] w-[100vw] px-1 py-6 bg-[#0F0F0F]  overflow-hidden'>
      <img
        ref={imageRef}
        className='absolute top-0 left-0 z-0 h-full w-full object-cover'
        src="public/Photos/Chapter4.jpeg"
        alt=""
      />

      <div className='relative z-10 h-full w-full px-6 py-10 flex flex-col justify-center '>
        <h1 className='text-white font-[Home] text-5xl mb-8'>
          Chapter 2 - The Whistle in the Hills
        </h1>
        <h2 className='font-[Home] text-white text-3xl max-w-5xl'>
          One evening, high on Windwhistle Hill, the breeze changed. It didn’t just blow—it sang. Airi paused, breath held, as the wind seemed to speak her name.
        </h2>
      </div>
    </div>
  );
};

export default Chapter2;
