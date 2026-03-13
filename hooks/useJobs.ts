import { Jobs } from "@/types/category";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export function useJobs() {
    const [jobs, setJobs] = useState<Partial<Jobs>>({})
    const route = useRouter()

    async function addJob() {
        try {
            const response = await fetch('/api/employer/jobs', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jobs),
            });
            console.log(response)
            if (response.status == 500) {
                toast.error('something went problem')
                return
            }
            if (response.status !== 200) {
                toast.warn('job title and description are required')
                return
            }

            toast.success('Your post is published')
            route.push('http://localhost:3000/employer/jobs')
            // NextURL('/')
        } catch (err) {
            console.log(err)
        }
    }

    return {
        jobs,
        setJobs,
        addJob
    }
}