import Content from "../content"





export default function Text( { field, edit, onRemove } : 
    { field: any, edit: any, onRemove: () => void }) {
    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <input type="text" className="message w-full border-b 
            border-gray-300 focus:outline-none focus:border-blue-500" id="message" placeholder="Write Message here..." 
            value={ field.content }
            onChange={(e) => field.content = e.target.value}
            disabled={edit !== undefined}
            />
        </Content>
    )
}
