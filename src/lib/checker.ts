import Role from "@/model/role"
import User from "@/model/User"
import { Session } from "next-auth"





export async function permissions(session: Session | null, role: Role): Promise<User | false> {
    if (!session || !session.user || ! session.user.email) {
        return false
    }

    const user = await User.findByEmail(session.user.email)

    if (!user) {
        return false
    }

    if (user.role > role) {
        return false
    }

    return user
}