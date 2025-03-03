import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='bg-slate-900 p-4 rounded-lg shadow-md flex flex-col'>
        <div className='flex justify-start items-center flex-row gap-2 mb-2'>
            <Image src='/profile.webp' alt='Profile Picture' width={30} height={30} className='rounded-full'/>
            <Image src='/profile.webp' alt='Profile Picture' width={30} height={30} className='rounded-xl'/>

        </div>

        <h1 className='text-xl font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        </h1>
        <div className='flex justify-start items-center mt-2 mb-2 gap-2 border-gray-400'>

            <button className='px-3 py-2 bg-slate-700 rounded-lg min-w'>#shopping</button>
            <button className='px-3 py-2 bg-slate-700 rounded-lg min-w'>#coding</button>

        </div>
        <div  className='flex items-center w-[80%]' >
            <Image src="/image.webp"
            alt='card image'
            width={800}
            height={800}
            className='rounded-lg'
            />
        </div>


       


    </div>
  )
}

export default Card