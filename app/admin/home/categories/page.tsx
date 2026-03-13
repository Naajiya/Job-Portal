'use client'
import useCategory from '@/hooks/useCategory'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
    const routes = useRouter()
    const {
        categoryList, getAllCategories, deleteCategory
    } = useCategory()

    useEffect(() => {
        getAllCategories()
    }, [])
    useEffect(() => {
        console.log(categoryList, "category list in page")
    }, [categoryList])

    const handleEdit = (id?: string) => {
        console.log(id, 'id')
        routes.push(`/admin/home/categories/create/${id}`)
    }
    return (
        <div>
            <div className='border p-3 border-slate-200 rounded bg-white '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 font-bold text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>
                        <h3 className='text-2xl font-semibold'>Job Category</h3>
                    </div>
                    <button className='p-1 px-3 bg-blue-900 text-white rounded-2xl'>Create Category</button>
                </div>
                <div className="p-6">
                    <div className="shadow-md rounded-lg">
                        <table className="min-w-full border border-gray-200 bg-white">
                            <thead className="bg-slate-500 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.length > 0 ? (
                                    categoryList.map((category, index) => (
                                        <tr key={category?._id || index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3">{index + 1}</td>
                                            <td className="px-6 py-3 font-medium">{category?.title}</td>
                                            <td className="px-6 py-3">{category?.description}</td>
                                            <td className="px-6 py-3">
                                                <button className={`${category?.status ? 'bg-green-500' : 'bg-slate-400'} px-2 rounded-2xl text-white p-1`}>
                                                    {category?.status ? "Active" : "Inactive"}
                                                </button>
                                            </td>
                                            <td className="px-6 py-3 text-start">
                                                <button onClick={() => handleEdit(category?._id)} className="text-green-600 hover:underline font-medium mr-3">Edit</button>
                                                <button onClick={() => deleteCategory(category._id)} className="text-red-600 hover:underline font-medium">Dedlete</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="text-center py-4 text-slate-500">
                                            No data found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* {categoryList} */}
        </div>
    )
}

export default page