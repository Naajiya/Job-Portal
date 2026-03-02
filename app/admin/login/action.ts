"use server"

import { dbConnect } from "@/lib/mongodb"
import { Admin } from "@/models/Admin"
import bcrypt from "bcryptjs"

export async function LoginAction(formData: FormData): Promise<any> {
    try {
        await dbConnect()
        const email = formData.get('email')
        const password = formData.get("password")?.toString();

        if (!email || !password) {
            return { error: 'All fields are requried' }
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return { error: "Admin not found" };
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return { error: "Invalid password"};
        }
        return {
            status:200,
            success:'logined successfully'
        }

    } catch (err: any) {
        return { error: err.message || 'login failed' }
    }
}