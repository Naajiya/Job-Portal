'use client'
import useCategory from '@/hooks/useCategory'
import { Input, Switch } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
    const {getCategoryById, category,setCategory,updateCategory} = useCategory()
    const params = useParams()
    console.log(params,'params')
    useEffect(()=>{
      const id = params?.id
      console.log(id, 'params id')
      getCategoryById(id)
    },[params])
  return (
    <div>
        <div className='border border-slate-300 py-2 p-3 m-3 rounded'>
        <div className='py-1 border-b border-slate-200 flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="size-7 text-blue-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h3 className='text-2xl font-semibold text-slate-600'>Create category</h3>
        </div>
        <div className='px-4 mt-5'>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Enter category title</label>
            <Input placeholder='Enter category title' value={category?.title ?? ''} onChange={(e)=>setCategory({...category,title:e.target.value})} disableUnderline
              className='w-full border mt-1 border-slate-200 text-sm rounded-2xl px-3' />
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold !mb-2 text-slate-600'>Enter category description</label>
            <textarea placeholder='Enter category description' value={category?.description ?? ''} onChange={(e)=>setCategory({...category,description:e.target.value})}
              className='w-full border border-slate-200 py-2 mt-1 rounded-2xl px-3' />
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Status</label>
            
            <Switch value={category?.status} onChange={(e)=>setCategory({...category,status:e.target.checked})}></Switch>
          </div>
          <div className='flex justify-end items-center'>
            <button onClick={updateCategory} className='p-1 px-3 rounded-xl text-white bg-green-700'>Create </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page