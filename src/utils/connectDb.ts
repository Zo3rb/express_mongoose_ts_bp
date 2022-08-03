import mongoose from "mongoose";

export default async function () {
  try {
    await mongoose.connect(process.env.DB_URI!);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(`Error Ocurred During Connecting Database: ${error}`);
    process.exit(1);
  }
}
