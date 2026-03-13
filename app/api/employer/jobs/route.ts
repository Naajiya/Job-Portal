import { dbConnect } from "@/lib/mongodb";
import { Jobs } from "@/models/Jobs";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try{
        console.log()
        await dbConnect()
        const body= await req.json()
        const {postName,postDescription,lastDate,salary,category} = body
        if(!postName || !postDescription){
           return NextResponse.json({success:false, message:'postn  ame and description are required'}, {status:400})
        }
        const newJob = await Jobs.create({postDescription,postName,lastDate,salary,category})
        return NextResponse.json({success:true, data:newJob}, {status:200})
    }catch(err){
       return  NextResponse.json({error:'error'}, {status: 500})
    }
}