import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='h-screen w-screen bg-slate-200 flex items-center justify-center'>
            <div className='w-100 h-100 rounded-2xl bg-blue-50'>
                <div className='w-full h-full p-8 px-8'>
                    <h3 className='text-2xl text-center font-semibold font-mono'>Welcome Back!</h3>
                    <p className='text-sm text-center font-mono mt-1 text-slate-500'>We missed you! Please enter your details</p>
                    <div className='mt-6'>
                        <div >
                            <label className="block mb-1.5 ml-2 text-sm font-semibold text-heading">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="bg-neutral-secondary-medium border text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="john.doe@company.com" required />
                        </div>
                        <div className='mt-3' >
                            <label className="block mb-1.5 ml-2 text-sm font-medium text-heading">Password</label>
                            <input type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className='flex items-center'>
                                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" />
                                <label className="select-none ms-2 text-sm font-medium text-heading">Remember me</label>
                            </div>
                            <div className=''>
                                <p className='text-xs text-blue-900 font-bold'>Forgot password ?</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Link href={'/'}>
                             <button type='submit' className='bg-blue-800 text-white w-full p-2 text-sm rounded-xl'>Sign Up</button>
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <p className='text-sm text-center text-slate-600'>Don't have an account? <span className='text-blue-800'>Sign up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page