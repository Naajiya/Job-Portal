import MianHeader from '@/components/employer/MianHeader'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='h-screen'>
            <MianHeader />
            <div className='bg-blue-500 p-5 flex justify-between items-center'>
                <div className='flex-1 items-center px-5 text-white'>
                    <h3 className='font-bold text-4xl '>
                        Hire Top Talent <br />
                        for Your Company
                    </h3>
                    <p className='my-5 font-medium text-xl'>Post job and find the best candidates <br /> quickly and efficiently </p>
                    <div className='actions flex gap-3 items-center '>
                        <button className='bg-orange-500 text-white p-2 px-4 font-bold text-xl rounded'>Post a job</button>
                        <button className='bg-white text-blue-600 p-2 px-4 font-bold text-xl rounded'>View Candidates</button>
                    </div>
                </div>
                <div>
                    <Image
                        src="/rmanwithdesk.png"
                        width={800}
                        height={500}
                        alt="manwithdesk"
                        className=""
                        loading="eager"
                    />
                </div>
            </div>
            <div className='w-full p-5 flex gap-5 items-center justify-center'>
                <div className='h-30 w-80 p-3 shadow rounded gap-3 border-slate-200 border flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-blue-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                    <div className=''>
                        <h3 className='font-bold font-xl'>Post Jobs Easily</h3>
                        <p>Create and publish job listing in minutes</p>
                    </div>
                </div>
                <div className='h-30 w-80 p-3 shadow rounded gap-3 border-slate-200 border flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 text-cyan-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>

                    <div className=''>
                        <h3 className='font-bold font-xl'>Manage Application</h3>
                        <p>Review and shortlist applicats easily</p>
                    </div>
                </div>
                <div className='h-30 w-80 p-3 shadow rounded gap-3 border-slate-200 border flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-orange-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>

                    <div className=''>
                        <h3 className='font-bold font-xl'>Post Jobs Easily</h3>
                        <p>Create and publish job listing in minutes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page