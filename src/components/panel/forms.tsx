import Image from "next/image"
import { useEffect, useState } from "react"
import Form from "./form/form"
import Popup from "../popup"
import { useRouter } from "next/router"


export default function Forms() {
    const router = useRouter()
    const [forms, setForms] = useState([])
    const [isNewForm, setIsNewForm] = useState(false)
    const [error, setError] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const fetchForms = async () => {
        const res = await fetch('/api/forms')
        const newForms = await res.json()
        setForms(newForms)
    }


    const removeForm = async (id: string) => {
        await fetch(`/api/forms?id=${id}`, {
            method: 'DELETE',
        })
        fetchForms()
    }


    const saveForm = async () => {
        router.push(`/view?edit=true&title=${title}&description=${description}`)
    }


    const showIsNewForm = () => {
        setIsNewForm(!isNewForm)
    }


    useEffect(() => {
        fetchForms()
    }, [])

    return (
        <div className="flex justify-between items-center "> 
            { isNewForm &&
                <Popup isVisible={isNewForm} error={error} hidePopup={showIsNewForm} save={saveForm}>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold mb-4">Create New Form</h1>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Title" className="w-full mb-4 p-2 rounded-lg border-2 border-gray-300"/>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description" className="w-full mb-4 p-2 rounded-lg border-2 border-gray-300"/>
                    </div>
                </Popup>
            }



            <div className="w-[70%]">
                <div className="min-h-screen min-w-[350px] font-sans">
                    <div className="flex p-6 text-white h-full">
                        <div className="bg-[#2F5597] rounded-3xl p-8 w-full ">
                            <h1 className="mb-4 font-bold">All Forms</h1>
                            <p className="mb-8">Here you will find all the forms.</p>
                        
                            <div className="h-[70vh] overflow-auto">
                                {forms.map((form: any, i) => (
                                    <Form key={i} form={form} onRemove={removeForm} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[30%]">
                <div className="p-6 flex text-white">
                    <div className="bg-[#2F5597] p-6 rounded-2xl ml-3 w-1/4 
                        text-center w-[100%] h-[500px] cursor-pointer" onClick={showIsNewForm}>
                        <div className="relative h-322 w-322 ">
                            <Image src="/calendar.png" alt="" width={100} height={100} className="h-auto max-w-lg mx-auto fa-solid fa-calendar text-4xl" />
                        </div>
                        <i className="fa-solid fa-calendar text-4xl"></i>
                        <h1 className="text-xl mb-2 font-bold">Create New Form</h1>
                        <h3 className="text-lg pt-2">Create new form in the easiest way</h3>
                    </div>
                </div>
            </div>
        </div>
 
    )
}