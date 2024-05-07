import db from "@/lib/Database"
import { ObjectId,  } from "mongodb"

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not in the environment")
}

const collection = db.collection("users")
export default class User {
    
    private _id: ObjectId
    private _email: string
    private _picture: string
    private _sessionId: string | null

    constructor( 
        email: string,
        sessionId?: string, 
        id?: ObjectId,
        picture?: string
    ) {
        this._id = id ? id : new ObjectId()
        this._email = email
        this._sessionId = sessionId ? sessionId : null
        this._picture = picture ? picture : "/assets/profile.png"
    }


    generateSessionId() {
        this._sessionId = new ObjectId().toHexString()
    }

    async insert(password: string): Promise<boolean> {
        const json = {
            _id: this._id,
            email: this._email,
            picture: this._picture,
            sessionId: this._sessionId,
            password: password
        }

        const result = await collection.insertOne(json)
        return result.acknowledged
    }

    async update(password?: string): Promise<boolean> {
        const json: any = {
            email: this._email,
            picture: this._picture,
            sessionId: this._sessionId,
        }

        if (password) {
            json.password = password
        }

        const result = await collection.updateOne({ _id: this._id }, { $set: json })
        return result.modifiedCount === 1
    }

    async delete(): Promise<boolean> {
        const result = await collection.deleteOne({ _id: this._id })
        return result.deletedCount === 1
    }

    static async findByEmail(email: string): Promise<User | null> {
        const json = await collection.findOne({ email: email })
        if (!json) {
            return null
        }

        return new User(json.email, json.sessionId, json._id, json.picture)
    }
}