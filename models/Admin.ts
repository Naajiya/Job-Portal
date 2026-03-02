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

export const Admin = models.Admin || mongoose.model("Admin", adminSchema);