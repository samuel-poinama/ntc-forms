import Image from 'next/image';

export default function Structure() {
    return (
        <div className="bg-[#2F5597]">
            <div className="space-y-10 p-4 ">
                {/* Heading Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-6">
                    <div className="lg:w-1/2 pl-10">
                        <h1 className="text-yellow-400 text-4xl font-bold">
                            <p>The National Council</p>
                            <p>(Trustees)</p>
                        </h1>
                    </div>
                    <div className="bg-blue-100 rounded-l-full p-3 lg:w-1/2 ">
                        <p className="bg-clip-text  bg-gradient-to-r from-white via-yellow-400 to-yellow-400 text-blue-900">
                            The Corps is managed by a board of Trustees headed by Chair, open to elections every three years.
                            The board of Trustees are made up of uniformed volunteers in addition to other non-uniformed volunteers.
                        </p>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-6 pt-0 space-y-6 lg:space-y-0 text-white">
                    <div className="lg:w-1/2 space-y-4 pl-10">
                        <p>
                            The National Council is the Corps governing body and the trustees of the charity,
                            responsible for ensuring its lawful and responsible control and use of resources.
                            The Charity is unincorporated, its Constitution being set out in the Corps Rules and
                            Regulations. Its entry on the Charity Commission register can be seen by <a href="#" className="text-white underline">clicking here</a>.
                        </p>
                        <p>
                            The National Council currently comprises 11 people (ten trustees, and one non-trustee),
                            both uniformed and lay members, to provide a balance of views and experience.
                            All have specific areas of responsibility in addition to those of National Council
                            membership and trusteeship generally. The Charity’s main officers are the Chairman,
                            Commodore, Chief of Staff, Treasurer, and National Secretary. The National Council formally
                            meets quarterly, with department heads coordinating and working with Corps members between meetings.
                        </p>
                        <p>
                            Meetings, which are open to members of the Corps, are normally held at the NTC’s National
                            Headquarters (NHQ). NHQ is located at our National Training Centre, in Littlehampton,
                            West Sussex.
                        </p>
                    </div>
                    <div className="lg:w-1/2 text-center">
                        <Image src="/structure.png" alt="structure" width={600} height={500} className="mx-auto" />
                    </div>
                </div>
            </div>

            <div className="space-y-10 p-4 ">
                {/* Heading Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-6">
                    <div className="bg-blue-100 rounded-r-full p-3 lg:w-1/2">
                        <p className="text-blue-800 bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-yellow-400 ">
                            The Corps is managed by a board of Trustees headed by Chair, open to elections every three years.
                            The board of Trustees are made up of uniformed volunteers in addition to other non-uniformed volunteers.
                        </p>
                    </div>
                    <div className="lg:w-1/2 pl-10">
                        <h1 className="text-yellow-400 text-4xl font-bold">
                            <p>The National Council</p>
                            <p>(Trustees)</p>
                        </h1>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-6 pt-0 space-y-6 lg:space-y-0 text-white">
                    <div className="lg:w-1/2 text-center">
                        <Image src="/structure.png" alt="structure" width={600} height={500} className="mx-auto" />
                    </div>
                    <div className="lg:w-1/2 space-y-4 pl-10">
                        <p>
                            The National Council is the Corps governing body and the trustees of the charity,
                            responsible for ensuring its lawful and responsible control and use of resources.
                            The Charity is unincorporated, its Constitution being set out in the Corps Rules and
                            Regulations. Its entry on the Charity Commission register can be seen by <a href="#" className="text-white underline">clicking here</a>.
                        </p>
                        <p>
                            The National Council currently comprises 11 people (ten trustees, and one non-trustee),
                            both uniformed and lay members, to provide a balance of views and experience.
                            All have specific areas of responsibility in addition to those of National Council
                            membership and trusteeship generally. The Charity’s main officers are the Chairman,
                            Commodore, Chief of Staff, Treasurer, and National Secretary. The National Council formally
                            meets quarterly, with department heads coordinating and working with Corps members between meetings.
                        </p>
                        <p>
                            Meetings, which are open to members of the Corps, are normally held at the NTC’s National
                            Headquarters (NHQ). NHQ is located at our National Training Centre, in Littlehampton,
                            West Sussex.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}