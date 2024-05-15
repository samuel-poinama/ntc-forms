import Image from "next/image"
import { useEffect, useState } from "react"
import User from "./subcomponents/user"




export default function Users() {
    const [users, setUsers] = useState([])

    async function getUsers() {
        const response = await fetch("/api/users")
        const users = await response.json()
        setUsers(users)
    }

    function imageLoader({src , width, quality} : any ) {
        return `${src}`
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className="userframe">
            <div className="single">
                <Image src="/comunity.png" alt="comunity" width={128} height={128}/>
                <h2>Total Users : 5234</h2>
            </div>
            
            <div className="grid">

                {users.map((obj: any, i) => {
                    return <User user={obj}/>
                })}
            </div>
        </div>
    )
}