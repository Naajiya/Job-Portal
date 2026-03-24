import React from 'react'

function QuickActions() {
    return (
        <>
            <div className='bg-white rounded-xl p-2'>
                <h3 className='text-xl font-semibold mb-3'>Quick Actions</h3>
                <button className='mt-2 w-full flex items-center gap-2 bg-blue-600 px-3 rounded-xl py-2 justify-center text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <h1 className='text-xl font-normal'>Post New Job</h1>
                </button>
                <button className='mt-2 w-full flex items-center justify-center gap-2 bg-green-800 px-3 rounded-xl py-2 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <h1 className='text-xl font-normal'>Add Company</h1>
                </button>
                <div className='mt-2 flex items-center justify-center gap-2 border p-2 border-slate-400 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 className='font-semibold'>View Users</h3>
                </div>
                <div className='mt-2 flex items-center justify-center gap-2 border p-2 border-slate-400 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>

                    <h3 className='font-semibold'>Reports</h3>
                </div>
            </div>
            <div className='mt-2 bg-white w-full p-3 rounded-xl shadow'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-semibold'>Server Status</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                </div>
                <div className='flex mt-3 items-center justify-between'>
                    <h3 className=' text-slate-700'>Databse</h3>
                    <button className='bg-green-100 rounded-xl text-green-700 p-1 px-2'>Connected</button>
                </div>
                <div className='flex mt-3 items-center justify-between'>
                    <h3 className=''>API Status</h3>
                    <button className='bg-green-100 rounded-xl text-green-700 p-1 px-2'>Connected</button>
                </div>
                  <div className='flex mt-3 items-center justify-between'>
                    <h3 className=''>Active Users</h3>
                    <button className='bg-blue-100 rounded-xl text-blue-700 p-1 px-2'>142 Online</button>
                </div>
            </div>
        </>
    )
}

export default QuickActions