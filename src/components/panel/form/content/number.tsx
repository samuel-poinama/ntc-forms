import Content from "../content";





export default function Number({ field, edit, onRemove }: 
    { field: any, edit: any, onRemove: () => void }) {
    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <input type="number" className="number w-full border-b border-gray-300 
            focus:outline-none focus:border-blue-500" id="number" placeholder="write number here..." 
            value={field.content}
            onChange={(e) => field.content = e.target.value }
            />
        </Content>
    )
}