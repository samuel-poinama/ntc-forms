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

    get formId(): ObjectId {
        return this._formId
    }

    public async insert() : Promise<boolean> {
        const response = await collection.insertOne(this.toJson())
        return response.acknowledged
    }

    public async remove() : Promise<boolean> {
        const response = await collection.deleteOne({_id: this._id})
        return response.deletedCount > 0
    }

    public isFilled(): boolean {
        for (const field of this._fields) {
            
            if (!field.restriction()) {
                return false
            }
            
            if (field.required && field.content === undefined) {
                return false
            }
        }
        return true
    }

    public async infos(): Promise<any> {
        const result = await db.collection('reponses_user_title').findOne({ _id: this._id })
        return result
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

    static async all(): Promise<any[]> {
        const responses = await db.collection('reponses_user_title').find({}).toArray()
        return responses
    }

    static async getByForm(form: Form): Promise<any[]> {
        const responses = await db.collection('reponses_user_title').find({ formId: form.id }).toArray()
        return responses
    }

    toJson(): any {
        const fields = this._fields.map((field) => field.toJson())

        return {
            _id: this._id,
            userId: this._userId,
            formId: this._formId,
            fields: fields
        }
    }

    static fromJSON(json: any): Response {
        const fields = json.fields.map((field: any) => Field.fromJson(field))
        return new Response(json._id, json.userId, json.formId, fields)
    }
}