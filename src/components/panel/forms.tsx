import Image from "next/image"
import { useEffect, useState } from "react"
import Error from "../error"
import Popup from "../popup"





export default function FormsPanel() {
    const [forms, setForms] = useState([])
    const [error, setError] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isAdd, setIsAdd] = useState(false)


    function showAdd() {
        setIsAdd(!isAdd)
    }

    async function getForms() {
        const res = await fetch('/api/forms')
        const data = await res.json()
        setForms(data)
    }

    async function createForm() {
        console.log(typeof title)
        const res = await fetch('/api/forms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description })
        })

        if (!res.ok) {
            setError('Failed to create form')
            try {
                const data = await res.json()
                if (data.error) setError(data.error)
            } catch (e) {
                setError('Failed to create form')
            }
        } else {
            const data = await res.json()
            if (data.error)
                setError(data.error)
            else
                setError('')
            getForms()
        }
    }

    async function deleteForm(id: string) {
        const res = await fetch(`/api/forms?id=${id}`, {
            method: 'DELETE'
        })
        
        if (!res.ok) {
            setError('Failed to delete form')
        } else {
            const data = await res.json()
            if (data.error) setError(data.error)
        }
        getForms()
    }


    useEffect(() => {
        getForms()
    }, [])


    return (
        <div className="forms">
            <div className="box"id="top" >
                <button onClick={showAdd}>+</button>        
            </div>

            { isAdd &&
                <Popup label="Add User" error={error} showSwitch={showAdd} save={createForm} >
                    <Image src='/forms.png' alt="form" width={64} height={64} />
                    <div className="form">
                        <input type="text" id="form title" placeholder="Enter form title" 
                                    maxLength={200} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" id="form description" placeholder="Enter form description"
                                    maxLength={200} onChange={(e) => setDescription(e.target.value)} />
                        <button onClick={createForm} className="send">Create</button>
                    </div>
                </Popup>
            }

            { forms.map((obj: any, i) => (
                <div className="box" key={i} >
                    <button>{obj.title}</button>
                    <Image src="/trash.png" alt="form1" width={50} height={50} onClick={() => deleteForm(obj._id)}/>
                </div>
            ))}
        </div>
    )
}