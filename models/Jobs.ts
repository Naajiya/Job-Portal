import { Schema } from "mongoose";

const jobs = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
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
    salaryRange: {
        type: Number,
        required: false
    },
    jobType: {
        type: String,
        enum: ["full-time", "part-time", "remote", "freelance"],
        required: true
    },
    deadLine: {
        type: Date,
        required: false
    }
})