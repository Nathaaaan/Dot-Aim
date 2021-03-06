import createServer from "./server"

//Port for the server
const PORT = process.env.PORT || "3000"
const server = createServer()

server.listen(+PORT, "0.0.0.0", (err, address) => {
    if (err) throw err
    console.log(`server listening on ${address}`)
})
