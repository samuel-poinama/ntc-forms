import Text from "./form/content/text"
import Number from "./form/content/number"
import Boolean from "./form/content/bool"
import Select from "./form/content/select"
import Date from "./form/content/date"
import CheckBox from "./form/content/checkbox"




export default function Viewer({ fields, edit, onRemove }: { fields: any, edit: any, onRemove: (i: number) => void }) {
    return (
        <div>
            {fields.map((field: any, index: number) => {
                switch (field.type) {
                    case "TEXT":
                        return (
                            <Text key={index} field={field} edit={edit} onRemove={() => onRemove(index)} />
                        )
                    case "NUMBER":
                        return (
                            <Number key={index} field={field} edit={edit} onRemove={() => onRemove(index)} />
                        )
                    case "BOOLEAN":
                        return (
                            <Boolean key={index} field={field} edit={edit} onRemove={() => onRemove(index)} />
                        )
                    case "SELECT":
                        return (
                            <Select key={index} field={field} edit={edit} onRemove={() => onRemove(index)} />
                        )
                    case "DATE":
                        return (
                            <Date key={index} field={field} edit={edit} onRemove={() => onRemove(index)} />
                        )
                    case "CHECKBOX":
                        return (
                            <CheckBox key={index} field={field} edit={edit} onRemove={() => onRemove(index)} />
                        )
                    }
                    
            })}
        </div>
    )
}