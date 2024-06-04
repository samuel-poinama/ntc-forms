import Image from "next/Image";

export default function Nautilus() {
    return (
        <>
            <div>
                <div className=" flex flex-col items-center justify-center h-[100%] p-4 bg-[#2F5597]">
                    <div className="flex items-center justify-center mb-8 w-[70%]">
                        <div className="mr-8 w-1/3">
                            <Image src="/nautilus.png" alt="Image" width={150} height={200} />
                        </div>
                        <div className="flex flex-col w-2/3">
                            <h1 className="text-4xl font-bold mb-2 text-yellow-500">TS NAUTILUS</h1>
                            <p className="text-lg text-white">Welcome to the website of TS Nautilus, the Kemp Town,</p>
                            <p className="text-lg text-white"> Brighton Division of the Nautical Training Corps</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-8 w-[70%]">
                        <div className="mb-4 w-full relative" style={{ height: "500px" }}>
                            <Image src="/decord.png" alt="Image" layout="fill" objectFit="cover" />
                        </div>
                        <div className="text-left w-full">
                            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Informations</h2>
                            <div className="text-lg text-white">
                                <p>The Nautical Training Corps, a uniformed organization in southern England, caters to young people aged eight and above. For more information, visit the National Website.

                                    Units near Nautilus include TS Valiant, TS Zealous, TS Indomitable, and TS Fortitude, forming the Eastern Region of the NTC.

                                    We meet on 'Deck Nights' from 7pm to 9pm. Activities vary by season and schedule, including marine navigation, survival techniques, uniform maintenance, first aid, communication skills, and ropework. In working rig, we play games, do rifle shooting or archery. In summer, we enjoy outdoor activities like hikes, barbecues, and beach swimming.</p>
                            </div>
                            <div className="mb-4 w-full relative" style={{ height: "500px" }}>
                                <Image src="/decord2.png" alt="Image" layout="fill" objectFit="cover" />
                            </div>
                            <div className="text-lg text-white mb-[10%]">
                                <p>TS Nautilus is a youth organisation established in the area of Brighton since 1944. We are currently looking for new recruits, boys and girls between the ages of 8 to 16 to join a fun and exciting youth group. If your reading this and think that this is exactly for you or your children then please contact us. We offer challenging, exciting activities for all ages so please come and see what we're all about.</p>
                            </div>
                            <div className="mb-4 w-full relative" style={{ height: "500px" }}>
                                <Image src="/decord3.png" alt="Image" layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className=" flex flex-col items-center justify-center h-[100%] p-4 bg-[#2F5597]">
                    <div className="text-left w-full w-[70%] mx-auto">
                        <h2 className="text-3xl font-bold text-yellow-500 mb-4">Questions</h2>

                        <div className="bg-white mb-[5%]">

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> This seems interesting and I would like to give it a try, but I don't have any knowledge of the NTC or Naval Seamanship. Do I need to worry?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> No you don't need to worry. You will be taught everything you need to know.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-[5%]">

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black">I like the look of the NTC, but do I have to do every activity?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> We will not force you to do any activity you do not like. We will encourage you to have a go first though if you've never tried it before. You may find you love it after a few goes!</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-[5%]">

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> Can I just join the band?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> No, you must attend all deck nights before joining the band.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-[5%]">

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> Can I join but not attend every week?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black">Not usually, as we like the cadets to show the same dedication and loyalty as the rest of the Ship's Company. However, alternative arrangements can be discussed to deal with any temporary problems that may arise.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-[5%]">

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black">Do I have to wear the uniform?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> Yes, we expect all cadets and officers of the NTC to wear their uniforms with pride.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mb-[5%]">
                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> Are there any checks you run when I join?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> Yes. When you join you will be asked to provide two referees and we will run a full DBS Police check on you. You will not be allowed to work unsupervised with the cadets until these checks have been cleared.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mb-[5%]">
                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> Do I get paid to do this?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black">No, all NTC personnel are unpaid members.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mb-[5%]">
                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/userdivision.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> Do I have to wear a uniform?</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-8 w-[70%]">
                                <div className="mr-8 w-1/3">
                                    <Image src="/ntc2.png" alt="Image" width={100} height={100} />
                                </div>
                                <div className="flex flex-col w-2/3">
                                    <p className="text-lg text-black"> You do if you join as an officer, but as a committee member you do not.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className=" flex flex-col items-center justify-center h-[100%] p-4 bg-[#2F5597]">


                    <div className="flex flex-col items-center justify-center mb-8 w-[70%]">
                        <div className="mb-4 w-full relative" style={{ height: "500px" }}>
                            <Image src="/child.png" alt="Image" layout="fill" objectFit="cover" />
                        </div>
                        <div className="text-left w-full">
                            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Child Protection</h2>
                            <div className="text-lg text-white">
                                <p>Protecting young people is central to all youth organizations. The Nautical Training Corps requires criminal record checks from the Disclosure & Barring Service (DBS) for anyone with unsupervised or regular supervised access to young people. This includes supervised adults to prevent abuse of trust outside the organization.

                                    New adults undergo a probation period with supervised access to young people. Ongoing protection is ensured through vigilant adherence to NTC's Rules and Regulations. Adult training includes recognizing signs of abuse and reporting duties, ensuring constant vigilance and responsiveness to any issues.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}