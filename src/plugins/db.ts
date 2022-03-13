import "reflect-metadata"
import fp from "fastify-plugin"
import { createConnection, getConnectionOptions } from "typeorm"
import { Sensitivity } from "../modules/sensitivity/entity"

//Connection to the database
export default fp(async server => {
    try {
        const connectionOptions = await getConnectionOptions()
        Object.assign(connectionOptions, {
            options: { encrypt: false },
            entities: [Sensitivity]
        })
        const connection = await createConnection(connectionOptions)

        server.decorate("db", {
            sensitivity: connection.getRepository(Sensitivity)
        })
    } catch (error) {
        console.log(error)
        console.log("Need to set .env or other error")
    }
})
