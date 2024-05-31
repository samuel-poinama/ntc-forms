




export default function Number({ field }: { field: any }) {
    return (
        <div className="popupformsnumber w-full mt-4">
            <h3 className="text-lg font-semibold mb-2">{field.name} {field.required && <span className="text-red-500">*</span>}</h3>
            <input type="number" className="number w-full border-b border-gray-300 
            focus:outline-none focus:border-blue-500" id="number" placeholder="write number here..." />
        </div>
    );
}