import mongoose, { models } from "mongoose";
import { Schema } from "mongoose";
import { jobCategory } from "./JobCategorys";

const jobs = new Schema({
    postName: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
    },
    experianceLevel: {
        type: Number,
        required: false
    },
    salary: {
        type: Number,
        required: false
    },
    jobType: {
        type: String,
        enum: ["full-time", "part-time", "remote", "freelance"],
        required: false
    },
    jobCategory:{
        type:String,
        required:false
    },
    lastDate: {
        type: Date,
        required: false
    },
})

export const Jobs = models.Jobs || mongoose.model("Jobs", jobs);