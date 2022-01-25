import "reflect-metadata"
import fp from "fastify-plugin"
import { createConnection, getConnectionOptions } from "typeorm"
import { Sensitivity } from "../modules/sensitivity/entity"

export default fp(async server => {
    try {
        const connectionOptions = await getConnectionOptions()
        Object.assign(connectionOptions, {
            options: { encrypt: false },
            entities: [Sensitivity]
        })

        console.log(`connecting to database: ${connectionOptions.type}...`)
        const connection = await createConnection(connectionOptions)
        console.log("database connected")

        server.decorate("db", {
            sensitivity: connection.getRepository(Sensitivity)
        })
    } catch (error) {
        console.log(error)
        console.log("make sure you have set .env variables - see .env.sample")
    }
})
