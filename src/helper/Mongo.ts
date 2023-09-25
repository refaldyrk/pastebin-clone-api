import mongoose from "mongoose";

export const mongoConnect = async  () => {
    await mongoose.connect(<string>Bun.env.MONGO_URL, {dbName: "pastebin"})
}