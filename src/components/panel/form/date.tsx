



export default function Date( { field } : { field: any }) {
    return (
        <div className="flex flex-wrap justify-between items-center gap-4 my-5">
            <div className="date flex flex-col items-center w-full sm:w-auto">
                <div className="title">
                    <h3 className="text-lg font-semibold">{field.name} {field.required && <span className="text-red-500">*</span>}</h3>
                </div>
                <input type="date" className="custom-date w-full max-w-xs border-b-2 border-black p-2 focus:outline-none" />
            </div>
        </div>
    );
}
