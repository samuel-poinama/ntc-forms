import Image from "next/image"

export default function Add({ showSwitch } : { showSwitch: () => void}) {
    return (
        <div className="add_user">
            <div className="image">
                    <Image src="/users.png" alt="users" width={64} height={64} />
                </div>

                <div className="title">
                    <div className="top">
                        <h1>New User</h1>

                        <div className="button">
                            <button>
                            <Image src="/save.png" alt="users" width={32} height={32} />
                            </button>
                            <button onClick={showSwitch}>
                            <Image src="/cross.png" alt="users" width={32} height={32} />
                            </button>
                        </div>
                    </div>

                    <div className="info">
                        <div className="mail">

                        <input type="email" id="email" placeholder="Enter e-mail" maxLength={200} />

                        <select name="userType" className="form-control selectpicker">
                            <option value="">Please select user type</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>                        
                </div>
                    
            </div>
        </div>
    )
}
