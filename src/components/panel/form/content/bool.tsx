import Content from "../content";





export default function Boolean({ field, edit, onRemove }: { field: any, edit: any, onRemove: () => void }) {
    console.log(edit !== undefined)
    return (
        <Content field={field} edit={edit} onRemove={onRemove}>
            <form className="flex items-center">
                <p className="mr-4">True?</p>
                <input type="checkbox" name="option" value="true"
                    defaultChecked={field.content ? field.content : false}
                    onChange={ (e) => field.content = e.target.value }
                    disabled={edit !== undefined}
                />
            </form>
        </Content>
    )
}