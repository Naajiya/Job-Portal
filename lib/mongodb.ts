import { Admin } from "@/models/Admin";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function dbConnect() {
    try {
        if (mongoose.connection.readyState >= 1) return;
        await mongoose.connect(MONGODB_URI);
        console.log("✅ MongoDB Connected");

        const admin = await Admin.findOne({ email: 'admin@gmail.com' });
        if (!admin) {
            const hashed = await bcrypt.hash("admin@123", 10);
            await  Admin.create({ email: "admin@gmail.com", password: hashed });
            console.log("🧩 Default admin created");
        }
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err);
    }
}