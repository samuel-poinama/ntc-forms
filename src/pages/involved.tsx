import Image from 'next/image';
import Link from 'next/link';

export default function Involved() {
    return (
        <div className="bg-[#2F5597] text-white font-sans">
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 px-4">
                        <div className="title-container pb-4">
                            <h2 className="text-yellow-400 text-3xl font-bold">
                                How to get involved
                            </h2>
                        </div>
                        <p>
                            The NTC provides nautical based training and plenty of opportunity
                            for fun. Every year we host a National Camp with a load of fun
                            activities from archery to cooking, canoeing to parade drills. The
                            NTC is also extremely useful for local communities as we offer
                            courses and camps as well as attending national events.
                        </p>
                        <p>
                            As a cadet you can get involved with your local Ship from the ages
                            of 10 to 18 years old. There are many activities available
                            especially in sports & band and our teams have excelled on all
                            levels including international.
                        </p>
                        <p>
                            The NTC always needs willing volunteers who either have skills on
                            a youth group or have some spare time or are just looking for ways
                            in which you could help us.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center items-center">
                        <div className="max-w-xs md:max-w-full">
                            <Image
                                src="/backgroundEffect1.png"
                                alt="background effect"
                                width={200}
                                height={400}
                                className="inline-block"
                            />
                        </div>
                        <div className="max-w-xs md:max-w-full">
                            <Image
                                src="/ntc.png"
                                alt="Nautical Training Corps"
                                width={600}
                                height={400}
                                className="inline-block"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#2F5597]">
                <div className="text-center">
                    <h2 className="text-yellow-500 text-2xl font-bold mb-4">
                        Become a Cadet (Aged 8-18)
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 p-4 justify-center">
                    <div className="flex-1 lg:w-6/12 w-full text-white">
                        <p className="mb-4">
                            So you've seen what we're all about, now it's time to try it out!
                        </p>
                        <p className="mb-4">
                            If you've not had a look already, have a look at our division page to find your location unit.
                        </p>
                        <p className="mb-4">
                            As a cadet, you will attend a deck night usually one night every week.
                            Here you will learn a load of skills from knots and ropework, first aid, drill
                            (marching) as well as fun and games with your new friends too. All ships
                            have trips out and activities, most take part in carnivals and parades and
                            there are events throughout the year the whole Corps takes part in.
                        </p>
                        <p>
                            If you want to contact us, click 
                            <Link className="text-blue-500 underline ml-2" href="contact">here.</Link>
                        </p>
                        
                    </div>
                    <div className="lg:w-6/12 w-full flex flex-col lg:flex-row justify-center lg:justify-end gap-0">
                        <Image
                            src="/disigne.png"
                            alt=""
                            width={175}
                            height={288}
                            className="rounded w-[40%] lg:w-auto justify-end hidden lg:block"
                        />
                        <Image
                            src="/cadet.png"
                            alt=""
                            width={500}
                            height={333}
                            className="rounded w-full lg:w-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#2F5597]">
                <div className="text-center">
                    <h2 className="text-yellow-500 text-2xl font-bold mb-4">
                        Become an Adult member
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 p-4 justify-center">
                    <div className="flex-1 lg:w-6/12 w-full text-white">
                        <p className="mb-4">
                            The NTC wouldn’t survive without the help of all its volunteers who freely donate their time. There is far more to the NTC than just
                            the uniformed side you see. If you feel you have a business skill whether it be Press, Financial, Building, Maintenance,
                            Fundraising or indeed any skills or time you can offer please contact us we’d love to hear from you.
                        </p>
                        <p className="mb-4">
                            We are always looking for RYA Royal Yachting Association qualified instructors.
                            If you can help, please contact our Boating Advisor.
                        </p>
                        <p className="mb-4">
                            If you want to help young people develop at a local ship level and have some spare time and a sense of commitment,
                            you may have the potential to become an instructor or an officer within the Nautical Training Corps. We understand the amount
                            of commitment that people can give will vary, so please do get in contact even just to have a chat.
                        </p>
                        <p className="mb-4">
                            You do not need a nautical or teaching background as the Corps can provide new members with any necessary information,
                            training and instructions.
                        </p>
                        <p>
                            If you want to contact us, click 
                            <Link className="text-blue-500 underline ml-2" href="contact">here.</Link>
                        </p>
                    </div>
                    <div className="lg:w-6/12 w-full flex flex-col lg:flex-row justify-center lg:justify-end gap-0">
                        <Image
                            src="/pic1.png"
                            alt=""
                            width={175}
                            height={288}
                            className="rounded w-[40%] lg:w-auto justify-end hidden lg:block"
                        />
                        <Image
                            src="/involved6.jpg"
                            alt=""
                            width={500}
                            height={333}
                            className="rounded w-full lg:w-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#2F5597]">
                <div className="text-center">
                    <h2 className="text-yellow-500 text-2xl font-bold mb-4">
                        Child Protection
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 p-4 justify-center">
                    <div className="flex-1 lg:w-6/12 w-full text-white">
                        <p className="mb-4">
                            The Corps places the highest importance on protecting the young people in its care.
                        </p>
                        <p className="mb-4">
                            All who have unsupervised or regular supervised access to our young people are required to agree to a criminal record check from the Disclosure and Barring Service DBS. This provides a degree of assurance about the past of the applicant. We have taken the step of requiring checks for adults who have regular supervised access because we believe that there is a risk that trust built whilst under supervision could be abused outside the activities of the organisation.
                        </p>
                        <p className="mb-4">
                            All new adults are required to serve a period of probation, during which all access to young people is supervised, to allow the organisation to establish first-hand experience of the person before she is allowed to take sole charge of young people.
                        </p>
                        <p className="mb-4">
                            Checking new adults is only part of the story. The Rules and Regulations of the Nautical Training Corps set out procedures to provide ongoing protection and re-assurance. Constant vigilance is really the only way that protection can be effectively provided to young people.
                        </p>
                    </div>
                    <div className="lg:w-6/12 w-full flex flex-col lg:flex-row justify-center lg:justify-end gap-0">
                        <Image
                            src="/disigne.png"
                            alt=""
                            width={175}
                            height={288}
                            className="rounded w-[40%] lg:w-auto justify-end hidden lg:block"
                        />
                        <Image
                            src="/childP.png"
                            alt=""
                            width={500}
                            height={333}
                            className="rounded w-full lg:w-auto"
                        />
                    </div>
                </div>
                <div className="p-6 pt-0 text-white">
                    <p>
                        An important part of protection is recognition by others. Our training for adults includes instruction on recognising the signs of abuse and their duties in reporting to the authorities. The adults within the organisation play an important role in monitoring the young people in their charge and being constantly vigilant for, and responsive to, any issues that may arise.
                    </p>
                </div>
            </div>

            <div className="bg-[#2F5597] flex justify-center items-center p-4">
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
        </div>
    );
}
