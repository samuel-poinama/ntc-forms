import Image from "next/image"



export default function Navigation() {
    return (
    <div className="navigation">
        <form action="">

            <button type="submit" className="general">
                <Image src="/home.png" alt="home" width={20} height={100} />
                <p>General</p>
            </button>

            <button type="submit">
            <Image src="/users.png" alt="users" width={20} height={100} />
            <p>Users</p>
            </button>

            <button type="submit">
                <p>Statistic</p>
            </button>

            <button type="submit">
                <p>Inactive</p>
            </button>

            <button type="submit">
            <Image src="/forms.png" alt="forms" width={20} height={100} />
            <p>Forms</p>
            </button>

            <button type="submit" className="sign_out">
            <Image src="/sign out.png" alt="sign out" width={20} height={100} /><p>Sign Out</p>
            </button>

            </form>
    </div>
    )
}