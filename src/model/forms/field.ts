import FieldType from "./fieldType"




abstract class Field {

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

    public isFilled(): boolean {
        return this._required && this._content !== undefined
    }

    abstract restriction(): boolean


    abstract toJson(): any


    static fromJson(json: any): Field {
        switch (json.type) {
            case FieldType.TEXT:
                return new TextField(json.name, json.required, json.regex, undefined)
            case FieldType.NUMBER:
                return new NumberField(json.name, json.required, json.min, json.max, undefined)
            case FieldType.BOOLEAN:
                return new BooleanField(json.name, json.required, undefined)
            case FieldType.DATE:
                return new DateField(json.name, json.required, json.min, undefined)
            case FieldType.SELECT:
                return new SelectField(json.name, json.required, json.options, json.options[0])
            default:
                throw new Error("Invalid type")
        }
    }
}

export default Field

export class TextField extends Field {
    
    private _regex: RegExp

    constructor(
        name: string,
        required: boolean,
        regex: string | RegExp,
        content?: string
    ) {
        super(name, required, FieldType.TEXT, content)
        if (typeof regex === 'string') {
            this._regex = new RegExp(regex)
        } else {
            this._regex = regex
        }
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
            regex: this._regex.source
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

export class DateField extends Field {

    private _min: Date

    constructor(
        name: string,
        required: boolean,
        min: Date,
        content?: Date
    ) {
        super(name, required, FieldType.DATE, content)
        this._min = min
    }

    get min(): Date {
        return this._min
    }

    public restriction(): boolean {
        if (typeof this.content === 'number') {
            this.content = new Date(this.content)
        }

        if (!(this.content instanceof Date)) {
            return false
        }

        return this.content >= this._min
    }

    public toJson(): any {
        return {
            name: this.name,
            required: this.required,
            content: this.content,
            type: this.type,
            min: this.min
        }
    }
}

export class BooleanField extends Field {

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

export class SelectField extends Field {

    private _options: string[]

    constructor(
        name: string,
        required: boolean,
        options: string[],
        content?: string
    ) {
        super(name, required, FieldType.SELECT, content)
        this._options = options
    }

    get options(): string[] {
        return this._options
    }

    public restriction(): boolean {
        return this._options.includes(this.content)
    }

    public toJson(): any {
        return {
            name: this.name,
            required: this.required,
            type: this.type,
            content: this.content,
            options: this.options
        }
    }
}