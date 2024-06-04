import Image from "next/image";

export default function Joinus() {
    return (
        <div className="bg-[#2F5597]">
            <div>
                <div className="flex flex-col lg:flex-row items-center w-full gap-8 p-8">
                    <div className="flex-shrink-0">
                        <h1 className="text-3xl text-yellow-400 font-bold">Join us</h1>
                    </div>
                    <div className="flex-grow flex flex-wrap justify-center lg:justify-start mr-10">
                        <Image src="/ligne.png" alt="Image" width={1012} height={386} className="h-9 w-[25%]" />
                        <Image src="/ligne.png" alt="Image" width={1012} height={386} className="h-9 w-[25%]" />
                        <Image src="/ligne.png" alt="Image" width={1012} height={386} className="h-9 w-[25%]" />
                        <Image src="/ligne.png" alt="Image" width={1012} height={386} className="h-9 w-[25%]" />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center">
                    <h1 className="text-3xl text-yellow-400 font-bold">An Organisation for Everyone</h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-6">
                    <div className="bg-blue-100 rounded-r-full p-3 w-full lg:w-1/2 mb-6 lg:mb-0">
                        <p className="text-blue-800 text-center lg:text-left">
                            Welcome to the Nautical Training Corps (NTC)! Whether you're a young adventurer eager to explore the wonders of the sea or an adult looking to give back to the community, NTC offers something for everyone.
                        </p>
                        <ul className="text-blue-800 text-center lg:text-left mt-4 space-y-2">
                            <li>Our mission is to inspire and develop young people through nautical adventure, discipline, and teamwork.</li>
                            <li>We believe in creating an inclusive and supportive environment where everyone can thrive.</li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <Image src="/boat.png" alt="Boat" width={400} height={300} className=" rounded-lg max-w-full h-auto" />
                    </div>
                </div>


                <div className="flex flex-col items-center space-y-8 mt-12">
                    <h1 className="text-3xl text-yellow-400 font-bold text-center">What It Takes to Join NTC</h1>

                    <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 w-full">
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <Image src="/gards.png" alt="" width={400} height={300} className=" rounded-lg max-w-lg mx-auto" />
                        </div>

                        <div className="bg-blue-100 rounded-l-full p-3 lg:w-1/2">
                            <p className="text-blue-800 text-center lg:text-left">
                                Joining the NTC means becoming part of a vibrant and dynamic community. Here are the qualities we look for in our members:
                            </p>
                            <ul className="list-disc list-inside mt-4 text-blue-800">
                                <li>Enthusiasm: A passion for learning and experiencing new things.</li>
                                <li>Team Spirit: Willingness to work as part of a team and support fellow members.</li>
                                <li>Commitment: Dedication to attending meetings, training sessions, and events.</li>
                                <li>Respect: Upholding the values of respect, discipline, and integrity.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[100%] p-4 bg-[#2F5597] mt-12">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-yellow-500">Opportunities for Juniors and Adults</h2>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="m-2 text-white">
                            <h2 className="text-3xl font-bold mb-4">For Juniors</h2>
                            <p className="text-lg">Are you between the ages of 8 and 18? The NTC offers a unique opportunity to learn nautical skills, make new friends, and embark on exciting adventures. From sailing and rowing to navigation and first aid, our comprehensive training program is designed to build confidence, resilience, and leadership skills. Join us and set sail on a journey of discovery and fun!</p>
                        </div>
                        <div className="m-2 text-white">
                            <h2 className="text-3xl font-bold mb-4">For Adults</h2>
                            <p className="text-lg">Adults play a crucial role in the success of NTC. Whether you're interested in volunteering your time as an instructor, mentor, or support staff, there are numerous ways you can contribute. Your expertise, experience, and dedication can make a significant impact on the lives of our young members. Join our team and help us shape the future of tomorrow's leaders!</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full mt-4 gap-7">
            <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image src="/shooting.png" alt="Shooting" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image src="/bigpicture.png" alt="Big Picture"  layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image src="/child.png" alt="Child"  layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>  
                </div>
            </div>

            <div className="bg-[#2F5597] flex justify-center items-center p-4 mt-12">
                <div className="flex flex-col md:flex-row bg-[#d7dff5] items-center p-8 rounded-full shadow-lg w-full max-w-3xl">
                    <div className="text-center mb-4 md:mb-0 md:mr-4 bg-white rounded-l-full w-52 h-14 flex justify-center items-center">
                        <h2 className="text-3xl font-bold text-yellow-500">FAQ</h2>
                    </div>
                    <div className="text-blue-800 text-lg">
                        <p>
                            If you have any questions, you can see our Frequently Asked Questions section.
                            <a href="#" className="text-blue-500 underline ml-2">Click here.</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[100%] p-4 bg-[#2F5597] mt-12">
                <div className="w-full max-w-5xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4 text-yellow-500">How to Get Involved</h2>
                    </div>
                    <p className="text-lg w-full lg:w-2/3 mx-auto font-bold text-white">Ready to take the next step? Learn more about the application process, membership fees, and how you can start your journey with NTC by visiting our <a href="#" className="text-blue-500 underline">How to Get Involved page</a>.</p>

                    <div className="flex flex-wrap w-full mt-4 gap-7">
                        <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                            <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image src="/friends.png" alt="Image"  layout="fill" objectFit="cover" />
                            </div>
                        </div>
                        <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                            <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image src="/experience.png" alt="Image"  layout="fill" objectFit="cover" />
                            </div>
                        </div>
                        <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                            <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                                <Image src="/skillsforlife.png" alt="Image"  layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
