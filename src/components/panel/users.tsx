import Image from "next/image"
import { useEffect, useState } from "react"
import User from "./subcomponents/user"
import Popup from "../popup"




export default function Users() {
    const [users, setUsers] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [error, setError] = useState("")

    async function getUsers() {
        const response = await fetch("/api/users")
        const users = await response.json()
        setUsers(users)
    }

    async function addUser() {
        const response = await fetch("/api/users/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, role })
        })
        const data = await response.json()
        if (data.error) {
            setError(data.error)
        } else {
            setShowAdd(false)
            setEmail("")
            setRole("")
            getUsers()
        }
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
            { showAdd &&
                <Popup label="Add user" error={error} showSwitch={showSwitch} save={addUser} >
                <Image src="/users.png" alt="users" width={64} height={64} />
                    <input type="email" id="email" placeholder="Enter e-mail" 
                        maxLength={200} onChange={(e) => setEmail(e.target.value)} />
                    <select name="userType" className="form-control selectpicker">
                        <option value="">Please select user type</option>
                        <option value="USER" onClick={() => setRole("USER")}>User</option>
                        <option value="ADMIN" onClick={() => setRole("ADMIN")}>Admin</option>
                    </select>
                </Popup>
            }
        </div>
    )
}