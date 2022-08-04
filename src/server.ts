import "dotenv/config";
import http from "http";
import connect from "./utils/connectDb";
import logger from "./utils/logger";

import app from "./app";

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const launchServer = async function () {
  try {
    server.listen(PORT, () => {
      logger.log({
        level: "info",
        message: `Server is Up & Running on PORT: ${PORT}`,
      });
    });
    connect();
  } catch (error) {
    logger.log({
      level: "error",
      message: `\n\n Launching Server Error: ${error} \n\n`,
    });
    process.exit(1);
  }
};

launchServer();
