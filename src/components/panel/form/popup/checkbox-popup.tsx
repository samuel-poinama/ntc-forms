import { useState } from 'react'




export default function CheckBoxPopup({ field, setField }: { field: any, setField: (field: any) => void }) {
    const [option, setOption] = useState("")


    return (
        <div>
            <div className="text-field-container mb-6 flex items-center">
                <label className="text-sm text-gray-500">max selection</label>
                <input type="number" placeholder="Enter number"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 mr-2"
                    value={field.max} onChange={(e: any) => setField({ ...field, max: e.target.value })} />
                <label className="text-sm text-gray-500">min selection</label>
                <input type="number" placeholder="Enter number"
                    className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 mr-2"
                    value={field.min} onChange={(e: any) => setField({ ...field, min: e.target.value })} />
            </div>

            <div className="text-field-container mb-6 flex items-center">
                <label className="text-sm text-gray-500">Option</label>
                <input type="text" placeholder="Enter text" 
                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 mr-2"
                value={option} onChange={(e: any) => setOption(e.target.value)} />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => {
                    setField({ ...field, options: field.options ? [...field.options, option] : [option] })
                    setOption("")
                }
                }>
                    +
                </button>
            </div>
            <div className="scrollable-box max-h-80 overflow-y-auto p-4 border border-gray-300 rounded-md">
                <div className="lorem-text text-sm text-gray-500">
                    {field.options?.map((option: string, index: number) => (
                        <div key={index} className="flex justify-between items-center mb-2">
                            <p>{option}</p>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md"
                            onClick={() => setField({ ...field, options: field?.options.filter((opt: string) => opt !== option) })}>
                                -
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}