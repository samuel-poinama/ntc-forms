import Loading from "@/components/loading";
import Role from "@/model/role"
import { SessionContextValue } from "next-auth/react"
import { NextRouter } from "next/router";


async function fetchData() {
    const response = await fetch("/api/me")
    const data = await response.json()
    return data
}


export function permissions(session: SessionContextValue, router: NextRouter, jsx: JSX.Element, role?: Role): JSX.Element {
    const { status } = session

    const end = () => router.push('/')

    if (status === "loading") {
        return <Loading/>
    } else if (status === "authenticated") {
        const userData = session.data.user


        if (!userData || !userData.email) {
            return <Loading fun={end} delay={500} />
        }

        fetchData().then(data => {
            if (role && data.role > role) {
                end()
                return <Loading />
            }
        })

        return jsx
    } else {
        return <Loading fun={end} delay={500} />
    }
}

export async function getRole(setRole: (role: Role) => void) {
    const data = await fetchData()
    setRole(data.role)
}