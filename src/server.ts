import config from "config";
import http from "http";
import connect from "./utils/connectDb";

import app from "./app";

const PORT = config.get<number>("port");
const server = http.createServer(app);

const launchServer = async function () {
  try {
    server.listen(PORT, () => {
      console.log(`Server is Up & Running on PORT: ${PORT}`);
    });
    connect();
  } catch (error) {
    console.log(`Error Ocurred: ${error}`);
    process.exit(1);
  }
};

launchServer();
