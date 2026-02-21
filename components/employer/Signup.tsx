'use client'
import React, { useState } from 'react';
import Form from 'next/form';
import { registerAction, loginAction } from '@/app/employer/authentication/action';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type SignupProps = {
    isRegistered: boolean;
    onRegisterSuccess?: () => void
};

type companyDetails = {
    companyName: string,
    businessMail: string,
    password: string,
    confirmPassword: string
}

export default function Signup({ isRegistered, onRegisterSuccess }: SignupProps) {

    const formAction = isRegistered ? registerAction : loginAction
    const router = useRouter()

    async function handleSubmit(formData: FormData) {
        const res = await formAction(formData)
        if (res?.error) toast.error(res.error)
        else toast.success(res.success)
        if (formAction === registerAction) {
            onRegisterSuccess?.() // switch to login form
        } else {
            router.push('/employer') // go to employer page
        }
    }

    return (
        <div className=" w-full">

            <Form action={handleSubmit} className="flex flex-col gap-3 w-64">
                {
                    isRegistered &&
                    <input
                        placeholder="Enter your company name"
                        className="border p-2 rounded border-slate-400 w-100"
                        name='companyName'
                        required
                    />
                }

                <input
                    type="email"
                    placeholder="Enter your Business mail"
                    className="border p-2 rounded border-slate-400 w-100"
                    name='businessMail'
                    required
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    className="border p-2 rounded border-slate-400 w-100"
                    name='password'
                    required
                />

                {
                    isRegistered &&
                    <input
                        type="password"
                        placeholder="Enter confirm password"
                        className="border p-2 rounded border-slate-400 w-100"
                        name='confirmPassword'
                        required
                    />
                }
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-100 font-normal mt-3 hover:bg-blue-700"
                >
                    {isRegistered ? 'Sign Up' : 'Login'}
                </button>
            </Form>
        </div>
    );
}
