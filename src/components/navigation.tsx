import Image from "next/image"
import Link from "next/link"



export default function Navigation() {

    return (
        <div className="navigation">
            <Link className="logo" href="/panel/home" >
                <Image src="/ntc2.png" alt="home" width={80} height={80} />

                <div className="title_logo">
                    <h1>NTC</h1>
                    <h3>Admin Panel</h3>
                </div>

            </Link>

            <Link className="general" href="/panel/home" >
                <Image src="/home.png" alt="home" width={20} height={100} />
                <p>General</p>
            </Link>

            <Link className="button" href="/panel/users" >
                <Image src="/users.png" alt="users" width={20} height={100} />
                <p>Users</p>
            </Link>

            <Link className="button" href="/panel/forms" >
                <Image src="/forms.png" alt="forms" width={20} height={100} />
                <p>Forms</p>
            </Link>

            <Link className="sign_out" href="/logout" >
                <Image src="/sign out.png" alt="sign out" width={20} height={100} />
                <p>Sign Out</p>
            </Link>
        </div>
    )
}