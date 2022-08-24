import React from 'react'
import IGimG1 from '../public/1.jpg'
import IGimG2 from '../public/2.jpg'
import IGimG3 from '../public/3.jpg'
import IGimG4 from '../public/4.jpg'
import IGimG5 from '../public/5.jpg'
import IGimG6 from '../public/6.jpg'
import Instagramimg from './Instagramimg'
const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24  '>
        <p className='text-2xl font-bold'>Follow me On instagram</p>
        <p className='pb-4'>@shayan_goles</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <Instagramimg socialImg={IGimG1}/>
            <Instagramimg socialImg={IGimG2}/>
            <Instagramimg socialImg={IGimG3}/>
            <Instagramimg socialImg={IGimG4}/>
            <Instagramimg socialImg={IGimG5}/>
            <Instagramimg socialImg={IGimG6}/>
        </div>
    </div>
  )
}

export default Instagram