import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className='py-20 ' id=''>
      <h1 className='font-bold text-4xl md:text-5xl pb-10 text-center relative'> My {" "}
        <span className="text-purple-400"> Experinece</span>
      </h1>
      <div className='w-full grid grid-cols-1 gap-10 lg:grid-cols-4'>
      {workExperience.map((card) => (
        <Button key={card.id} borderRadius='1.75rem' duration={Math.floor(Math.random() * 10000) + 10000} className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
          <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 '>
          <img src={card.thumbnail} alt={card.thumbnail}  className='lg:w-32 md:w20 w-16'/>
          <div className='lg:ms-5'>
            <h1 className='text-start text-xl md:texl-2xl font-bold'>{card.title}</h1>
            <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
          </div>
          </div>
        </Button>
      ))}
      </div>
    </div>
  )
}

export default Experience
