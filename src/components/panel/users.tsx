import Image from "next/image"
import { useEffect, useState } from "react"
import User from "./subcomponents/user"
import Add from "./subcomponents/add"
import Popup from "../popup"




export default function Users() {
    const [users, setUsers] = useState([])
    const [showAdd, setShowAdd] = useState(false)

    async function getUsers() {
        const response = await fetch("/api/users")
        const users = await response.json()
        setUsers(users)
    }

    function showSwitch() {
        setShowAdd(!showAdd)
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className="userframe">
            <div className="single">
                <Image src="/comunity.png" alt="comunity" width={128} height={128}/>
                <h2>Total Users : { users.length }</h2>
                <button onClick={showSwitch} >+</button>
            </div>
            
            <div className="grid">

                {users.map((obj: any, i) => {
                    return <User user={obj}/>
                })}
            </div>
            
            <Popup label="title" showSwitch={showSwitch} >
            <Image src="/users.png" alt="users" width={64} height={64} />
                <input type="email" id="email" placeholder="Enter e-mail" maxLength={200} />
                <select name="userType" className="form-control selectpicker">
                        <option value="">Please select user type</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                </select>
            </Popup>
            {/* <showAdd> && <Add showSwitch={showSwitch} /> */}
        </div>
    )
}