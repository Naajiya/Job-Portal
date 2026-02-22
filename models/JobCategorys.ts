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
        type:String,
        required:false
    }
})

export const jobCategory = models.JobCategoryies || mongoose.model("Employer", JobCategories)