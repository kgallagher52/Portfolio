import React from 'react'
import mainImg from '../../assets/profile.png';

export const Dashboard = () => {
  return (
    <div className={'p-8 h-screen bg-background w-screen'}>
      <div className=' flex flex-col justify-center items-center mr-0 '>
        <div id="image-container" className={`bg-gradient-to-r  mb-6 w-80 h-80 p-3 rounded-full  from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]`}>
          <img className='' src={mainImg}></img>
        </div>
        <h1 className='text-white text-4xl font-mono text-center'>Keaton Gallagher</h1>
      </div>
    </div>
  )
}
