
'use client'
import Signup from "@/components/employer/Signup"
import Image from "next/image"
import { useState } from "react"

const page = () => {
    const [isRegistered, setIsRegistered] = useState<boolean>(false)
    
    return (
        <div className="h-screen w-screen overflow-hidden">

            {/* header */}
            <div className="p-2 py-4 flex items-center justify-between bg-slate-100">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7 text-blue-800 font-bold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                    </svg>
                    <h3 className="font-semibold text-2xl font-mono">Job<span className="text-blue-800">Portal</span></h3>
                </div>
                <div className="flex items-center text-sm text-slate-600 font-normal">
                    <p className="font-semibold">
                        {isRegistered ? 'Already have an account?' : 'Not registered yet?'}
                    </p>
                    <span onClick={()=>setIsRegistered(isRegistered == false)} className="mx-2 font-bold cursor-pointer text-blue-800">
                        {isRegistered ? 'Login' : 'Sign Up'}
                    </span>
                </div>
            </div>
            {/* body */}
            <main className="flex items-center px-4 ">
                <div className="w-1/3 px-5">
                    <div className="my-7">
                        <h1 className="text-3xl text-slate-800 font-bold">
                            Employer {isRegistered ? 'Sign Up': 'Login'}
                        </h1>
                        <p className="text-slate-600">Sign in to your employer account</p>
                    </div>
                    <div className="w-full">
                        <Signup isRegistered={isRegistered} />
                    </div>
                </div>
                <div className="w-2/3">
                    <Image
                        src="/manwithdesk.png"
                        width={1000}
                        height={1000}
                        alt="manwithdesk"
                        className=""
                    />
                </div>
            </main>
        </div>
    )
}

export default page