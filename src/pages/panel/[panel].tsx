import Home from '@/components/panel/home'
import FormsPanel from '@/components/panel/forms'
import Users from '@/components/panel/users'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import Loading from '@/components/loading'
import Answers from '@/components/panel/answers'



export default function Panel() {
    const router = useRouter()
    const { panel } = router.query
    const { data: session } = useSession()

    function renderPanel() {
        switch (panel) {
            case 'home':
                return <Home/>
            case 'users':
                return <Users/>
            case 'forms':
                return <FormsPanel/>
            case 'answers':
                return <Answers/>
            default:
                router.push('/panel/home')
                break
        }
    }

    if (session === null) {
        return (
        <div className="panel_cbtn">
            <button onClick={() => signIn()} className='btn' >
                Log In
            </button>
        </div>
        )
    } else if (session !== undefined) {
        return (
        <div  className="panel">
            <div className="content">
                {renderPanel()}
            </div> 
        </div>
        )
    } else {
        return ( <Loading /> )
    }
}