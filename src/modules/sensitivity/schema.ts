const sensitivitySchema = {
    id: { type: "string", format: "uuid" },
    value: { type: "number"},
    playerName: { type: "string"},
}

export const listSensitivitySchema = {
    summary: "list sensitivity",
    description: "list sensitivity",
    response: {
        200: {
            type: "array",
            items: {
                properties: sensitivitySchema
            }
        }
    }
}

export const postSensitivitySchema = {
    summary: "create sensitivity",
    description: "create sensitivity",
    body: {
        type: "object",
        properties: sensitivitySchema
    },
    response: {
        201: {
            type: "object",
            properties: sensitivitySchema
        }
    }
}
export const getSensitivitySchema = {
    summary: "get sensitivity",
    description: "get sensitivity",
    params: {
        type: "object",
        properties: sensitivitySchema
    },
    response: {
        200: {
            type: "object",
            properties: sensitivitySchema
        }
    }
}

export const deleteSensitivitySchema = {
    summary: "delete sensitivity",
    description: "delete sensitivity",
    params: {
        type: "object",
        properties: sensitivitySchema
    },
    response: {
        200: {
            type: "object"
        }
    }
}

export const printSensitivitySchema = {
    summary: "print sensitivity label",
    description: "print sensitivity label",
    params: {
        type: "object",
        properties: sensitivitySchema
    },
    response: {
        200: {
            type: "object",
            properties: { status: { type: "string" } }
        }
    }
}
