'use client'
import useCategory from '@/hooks/useCategory'
import React, { useEffect } from 'react'

type Catg = {
    setCategory: React.Dispatch<React.SetStateAction<any>>
}

function CategorySelection({ setCategory }: Catg) {
    // const [category,]
    const {
        getAllCategories, categoryList
    } = useCategory()

    useEffect(() => {
        getAllCategories()
    }, [])
    return (
        <div className='mt-2 w-full'>
            <select
                onChange={(e) => setCategory((prev: any) => ({
                    ...prev, category: e.target.value
                }))}
                className='w-full border border-slate-200 rounded-2xl p-1 px-2'
                name=""
                id=""
            >
                {
                    categoryList?.length > 0 && categoryList.map(item => (
                        item?.status &&
                        <option key={item._id} value={item?.title}>{item?.title}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CategorySelection