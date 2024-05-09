import { ObjectId } from 'mongodb'
import { Field, FieldType } from './field/field'
import db from '../lib/database'


const collection = db.collection("forms")

export default class Form {
    
    private _id: ObjectId
    private _title: string
    private _description: string
    private _fields: Field[]

    constructor(
        title: string,
        description: string,
        id?: ObjectId,
        fields?: Field[]
    ) {
        this._id = id ? id : new ObjectId()
        this._title = title
        this._description = description
        this._fields = fields ? fields : [ new Field(FieldType.TEXT, "email") ] 
    }

    get id(): ObjectId {
        return this._id
    }

    get title(): string {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }

    public addField(field: Field) {
        this._fields.push(field)
    }

    public insert() {
        collection.insertOne(this.toJson())
    }

    public static async find(id: ObjectId): Promise<Form | null> {
        const result = await collection.findOne({ _id: id })
        if (!result) {
            return null
        }

        return Form.fromJson(result)
    }

    public static async all(): Promise<Form[]> {
        const result = await collection.find().toArray()
        return result.map((form: any) => Form.fromJson(form))
    }

    public async update(): Promise<boolean> {
        const result = await collection.updateOne({ _id: this._id }, { $set: this.toJson() })

        return result.modifiedCount > 0
    }

    public async delete(): Promise<boolean> {
        const result = await collection.deleteOne({ _id: this._id })

        return result.deletedCount > 0
    }


    public toJson(): any {
        return {
            _id: this._id,
            title: this._title,
            description: this._description,
            fields: this._fields.map(field => field.toJson())
        }
    }

    public static fromJson(json: any): Form {
        return new Form(json.title, json.description,json._id , json.fields.map((field: any) => Field.fromJson(field)))
    }

}