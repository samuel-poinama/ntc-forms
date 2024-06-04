import Image from "next/image";

export default function Division() {
    return (
        <div className="bg-[#2F5597]">
            <div className="flex justify-center items-center min-h-screen mb-5  text-white">
                <div className="flex flex-col md:flex-row w-11/12 max-w-screen-lg space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex-1">
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
                                Detachment Search
                            </h1>
                            <p className="text-base text-center md:text-left md:max-w-md">
                                If you're a 17 to 18-year-old who loves our activities and aims to advance through ranks akin to the Royal Navy, then join NTC.
                            </p>
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400 w-full md:w-1/2">
                                    SEARCH BY UK POSTCODE
                                </button>
                                <button className="bg-transparent text-yellow-500 border border-yellow-500 py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white w-full md:w-1/2">
                                    SEARCH BY COUNTRY
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="Postcode"
                                className="bg-transparent border border-yellow-500 text-yellow-500 py-2 px-4 rounded-md w-full"
                            />
                            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400 w-full md:w-auto">
                                SEARCH
                            </button>
                            <div id="search-results" className="mt-4 text-sm max-w-full md:max-w-xs"></div>
                        </div>
                        <div className="flex justify-center md:justify-start space-x-8 mt-12">

                            <Image src="/Circle_point_ornement.png" alt="img" width={100} height={100} />
                            <Image src="/Circle_point_ornement.png" alt="img" width={100} height={100} />
                            <Image src="/Circle_point_ornement.png" alt="img" width={100} height={100} />
                            <Image src="/Circle_point_ornement.png" alt="img" width={100} height={100} />
                            <Image src="/Circle_point_ornement.png" alt="img" width={100} height={100} />

                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image src="/map.png" alt="UK Map" width={300} height={300} />
                    </div>
                </div>
            </div>
            <div className="p-2 text-white flex flex-col lg:flex-row items-center mb-5  rounded-lg space-y-1 lg:space-y-0">
                <div className="lg:w-2/6 text-left my-[10px]">
                    <h1 className="text-4xl text-yellow-400 font-bold">Eastern Region<br />(East Sussex Divisions)</h1>
                    <div className="mt-4 text-lg my-[10px]">
                        <p>Eastern Region</p>
                        <p><a href="#" className="text-blue-300 underline">Eastern Region Website</a></p>
                        <p><a href="#" className="text-blue-300 underline">Email Regional Commander</a></p>
                    </div>
                </div>

                <div className="lg:w-5/6 text-center block my-[10px]">
                    <div className="flex my-[10px]">
                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/Nautilus.png" alt="Nautilus" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Nautilus NTC</h2>
                                <p className="text-xs">1st division</p>
                                <p className="text-sm">Kemp Town, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Nautilus" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/valiant.png" alt="Valiant" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="ml-4 ">
                                <h2 className="text-xl font-bold">Training Ship Valiant NTC</h2>
                                <p className="text-sm">5th division</p>
                                <p className="text-sm">Woodingdean, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='flex my-[10px]'>
                        <div className=" my-[10px] bg-white text-blue-800 rounded-full p-2  shadow-lg flex items-center justify-center col-span-2 mx-auto w-[50%] h-[60%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/zealous.png" alt="Zealous" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className=" my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Zealous NTC</h2>
                                <p className="text-sm">8th division</p>
                                <p className="text-sm">Hollingbury, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='my-[10px] flex'>
                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="my-[10px] flex-shrink-0">
                                <Image src="/indomitable.png" alt="Indomitable" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Indomitable NTC</h2>
                                <p className="text-sm">13th division</p>
                                <p className="text-sm">Burgess Hill, West Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="flex-shrink-0">
                                <Image src="/fortitude.png" alt="Fortitude" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Fortitude NTC</h2>
                                <p className="text-sm">41st division</p>
                                <p className="text-sm">St. Leonards-on-Sea, East Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between text-white h-[auto] mb-5">
                <div className="flex flex-col h-auto">
                    <div className="flex w-[70vw] justify-between p-2 h-[150px]">

                        <div className="flex p-4 w-[30vw] bg-white text-black border-2 border-black rounded-r-[100px]">
                            <Image className="mr-10 w-[15%]" src="/horse.png" alt="" width={150} height={150} />
                            <div className="ml-4">
                                <h2 className="text-lg text-yellow-600">Training Ship Resolution NTC</h2>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <p>11th division</p>
                                        <p>East Grinstead, West Sussex</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Image className="mr-10 h-10 w-10" src="/crest.png" alt="" width={25} height={25} />
                                        <a className="text-blue-800 font-bold" href="#">Ship's website</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex p-4 w-[30vw] bg-white text-black border-2 border-black rounded-r-[100px]">
                            <Image className="w-[15%] mr-10" src="/fist.png" alt="" width={150} height={150} />
                            <div className="ml-4">
                                <h2 className="text-lg text-yellow-600">Training Ship Defiance NTC</h2>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <p>56th division</p>
                                        <p>New Addington, Surrey</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Image className="mr-10 h-10 w-10" src="/crest.png" alt="" width={25} height={25} />
                                        <a className="text-blue-800 font-bold" href="#">Ship's website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center p-2 h-[150px]">
                        <div className="flex p-4 w-[30vw] bg-white text-black border-2 border-black rounded-r-[100px]">
                            <Image className="w-[15%] mr-10" src="/lionbleu.png" alt="" width={150} height={150} />
                            <div className="ml-4">
                                <h2 className="text-lg text-yellow-600">Training Ship Swiftsure NTC</h2>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <p>32nd division</p>
                                        <p>Copthorne, West Sussex</p>
                                    </div>
                                    <div className="flex items-center m-[10px]">
                                        <Image className="mr-10 h-10 w-10" src="/crest.png" alt="" width={25} height={25} />
                                        <a className="text-blue-800 font-bold" href="#">Ship's website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-right m-2 w-1/3">
                    <h1 className="text-yellow-500 text-4xl mb-2">Northern Region <br /> (Surrey & West Sussex North Divisions)</h1>
                    <p className="text-2xl mb-2">Eastern Region</p>
                    <div className="link">
                        <ul className="list-none">
                            <li className="mb-2"><a className="text-white text-xl" href="#">Eastern Region Website</a></li>
                            <li className="mb-2"><a className="text-white text-xl" href="#">Email Regional Commander</a></li>
                        </ul>
                    </div>
                </div>


            </div>
            <div className="p-2 text-white flex flex-col lg:flex-row items-center mb-5 rounded-lg space-y-1 lg:space-y-0">
                <div className="lg:w-2/6 text-left my-[10px]">
                    <h1 className="text-4xl text-yellow-400 font-bold">Southern Region<br />(South Sussex Divisions)</h1>
                    <div className="mt-4 text-lg my-[10px]">
                        <p>Southern Region</p>
                        <p><a href="#" className="text-blue-300 underline">SouthernRegion Website</a></p>
                        <p><a href="#" className="text-blue-300 underline">Email Regional Commander</a></p>
                    </div>
                </div>

                <div className="lg:w-5/6 text-center block my-[10px]">
                    <div className="flex my-[10px]">
                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/Nautilus.png" alt="Nautilus" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Nautilus NTC</h2>
                                <p className="text-xs">1st division</p>
                                <p className="text-sm">Kemp Town, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Nautilus" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/valiant.png" alt="Valiant" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="ml-4 ">
                                <h2 className="text-xl font-bold">Training Ship Valiant NTC</h2>
                                <p className="text-sm">5th division</p>
                                <p className="text-sm">Woodingdean, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='flex my-[10px]'>
                        <div className=" my-[10px] bg-white text-blue-800 rounded-full p-2  shadow-lg flex items-center justify-center col-span-2 mx-auto w-[50%] h-[60%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/zealous.png" alt="Zealous" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className=" my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Zealous NTC</h2>
                                <p className="text-sm">8th division</p>
                                <p className="text-sm">Hollingbury, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='my-[10px] flex'>
                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="my-[10px] flex-shrink-0">
                                <Image src="/indomitable.png" alt="Indomitable" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Indomitable NTC</h2>
                                <p className="text-sm">13th division</p>
                                <p className="text-sm">Burgess Hill, West Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="flex-shrink-0">
                                <Image src="/fortitude.png" alt="Fortitude" width={60} height={60} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Fortitude NTC</h2>
                                <p className="text-sm">41st division</p>
                                <p className="text-sm">St. Leonards-on-Sea, East Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="h-10 w-10 rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white font-sans flex w-full mb-5">
                <div className="flex w-full">
                    <div className="flex h-[125px] w-full justify-between p-2">
                        <div className="flex w-1/2 p-4 bg-white text-black rounded-r-[50px] m-2 items-center">
                            <Image className="w-[10%] h-full" src="/lion.png" alt="" height={150} width={150} />
                            <div className="ml-4">
                                <h2 className="text-lg text-yellow-600">National Seamanship Training Centre Lion</h2>
                                <div className="flex justify-between mt-2">
                                    <div>
                                        <p className="text-blue-800 font-bold">RYA Training Centre</p>
                                        <p className="text-blue-800 font-bold">Portsmouth Harbour, Hampshire</p>
                                    </div>
                                    <div className="flex items-center ml-16 mr-2">
                                        <Image className="h-10 w-10" src="/crest.png" alt="" height={25} width={25} />
                                        <a className="text-blue-800 font-bold ml-4" href="#">Ship's website</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-1/2 p-4 bg-white text-black rounded-r-[50px] m-2 items-center">
                            <Image className="w-[10%] h-full" src="/ntc2.png" alt="" height={100} width={100} />
                            <div className="ml-4">
                                <h2 className="text-lg text-yellow-600">National Training Center (NHQ)</h2>
                                <div className="flex justify-between mt-2">
                                    <div>
                                        <p className="text-blue-800 font-bold">Training Centre / NHQ only</p>
                                        <p className="text-blue-800 font-bold">Littlehampton, West Sussex</p>
                                    </div>
                                    <div className="flex items-center ml-16 mr-2">
                                        <Image className="h-10 w-10" src="/crest.png" alt="" height={25} width={25} />
                                        <a className="text-blue-800 font-bold ml-4" href="#">Ship's website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-right m-2 w-1/3">
                        <h1 className="text-yellow-500 text-4xl mb-2">Training Centres</h1>
                        <p className="text-2xl mb-2">Eastern Region</p>
                        <div className="link">
                            <ul className="list-none">
                                <li className="mb-2"><a className="text-white text-xl" href="#">Eastern Region Website</a></li>
                                <li className="mb-2"><a className="text-white text-xl" href="#">Email Regional Commander</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}