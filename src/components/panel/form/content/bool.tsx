import Content from "../content";





export default function Boolean({ field }: { field: any }) {
    return (
        <Content field={field}>
            <form className="flex items-center">
                <p className="mr-4">True?</p>
                <input type="checkbox" name="option" value="true" onChange={(e) => {
                    field.content = e.target.value
                }} />
            </form>
        </Content>
    )
}

/*
export default function Boolean({ field }: { field: any }) {
    return (
        <div className="w-full my-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold">{field.name} {field.required && <span className="text-red-500">*</span>}</h2>
            </div>
            <form className="flex justify-evenly items-center">
                <p>True?</p>
                <input type="checkbox" name="option" value="true" onChange={(e) => {
                    field.content = e.target.value
                    console.log(e.target.value)
                }} />
            </form>
        </div>
    )
}*/