require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO: middlewares for cookies and populating user

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        }
    },
    info => {
        console.log(`Server running on http://localhost:${info.port}`);
    }
);
