import Image from 'next/image'
import { ReactNode } from 'react'

export default function Popup({children, error, isVisible, hidePopup, save }:
    { children: ReactNode, error?: string, isVisible: boolean, hidePopup: () => void, save: () => void }
) {


    if (!isVisible) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xl">
            <div className="bg-white border rounded-2xl p-4 w-[675px] h-auto m-8">
                <div className="bg-cover bg-center bg-no-repeat rounded-2xl p-4 pb-20 w-full" style={{ backgroundImage: 'url("/fond.png")' }}>
                    <div className="flex items-center justify-end mr-10">
                        <Image src="/save.png" alt="save" width={30} height={30} className="mr-10 
                            cursor-pointer" onClick={save} />
                        <button onClick={hidePopup}>
                            <h1>X</h1>
                        </button>
                    </div>
                </div>
                <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2">
                    <Image src="/ntc2.png" alt="logo" width={150} height={150} />
                </div>
                { error && <div className="text-red-500 text-center">{error}</div> }
                {children}
            </div>
        </div>
    )
}
