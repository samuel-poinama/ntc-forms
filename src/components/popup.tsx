import { ReactNode } from "react"
import Image from "next/image"





export default function Popup({ showSwitch, label, children } : { showSwitch: () => void, label: string, children: ReactNode }) {
    return (
        <div className="popup">
            <div className="top">
                <h1>{ label }</h1>

                <div className="button">
                    <button>
                    <Image src="/save.png" alt="users" width={32} height={32} />
                    </button>
                    <button onClick={showSwitch}>
                    <Image src="/cross.png" alt="users" width={32} height={32} />
                    </button>
                </div>

            </div>
            <div className="content">
                { children }
            </div> 
        </div>
    )
}
