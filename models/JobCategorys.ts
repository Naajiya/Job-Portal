import mongoose, { models, Schema } from "mongoose";

const JobCategories = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    status:{
        type:Boolean,
        required:false
    }
})

export const jobCategory =models.JobCategory || mongoose.model("JobCategory", JobCategories);