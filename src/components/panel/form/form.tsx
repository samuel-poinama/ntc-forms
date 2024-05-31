import Image from 'next/image'
import Link from 'next/link'



export default function Form({ form, onRemove } : { form: any, onRemove:(id: string) => void }) {
    return (
        <div
            className="bg-white rounded-3xl p-6 w-full h-[15vh] mb-4 flex items-center text-black relative border-b-4 border-blue-100">
            <div className="flex-1 flex flex-col justify-center mt-2.5">
                <h2 className="mb-2 text-yellow-400">{ form.title.length > 20 ? form.title.substring(0, 20) + '...' : form.title }</h2>
                <p>{ form.description.length > 20 ? form.description.substring(0, 20) + '...' : form.description }</p>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-10 cursor-pointer" onClick={() => onRemove(form._id)}>
                <Image src="/bin.png" alt="" width={25} height={25} className="fa-regular fa-trash-can text-black"/>
            </div>
            <Link className="absolute top-1/2 transform -translate-y-1/2 right-20" href={`/view?id=${form._id}`}>
                <Image src="/forms.png" alt="" width={64} height={64} className="fa-solid fa-pencil text-black" />
            </Link>
        </div>
    )
}