import { dbConnect } from "@/lib/mongodb";
import { Employer } from "@/models/Employers";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json()
        const { companyName, businessMail, password, confirmPassword } = body

        if (!companyName || !businessMail || !password || !confirmPassword) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 })
        }
        if (password != confirmPassword) {
            return NextResponse.json({ error: 'Password not match' }, { status: 400 })
        }
        const newUser = await Employer.create({ companyName, businessMail, password });
        return NextResponse.json(newUser, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}