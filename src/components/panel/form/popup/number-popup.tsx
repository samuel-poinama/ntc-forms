




export default function NumberPopup({ field, setField }: { field: any, setField: (field: any) => void }) {


  return (
    <div>
        <div className="mb-4">
          <label htmlFor="min-number" className="text-gray-700">Nombre minimum</label>
          <input type="number" id="min-number" name="min-number" min="0" 
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700"
            onChange={(e: any) => {
                setField({ ...field, min: e.target.value })
            }} />
        </div>
        <div className="mb-4">
          <label htmlFor="max-number" className="text-gray-700">Nombre maximum</label>
          <input type="number" id="max-number" name="max-number" min="0" 
          className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700"
            onChange={(e: any) => {
                setField({ ...field, max: e.target.value })
            }} />
        </div>
    </div>
  );
}