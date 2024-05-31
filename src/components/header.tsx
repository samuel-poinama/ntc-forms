import Image from "next/image"
import Link from "next/link"



export default function Header() {
    return (
        <>
            <header className="my-[10px] bg-white py-2 px-4 border-b-2 border-gray-200">
                <div className=" my-[10px] container mx-auto flex items-center justify-between">
                    <div className="my-[10px] flex items-center space-x-2">
                        <Image src="/ntc2.png" alt="Nautical Training Corps Logo" width={50} height={50} />
                        <h1 className="text-xl text-blue-700 font-bold whitespace-nowrap">Nautical Training Corps</h1>
                    </div>
                    <nav className="flex-1">
                        <ul className="flex space-x-10 items-center">
                            <li className="hidden lg:block"></li>
                            <li className="relative group">
                                <span className="text-blue-700 font-bold cursor-pointer">Home page</span>
                                <ul className="absolute hidden group-hover:block bg-white shadow-lg z-10 w-48 mt-2">
                                    <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">Home</Link></li>
                                    <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">History</Link></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <span className="text-blue-700 font-bold cursor-pointer">What we do</span>
                                <ul className="absolute hidden group-hover:block bg-white shadow-lg z-10 w-48 mt-2">
                                    <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">Structure</Link></li>
                                    <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">Join us</Link></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <span className="text-blue-700 font-bold cursor-pointer">Get involved</span>
                                <ul className="absolute hidden group-hover:block bg-white shadow-lg z-10 w-48 mt-2">
                                    <li><Link href="#"className="block px-4 py-2 hover:bg-gray-100 text-blue-700">How to get involved</Link></li>
                                    <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">FAQ</Link></li>
                                </ul>
                            </li>
                            <li><Link href="#" className="text-blue-700 font-bold">Newsletters</Link></li>
                            <li><Link href="#" className="text-blue-700 font-bold">Event</Link></li>
                            <li className="hidden lg:block"></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
