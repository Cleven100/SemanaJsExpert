import Server from "./server.js";

const server = Server.listen(3001)
.on("listening", () => {
 console.log(`running at: ${server.address().port}`);
})
