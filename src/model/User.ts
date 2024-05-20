import db from "@/lib/database"
import { ObjectId } from "mongodb"



const collection = db.collection("users")

export enum Role {
    ADMIN = 0,
    VIEWER = 1,
    USER = 2
}


export class User {

    private _id: ObjectId
    private _email: string
    private _name: string
    private _image: string
    private _role: Role


    constructor(email: string, role?: Role, name?: string, image?: string, id?: ObjectId) {
        this._email = email
        this._role = role === undefined ? Role.USER : role
        this._name = name ? name : email
        this._image = image ? image : "/comunity.png"
        this._id = id ? id : new ObjectId()
    }

    set email(email: string) {
        this._email = email
    }

    set name(name: string) {
        this._name = name
    }

    set image(image: string) {
        this._image = image
    }

    set role(role: Role) {
        this._role = role
    }

    get role() {
        return this._role
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

    public static async find(id: string) : Promise<User | null> {
        const result = await collection.findOne({ _id: new ObjectId(id) })

        if (!result) {
            return null
        }

        return User.fromJson(result)
    }

    public static async all() : Promise<User[]> {
        const result = await collection.find().toArray()

        return result.map((user: any) => User.fromJson(user))
    }


    private static fromJson(json: any): User {
        return new User(json.email, Role[json.role as keyof typeof Role], json.name, json.image, json._id)
    }

    public toJson() {
        return {
            _id: this._id,
            email: this._email,
            name: this._name,
            image: this._image,
            role: Role[this._role]
        }
    }
}