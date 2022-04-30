import React from 'react'
import mainImg from '../../assets/profile.gif';

export const Dashboard = () => {

  return (
    <div className={' h-screen bg-background'}>
      <section className='flex items-center justify-between w-screen p-4 border-b-2 border-light-white mb-20 tablet:justify-evenly'>
        <h4 className='text-white text-1xl font-semibold '>Keaton Gallagher</h4>
        <div className='hidden'>
          <span className='text-white text-sm mx-4'>Projects</span>
          <span className='text-white text-sm mx-4'>Gallery</span>
          <span className='text-white text-sm mx-4'>About</span>
        </div>
        <span className='text-white text-1xl font-semibold '>Contact</span>
      </section>
      <div className='flex flex-col justify-center items-center'>
        <div id="image-container" className={`bg-gradient-to-r  mb-10 w-80 h-80 p-3 rounded-full  from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]`}>
          <img className='' src={mainImg}></img>
        </div>
        <h2 className='text-white text-2xl font-extrabold  font-serif text-center  my-4 tablet:text-3xl '>Keaton Gallagher</h2>
        <h1 className='text-white font-serif font-semibold  leading-snug  text-center text-5xl my-4 tablet:text-7xl '>Developer Enthusiast</h1>
      </div>
    </div>
  )
}
