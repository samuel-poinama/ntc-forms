import { reduceString } from '@/lib/parser'
import Image from 'next/image'
import Link from 'next/link'



export default function Form({ form, onRemove, onDownload } : 
    { form: any, onRemove:(id: string) => void, onDownload : (id: string, email: boolean) => void }) {
        console.log(form)

    return (
        <div
            className="bg-white rounded-3xl p-6 w-full h-[15vh] mb-4 flex items-center text-black relative border-b-4 border-blue-100">
            <div className="flex-1 flex flex-col justify-center mt-2.5">
                <h2 className="mb-2 text-yellow-400">{ reduceString(form.title, 20) }</h2>
                <p>{ reduceString(form.description, 50) }</p>
            </div>
            
            <div className="absolute top-1/2 transform -translate-y-1/2 right-10 flex justify-center items-center space-x-2">
                <div className="cursor-pointer" onClick={() => onRemove(form._id)}>
                    <Image
                        src="/bin.png"
                        alt=""
                        width={25}
                        height={25}
                        className="fa-regular fa-trash-can text-black"
                    />
                </div>
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
            
        </div>
    )
}