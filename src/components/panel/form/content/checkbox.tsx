import Content from "../content";






export default function CheckBox( { field } :
    { field: { name: string, content: string[], required: boolean, options: string[] }}) {

    return (
        <Content field={field}>
            <form className="flex justify-evenly items-center">
                {field.options.map((option, index) => (
                    <div className="flex items-center p-3">
                        <input type="checkbox" name="option" value={option} onChange={(e) => {
                            field.content.push(e.target.value)
                        }} />
                        <p className="pl-2">{option}</p>
                    </div>
                ))}
            </form>
        </Content>
    )
}

/*
export default function CheckBox( { field } : 
    { field: { name: string, content: string[], required: boolean, options: string[] }}) {

    return (
        <div className="w-full my-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold">{ field.name} {field.required && <span className="text-red-500">*</span>}</h2>
            </div>
            <form className="flex justify-evenly items-center">
                {field.options.map((option, index) => (
                    <div className="flex items-center p-3">
                        <input type="checkbox" name="option" value={option} onChange={(e) => {
                            field.content.push(e.target.value)
                        }} />
                        <p className="pl-2">{option}</p>
                    </div>
                ))}
            </form>
        </div>
    )
}*/
