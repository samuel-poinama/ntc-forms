import Image from "next/image"
import { useState, useEffect } from "react"



export default function Home() {
    const [formsInfos, setFormsInfos] = useState({ last: [], num: 0 } as { last: { title: string }[], num: number })
    const [usersInfos, setUsersInfos] = useState({ last: [], num: 0 } as { last: { name: string, role: string }[], num: number })

    const fetchForms = async () => {
        const response = await fetch("/api/forms/preview")
        const data = await response.json()
        setFormsInfos(data)
    }

    const fetchUsers = async () => {
        const response = await fetch("/api/users/preview")
        const data = await response.json()
        setUsersInfos(data)
    }

    useEffect(() => {
        fetchForms()
        fetchUsers()
    }, [])


    return (
        <div className="relative flex h-screen">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-cyan-50">
                <div className="text-yellow-400 p-4 h-full flex flex-col justify-center items-center bg-cyan-50 bg-opacity-50">
                    
                </div>
            </div>
            <div className="relative z-10 flex w-full">
                <div className="flex-1 flex flex-col gap-1 p-2">
                    <div className="flex-1 flex gap-1 mb-1">
                        <div className="w-3/4">
                            <div className="h-full w-full m-2 bg-blue-700 rounded-lg relative overflow-hidden">
                                <div className="flex justify-between text-white p-2">
                                    <h2>Total Forms</h2>
                                    <button type="submit" className="bg-blue-700 border-none h-8 w-8 rounded-full">
                                        <Image src="/stats.png" alt="home" width={90} height={90} />
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center text-[50px] mt-10 pb-4">
                                    <h1 className="bg-gradient-to-l from-yellow-400 to-white bg-clip-text text-transparent no-underline">
                                        {formsInfos.num} Forms
                                    </h1>
                                </div>
                                <div className="h-auto max-w-lg ms-auto">
                                    <Image src="/circle_point.png" alt="home" width={200} height={200} className="absolute -bottom-12 -right-12" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="h-full w-full m-2 bg-blue-700 rounded-lg">
                                <div className="flex justify-between text-yellow-400 p-2">
                                    <h2>Last Forms</h2>
                                    <button type="submit" className="border-none h-8 w-8 rounded-full">
                                        <Image src="/plus.png" alt="home" width={30} height={30} />
                                    </button>
                                </div>
                                <div className="bg-blue-700 text-white p-4 flex flex-col justify-center max-h-70 overflow-y-auto pr-2 rounded-xl">
                                    <ul className="w-full max-h-48 overflow-y-auto pr-2">
                                        {formsInfos.last.map((value, index) => (
                                            <li key={index} className="bg-white text-blue-700 flex justify-between items-center my-2 p-2 rounded-lg h-16">
                                                <Image src="/ntc2.png" alt="home" width={50} height={50} />
                                                <div className="text">
                                                    <h2>{value.title}</h2>
                                                </div>
                                                <button type="submit" className="bg-blue-700 border-none rounded-lg">
                                                    <Image src="/settings.png" alt="home" width={20} height={20} />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex gap-1">
                        <div className="w-3/4">
                            <div className="h-full w-full m-2 bg-blue-700 rounded-lg relative overflow-hidden">
                                <div className="flex justify-between text-white p-2">
                                    <h2>Total Users</h2>
                                    <button type="submit" className="bg-blue-700 border-none h-8 w-8 rounded-full">
                                        <Image src="/stats.png" alt="home" width={30} height={30} />
                                    </button>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center text-[50px] mt-14 pb-4">
                                    <h1 className="bg-gradient-to-l from-yellow-400 to-white bg-clip-text text-transparent no-underline">
                                        {usersInfos.num} Users
                                    </h1>
                                </div>
                                <div className="h-auto max-w-lg ms-auto">
                                    <Image src="/circle_point.png" alt="home" width={200} height={200} className="absolute -bottom-12 -right-12"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="h-full w-full m-2 bg-blue-700 rounded-lg">
                                <div className="flex justify-between text-yellow-400 p-2">
                                    <h2>Last Members</h2>
                                    <button type="submit" className="border-none h-8 w-8 rounded-full">
                                        <Image src="/plus.png" alt="home" width={30} height={30} />
                                    </button>
                                </div>
                                <div className="bg-blue-700 text-white p-4 flex flex-col justify-center max-h-70 overflow-y-auto pr-2 rounded-xl">
                                    <ul className="w-full max-h-48 overflow-y-auto pr-2">
                                        {usersInfos.last.map((value, index) => (
                                            <li key={index} className="bg-yellow-400 text-white flex justify-between items-center my-2 p-2 rounded-lg h-16">
                                                <Image src="/ntc2.png" alt="home" width={50} height={50} />
                                                <div className="text">
                                                    <h2>{value.name}</h2>
                                                    <h3>{value.role}</h3>
                                                </div>
                                                <button type="submit" className="bg-yellow-400 border-none rounded-lg">
                                                    <Image src="/settings.png" alt="home" width={20} height={20} />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 mr-2 w-1/5 flex-shrink-0">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-xl m-2" style={{ backgroundImage: "url('/fond.png')" }}>
                        <div className="text-yellow-400 p-4 h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                            <h2 className="text-center text-2xl font-bold mb-4">SKILL, EXPERIENCES, AND FRIENDS FOR LIFE.</h2>
                            <Image src="/ntc2.png" alt="home" width={200} height={200} className="h-auto w-auto max-w-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
