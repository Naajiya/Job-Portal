    import mongoose from "mongoose";

    const MONGODB_URI = process.env.MONGODB_URI as string;

    export async function dbConnect() {
    try {
        if (mongoose.connection.readyState >= 1) return;
        await mongoose.connect(MONGODB_URI);
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err);
    }
    }