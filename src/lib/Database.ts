import { MongoClient } from "mongodb"

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not in the environment")
}

const client = new MongoClient(process.env.MONGO_URI)

client.connect()

const db = client.db()

export default db
