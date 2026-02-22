import mongoose, { models, Schema } from "mongoose";

const adminSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    passwrod:{
        type:String,
        required:true
    }
})

export const admins = models.adminSchema || mongoose.model("admins", adminSchema)