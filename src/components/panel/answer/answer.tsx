import { reduceString } from '@/lib/parser'
import Image from 'next/image'




export default function Answer({ title, description, user, onRemove, onSee } :
    { title: string, description: string, user: string, onRemove:() => void, onSee:() => void }) {
    return (
        <div className="bg-white rounded-3xl p-6 w-full h-[15vh] mb-4 flex items-center text-black relative border-b-4 border-blue-100">
            <div className="flex-1 flex flex-col justify-center mt-2.5">
                <h2 className="mb-2">{ reduceString(title, 20) }</h2>
                <p>
                    { reduceString(description, 50) }
                    <i> - {user}</i>
                </p>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-10 flex justify-center items-center space-x-2">
                <div className="cursor-pointer" onClick={onRemove}>
                    <Image
                        src="/bin.png"
                        alt=""
                        width={25}
                        height={25}
                        className="fa-regular fa-trash-can text-black"
                    />
                </div>
                <div className="cursor-pointer" onClick={onSee}>
                    <Image
                        src="/forms.png"
                        alt=""
                        width={50}
                        height={50}
                        className="fa-solid fa-pencil text-black"
                    />
                </div>
            </div>
        </div>
    )
}