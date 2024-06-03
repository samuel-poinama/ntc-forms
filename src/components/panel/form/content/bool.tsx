import Content from "../content";





export default function Boolean({ field, edit, onRemove }: { field: any, edit: any, onRemove: () => void }) {
    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <form className="flex items-center">
                <p className="mr-4">True?</p>
                <input type="checkbox" name="option" value="true" onChange={(e) => {
                    field.content = e.target.value
                }} />
            </form>
        </Content>
    )
}