import { dbConnect } from "@/lib/mongodb";
import { Employer } from "@/models/Employers";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json()
        const { password, businessMail } = body

        if (!password || !businessMail) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 })
        }

        const user = await Employer.findOne({ businessMail });
        if (!user) {
            return NextResponse.json({ error: "Email id not match" }, { status: 401 })
        }

        if (user.password !== password) return NextResponse.json({ error: "Invalid password" }, { status: 401 });

        const employerDetails = { password, businessMail }
        return NextResponse.json(employerDetails, { status: 201 });

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}