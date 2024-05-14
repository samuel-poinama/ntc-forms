import Navigation from '@/components/navigation'
import Home from '@/components/panel/home'
import Users from '@/components/panel/users'
import { useRouter } from 'next/router'



export default function Panel() {
    const router = useRouter()
    const { panel } = router.query

    function renderPanel() {
        switch(panel) {
            case "home":
                return <Home />
            case "users":
                return <Users />
            default:
                return <Home />
        }
    }

    return (
    <div  className="panel">
        <div className="content">


            <Navigation/>

            {renderPanel()}
        </div> 
    </div>
    )
}