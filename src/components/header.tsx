import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    // State to manage the visibility of dropdowns
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Function to toggle the dropdown visibility
    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="bg-white py-2 px-4 border-b-2 border-gray-200">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and title section */}
                <div className="flex items-center space-x-2">
                    <Image src="/ntc2.png" alt="Nautical Training Corps Logo" width={50} height={50} />
                    <h1 className="text-xl text-blue-700 font-bold whitespace-nowrap">Nautical Training Corps</h1>
                </div>
                {/* Navigation section */}
                <nav className="flex-1 flex justify-center">
                    <ul className="flex space-x-10 items-center">
                        <li className="hidden lg:block"></li> {/* Placeholder for spacing on large screens */}

                        {/* Dropdown menu for "Home page" */}
                        <li className="relative">
                            <span
                                className="text-blue-700 font-bold cursor-pointer"
                                onClick={() => toggleDropdown('home')}
                            >
                                Home page
                            </span>
                            <ul className={`absolute ${openDropdown === 'home' ? 'block' : 'hidden'} bg-white shadow-lg z-10 w-48 mt-2 transition duration-300 ease-in-out opacity-100 visible`}>
                                <li><Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">Home</Link></li>
                                <li><Link href="/history" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">History</Link></li>
                            </ul>
                        </li>

                        {/* Dropdown menu for "What we do" */}
                        <li className="relative">
                            <span
                                className="text-blue-700 font-bold cursor-pointer"
                                onClick={() => toggleDropdown('what')}
                            >
                                What we do
                            </span>
                            <ul className={`absolute ${openDropdown === 'what' ? 'block' : 'hidden'} bg-white shadow-lg z-10 w-48 mt-2 transition duration-300 ease-in-out opacity-100 visible`}>
                                <li><Link href="/structure" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">Structure</Link></li>
                                <li><Link href="/joinUs" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">Join us</Link></li>
                            </ul>
                        </li>

                        {/* Dropdown menu for "Get involved" */}
                        <li className="relative">
                            <span
                                className="text-blue-700 font-bold cursor-pointer"
                                onClick={() => toggleDropdown('involved')}
                            >
                                Get involved
                            </span>
                            <ul className={`absolute ${openDropdown === 'involved' ? 'block' : 'hidden'} bg-white shadow-lg z-10 w-48 mt-2 transition duration-300 ease-in-out opacity-100 visible`}>
                                <li><Link href="/getInvolved" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">How to get involved</Link></li>
                                <li><Link href="/faq" className="block px-4 py-2 hover:bg-gray-100 text-blue-700">FAQ</Link></li>
                            </ul>
                        </li>

                        {/* Direct links  */}
                        <li><Link href="#" className="text-blue-700 font-bold">Newsletters</Link></li>
                        <li><Link href="#" className="text-blue-700 font-bold">Event</Link></li>
                        <li className="hidden lg:block"></li> {/* Placeholder for spacing on large screens */}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
