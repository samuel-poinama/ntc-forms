




export default function DatePopup({ field, setField }: { field: any, setField: (field: any) => void }) {
    return (
      <div>
        <label htmlFor="date" className="block text-gray-700">Select a minimum date</label>
        <input type="date" id="date" name="date" className="w-full rounded-md border 
        border-gray-300 py-2 px-3 text-gray-700"
        onChange={(e: any) => { setField({ ...field, min: e.target.value }) }} />
      </div>
    );
  }