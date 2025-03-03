import React from 'react'
import Card from "@/components/Card"

const MainList = () => {
  return (
    <div className='w-full p-4'>
        <div className='flex justify-start items-center mb-3'>
        <h1 className='text-2xl font-semibold'>Main List</h1>

        <span><button>this is it</button></span>

        </div >

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>


    </div>
  )
}

export default MainList