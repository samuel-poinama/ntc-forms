import Image from "next/image"
import { useEffect, useState } from "react"





export default function FormsPanel() {
    const [forms, setForms] = useState([])

    async function getForms() {
        const res = await fetch('/api/forms')
        const data = await res.json()
        setForms(data)
    }

    async function deleteForm(id: string) {
        const res = await fetch(`/api/forms/remove`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        const data = await res.json()
        getForms()
    }


    useEffect(() => {
        getForms()
    }, [])


    return (
        <div className="forms">
            <div className="box top">
                <button>+</button>        
            </div>

            { forms.map((obj: any, i) => (
                <div className="box">
                    <button>{obj.title}</button>
                    <Image src="/trash.png" alt="form1" width={50} height={50} onClick={() => deleteForm(obj._id)}/>
                </div>
            ))}
        </div>
    )
}