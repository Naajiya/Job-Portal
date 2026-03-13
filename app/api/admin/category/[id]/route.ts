import { dbConnect } from "@/lib/mongodb"
import { jobCategory } from "@/models/JobCategorys"
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect()
        const { id } = await context.params
        const deletedCategory = await jobCategory.findByIdAndDelete(id)

        if (!deletedCategory) {
            return NextResponse.json(
                { success: false, message: "category not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { success: true, message: "Category deleted successfully" },
            { status: 200 }
        )

    } catch (err) {
        return NextResponse.json(
            { success: false, error: "Server error" },
            { status: 500 }
        )
    }
}

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect()
        const { id } = await context.params
        const getDetails = await jobCategory.findById(id)
        if (!getDetails) {
            return NextResponse.json({ success: false, message: 'not valid item' })
        }
        return NextResponse.json({ success: true, data: getDetails }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ success: false, error: 'server error' }, { status: 500 })
    }
}

