




export default function Content({ children, field }: { children: any, field: any }) {
    return (
        <div className="w-full my-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold">{field.name} {field.isRequired && <span className="text-red-500">*</span>}</h2>
            </div>
            {children}
        </div>
    )
}