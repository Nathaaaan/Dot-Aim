import {
    getSensitivitySchema,
    postSensitivitySchema,
    listSensitivitySchema,
    deleteSensitivitySchema,
    printSensitivitySchema
} from "./schema"

export default function inventoryHandler(server, options, next) {
    server.get(
        "/sensitivity",
        { schema: listSensitivitySchema },
        async (req, res) => {
            const sensitivity = await server.db.sensitivity.find({
            })

            res.send(sensitivity)
        }
    )
    server.post(
        "/sensitivity",
        { schema: postSensitivitySchema },
        async (req, res) => {
            const {value, playerName} = req.body
            /*const { quantity, product_id } = req.body
            if (!product_id) {
                req.log.info(`product not found: ${product_id}`)
                return res.code(404).send("product not found")
            }*/

            //req.log.info(`find product ${product_id} from db`)
            //const sensitivity = await server.db.products.findOne(id)

            /*if (!product) {
                req.log.info(`product not found: ${id}`)
                return res.code(404).send("product not found")
            }*/

            req.log.info(`save sensitivity to db`)
            const sensitivity = await server.db.sensitivity.save({
                value,
                playerName,
            })

            res.code(201).send(sensitivity)
        }
    )
    server.get(
        "/sensitivity/:id",
        { schema: getSensitivitySchema},
        async (req, res) => {
            req.log.info(`get sensitivity ${req.params.id} from db`)
            const sensitivity = await server.db.sensitivity.findOne(req.params.id)
            // if (req.user.user_id !== inventory.owner) {
            //   throw new Error("Unauthorized access")
            // }
            res.send(sensitivity)
        }
    )
    server.delete(
        "/sensitivity/:id",
        { schema: deleteSensitivitySchema},
        async (req, res) => {
            req.log.info(`get sensitivity ${req.params.id} for deletion`)
            const sensitivity = await server.db.sensitivity.findOne(req.params.id)
            req.log.info(`delete sensitivity: ${sensitivity.id}`)
            await server.db.sensitivity.remove(sensitivity)
            res.code(200).send({})
        }
    )
    next()
}
