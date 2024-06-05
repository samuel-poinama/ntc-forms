import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useState } from "react"





export default function Header() {
    const [nUsers, setNUsers] = useState(0)
    const [nForms, setNForms] = useState(0)
    const { data: session, status } = useSession()

    const fetchUsers = async () => {
        const response = await fetch("/api/users/preview")
        const data = await response.json()
        setNUsers(data.num)
    }

    const fetchForms = async () => {
        const response = await fetch("/api/forms/preview")
        const data = await response.json()
        setNForms(data.num)
    }

    useEffect(() => {
        fetchUsers()
        fetchForms()
    }, [])


    return (
        <div className="flex flex-col bg-white w-full">
            <div className="bg-white p-4 flex justify-between items-center">
                <h1 className="text-blue-900 text-4xl">General Admin Panel</h1>
                <div className="flex items-center bg-blue-800 text-white rounded-full p-2">
                    <h3 className="mr-2">{session?.user?.name}</h3>
                    <Image loader={({src , width, quality}) => src} src={session?.user?.image || 'user.png' } 
                    alt="user icon" width={40} height={40} className="rounded-full" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-4">
                <div className="flex items-center bg-[#2F5597] text-white rounded-lg p-4 m-2 w-full md:w-1/2 lg:w-1/4">
                    <Image src="/stats.png" alt="stats icon" width={60} height={60} className="mr-4"/>
                    <div className="ml-4">
                        <p>Total Forms</p>
                        <h1 className="text-2xl">{nForms}</h1>
                    </div>
                </div>
                <div className="flex items-center bg-[#2F5597] text-white rounded-lg p-4 m-2 w-full md:w-1/2 lg:w-1/4">
                    <Image src="/calendar.png" alt="form icon" width={60} height={60} className="mr-4"/>
                    <div className="ml-4">
                        <p>Total Users</p>
                        <h1 className="text-2xl">{nUsers}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
