import { ObjectId } from 'mongodb'
import Field from './field'
import db from '@/lib/database'


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
        this._fields = fields ? fields : [] 
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

    get description(): string {
        return this._description
    }

    set description(description: string) {
        this._description = description
    }

    get fields(): Field[] {
        return this._fields
    }

    public addField(field: Field) {
        this._fields.push(field)
    }

    public getField(name: string) : Field | null {
        return this._fields.find(field => field.name === name) || null
    }

    public removeField(field: Field) {
        this._fields = this._fields.filter(f => f !== field)
    }

    public size(): number {
        return this._fields.length
    }

    public async insert(): Promise<boolean> {
        const result = await collection.insertOne(this.toJson())

        return result.acknowledged
    }

    public async remove(): Promise<boolean> {
        const result = await collection.deleteOne({ _id: this._id })

        return result.deletedCount > 0
    }

    public static async find(id: string): Promise<Form | null> {
        const result = await collection.findOne({ _id: new ObjectId(id) })
        if (!result) {
            return null
        }

        return Form.fromJson(result)
    }

    public static async all(): Promise<Form[]> {
        const result = await collection.find().toArray()
        const forms = result.map((form: any) => Form.fromJson(form).toJson())
        return forms
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
            fields: this._fields.map(field => {
                const out = field.toJson()
                console.log(out)
                return out
            })
        }
    }

    public static fromJson(json: any): Form {
        return new Form(json.title, json.description,json._id , json.fields.map((field: any) => Field.fromJson(field)))
    }

}