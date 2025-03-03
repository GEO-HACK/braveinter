import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
//icon importations from lucide
import { Heart, MessageCircle, Share } from 'lucide-react'



const Card = () => {
  return (
    <div className='bg-neutral-900 p-4 rounded-lg shadow-md flex flex-col'>
        <div className='flex justify-start items-center flex-row gap-2 mb-2'>
            <Image src='/profile.webp' alt='Profile Picture' width={30} height={30} className='rounded-full'/>
            <Image src='/profile.webp' alt='Profile Picture' width={30} height={30} className='rounded-lg'/>

        </div>

        <h1 className='text-xl font-semibold text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        </h1>
        <div className='flex justify-start items-center mt-2 mb-2 gap-2 border-gray-400'>

            <button className='px-3 py-1  text-gray-400 border-gray-500 border-1 rounded-lg min-w'>#shopping</button>
            <button className='px-3 py-1  text-gray-400 border-gray-500  border-1 rounded-lg min-w'>#coding</button>

        </div>
        <div className='flex justify-start px-4 mb-2 items-center'>
            <span className='text-sm text-gray-400'>Feb 3 . 6m read time</span>

        </div>


        <div  className='flex items-center w-[full]' >
            <Image src="/image.webp"

            
            alt='card image'
            width={800}
            height={800}
            className='rounded-lg'
            />
        </div>
        <div className='flex justify-evenly flex-row '>
            <Link href='#' >
                <Heart size={24} color='#fff' />
            </Link>
            <Link href='#'>
                <MessageCircle size={24} color='#fff' />
            </Link>
            <Link href='#'>
                <Share size={24} color='#fff' />
            </Link>


        </div>


       


    </div>
  )
}

export default Card