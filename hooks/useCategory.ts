'use client'

import { Category } from "@/types/category";
import { useState } from "react";
import { toast } from "react-toastify";

export default function useCategory() {
    const [category, setCategory] = useState<Partial<Category>>({
        status: false
    })
    const [categoryList, setCategoryList] = useState<Partial<Category[]>>([])

    async function addCategory() {
        try {
            const res = await fetch("/api/admin/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(category),
            });
            console.log(res, "response")
            if (res.status == 400) {
                toast.error('an error occured')
                return
            }
            if (res.status == 200) {
                const data = await res.json();
                console.log(data.status, "data in category")
                if (data.success == false) {
                    toast.error('An error occured')
                }
                toast.success('category added')
                return data.category;
            }

        } catch (err) {
            console.error(err);
        } finally {
            console.log('working')
        }
    };

    async function getAllCategories() {
        try {
            const response = await fetch("/api/admin/category", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            console.log(response, "response after fetch")
            const data = await response.json()
            console.log(data.data, 'res')
            if (data?.data) {
                setCategoryList(data.data);
            }
            console.log(categoryList, "data")
        } catch (err: any) {
            console.log(err)
        }
    }

    async function deleteCategory(id: string) {
        console.log(id, 'id in delete')
        try {
            const response = await fetch(`/api/admin/category/${id}`, {
                method: 'DELETE'
            })
            console.log(response, "rsponse after delete")
            if (response.status == 400) {
                toast.error('invalid item')
                return
            }

            toast.error('deleted successfully')
            getAllCategories()
        } catch (err) {
            console.log(err)
        }
    }

    async function getCategoryById(id: string) {
        try {
            const response = await fetch(`/api/admin/category/${id}`, {
                method: 'GET'
            })
            console.log(response, "rsponse after delete")
            const data = await response.json()
            console.log(data, "data from")
            if (response.status != 200) {
                toast.error('invalid item')
                return
            }

            setCategory({
                _id:data.data?._id,
                title: data.data?.title,
                description: data.data?.description,
                status: data.data?.status === "true"
            })

        } catch (err) {
            console.log(err)
        }
    }

    async function updateCategory() {
        try {
            const res = await fetch("/api/admin/category", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(category),
            });
            if (res.status == 400) {
                toast.error('an error occured')
                return
            }
            if (res.status == 200) {
                const data = await res.json();
                if (data.success == false) {
                    toast.error('An error occured')
                }
                toast.success('category added')
                return data.category;
            }

        } catch (err) {
            console.error(err);
        } finally {
            console.log('working')
        }
    };

    return {
        category,
        setCategory,
        addCategory,
        getAllCategories,
        categoryList,
        deleteCategory,
        getCategoryById,
        updateCategory
    }
}