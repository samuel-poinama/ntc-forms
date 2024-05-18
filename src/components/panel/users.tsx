import Image from "next/image"
import { useEffect, useState, MouseEvent } from "react"
import User from "./subcomponents/user"
import Popup from "../popup"




export default function Users() {
    const [users, setUsers] = useState([])
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [error, setError] = useState("")
    const [selected, setSelected] = useState({} as any)
    const [roles, setRoles] = useState([])

    async function getUsers() {
        const response = await fetch("/api/users")
        const users = await response.json()
        setUsers(users)
    }

    async function getRoles() {
        const response = await fetch("/api/users/roles")
        const roles = await response.json()
        setRoles(roles)
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
            getUsers()
            showAdd()
            setEmail("")
            setRole("")
        }
    }

    async function editUser() {
        const response = await fetch("/api/users/edit", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: selected.email, role: role })
        })
        const data = await response.json()
        if (data.error) {
            setError(data.error)
        } else {
            getUsers()
            showEdit()
            setSelected({} as any)
            setRole("")
        }
    }

    function showAdd() {
        if (!isAdd)
            setIsEdit(false)

        setIsAdd(!isAdd)
    }

    

    function showEdit() {
        if (!isEdit)
            setIsAdd(false)

        setIsEdit(!isEdit)
    }

    function clicked(user: any) {
        setSelected(user)
        showEdit()
    }


    useEffect(() => {
        getUsers()
        getRoles()
    }, [])


    return (
        <div className="userframe">
            <div className="single">
                <Image src="/comunity.png" alt="comunity" width={128} height={128}/>
                <h2>Total Users : { users.length }</h2>
                <button onClick={showAdd} >+</button>
            </div>
            
            <div className="grid">

                {users.map((obj: any, i) => {
                    return <User user={obj} onClick={() => clicked(obj)} key={i} />
                })}
            </div>
            { isAdd &&
                <Popup label="Add user" error={error} showSwitch={showAdd} save={addUser} >
                <Image src="/users.png" alt="users" width={64} height={64} />
                    <input type="email" id="email" placeholder="Enter e-mail" 
                        maxLength={200} onChange={(e) => setEmail(e.target.value)} />
                    <select name="role" className="form-control selectpicker">
                        <option value="">Please select user type</option>
                        { roles.map((role: any, i: number) => {
                            return (
                                <option key={i} value={role} onClick={() => setRole(role)}>
                                    { role }
                                </option>
                            )
                        })}
                    </select>
                </Popup>
            }

            { isEdit &&
                <Popup label="Edit user" error={error} showSwitch={showEdit} save={editUser} >
                    <Image loader={({src , width, quality}) => src} src={selected.image} alt="users" width={64} height={64} />
                    <div className="mail">
                            <h3>Mail : { selected.email }</h3>
                            <select name="userType" className="form-control selectpicker">
                                    <option value="">Select role</option>
                                    { roles.map((role: any, i: number) => {
                                        return (
                                            <option key={i} value={role} onClick={() => setRole(role)}>
                                                { role }
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                </Popup>
            }
        </div>
    )
}