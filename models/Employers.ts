import mongoose, { models, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const employerSchema = new Schema({
    companyName:{
        type: String,
        required:false
    },
    businessMail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
});

export const Employer = models.Employer || mongoose.model("Employer",employerSchema)