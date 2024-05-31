import { useRouter } from "next/router"
import { useEffect, useState } from "react"





export default function View() {
    const router = useRouter()
    const { id } = router.query

    const [form, setForm] = useState({} as any)


    const fetchForm = async () => {
        const res = await fetch(`/api/forms?id=${id}`)
        const newForm = await res.json()
        console.log(newForm)
        setForm(newForm)
    }

    useEffect(() => {
        fetchForm()
    }, [id])
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border border-gray-300 rounded-lg p-4 bg-white w-[100%] h-[100%]">
                <div className="flex justify-end items-center mb-4 space-x-2">
                    <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">+</div>
                    <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">x</div>
                    <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">✔</div>
                </div>
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-4xl text-yellow-500 font-bold">New Form</h1>
                </div>

                <div className="overflow-y-auto h-[70vh]">
                    <div className="flex flex-col items-start mx-auto w-full">
                        <div className="question flex flex-col items-start mb-4 w-full">
                        <div className="title-question m-[1%] text-yellow-500 font-bold text-2xl">Question</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Name</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Contact</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Subject</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Date</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Message</div>
                    </div>

                    <div className="question flex flex-col items-start mb-4 w-full">
                        <div className="title-question m-[1%] text-yellow-500 font-bold text-2xl">Question</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Name</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Contact</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Subject</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Date</div>
                        <div className="option w-full border border-blue-500 rounded-lg p-[2%] mb-2">Message</div>
                    </div>
                </div>
                </div>

                <div className="flex justify-end items-center mb-4 space-x-2">
                <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">Yes. Confirm</div>
                <div className="btn bg-yellow-500 text-white py-4 px-8 text-lg rounded-lg">No, Cancel</div>
                </div>
            </div>
        </div>
    )
}