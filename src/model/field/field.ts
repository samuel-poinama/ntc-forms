

export enum FieldType {
    TEXT = 'text',
    NUMBER = 'number',
    DATE = 'date',
    BOOLEAN = 'boolean',
    SELECT = 'select',
    /*FILE = 'file',
    IMAGE = 'image',*/
}

export class Field {

    private _type: FieldType
    private _name: string
    private data: any

    constructor(type: FieldType, name: string) {
        this._type = type
        this._name = name
    }

    get type(): FieldType {
        return this._type
    }

    get name(): string {
        return this._name
    }

    toJson(): any {
        return {
            type: this._type,
            name: this._name,
            data: this.data
        }
    }

    static fromJson(json: any): Field {
        return new Field(json.type, json.name)
    }
    
}