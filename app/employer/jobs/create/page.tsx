'use client'
import CategorySelection from '@/components/employer/CategorySelection'
import MianHeader from '@/components/employer/MianHeader'
import { useJobs } from '@/hooks/useJobs'
import { FormLabel, Input, Select, TextareaAutosize } from '@mui/material'
import React from 'react'

function page() {
  const {
    jobs,
    setJobs,
    addJob
  } = useJobs()
  return (
    <div>
      <MianHeader />
      <div className='border border-slate-300 py-2 p-3 m-3 rounded'>
        <div className='py-1 border-b border-slate-200 flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="size-7 text-blue-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h3 className='text-2xl font-semibold text-slate-600'>Create Job</h3>
        </div>
        <div className='px-4 mt-5'>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Enter Your Job Post Name</label>
            <Input value={jobs.postName ?? ''} onChange={(e) => setJobs({ ...jobs, postName: e.target.value })} placeholder='Enter your job name' disableUnderline
              className='w-full border border-slate-200 mt-2 text-sm rounded-2xl px-3' />
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Enter your job description</label>
            <textarea value={jobs.postDescription ?? ''} onChange={(e) => setJobs({ ...jobs, postDescription: e.target.value })} placeholder='Enter your job description'
              className='w-full border border-slate-200 py-2 mt-2 rounded-2xl px-3' />
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Pick Job category</label>
            <CategorySelection setCategory={setJobs} />
          </div>
          <div className='mb-3'>
            <label className='mx-3 w-full font-semibold text-slate-600'>Enter location</label>
            <Input className='w-full border border-slate-200 mt-2 text-sm rounded-2xl px-3' placeholder='Enter job location' value={jobs?.location ?? ''} onChange={(e) => setJobs({ ...jobs, location: e.target.value })} disableUnderline></Input>
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold text-slate-600 w-full'>Select experience Level</label>
            <select name="" id="" value={jobs.experienceLevel} onChange={(e) => setJobs({ ...jobs, experienceLevel: e.target.value })} className='w-full mt-2 border mx-2 rounded-2xl text-slate-400 p-1 border-slate-200'>
              <option value="beginner">Beginner</option>
              <option value="mideum">mideum</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold text-slate-600 w-full'>Job type</label>
            <select name='' id='' value={jobs.jobType} onChange={(e) => setJobs({ ...jobs, jobType: e.target.value as "full-time" | "part-time" | "remote" | "freelance" })} className='w-full mt-2 border mx-2 rounded-2xl p-1 text-slate-400 border-slate-200'>full time
              <option value="part-time">part time</option>
              <option value="remorte">remorte</option>
              <option value="freelance">freelance</option>
            </select>
          </div>

          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Last Date</label>
            <Input type='date' value={jobs.lastDate ?? ''} onChange={(e) => setJobs({ ...jobs, lastDate: new Date(e.target.value) })} className='w-full px-3 border mt-2 border-slate-200 rounded-2xl text-slate-400' disableUnderline></Input>
          </div>
          <div className='mb-3'>
            <label className='mx-3 font-semibold mb-2 text-slate-600'>Salary</label>
            <Input type='number' value={jobs.salary ?? ''} onChange={(e) => setJobs({ ...jobs, salary: Number(e.target.value) })} placeholder='Enter salary' disableUnderline className='w-full mt-2 px-3 border border-slate-200 rounded-2xl text-slate-400'></Input>
          </div>
          <div className='flex justify-end items-center'>
            <button onClick={addJob} className='p-1 px-2 rounded text-white bg-green-700'>Create </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page