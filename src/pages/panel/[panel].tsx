import Navigation from '@/components/panel/navigation'
import Home from '@/components/panel/home'
import FormsPanel from '@/components/panel/forms'
import Users from '@/components/panel/users'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import Loading from '@/components/loading'



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
            default:
                return <Home/>
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