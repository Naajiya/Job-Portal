import { dbConnect } from "@/lib/mongodb"
import { jobCategory } from "@/models/JobCategorys"
import { Jobs } from "@/models/Jobs"
import { error } from "console"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        await dbConnect()
        console.log('connet')
        const { title, description, status } = await req.json()
        if (!title) {
            return NextResponse.json({ success: false, error: "Title is required" }, { status: 400 });
        }

        const category = await jobCategory.create({ title, description, status })
        console.log(category)
        return NextResponse.json({ success: true, data: category }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect()
        const categories = await jobCategory.find()
        if (!categories) {
            return NextResponse.json({ success: false, error: 'something went wrong' }, { status: 500 })
        }
        return NextResponse.json({ success: true, data: categories }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
) {
    try {
        await dbConnect()
        const { _id, title, description, status } = await req.json()
        const updatedCategory = await jobCategory.findByIdAndUpdate(
            _id,
            { title, description, status },
            { new: true }
        )
        if (!updatedCategory) {
            return NextResponse.json({ success: false, message: 'not valid item' })
        }
        return NextResponse.json({ success: true, data: updatedCategory }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ success: false, error: 'server error' }, { status: 500 })
    }
}