import db from "@/lib/database"
import { sign } from "jsonwebtoken"
import { ObjectId } from "mongodb"

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not in the environment")
}

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined')
}

const collection = db.collection("users")
export default class User {
    
    private _id: ObjectId
    private _email: string
    private _picture: string
    private _token: string | null

    constructor( 
        email: string,
        token?: string, 
        id?: ObjectId,
        picture?: string
    ) {
        this._id = id ? id : new ObjectId()
        this._email = email
        this._token = token ? token : null
        this._picture = picture ? picture : "/assets/profile.png"
    }


    generateToken(): string {
        this._token = sign({ email: this._email, picture: this._picture }, process.env.JWT_SECRET as string, { expiresIn: "24h" })
        return this._token
    }

    async insert(password: string): Promise<boolean> {
        const json = {
            _id: this._id,
            email: this._email,
            picture: this._picture,
            token: this._token,
            password: password
        }

        const result = await collection.insertOne(json)
        return result.acknowledged
    }

    async update(password?: string): Promise<boolean> {
        const json: any = {
            email: this._email,
            picture: this._picture,
            token: this._token,
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

    static async checkCredentials(email: string, password: string): Promise<User | null> {
        const json = await collection.findOne({ email })
        if (!json) {
            return null
        }

        if (json.password !== password) {
            return null
        }

        return this.fromJson(json)
    }

        

    static async findByEmail(email: string): Promise<User | null> {
        const json = await collection.findOne({ email: email })
        if (!json) {
            return null
        }

        return this.fromJson(json)
    }


    static fromJson(json: any): User {
        return new User(json.email, json.token, json._id, json.picture)
    }
}