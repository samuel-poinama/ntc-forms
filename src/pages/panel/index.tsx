import Loading from '@/components/loading'
import { useRouter } from 'next/router'




export default function Panel() {
    const router = useRouter()
    
    function redirect() {
        router.push("/panel/home")
    }

    return (
        <div>
            <Loading fun={redirect} delay={0}/>
        </div>
    )
}