import Image from 'next/image'




export default function Content({ children, field, edit, onRemove }: 
    { children: any, field: any, edit: any, onRemove: () => void }) {
    return (
        <div className="w-full my-4">
            <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">{field.name} {field.required && <span className="text-red-500">*</span>}</h2>
                { edit === "true" &&
                    <button onClick={onRemove}>
                        <Image src="/trash.png" alt="trash" width={20} height={20} />
                    </button>
                }
            </div>
            {children}
        </div>
    )
}