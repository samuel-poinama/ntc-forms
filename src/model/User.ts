import db from "@/lib/database"
import { ObjectId } from "mongodb"
import Role from "./role"



const collection = db.collection("users")




export default class User {

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

    get id() {
        return this._id
    }

    set email(email: string) {
        this._email = email
    }

    get email() {
        return this._email
    }

    get name() {
        return this._name
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
        const result = await collection.updateOne({_id: this._id} , {$set: this.toJson()})
        return result.modifiedCount > 0
    }

    public async delete() : Promise<boolean> {
        const result = await collection.deleteOne({_id: this._id})
        await db.collection("responses").deleteMany({userId: this._id})

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

    public static async all() : Promise<any[]> {
        const result = await collection.find().toArray()

        return result
    }

    public static async getLasts() : Promise<any[]> {
        const result = await collection.find().sort({_id: -1}).limit(5).toArray()

        return result
    }

    public static async getNumberOfUsers() : Promise<number> {
        const result = await collection.countDocuments()

        return result
    }

    private static fromJson(json: any): User {
        return new User(json.email, json.role, json.name, json.image, json._id)
    }

    public toJson() {
        return {
            _id: this._id,
            email: this._email,
            name: this._name,
            image: this._image,
            role: this._role
        }
    }
}