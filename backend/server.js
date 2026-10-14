import { Server } from "socket.io";
import app from "./src/app.js"
import { createServer } from "node:http"

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("New User connected...");
    console.log(socket.id);
    socket.on("disconnect",()=>{
        console.log("User disconnected...");
    });
});

httpServer.listen(3000, () => {
    console.log("Server is running at port no. 3000");
});
