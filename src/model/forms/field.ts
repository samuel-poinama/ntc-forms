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

    abstract restriction(): true | { error: string, field: string }


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
            case FieldType.CHECKBOX:
                return new CheckBoxField(json.name, json.required, json.min, json.max, json.options, undefined)
            case FieldType.SELECT:
                return new SelectField(json.name, json.required, json.options, undefined)
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

    public restriction(): true | { error: string, field: string } {
        if (typeof this.content !== 'string') {
            return { error: "content must be a string", field: this.name }
        }

        return this._regex.test(this.content) ? true : { error: "invalid content", field: this.name }
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

    public restriction(): true | { error: string, field: string } {
        try {
            this.content = Number(this.content)
        } catch (e) {
            return { error: "content must be a number", field: this.name }
        }
        
         return (this.content >= this._min && this.content <= this._max) ? true : 
            { error: "invalid content", field: this.name }
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

    public restriction(): true | { error: string, field: string } {
        if (typeof this.content === 'number') {
            this.content = new Date(this.content)
        }

        if (!(this.content instanceof Date)) {
            return { error: "content must be a date", field: this.name }
        }
        return (this.content >= this._min) ? true : { error: "invalid content", field: this.name }
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

    public restriction(): true | { error: string, field: string } {
        try {
            this.content = Boolean(this.content)
        } catch (e) {
            return { error: "content must be a boolean", field: this.name }
        }
        return (!this.required || this.content) ? true : 
            { error: "content must be true", field: this.name }
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

    public restriction(): true | { error: string, field: string } {
        if (!this._options.includes(this.content)) {
            return { error: "invalid content", field: this.name }
        }
        return true
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


export class CheckBoxField extends Field {

    private _min: number
    private _max: number
    private _options: string[]
    
    constructor(
        name: string,
        required: boolean,
        min: number,
        max: number,
        options: string[],
        content?: string[]
    ) {
        super(name, required, FieldType.CHECKBOX, content)
        this._min = min
        this._max = max
        this._options = options
        this.content = content ? content : []
    }

    get min(): number {
        return this._min
    }

    get max(): number {
        return this._max
    }

    get options(): string[] {
        return this._options
    }

    public restriction(): true | { error: string, field: string } {
        if (this.content.length < this._min) {
            return { error: "content must have at least " + this._min + " elements", field: this.name }
        }

        if (this.content.length > this._max) {
            return { error: "content must have at most " + this._max + " elements", field: this.name }
        }
        
        for (const option of this.content) {
            if (!this._options.includes(option)) {
                return { error: "invalid option " + option, field: this.name }
            }
        }

        return true
    }

    public toJson(): any {
        return {
            name: this.name,
            required: this.required,
            type: this.type,
            content: this.content,
            min: this.min,
            max: this.max,
            options: this.options
        }
    }


}
