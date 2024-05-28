import db from "@/lib/database"
import Field from "./field"
import Form from "./forms"
import { ObjectId } from "mongodb"
import { User } from "../User"




const collection = db.collection('responses')

export default class Response {

    private _id: ObjectId
    private _userId: ObjectId
    private _formId: ObjectId
    private _fields: Field[]

    public constructor(form: Form, user: User)
    public constructor(id: ObjectId, userId: ObjectId, formId: ObjectId, fields: Field[])

    public constructor(...arr: any[]) {
        if (arr.length === 2) {
            const form: Form = arr[0]
            const user: User = arr[1]

            this._id = new ObjectId()
            this._userId = user.id
            this._formId = form.id
            this._fields = form.fields
        } else {
            this._id = arr[0]
            this._userId = arr[1]
            this._formId = arr[2]
            this._fields = arr[3]
        }

    }

    get fields(): Field[] {
        return this._fields
    }

    public async insert() : Promise<boolean> {
        const response = await collection.insertOne(this.toJson())
        return response.acknowledged
    }

    public async remove() : Promise<boolean> {
        const response = await collection.deleteOne({_id: this._id})
        return response.deletedCount > 0
    }

    static async find(id: string): Promise<Response | null> {
        const response = await collection.findOne({ _id: new ObjectId(id) })
        if (!response) {
            return null
        }

        return Response.fromJSON(response)
    }


    static async getByUser(user: User): Promise<Response[]> {
        const responses = await collection.find({ userId: user.id }).toArray()

        return responses.map((response: any) => Response.fromJSON(response))
    }

    static async getByName(name: string): Promise<any[]> {
        const responses = await db.collection('response_with_title').find({}).toArray()

        return responses
    }

    toJson(): any {
        return {
            _id: this._id,
            userId: this._userId,
            formId: this._formId,
            fields: this._fields
        }
    }

    static fromJSON(json: any): Response {
        return new Response(json._id, json.userId, json.formId, json.fields)
    }
}