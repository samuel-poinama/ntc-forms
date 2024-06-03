import Popup from "@/components/popup"
import { useEffect, useState } from "react"
import TextPopup from "./text-popup"
import NumberPopup from "./number-popup"
import DatePopup from "./date-popup"
import SelectPopup from "./select-popup"
import CheckBoxPopup from "./checkbox-popup"




export default function fieldPopup({ field, setField, error, isVisible, hidePopup, save } :
    { field: any, setField:(field: any) => void, error?: string, isVisible: boolean, hidePopup: () => void, save: () => void }) {
        const [types, setTypes] = useState([])

        const fetchFieldTypes = async () => {
            const res = await fetch("/api/forms/field/types")
            const fieldTypes = await res.json()
            setTypes(fieldTypes)
        }

        const selectType = () => {
            switch (field.type) {
                case "TEXT":
                    return <TextPopup field={field} setField={setField} />
                case "NUMBER":
                    return <NumberPopup field={field} setField={setField} />
                case "DATE":
                    return <DatePopup field={field} setField={setField} />
                case "SELECT":
                    return <SelectPopup field={field} setField={setField} />
                case "CHECKBOX":
                    return <CheckBoxPopup field={field} setField={setField} />
            }
                
        }

        useEffect(() => {
            fetchFieldTypes()
        }, [])

    return (
        <Popup isVisible={isVisible} error={error} hidePopup={hidePopup} save={save}>
            <div className="flex flex-col items-center h-96 overflow-y-auto">
                <h1 className="text-2xl font-semibold">ADD</h1>
                <div className="mt-10 p-8">
                    <div className="checkbox-container mb-6">
                        <label htmlFor="is-required" className="text-gray-700">Is required</label>
                        <input type="checkbox" id="is-required" name="is-required" className="ml-2"
                            onChange={(e) => setField({ ...field, isRequired: e.target.checked })}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="label" className="text-gray-700">Label</label>
                        <input value={field.label} type="text" id="label" name="label" className="w-full rounded-md
                        border border-gray-300 py-2 px-3 text-gray-700"
                        onChange={(e) => setField({ ...field, name: e.target.value })} />
                    </div>
                </div>
                <div className="mb-6">
                    <select value={field.type} name="type_forms" id="type_form" 
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700"
                    onChange={(e) => setField({ ...field, type: e.target.value })}>
                        <option value="default">Choose One</option>
                        {types.map((type: string) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    {selectType()}
                </div>
            </div>
        </Popup>
    )
}