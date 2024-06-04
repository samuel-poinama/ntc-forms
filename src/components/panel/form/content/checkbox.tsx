import Content from "../content"






export default function CheckBox( { field, edit, onRemove } : 
    { field: any, edit: any, onRemove: () => void }) {

        const onCheck = (e: any) => {
            if (field.content.includes(e.target.value)) {
                field.content = field.content.filter((option: string) => option !== e.target.value)
            } else {
                field.content.push(e.target.value)
            }
        }



    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <form className="flex justify-evenly items-center">
                {field.options.map((option: string, index: number) => (
                    <div className="flex items-center p-3">
                        <input type="checkbox" name="option" value={option}
                            onChange={onCheck}
                            checked={edit !== undefined ? field.content.includes(option): undefined}
                            disabled={edit !== undefined}
                        />
                        <p className="pl-2">{option}</p>
                    </div>
                ))}
            </form>
        </Content>
    )
}