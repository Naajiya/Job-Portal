'use client'
import MianHeader from '@/components/employer/MianHeader'
import { FormLabel, Input, Select, TextareaAutosize } from '@mui/material'
import React from 'react'

function page() {
  return (
    <div>
      <MianHeader />
      <div className='border border-slate-300 py-2 m-2 p-3 m-3 rounded'>
        <div className='py-1 border-b border-slate-200 flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="size-7 text-blue-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h3 className='text-2xl font-semibold text-slate-600'>Create Job</h3>
        </div>
        <div className='px-4 mt-5'>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Enter Your Job Post Name</label>
            <Input placeholder='Enter your job name' disableUnderline
              className='w-full border border-slate-200 text-sm rounded-2xl px-3' />
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Enter your job description</label>
            <textarea placeholder='Enter your job description' 
              className='w-full border border-slate-200 py-2 rounded-2xl px-3' />
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Pick Job category</label>
            <select className='w-full border border-slate-200 p-1 px-3 text-slate-500 rounded-2xl' name="" id="">
              <option value="">--Select--</option>
              <option value="it">IT</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Last Date</label>
            <Input type='date' className='w-full px-3 border border-slate-200 rounded-2xl text-slate-400' disableUnderline></Input>
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Salary</label>
            <Input type='number' placeholder='Enter salary' disableUnderline className='w-full px-3 border border-slate-200 rounded-2xl text-slate-400'></Input>
          </div>
          <div className='flex justify-end items-center'>
            <button className='p-1 px-2 rounded text-white bg-green-700'>Create </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page