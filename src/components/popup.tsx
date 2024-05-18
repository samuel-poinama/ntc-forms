import { ReactNode } from "react"
import Image from "next/image"
import Error from "./error"





export default function Popup({ showSwitch, save, label, error, children } : 
    { showSwitch: () => void, save?: () => void, label: string, error: string, children: ReactNode }) {
    return (
        <div className="popup">
            <div className="top">
                <h1>{ label }</h1>

                <div className="button" >
                    { save &&
                        <button onClick={save} >
                        <Image src="/save.png" alt="users" width={32} height={32} />
                        </button>
                    }
                    <button onClick={showSwitch}>
                    <Image src="/cross.png" alt="users" width={32} height={32} />
                    </button>
                </div>

            </div>
            { error && <Error error={error} /> }
            <div className="content">
                { children }
            </div> 
        </div>
    )
}
