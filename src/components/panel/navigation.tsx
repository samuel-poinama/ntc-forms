import { getRole } from "@/lib/client"
import Role from "@/model/role"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navigation() {
    const { data: session, status } = useSession()
    const [role, setRole] = useState(Role.USER)

    useEffect(() => {
        getRole(setRole)
    }, [])
    
    if (status === 'authenticated') {
        return (
            <div className="flex flex-col bg-blue-900 p-5 h-screen w-64">
                <Link href="/panel">
                    <div className="flex items-center mb-10 mt-5 border-b border-[#F4DD13] pb-5">
                        <Image src="/ntc2.png" alt="home" width={80} height={80} />
                        <div className="ml-3 text-[#F4DD13]">
                            <h1 className="text-2xl font-bold">NTC</h1>
                            <h3 className="text-lg">Admin Panel</h3>
                        </div>
                    </div>
                </Link>

                <Link href="/panel">
                    <div className="flex items-center bg-[#F4DD13] p-4 rounded-lg mb-5">
                        <Image src="/Home.png" alt="home" width={30} height={30} />
                        <p className="ml-3 text-white text-lg">General</p>
                    </div>
                </Link>
                { role <= Role.VIEWER &&
                <Link href="/panel/users">
                    <div className="flex items-center bg-blue-800 p-4 rounded-lg mb-5">
                        <Image src="/users.png" alt="users" width={30} height={30} />
                        <p className="ml-3 text-white text-lg">Users</p>
                    </div>
                </Link>
                }

                <Link href="/panel/forms">
                    <div className="flex items-center bg-blue-800 p-4 rounded-lg mb-5">
                        <Image src="/form.png" alt="forms" width={30} height={30} />
                        <p className="ml-3 text-white text-lg">Forms</p>
                    </div>
                </Link>

                <Link href="/panel/answers">
                    <div className="flex items-center bg-blue-800 p-4 rounded-lg mb-5">
                        <Image src="/Search_Icon.png" alt="forms" width={30} height={30} />
                        <p className="ml-3 text-white text-lg">Answers</p>
                    </div>
                </Link>

                <Link href="/logout">
                    <div className="flex items-center bg-blue-800 p-4 rounded-lg mt-auto">
                        <Image src="/signout.png" alt="sign out" width={30} height={30} />
                        <p className="ml-3 text-white text-lg">Sign Out</p>
                    </div>
                </Link>
            </div>
        )
    }
}
