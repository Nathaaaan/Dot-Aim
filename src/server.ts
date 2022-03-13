import fastify from "fastify"
import cors from "cors"

//import auth from "./plugins/auth"
import db from "./plugins/db"
//import healthHandler from "./modules/health/routes"
//import productsHandler from "./modules/products/routes"
//import inventoryHandler from "./modules/inventory/routes"
import sensitivityHandler from "./modules/sensitivity/routes"

//Docs and servers
function createServer() {
    const server = fastify({ logger: { prettyPrint: true } })
    //server.use(cors())

    server.register(require("fastify-oas"), {
        routePrefix: "/docs",
        exposeRoute: true,
        swagger: {
            info: {
                title: "inventory api",
                description: "api documentation",
                version: "0.1.0"
            },
            servers: [
                { url: "http://localhost:3000", description: "development" },
                {
                    url: "https://<production-url>",
                    description: "production"
                }
            ],
            schemes: ["http"],
            consumes: ["application/json"],
            produces: ["application/json"],
            //security: [{ bearerAuth: [] }],
            /*securityDefinitions: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }*/
        }
    })

    //server.register(auth)
    server.register(db)
    server.register(sensitivityHandler)

    server.setErrorHandler((error, req, res) => {
        req.log.error(error.toString())
        res.send({ error })
    })

    /*
    Code that generate a token
    server.ready(() => {
      const token = server.jwt.sign({ user_id: 'swr_user_id' })
      console.log(token)
    })
    */

    return server
}

export default createServer
