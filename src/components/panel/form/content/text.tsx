import Content from "../content";





export default function Text( { field } : { field: any } ) {
    return (
        <Content field={field}>
            <input type="text" className="message w-full border-b 
            border-gray-300 focus:outline-none focus:border-blue-500" id="message" placeholder="Write Message here..." 
            onChange={(e) => field.content = e.target.value}
            />
        </Content>
    )
}


/*
export default function Text( { field } : { field: any } ) {
    return (
        <div className="popupformsmessage w-full mt-4">
            <h3 className="text-lg font-semibold mb-2">{field.name} {field.required && <span className="text-red-500">*</span>}</h3>
            <input type="text" className="message w-full border-b 
            border-gray-300 focus:outline-none focus:border-blue-500" id="message" placeholder="Write Message here..." 
            onChange={(e) => field.content = e.target.value}
            />
        </div>
    )
}*/
