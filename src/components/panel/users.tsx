import Image from "next/image"
import { useEffect, useState } from "react"
import User from "./user/user"
import Popup from "../popup"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Role from "@/model/role"
import { getRole, permissions } from "@/lib/client"


export default function Users() {
    const session = useSession()
    const router = useRouter()

    const [me, setMe] = useState(Role.VIEWER)
    const [users, setUsers] = useState([])
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [roles, setRoles] = useState([] as string[])
    const [error, setError] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userRole, setUserRole] = useState("")
    const [userSearch, setUserSearch] = useState("")

    const [selectedUser, setSelectedUser] = useState({} as any)


    const fetchUsers = async () => {
        const response = await fetch("/api/users")
        const data = await response.json()
        if (!data.error) setUsers(data)
    }

    const showAdd = () => {
        if (me < Role.ADMIN) {
            setError("Unauthorized")
            return
        }

        setIsAdd(!isAdd)

        if (!isAdd) {
            setUserEmail("")
            setUserRole("")
            setError("")
        }
    }

    const showEdit = () => {
        if (me < Role.ADMIN) {
            setError("Unauthorized")
            return
        }

        setIsEdit(!isEdit)

        if (!isEdit) {
            setError("")
        }
    }

    const selectUser = (user: any) => {
        setSelectedUser(user)
        showEdit()
    }

    const sendUser = async () => {
        
        const response = await fetch("/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                role: userRole
            
            })
        })
        const data = await response.json()
        if (data.error) {
            setError(data.error)
        } else {
            fetchUsers()
            showAdd()
        }
    }


    const editUser = async () => {
        const response = await fetch(`/api/users?id=${selectedUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                role: selectedUser.role
            })
        })
        const data = await response.json()
        if (data.error) {
            setError(data.error)
        } else {
            fetchUsers()
            showEdit()
        }
    }

    const deleteUser = async () => {
        const response = await fetch(`/api/users?id=${selectedUser._id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        if (data.error) {
            setError(data.error)
        } else {
            fetchUsers()
            showEdit()
        }
    }

    const enterSearch = (e: any) => {
        if (e.code === "Enter") {
            searchUser()
        }
    }

    const searchUser = async () => {
        if (userSearch === "") {
            fetchUsers()
            return
        }

        const response = await fetch(`/api/users/search?s=${userSearch}`, {
            method: 'GET'
        })
        const data = await response.json()
        if (data.error) {
            setError(data.error)
        } else {
            setUsers(data)
        }
    }


    useEffect(() => {
        fetchUsers()
        setRoles(Object.keys(Role).filter((role) => isNaN(Number(role))))
        getRole(setMe)
    }, [])

    
    const page = (
        <div className="bg-blue-700 rounded-2xl p-4 w-99% mx-4 my-4 relative overflow-hidden">

            {/* edit user popup */}
            <Popup isVisible={isEdit} error={error} hidePopup={showEdit} save={editUser} >
                <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2">
                    <Image src="/ntc2.png" alt="logo" width={150} height={150} />
                </div>
                <div className="flex justify-between p-4 h-40 bg-red">

                    <div className="w-1/3 p-4 px-4">
                        <div className="bg-blue-800 h-1/6 w-full mb-6 rounded-full"></div>
                        <div className="bg-blue-800 h-1/6 w-3/4 my-6 rounded-full"></div>
                        <div className="bg-blue-800 h-1/6 w-2/4 my-6 rounded-full"></div>
                    </div>

                    <div className="w-1/3 flex flex-col items-center justify-center p-6">
                        <h2 className="text-blue-500">{selectedUser.name}</h2>
                        <h3 className="text-yellow-500">{selectedUser.email}</h3>
                    </div>

                    <div dir="rtl" className="w-1/3 p-4 px-4">
                        <div className="bg-blue-800 h-1/6 w-full mb-6 rounded-full"></div>
                        <div className="bg-blue-800 h-1/6 w-3/4 my-6 rounded-full"></div>
                        <div className="bg-blue-800 h-1/6 w-2/4 my-6 rounded-full"></div>
                    </div>

                </div>
                <div className="mt-0 flex justify-center">
                    <select
                        id="role"
                        name="userType"
                        className="text-gray-900 form-control w-4/5 text-center border 
                        border-yellow-400 p-4 mx-4 rounded-full"
                        value={selectedUser.role}
                        onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
                    >
                        {roles.map((role: any, i: number) => {
                            return (
                                <option key={i} value={role}>
                                    {role}
                                </option>
                            )
                        })}
                    </select>
                    <button className="bg-red-600 text-white rounded-md p-1" onClick={deleteUser} >Delete</button>
                </div>
            </Popup>

            {/* add user popup */}
            <Popup isVisible={isAdd} error={error} hidePopup={showAdd} save={sendUser} >
                <div className="flex justify-center p-4">
                    <div className="w-1/3 flex flex-col items-center justify-center p-6 ">

                                <input id="email" name="email" type="email" value={userEmail} required placeholder="EMAIL"
                                className=" block w-full rounded-md border-0 py-1.5 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-yellow-400 placeholder:text-gray-400 
                                focus:ring-2 focus:ring-inset focus:ring-gray 
                                sm:text-sm sm:leading-6 text-center"
                                onChange={(e) => setUserEmail(e.target.value)}
                                />

                    </div>
                </div>
                <div className="mt-0 flex justify-center">
                    <form>
                        <select value={userRole} id="role" name="userType" className="text-gray-900 form-control w-4/5 text-center 
                        border border-yellow-400 p-4 mx-4 rounded-full placeholder='Please select user type'"
                        onChange={(e) => setUserRole(e.target.value)}
                        >
                            <option selected>Please select user type</option>
                            {roles.map((role: any, i: number) => {
                                return (
                                    <option key={i} value={role}>
                                        {role}
                                    </option>
                                )
                            })}
                        </select>
                    </form>
                </div>
            </Popup>

            <div className="flex justify-between text-yellow-400 p-4 border-b-2 border-yellow-400">
                <h1 className="text-2xl">User list</h1>

                <div className="search flex items-center">
                    <input type="text" maxLength={200} placeholder="Search" className="py-2 px-4 mr-2 border 
                        border-gray-300 rounded w-[500px]"
                        value={userSearch}
                        onChange={(e) => setUserSearch(e.target.value)}
                        onKeyDown={enterSearch}
                        />
                    <button className="p-2 border border-gray-300 rounded" onClick={searchUser} >
                        <Image src="/Search_Icon.png" alt="Search" width={24} height={24} />
                    </button>
                </div>
                <button className=" border-none h-8 w-8 rounded-full" onClick={showAdd} >
                    <Image src="/plus.png" alt="home" width={30} height={30} />
                </button>
            </div>
            
            <div className="pr-40">
                <div className="flex justify-between text-white p-4 border-yellow-400">
                    <p>Name</p>
                    <p>Mail</p>
                    <p>Role</p>
                </div>
                <div className="text-white p-4 max-h-96 overflow-y-auto pr-2">
                {users.map((value, index) => (
                <User key={index} user={value} onClick={() => selectUser(value)} />
                ))}
                </div>
            </div>
            <div className="h-auto max-w-lg ms-auto">
                <Image src="/circle_point.png" alt="home" width={200} height={200} className="absolute -bottom-12 -right-12"/>
            </div>

        </div>
    )

    return permissions(session, router, page, Role.VIEWER)
}