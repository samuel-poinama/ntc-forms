
import Image from "next/image";

export default function Histoire() {
    return (
        <div className="w-full bg-[#2F5597]">
            <div className="container mx-auto pt-3 ">
                {/* Heading Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-yellow-400">History of Nautical Training Corps</h1>
                </div>

                {/* Main Content Section */}
                <div className="md:flex md:space-x-8 mb-8 text-white text-lg">
                    {/* First Column */}
                    <div className="md:w-1/2 space-y-4 ">
                        {/* Paragraphs */}
                        <p>
                            The Nautical Training Corps was founded on 19 May 1944 by Commodore,
                            F P (Frank) Froést-Carr OBE NTC (1888 - 1975).
                        </p>
                        <p>
                            The NTC's first 'unit' was Training Ship Nautilus in Brighton,
                            based at the old Richmond Road School. The unit took its name from HMS Nautilus,
                            which had been Froést-Carr's first seagoing ship in the Royal Navy.
                            TS Nautilus is still open and serving local youth in Brighton, although has now relocated to
                            Chesham Road.
                        </p>
                        <p>
                            This unit comprised 140 cadets and just 2 other officers.
                            "First Brighton Division" was followed by "First London Division", TS Enterprise.
                            The first National HQ was based at Pavilion Buildings, Brighton,
                            underneath Brighton Chess Club and by the entrance to the Royal Pavilion.
                            It later moved to the Old Shoreham Road and Shoreham Harbour.
                        </p>
                    </div>

                    {/* Second Column */}
                    <div className="md:w-1/2 space-y-4">
                        {/* Paragraphs */}
                        <p>
                            The Corps spread throughout the south of England and beyond, particularly in Sussex,
                            Hampshire and south London; there have also been units as far afield as Acton, Northampton,
                            Milton Keynes and Derby. In all there have been over 64 units, or 'Training Ships',
                            but the exact number is unknown as the records of some units have been lost over time.
                            These have included an all-girl unit at TS Tudor Rose, and an all-boy unit, TS Collingwood,
                            both at Langley Green in Crawley. All training ships have been named after actual ships of the
                            Royal Navy.
                        </p>
                        <p>
                            Over the past six decades, thousands of young people have learned seafaring and musical
                            skills through the Corps. The Nautical Training Corps now stands at some twenty units, still covering
                            the South Coast and up in-land towards London. Units can often be seen supporting local communities by
                            heading up parade and carnival processions and providing entertainment at festivals and local events,
                            which are always well received. In the past few years the NTC has celebrated many anniversaries with
                            ships from across the Corps featuring in local news. Articles on these events can be found within the
                            news blog.
                        </p>
                    </div>
                </div>

                {/* Image Gallery Section */}
                <div className="flex flex-wrap w-full mt-4 gap-7">
                    <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                        <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                            <Image src="/his_one.png" alt="Image" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                        <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                            <Image src="/his_two.png" alt="Image" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[29%] m-1 sm:m-3">
                        <div style={{ paddingBottom: "75%" }} className="relative rounded-lg overflow-hidden shadow-lg">
                            <Image src="/his_three.png" alt="Image" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>


            </div>



            <div className="max-w-screen-2xl mx-auto p-6 ">
                {/* Heading Section */}
                <div className="mb-0">
                    {/* Section heading with yellow text, large font size, bold weight, bottom margin, and centered text */}
                    <h2 className="text-3xl font-bold text-yellow-500 mb-4 text-center">The Founder</h2>
                    {/* Paragraph with larger text size and white color */}
                    <p className="text-lg text-white">
                        Frank Froést-Carr, the son of a Scotland Yard police inspector,
                        joined the Royal Navy as a 15 year old boy entrant in the closing years of sail.
                        He joined HMS Lion, at Devonport, a training ship for boy entrants. He completed his
                        initial training in HMS Implacable, before joining HMS Nautilus for deep-sea training.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col md:flex-row items-start mb-6">
                    {/* Text Content */}
                    <div className="md:w-2/3 p-4 rounded-lg mb-4 md:mb-0 md:mr-4">
                        <p className="text-lg text-white mb-4">
                            In his day the life was hard and the discipline harsh, but the service fostered quality of life,
                            comradeship and loyalty, producing a man of stalwart character and sterling worth. In his nineteen
                            years service in the RN he rose to Petty Officer, serving in many parts of the world and seeing
                            action in the First World War. After leaving the service in 1926 he joined the Royal Naval Volunteer
                            Reserve. He rose to Lieutenant Commander, later resigning his commission to start a new career in the
                            Youth Service.
                        </p>
                        <p className="text-lg text-white mb-4">
                            Froést-Carr formed the Corps in response to his and many others concerns for the country in the
                            aftermath of war, which was then still raging. By now a probation officer, he observed that
                            "Daily the flower of our young manhood was being taken from us .... many homes were broken up and a great
                            many young people outside their school hours were not receiving the benefits of training in any
                            youth organisation." He dreaded a repeat of the experience that had followed the 1914-18 war, with
                            confusion and futility leading to degradation and demoralisation of the young; he yearned instead to
                            see the nation "rise, triumphant like the Phoenix from the ashes of a crumbling world, to a
                            brighter future and an age in which Britain would be greater than she has ever been
                            before."
                        </p>
                        <p className="text-lg text-white mb-4">
                            Having spent a large part of his life in the Royal Navy, seeing it turn out
                            "men, in the best sense of the word, imbued with all the virtues of true patriotism and the
                            qualities that made the British sailor honoured, respected and liked throughout the
                            world" he decided that his contribution would be to found a youth organisation, based on sea training
                            and discipline, to encourage the qualities of good citizenship. The foundation was the climax of
                            many months work scheming out the organisation's constitution, regulations and training, all in what
                            little time he could spare from war duties. A great believer in co-operation and the value of a
                            simple code of conduct in the form of a promise, he wrote
                            "Know Your Corps," a short but fascinating
                            insight into his thinking in setting up the Corps, and was the principal author of the Official
                            Handbook.
                        </p>
                        <p className="text-lg text-white mb-4">
                            For many years he had served as the County Commissioner for Sea Scouts in Sussex and believed,
                            a little controversially for the time, that youth organisations should cater for both boys and
                            girls. He was also at one time a welfare officer to Merchant Navy apprentices.
                        </p>
                        <p className="text-lg text-white mb-4">
                            In 1973 the value of his service to youth was recognised by the award of an OBE. In 1975,
                            he published
                            "Spun Yarn & Bell Bottoms," a fascinating story of life on the lower deck in an old square-rigged training ship in the
                            early years of the last century, and on a steam cruiser up to the end of World War One.
                        </p>
                        <p className="text-lg text-white">
                            Our first and longest-serving Commodore, he remained Commodore of the Nautical Training Corps
                            until his death in 1975.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/3 flex flex-col items-center">
                        <div className="p-4 mb-4 w-full">
                            {/* Decorative wave image */}
                            <div className="hidden md:block">
                                <Image src="/wave.png" alt="Wave Image" width={157} height={200} className="h-50 w-96 mr-2 mb-7" />
                            </div>
                            {/* Founder image */}
                            <Image src="/founder.png" alt="Founder Image" width={385} height={383} className="mt-4 rounded-lg" />
                            {/* Decorative wave image */}
                            <div className="hidden md:block">
                                <Image src="/wave.png" alt="Wave Image" width={157} height={200} className="h-50 w-96 mr-2 mt-7" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-1 flex flex-col md:flex-row items-center justify-center">
                        {/* Decorative rectangle image */}
                        <Image src="/rectangle.png" alt="Image" width={1012} height={386} className="h-96 w-40 mr-4 hidden md:block" />
                        <div className="flex-1 p-4 rounded-lg  mb-4 md:mb-0 md:mr-4">
                            {/* Panorama image */}
                            <Image src="/pano.png" alt="Panorama Image" width={1000} height={386} className="w-full h-96" />
                        </div>
                        {/* Decorative rectangle image */}
                        <Image src="/rectangle.png" alt="Image" width={1012} height={386} className="h-96 w-40 mr-4 hidden md:block" />
                    </div>
                </div>
            </div>
        </div>
    )
}