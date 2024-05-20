import FieldType from "./fieldType"




export abstract class Field {

    private _name: string
    private _isRequired: boolean
    private _type: FieldType
    private _content: any

    constructor(name: string, isRequired: boolean, type: FieldType, content?: any) {
        this._name = name
        this._isRequired = isRequired
        this._type = type
        this._content = content
    }

    public get name(): string {
        return this._name
    }

    public get isRequired(): boolean {
        return this._isRequired
    }

    public get type(): FieldType {
        return this._type
    }

    public get content(): any {
        return this._content
    }

    abstract toJson(): any


    static fromJson(json: any): Field {
        switch (json.type) {
            case FieldType.TEXT:
                return new TextField(json.name, json.isRequired, json.minLength, json.maxLength, json.content)
            case FieldType.NUMBER:
                return new NumberField(json.name, json.isRequired, json.min, json.max, json.content)
            case FieldType.BOOLEAN:
                return new BooleanField(json.name, json.isRequired, json.content)
            default:
                throw new Error("Invalid type")
        }
    }
}

export class TextField extends Field {
    
    private _minLength: number
    private _maxLength: number

    constructor(
        name: string,
        isRequired: boolean,
        minLength: number,
        maxLength: number,
        content?: string
    ) {
        super(name, isRequired, FieldType.TEXT, content)
        this._minLength = minLength
        this._maxLength = maxLength
    }

    get minLength(): number {
        return this._minLength
    }

    get maxLength(): number {
        return this._maxLength
    }

    public toJson(): any {
        return {
            name: this.name,
            isRequired: this.isRequired,
            type: this.type,
            content: this.content,
            minLength: this.minLength,
            maxLength: this.maxLength,
        }
    }
}

export class NumberField extends Field {
    private _min: number
    private _max: number

    constructor(
        name: string,
        isRequired: boolean,
        min: number,
        max: number,
        content?: number
    ) {
        super(name, isRequired, FieldType.NUMBER, content)
        this._min = min
        this._max = max
    }

    get min(): number {
        return this._min
    }

    get max(): number {
        return this._max
    }

    public toJson(): any {
        return {
            name: this.name,
            isRequired: this.isRequired,
            content: this.content,
            type: this.type,
            min: this.min,
            max: this.max
        }
    }
}

export default class BooleanField extends Field {

    constructor(
        name: string,
        isRequired: boolean,
        content?: boolean
    ) {
        super(name, isRequired, FieldType.BOOLEAN, content)
    }

    public toJson(): any {
        return {
            name: this.name,
            isRequired: this.isRequired,
            type: this.type,
            content: this.content
        }
    }
}