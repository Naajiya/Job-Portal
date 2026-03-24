import React from 'react'
import manwithdesk from '../../public/rmanwithdesk.png'
import Image from 'next/image'
import ApplicationView from './ApplicationView'
import RecentActivites from './RecentActivites'
import QuickActions from './QuickActions'

function Dashboard() {
    return (
        <div className='w-full min-h-screen bg-slate-100 p-5'>
            <div className='w-full'>
                <div className='absolute flex items-center justify-between'>
                    <div>
                        <h3 className='text-2xl font-bold'>Welcome Back, Admin!</h3>
                        <p className='text-sm font-normal'>Here is what's happening with your job portal today</p>
                    </div>
                    <div className='flex items-center justify-end w-1/2 h-30'>
                        {/* <div className="bg-blue-500/20 backdrop-blur-md p-10 rounded-2xl"> */}
                        <Image src={manwithdesk} alt="manwithdesk" />
                        {/* </div> */}
                    </div>
                </div>
                <div className='relative pt-26 flex flex-wrap items-center gap-4'>
                    <div className='w-60 h-20 bg-white shadow rounded-xl flex gap-2 p-3 items-center'>
                        <div className='rounded-4xl bg-blue-50 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <div className='w-full'>
                            <p className='text-slate-600 text-sm'>Total Jobs</p>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-2xl font-semibold'>248</h3>
                                <div className='bg-blue-50 rounded-2xl text-xs text-green-700 flex gap-2 items-center justify-center font-bold w-fit px-3 py-1'>
                                    +12%
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-60 h-20 bg-white shadow rounded-xl flex gap-2 p-3 items-center'>
                        <div className='rounded-4xl bg-red-50 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className='w-full'>
                            <p className='text-slate-600 text-sm'>Total Applicants</p>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-2xl font-semibold'>1,530</h3>
                                <div className='bg-red-50 rounded-2xl text-xs text-red-700 flex gap-2 items-center justify-center font-bold w-fit px-3 py-1'>
                                    +18%
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-60 h-20 bg-white shadow rounded-xl flex gap-2 p-3 items-center'>
                        <div className='rounded-4xl bg-green-100 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>

                        </div>
                        <div className='w-full'>
                            <p className='text-slate-600 text-sm'>Companies</p>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-2xl font-semibold'>45</h3>
                                <div className='bg-green-100 rounded-2xl text-xs text-green-700 flex gap-2 items-center justify-center font-bold w-fit px-3 py-1'>
                                    +7%
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="green" className="size-3 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-60 h-20 bg-white shadow rounded-xl flex gap-2 p-3 items-center'>
                        <div className='rounded-4xl bg-amber-100 p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className='w-full'>
                            <p className='text-slate-600 text-sm'>Users</p>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-2xl font-semibold'>4342</h3>
                                <div className='bg-amber-100 rounded-2xl text-xs text-amber-700 flex gap-2 items-center justify-center font-bold w-fit px-3 py-1'>
                                    +34%
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="green" className="size-3 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex gap-2 items-center mt-3'>
                <div className='w-4/9 h-screen rounded-xl'>
                    <ApplicationView />
                </div>
                <div className='w-3/9 h-screen rounded-2xl'>
                    <RecentActivites />
                </div>
                <div className='w-2/9 h-screen rounded-2xl'>
                <QuickActions/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard