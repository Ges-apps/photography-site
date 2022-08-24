import Image from 'next/image'
import React from 'react'

const Portfolios = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold tex-3xl p-4'>Portrait Pics</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80' layout='responsive' alt='/' width="677" height="451" />
            </div>
            <div className='h-full w-full '>
                <Image src='https://images.unsplash.com/photo-1523464862212-d6631d073194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' width="215" height="217" layout='responsive' objectFit='cover' alt='/' />
            </div>
            <div className='h-full w-full '>
                <Image src='https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80' width="215" height="217" layout='responsive' objectFit='cover' alt='/' />
            </div>
            <div className='h-full w-full '>
                <Image src='https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' width="215" height="217" layout='responsive' objectFit='cover' alt='/' />
            </div>
            <div className='h-full w-full '>
                <Image src='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' width="215" height="217" layout='responsive' objectFit='cover' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Portfolios