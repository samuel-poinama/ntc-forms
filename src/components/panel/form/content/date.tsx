import Content from "../content";





export default function DateView( { field, edit, onRemove }: 
    { field: any, edit: any, onRemove: () => void }) {
    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <input type="date" className="custom-date w-full max-w-xs border-b-2 border-black p-2 focus:outline-none"
            onChange={(e) => field.content = ((new Date(e.target.value)).getTime())}
            />
        </Content>
    )
}
