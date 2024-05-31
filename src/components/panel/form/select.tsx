




export default function Select( { field } : { field: { name: string, required: boolean, options: string[] }}) {
    return (
        <div className="w-full my-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold">{ field.name} {field.required && <span className="text-red-500">*</span>}</h2>
            </div>
            <div className="flex justify-evenly items-center">
                {field.options.map((option, index) => (
                    <div className="flex items-center p-3">
                    <input type="radio" className="mr-2"/>
                    <p className="pl-2">{option}</p>
                </div>
                ))}
            </div>
        </div>
    )
}
