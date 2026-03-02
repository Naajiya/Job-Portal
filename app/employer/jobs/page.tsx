import MianHeader from '@/components/employer/MianHeader'
import React from 'react'

function page() {
    return (
        <>
            <MianHeader />
            <div className='h-screen bg-slate-100 p-2'>
                <div className='border p-3 border-slate-200 rounded bg-white '>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 font-bold text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                            </svg>
                            <h3 className='text-2xl font-semibold'>Jobs</h3>
                        </div>
                        <button className='p-1 px-3 bg-blue-900 text-white rounded-2xl'>Create Job</button>
                    </div>
                    <div className="p-6">
                        <div className="shadow-md rounded-lg">
                            <table className="min-w-full border border-gray-200 bg-white">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Job Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Date Posted</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Last Date</th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">View Candidates</th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-3">1</td>
                                        <td className="px-6 py-3 font-medium">Frontend Developer</td>
                                        <td className="px-6 py-3">IT</td>
                                        <td className="px-6 py-3">Feb 25, 2026</td>
                                        <td className="px-6 py-3">Mar 10, 2026</td>
                                        <td className="px-6 py-3 text-center">
                                            <button className="text-blue-600 hover:underline font-medium">View</button>
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <button className="text-green-600 hover:underline font-medium mr-3">Edit</button>
                                            <button className="text-red-600 hover:underline font-medium">Delete</button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-3">2</td>
                                        <td className="px-6 py-3 font-medium">UI/UX Designer</td>
                                        <td className="px-6 py-3">Design</td>
                                        <td className="px-6 py-3">Feb 20, 2026</td>
                                        <td className="px-6 py-3">Mar 05, 2026</td>
                                        <td className="px-6 py-3 text-center">
                                            <button className="text-blue-600 hover:underline font-medium">View</button>
                                        </td>
                                        <td className="px-6 py-3 text-center">
                                            <button className="text-green-600 hover:underline font-medium mr-3">Edit</button>
                                            <button className="text-red-600 hover:underline font-medium">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page