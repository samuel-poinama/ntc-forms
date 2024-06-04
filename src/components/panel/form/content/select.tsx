import Content from "../content"





export default function Select( { field, edit, onRemove } : 
    { field: any, edit: any, onRemove: () => void }) {

    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <form className="flex justify-evenly items-center">
                {field.options.map((option: string, index: number) => (
                    <div key={index} className="flex items-center p-3">
                        <input type="radio" name="option" value={option}
                            onChange={(e) => field.content = e.target.value }
                            disabled={edit !== undefined}
                            checked={edit !== undefined ? field.content === option : undefined}
                        />
                        <p className="pl-2">{option}</p>
                    </div>
                ))}
            </form>
        </Content>
    )
}