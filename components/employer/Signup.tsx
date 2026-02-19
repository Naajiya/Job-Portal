'use client'
import React, { useState } from 'react';
import Form from 'next/form';
import { loginAction } from '@/app/employer/authentication/action';

type SignupProps = {
  isRegistered: boolean;
};

type companyDetails = {
    companyName:string,
    businessMail: string,
    password:string,
    confirmPassword:string
}

export default function Signup({ isRegistered }: SignupProps) {
    const [companyDetails, setCompanyDetails] = useState<Partial<companyDetails>>();


    const handleLogin = async (e: any) => {
        e.preventDefault();
        const res = await fetch("/api/test", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(companyDetails)
        })
        console.log(res, "respon after login")
    }

    const handleRegister = async(e:any)=>{
        e.preventDefault()
        console.log("handle register")
    }

    return (
        <div className=" w-full">

            <form className="flex flex-col gap-3 w-64">
                {
                    isRegistered &&
                    <input
                        name="Company Name"
                        placeholder="Enter your company name"
                        className="border p-2 rounded border-slate-400 w-100"
                        value={companyDetails?.companyName}
                        onChange={(e) => setCompanyDetails({ ...companyDetails, companyName: e.target.value })}
                        required
                    />
                }

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your Business mail"
                    className="border p-2 rounded border-slate-400 w-100"
                    value={companyDetails?.businessMail}
                    onChange={(e) => setCompanyDetails({ ...companyDetails, businessMail: e.target.value })}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="border p-2 rounded border-slate-400 w-100"
                    value={companyDetails?.password}
                    onChange={(e) => setCompanyDetails({ ...companyDetails, password: e.target.value })}
                    required
                />

                {
                    isRegistered &&
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter confirm password"
                        className="border p-2 rounded border-slate-400 w-100"
                        value={companyDetails?.confirmPassword}
                        onChange={(e) => setCompanyDetails({ ...companyDetails, confirmPassword: e.target.value })}
                        required
                    />
                }
                <button
                    type="submit" onClick={(e) => isRegistered ? handleRegister(e) : handleLogin(e) }
                    className="bg-blue-600 text-white px-4 py-2 rounded w-100 font-normal mt-3 hover:bg-blue-700"
                >
                   {isRegistered ? 'Sign Up' : 'Login'}
                </button>
            </form>
        </div>
    );
}
