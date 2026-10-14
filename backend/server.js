import app from "./src/app.js"
import { createServer } from "node:http"
import intializeSocket from "./src/sockets/socket.server.js"

const httpServer = createServer(app);

intializeSocket(httpServer);
httpServer.listen(3000, () => {
    console.log("Server is running at port no. 3000");
})

