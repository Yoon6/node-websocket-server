const {WebSocketServer} = require("ws");
// const express = require("express");
// const app = express();
//
// app.use(express.static("public"));
//
// app.listen(8000, () => {
//     console.log(`Example app listening on port 8000`);
// })

const wss = new WebSocketServer({port: 8001})

wss.on("connection", ws => {
    ws.on("message", data => {
        console.log(`${data}`);
        // console.log(`${data.length}`);
    })
});