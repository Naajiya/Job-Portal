import { dbConnect } from "@/lib/mongodb";
import { Employer } from "@/models/Employers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json()
        const { employerName, email } = body

        if (!employerName || !email) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 })
        }
        const newUser = await Employer.create({ employerName, email });
        return NextResponse.json(newUser, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}