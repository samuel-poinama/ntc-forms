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
                                <Image src="/Nautilus.png" alt="Nautilus" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Nautilus NTC</h2>
                                <p className="text-xs">1st division</p>
                                <p className="text-sm">Kemp Town, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Nautilus" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/valiant.png" alt="Valiant" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="ml-4 ">
                                <h2 className="text-xl font-bold">Training Ship Valiant NTC</h2>
                                <p className="text-sm">5th division</p>
                                <p className="text-sm">Woodingdean, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='flex my-[10px]'>
                        <div className=" my-[10px] bg-white text-blue-800 rounded-full p-2  shadow-lg flex items-center justify-center col-span-2 mx-auto w-[50%] h-[60%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/zealous.png" alt="Zealous" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className=" my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Zealous NTC</h2>
                                <p className="text-sm">8th division</p>
                                <p className="text-sm">Hollingbury, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='my-[10px] flex'>
                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="my-[10px] flex-shrink-0">
                                <Image src="/indomitable.png" alt="Indomitable" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Indomitable NTC</h2>
                                <p className="text-sm">13th division</p>
                                <p className="text-sm">Burgess Hill, West Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="flex-shrink-0">
                                <Image src="/fortitude.png" alt="Fortitude" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Fortitude NTC</h2>
                                <p className="text-sm">41st division</p>
                                <p className="text-sm">St. Leonards-on-Sea, East Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between text-white h-[auto] mb-5">
                <div className="flex flex-col h-auto">
                    <div className="flex my-[10px]">
                        <div className="my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image  src="/horse.png" alt="" width={64} height={79} className="rounded-full"/>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-bold">Training Ship Resolution NTC</h2>
                                <p className="text-sm">11th division</p>
                                <p className="text-sm">East Grinstead, West Sussex</p>
                            </div>
                            <Image className="rounded-full" src="/flower.png" alt="" width={25} height={25} />
                            <a className="text-blue-500 underline" href="#">Ship's website</a>
                        </div>

                        <div className="my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="my-[10px] flex-shrink-0">
                                <Image src="/fist.png" alt="" width={64} height={79} className="rounded-full"/>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-bold">Training Ship Defiance NTC</h2>                                               
                                <p className="text-sm">56th division</p>
                                <p className="text-sm">New Addington, Surrey</p>                                   
                            </div>                           
                                <Image className="rounded-full" src="/flower.png" alt="" width={25} height={25}  />
                                <a className="text-blue-500 font-bold" href="#">Ship's website</a>                                
                        </div>
                    </div>

                    <div className="flex justify-center p-2 h-[200px] ">
                        <div className="my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="my-[10px] flex-shrink-0">
                                <Image src="/lionbleu.png" alt="" width={64} height={79} className="rounded-full"/>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-bold">Training Ship Swiftsure NTC</h2>                                               
                                <p className="text-sm">32nd division</p>
                                <p className="text-sm">Copthorne, West Sussex</p>                                   
                            </div>                           
                                <Image className="rounded-full" src="/flower.png" alt="" width={25} height={25}  />
                                <a className="text-blue-500 font-bold" href="#">Ship's website</a>                                
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
                                <Image src="/Nautilus.png" alt="Nautilus" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Nautilus NTC</h2>
                                <p className="text-xs">1st division</p>
                                <p className="text-sm">Kemp Town, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Nautilus" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/valiant.png" alt="Valiant" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="ml-4 ">
                                <h2 className="text-xl font-bold">Training Ship Valiant NTC</h2>
                                <p className="text-sm">5th division</p>
                                <p className="text-sm">Woodingdean, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='flex my-[10px]'>
                        <div className=" my-[10px] bg-white text-blue-800 rounded-full p-2  shadow-lg flex items-center justify-center col-span-2 mx-auto w-[50%] h-[60%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/zealous.png" alt="Zealous" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className=" my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Zealous NTC</h2>
                                <p className="text-sm">8th division</p>
                                <p className="text-sm">Hollingbury, Brighton</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                    <div className='my-[10px] flex'>
                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="my-[10px] flex-shrink-0">
                                <Image src="/indomitable.png" alt="Indomitable" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Indomitable NTC</h2>
                                <p className="text-sm">13th division</p>
                                <p className="text-sm">Burgess Hill, West Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>

                        <div className="my-[10px] bg-white text-blue-800 rounded-l-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className="flex-shrink-0">
                                <Image src="/fortitude.png" alt="Fortitude" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">Training Ship Fortitude NTC</h2>
                                <p className="text-sm">41st division</p>
                                <p className="text-sm">St. Leonards-on-Sea, East Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Flower" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white font-sans flex w-full mb-5">
                <div className="flex w-full">
                    <div className="flex h-[200px] w-full justify-between p-2 my-[10px]">

                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/lion.png" alt="lion" width={64} height={79} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">National Seamanship Training Centre Lion</h2>
                                <p className="text-xs">RYA Training Centre</p>
                                <p className="text-sm">Portsmouth Harbour, Hampshire</p>
                            </div>
                            <Image src="/flower.png" alt="Nautilus" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
                        </div>


                        <div className=" my-[10px] bg-white text-blue-800 rounded-r-full p-2 mx-1 shadow-lg flex items-center h-[60%] inline-block w-[55%]">
                            <div className=" my-[10px] flex-shrink-0">
                                <Image src="/ntc2.png" alt="lion" width={64} height={64} className="rounded-full" />
                            </div>
                            <div className="my-[10px] ml-4">
                                <h2 className="text-xl font-bold">National Training Center (NHQ)</h2>
                                <p className="text-xs">Training Centre / NHQ only</p>
                                <p className="text-sm">Littlehampton, West Sussex</p>
                            </div>
                            <Image src="/flower.png" alt="Nautilus" width={25} height={25} className="rounded-full" />
                            <a href="#" className="text-blue-500 underline">Ship's website</a>
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