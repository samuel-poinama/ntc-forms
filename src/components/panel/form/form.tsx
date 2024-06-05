import { reduceString } from '@/lib/parser'
import Role from '@/model/role'
import Image from 'next/image'
import Link from 'next/link'



export default function Form({ role, form, onRemove, onDownload } : 
    { role: Role, form: any, onRemove:(id: string) => void, onDownload : (id: string, email: boolean) => void }) {

    return (
        <div
            className="bg-white rounded-3xl p-6 w-full h-[15vh] mb-4 flex items-center text-black relative border-b-4 border-blue-100">
            <div className="flex-1 flex flex-col justify-center mt-2.5">
                <h2 className="mb-2 text-yellow-400">{ reduceString(form.title, 20) }</h2>
                <p>{ reduceString(form.description, 50) }</p>
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 right-10 flex justify-center items-center space-x-2">
            <Link href={`/view?id=${form._id}`}>
                    <div className="cursor-pointer">
                        <Image
                            src="/forms.png"
                            alt=""
                            width={50}
                            height={50}
                            className="fa-solid fa-pencil text-black"
                        />
                    </div>
                </Link>
                { role === Role.ADMIN &&
                <div className="flex items-center space-x-2">
                    <div className="cursor-pointer" onClick={() => onRemove(form._id)}>
                        <Image
                            src="/bin.png"
                            alt=""
                            width={25}
                            height={25}
                            className="fa-regular fa-trash-can text-black"
                        />
                    </div>
                    

                    <div className="cursor-pointer" onClick={() => onDownload(form._id, false)}>
                        <Image
                            src="/save.png"
                            alt=""
                            width={25}
                            height={25}
                            className="fa-solid fa-pencil text-black"
                        />
                    </div>

                    <div className="cursor-pointer" onClick={() => onDownload(form._id, true)}>
                        <Image
                            src="/user.png"
                            alt=""
                            width={25}
                            height={25}
                            className="fa-solid fa-pencil text-black"
                        />
                    </div>
                </div>
                }
            </div>
        </div>
    )
}