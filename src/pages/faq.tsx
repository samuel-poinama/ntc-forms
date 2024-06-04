import Image from 'next/Image';

export default function Faq() {
    return (
        <div className='bg-[#2F5597] w-full '>
            <div className="flex flex-col md:flex-row justify-center items-center py-12 px-12 md:px-12">
                {/* Left side: Text content */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    {/* Heading with gradient text */}
                    <h1 className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-500 mb-4">
                        Frequently Asked Question (FAQ)
                    </h1>
                    {/* Paragraph with welcome message */}
                    <p className="text-lg text-white">
                        Welcome to our FAQ page! If you have questions about our products or services,
                        you are in the right place. Browse the answers to common questions below for quick access to
                        the information you need. If you can’t find what you’re looking for, feel free to contact us
                        directly.
                    </p>
                </div>
                {/* Right side: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image src="/faq.png" alt="FAQ illustration" width={585} height={332} className="w-full h-auto max-w-md" />
                </div>
            </div>

            <div className="p-6">
                {/* Main heading for the FAQ section */}
                <h2 className="text-yellow-500">Questions for Potential Cadets</h2>

                {/* FAQ item 1 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">I'm interested but don't have any knowledge of the NTC, music or seamanship, so is there any point in me joining?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">It doesn't matter! - we will teach you everything that you need to know. You will get to learn lots and experience a whole load of new stuff.</p>
                    </div>
                </div>

                {/* FAQ item 2 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">It all looks good, but I really don't want to camp, do I have to?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">No, you don't have to. No extra activity is compulsory, although we always like all cadets to try new experiences and achieve their full potential. Usually you will find out just how fun it is!</p>
                    </div>
                </div>

                {/* FAQ item 3 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">Can I just join a band?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">No, we want you to attend Deck Nights regularly for your unit, so that you play a full part and make the most of the opportunities available.</p>
                    </div>
                </div>

                {/* FAQ item 4 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">Can I join but not come every week?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">No, although alternative arrangements can be discussed to deal with any temporary problems that arise.</p>
                    </div>
                </div>

                {/* FAQ item 5 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">I am only 8 and find the finishing time too late, what can I do?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">We can organise an earlier finishing time if you need one.</p>
                    </div>
                </div>

                {/* FAQ item 6 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">I'm not sure if I would be any good, but want to have a go, can I?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">Yes of course! You'll have a trial period to decide if you like it before you join.</p>
                    </div>
                </div>

                {/* FAQ item 7 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">Do I have to wear the uniform?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">Yes, we expect all cadets to wear the uniform, with pride.</p>
                    </div>
                </div>
            </div>

            <div className="p-6">
                {/* Main heading for the FAQ section */}
                <h2 className="text-yellow-500">Questions for Potential Cadets</h2>

                {/* FAQ item 1 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">I'm interested but don't have any knowledge of the NTC, music or seamanship, so is there any point in me joining?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">It doesn't matter! - we will teach you everything that you need to know. You will get to learn lots and experience a whole load of new stuff.</p>
                    </div>
                </div>

                {/* FAQ item 2 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">It all looks good, but I really don't want to camp, do I have to?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">No, you don't have to. No extra activity is compulsory, although we always like all cadets to try new experiences and achieve their full potential. Usually you will find out just how fun it is!</p>
                    </div>
                </div>

                {/* FAQ item 3 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">Can I just join a band?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">No, we want you to attend Deck Nights regularly for your unit, so that you play a full part and make the most of the opportunities available.</p>
                    </div>
                </div>

                {/* FAQ item 4 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">Can I join but not come every week?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">No, although alternative arrangements can be discussed to deal with any temporary problems that arise.</p>
                    </div>
                </div>

                {/* FAQ item 5 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">I am only 8 and find the finishing time too late, what can I do?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">We can organise an earlier finishing time if you need one.</p>
                    </div>
                </div>

                {/* FAQ item 6 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">I'm not sure if I would be any good, but want to have a go, can I?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">Yes of course! You'll have a trial period to decide if you like it before you join.</p>
                    </div>
                </div>

                {/* FAQ item 7 */}
                <div className="bg-white rounded-lg shadow-lg p-4 my-4">
                    {/* Question section */}
                    <div className="flex items-center mb-4">
                        <div className="bg-yellow-500 rounded-full w-10 h-10 flex justify-center items-center mr-4">
                            <Image src="/comunity.png" alt="" width={40} height={40} />
                        </div>
                        <p className="text-blue-700">Do I have to wear the uniform?</p>
                    </div>
                    {/* Answer section */}
                    <div className="flex items-center">
                        <Image src="/ntc2.png" alt="" width={40} height={40} className="mr-4" />
                        <p className="text-blue-700">Yes, we expect all cadets to wear the uniform, with pride.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}