import axios from "axios";
import { toast } from "react-toastify";

type CompanyDetails = {
    companyName: string;
    businessMail: string;
    password: string;
    confirmPassword: string;
};

export async function registerAction(companyDetails?: Partial<CompanyDetails>) {
    console.log(companyDetails, "company details in register");

    try {
        const res = await axios.post("/api/employer/registration", companyDetails, {
            headers: { "Content-Type": "application/json" },
        });
        console.log(res, "response");
        if (res.status == 201) {
            toast.success("Registration successful!");
            return res.data
        }

    } catch (err: any) {
        const msg = err.response?.data?.error || "Registration failed";
        toast.error(msg);
        console.error(msg);
    }
};

export async function loginAction(companyDetails?: Partial<CompanyDetails>) {
    console.log("login")
    try {
        const res = await axios.post("/api/employer/login", companyDetails, {
            headers: { "Content-Type": "application/json" },
        });
        console.log(res.data)
        if (res.status == 201) {
            toast.success("Login successfully completed")
            return res.data
        }
    } catch (err: any) {
        const msg = err.response?.data?.error || "login failed"
        toast.error(msg)
    }
}