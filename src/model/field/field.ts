

export enum FieldType {
    TEXT = 'TEXT',
    NUMBER = 'NUMBER',
    DATE = 'DATE',
    BOOLEAN = 'BOOLEAN',
    SELECT = 'SELECT',
    /*FILE = 'file',
    IMAGE = 'image',*/
}

export class Field {

    private _type: FieldType
    private _name: string

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
        }
    }

    static fromJson(json: any): Field {
        return new Field(json.type, json.name)
    }
    
}