import { Server } from "socket.io"
export default function intializeSocket(httpServer) {

    const io = new Server(httpServer);

    io.on("connection", (socket) => {
        console.log("New user connected...");
        console.log("socket id:", socket.id);
        socket.on("disconnected", () => {
            console.log("User disconnected");
        })
        socket.on("elon", (msg) => {
            console.log("user fired elon...");
            console.log("user sent message:", msg);
            io.emit("musk","server brodcasting a musk");
        })

    });

}