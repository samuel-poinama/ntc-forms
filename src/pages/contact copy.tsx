import Image from "next/image";

export default function Contact() {
    return (
        <div className="bg-[#2F5597]">

            <div className="bg-[#2F5597] min-h-screen py-12 relative">
                <div className="text-center mb-8">
                    <h1 className="text-yellow-400 text-5xl font-bold">Contact Us</h1>
                </div>
                <div className="text-center mb-8">
                    <h3 className="text-white text-lg">Any question or remarks? Just write us a message!</h3>
                </div>
                <div className="container mx-auto max-w-[80%] bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex flex-wrap justify-between">
                        <div className="bg-[#2F5597] text-white rounded-lg w-full lg:w-[40%] mb-6 lg:mb-0 relative">
                            <h2 className="text-2xl mt-12 ml-[10%] mb-4">Contact Information</h2>
                            <h4 className="text-lg ml-[10%] mb-6">Say something to start a live chat!</h4>
                            <div className="mt-[10%] space-y-6 ml-6">
                                <div className="flex items-center">
                                    <i className="fa-solid fa-phone-volume mr-4"></i>
                                    <p className="ml-[10%]">0300 124 6645</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fa-regular fa-envelope mr-4"></i>
                                    <p className="ml-[10%]">pro@ntc.org.uk / natsec@ntc.org.uk</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fa-solid fa-location-dot mr-4"></i>
                                    <p className="ml-[10%]">72 Wick Farm Road, Wick, <br /> Littlehampton, West Sussex <br /> BN17 7HG</p>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-center">
                                <Image src="/Img1.png" alt="Contact Image" width={200} height={200} className="mt-10 ml-[69%]" />
                            </div>
                        </div>
                        <div className="bg-white p-6 w-full lg:w-1/2">
                            <h2 className="text-2xl mb-4">Get in Touch</h2>
                            <form>
                                <div className="flex flex-wrap -mx-2 mb-4">
                                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                        <label htmlFor="first-name" className="block text-gray-700">First Name:</label>
                                        <input type="text" id="first-name" className="mt-1 block w-full border-b-2 border-gray-300 focus:border-button outline-none py-2" required />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label htmlFor="last-name" className="block text-gray-700">Last Name:</label>
                                        <input type="text" id="last-name" className="mt-1 block w-full border-b-2 border-gray-300 focus:border-button outline-none py-2" required />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-2 mb-4">
                                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                                        <input type="email" id="email" className="mt-1 block w-full border-b-2 border-gray-300 focus:border-button outline-none py-2" required />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label htmlFor="phone" className="block text-gray-700">Phone Number:</label>
                                        <input type="text" id="phone" className="mt-1 block w-full border-b-2 border-gray-300 focus:border-button outline-none py-2" required />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Select Subject?</label>
                                    <div className="flex flex-wrap space-x-4">
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="subject" value="Lorem Ipsum 1" className="text-yellow-500" />
                                            <span className="ml-2 text-black">Lorem Ipsum 1</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="subject" value="Lorem Ipsum 2" className="text-yellow-500" />
                                            <span className="ml-2 text-black">Lorem Ipsum 2</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="subject" value="Lorem Ipsum 3" className="text-yellow-500" />
                                            <span className="ml-2 text-black">Lorem Ipsum 3</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="subject" value="Lorem Ipsum 4" className="text-yellow-500" />
                                            <span className="ml-2 text-black">Lorem Ipsum 4</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700">Message:</label>
                                    <textarea id="message" className="mt-1 block w-full border-b-2 border-gray-300 text-black focus:border-button outline-none py-2" required></textarea>
                                </div>
                                <div className="flex mt-12">
                                    <button type="submit" className="bg-button p-2 pl-4 pr-4">Send Message</button>
                                </div>
                            </form>
                        </div>
                </div>
                </div>
            </div>
            <div className="bg-[#2F5597] flex flex-col items-center">
                <div className="my-8">
                    <h1 className="text-yellow-400 text-5xl font-bold">Location</h1>
                </div>
                <p className="text-white text-center w-full mb-8">If you have any concerns, come see us!</p>
                <div className="w-4/5 bg-blue-50 p-4 rounded-2xl mb-8 border-8 border-white">
                    <iframe className="w-full h-[600px] border-0 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.9035874980912!2d-0.5463881729845262!3d50.81550472999511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875a5648b014573%3A0xc033e2cd71baf6a!2sNautical%20Training%20Corps!5e0!3m2!1sfr!2suk!4v1716299434876!5m2!1sfr!2suk"
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}
