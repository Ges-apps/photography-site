import Link from 'next/link'
import React from 'react'
import { useState , useEffect } from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [color , setColor] = useState('transparent')
    const [textcolor , setTextcolor] = useState('white')
    const [nav , setNav]=useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    useEffect(()=>{
        const changecolor = () =>{
            if(window.scrollY>=90){
                setColor('#000')
                setTextcolor('#fff')
            }else{
                setColor('transparent')
                setTextcolor('#ffffff')
            }
        }
        window.addEventListener('scroll',changecolor)
    }, [])
  return (
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <Link href='/'><h1 style={{textColor:`${color}`}} className='font-bold text-4xl '>GES Capture</h1></Link>
            <ul style={{textColor:`${color}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>Works</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            {/** Mobile button **/}
            <div onClick={handleNav} className='sm:hidden block z-10'>
                {nav?<AiOutlineClose size={30} style={{textColor:`${color}`}}/>:<AiOutlineMenu size={30} style={{textColor:`${color}`}}/>}
            </div>
                {/** Mobile Menu **/}
                <div className={nav?'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                :'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                            <Link href='/'>Home</Link>    
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                            <Link href='/#gallery'>Gallery</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                            <Link href='/portfolio'>Work</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Navbar