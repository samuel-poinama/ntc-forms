import Content from "../content";






export default function CheckBox( { field, edit, onRemove } : 
    { field: any, edit: any, onRemove: () => void }) {

    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <form className="flex justify-evenly items-center">
                {field.options.map((option: string, index: number) => (
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