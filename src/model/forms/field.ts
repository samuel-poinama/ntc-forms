import FieldType from "./fieldType"




export abstract class Field {

    private _name: string
    private _required: boolean
    private _type: FieldType
    private _content: any

    constructor(name: string, required: boolean, type: FieldType, content?: any) {
        this._name = name
        this._required = required
        this._type = type
        this._content = content
    }

    public get name(): string {
        return this._name
    }

    public get required(): boolean {
        return this._required
    }

    public get type(): FieldType {
        return this._type
    }

    public get content(): any {
        return this._content
    }

    public set content(content: any) {
        this._content = content
    }

    abstract restriction(): boolean


    abstract toJson(): any


    static fromJson(json: any): Field {
        switch (json.type) {
            case FieldType.TEXT:
                return new TextField(json.name, json.required, json.regex, "")
            case FieldType.NUMBER:
                return new NumberField(json.name, json.required, json.min, json.max, json.min)
            case FieldType.BOOLEAN:
                return new BooleanField(json.name, json.required, false)
            default:
                throw new Error("Invalid type")
        }
    }
}

export class TextField extends Field {
    
    private _regex: RegExp

    constructor(
        name: string,
        required: boolean,
        regex: RegExp,
        content?: string
    ) {
        super(name, required, FieldType.TEXT, content)
        this._regex = regex
    }

    public restriction(): boolean {
        if (typeof this.content !== 'string') {
            return false
        }

        return this._regex.test(this.content)
    }

    public toJson(): any {
        return {
            name: this.name,
            required: this.required,
            type: this.type,
            content: this.content,
            regex: this._regex
        }
    }
}

export class NumberField extends Field {
    private _min: number
    private _max: number

    constructor(
        name: string,
        required: boolean,
        min: number,
        max: number,
        content?: number
    ) {
        super(name, required, FieldType.NUMBER, content)
        this._min = min
        this._max = max
    }

    get min(): number {
        return this._min
    }

    get max(): number {
        return this._max
    }

    public restriction(): boolean {
        if (typeof this.content !== 'number') {
            return false
        }

        return this.content >= this._min && this.content <= this._max
    }

    public toJson(): any {
        return {
            name: this.name,
            required: this.required,
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
        required: boolean,
        content?: boolean
    ) {
        super(name, required, FieldType.BOOLEAN, content)
    }

    public restriction(): boolean {
        return typeof this.content === 'boolean'
    }

    public toJson(): any {
        return {
            name: this.name,
            required: this.required,
            type: this.type,
            content: this.content
        }
    }
}