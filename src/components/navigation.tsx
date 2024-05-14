import Image from "next/image"
import Link from "next/link"



export default function Navigation() {
    return (
    <div className="navigation">
        <Link className="nav_button" href="/panel/home" >
                <Image src="/home.png" alt="home" width={20} height={100} />
                <p>General</p>
        </Link>

        <Link className="nav_button" href="/panel/users" >
        <Image src="/users.png" alt="users" width={20} height={100} />
        <p>Users</p>
        </Link>

        <Link className="nav_button" href="/panel/forms" >
        <Image src="/forms.png" alt="forms" width={20} height={100} />
        <p>Forms</p>
        </Link>

        <Link type="submit" className="sign_out nav_button" href="/panel/signout" >
        <Image src="/sign out.png" alt="sign out" width={20} height={100} /><p>Sign Out</p>
        </Link>
    </div>
    )
}