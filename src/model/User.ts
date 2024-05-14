import db from "@/lib/database"
import { sign } from "jsonwebtoken"
import { ObjectId } from "mongodb"



const collection = db.collection("users")

enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}


export default class User {

    private _id: ObjectId
    private _email: string
    private _role: Role


    constructor(email: string,role?: Role, id?: ObjectId) {
        this._email = email
        this._role = role ? role : Role.USER
        this._id = id ? id : new ObjectId()
    }

    set email(email: string) {
        this._email = email
    }

    set role(role: Role) {
        this._role = role
    }

    public async insert() : Promise<boolean> {
        const result = await collection.insertOne(this.toJson())
        return result.acknowledged

    }

    public async update() : Promise<boolean> {
        const result = await collection.updateOne({_id: this._id}, {$set: this.toJson()})
        return result.modifiedCount > 0
    }

    public async delete() : Promise<boolean> {
        const result = await collection.deleteOne({_id: this._id})
        return result.deletedCount > 0
    }

    public static async findByEmail(email: string) : Promise<User | null> {
        const result = await collection.findOne({ email })

        if (!result) {
            return null
        }

        return User.fromJson(result)
    }


    private static fromJson(json: any): User {
        return new User(json.email, json.role, json._id)
    }

    public toJson() {
        return {
            email: this._email,
            _id: this._id,
            role: this._role
        }
    }
}