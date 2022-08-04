import mongoose from "mongoose";
import logger from "../utils/logger";

export default async function () {
  try {
    await mongoose.connect(process.env.DB_URI!);
    logger.log({
      level: "info",
      message: "Database Connected Successfully",
    });
  } catch (error) {
    logger.log({
      level: "error",
      message: `\n\n Database Connection Error: ${error} \n\n`,
    });
    process.exit(1);
  }
}
