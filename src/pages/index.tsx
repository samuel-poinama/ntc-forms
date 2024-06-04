import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-website">
      <div>
        <div className="flex flex-col md:flex-row items-center bg-website text-white p-6 md:p-12">
          <div className="flex-1 md:mr-6 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent mb-4">
              Welcome to the Nautical Training Corps
            </h1>
            <p className="text-lg md:text-xl mb-4">
              The Nautical Training Corps (NTC) is a uniformed youth
              organisation and registered charity, based in the south of
              England.
            </p>
            <p className="text-lg md:text-xl mb-4">
              The Corps aims to help young people develop their full potential
              through nautically based training.
            </p>
            <p className="text-lg md:text-xl">Registered Charity No. 306084</p>
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
                className="inline-block rounded-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="mt-16">
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent text-4xl text-center font-roboto mb-8">
                About Us
              </h1>
              <div className="flex flex-col md:flex-row bg-white text-black mx-0 rounded-md md:rounded-r-[150px] p-6 md:p-12 mr-24">
                <div className="flex-1 md:pr-12 mb-6 md:mb-0">
                  <h2 className="text-2xl text-center md:text-left text-yellow-400 font-bold mb-4">
                    Activities
                  </h2>
                  <p className="text-xl font-roboto leading-relaxed max-w-3xl">
                    The Corps offers a variety of activities like sailing,
                    canoeing, sports, climbing, music, and shooting, available
                    at local divisions, national activity centers, and other
                    facilities, including the Duke of Edinburgh&apos;s Award Scheme.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end md:mr-12">
                  <Image
                    src="/ntc.png"
                    alt="Nautical Training Corps"
                    width={400}
                    height={200}
                    className="rounded-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row bg-white text-black mx-0 rounded-md md:rounded-l-[150px] p-6 md:p-12 ml-24">
                <div className="flex justify-center md:justify-end md:ml-12">
                  <Image
                    src="/ntc.png"
                    alt="Nautical Training Corps"
                    width={400}
                    height={300}
                    className="rounded-[30px]"
                  />
                </div>
                <div className="flex-1 md:pr-12 mb-6 md:mb-0">
                  <h2 className="text-2xl text-center md:text-left text-yellow-400 font-bold mb-4 ml-12">
                    Targeted Audience
                  </h2>
                  <p className="text-xl font-roboto leading-relaxed max-w-3xl ml-12">
                    With about twenty units in southern England, serving youth
                    aged seven to eighteen, the Corps encourages progression
                    through ranks similar to the Royal Navy. Currently, it
                    comprises over four hundred cadets and more than a hundred
                    officers, instructors, and adult volunteers, alongside
                    sailing and boating centers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row bg-white text-black mx-0 rounded-md md:rounded-r-[150px] p-6 md:p-12 mr-24">
                <div className="flex-1 md:pr-12 mb-6 md:mb-0">
                  <h2 className="text-2xl text-center md:text-left text-yellow-400 font-bold mb-4">
                    Flag
                  </h2>
                  <p className="text-xl font-roboto leading-relaxed max-w-3xl">
                    In 2009, the Ministry of Defence granted the NTC a &apos;defaced
                    ensign&apos;, the first in nearly 40 years! The ensign bears the
                    Union Flag Cross and the Corps Badge Tudor Rose, symbolizing
                    our country&apos;s faith and traditions, closely aligned with the
                    Royal Navy uniform. Our present uniform and training are
                    rooted in centuries-old traditions of great sea adventurers,
                    emphasizing discipline but foremost, youth development. Our
                    units follow a structured nautical-themed training program,
                    promoting practical application of theoretical knowledge.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end md:mr-12">
                  <Image
                    src="/ntc.png"
                    alt="Nautical Training Corps"
                    width={400}
                    height={300}
                    className="rounded-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center bg-website text-white p-6 md:p-12">
              <div className="flex-1 md:mr-6 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent mb-4">
                  Explication of the Association
                </h1>
                <p className="text-lg md:text-xl mb-4">
                  Safety and child protection are paramount. The Corps operates
                  solely through trained and vetted volunteers, with local
                  divisions relying on volunteer support for various tasks. The
                  Nautical Training Corps is self-supported, relying on public
                  donations and community support
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
                    className="inline-block rounded-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center mt-20">
              <div className="flex flex-col md:flex-row items-center bg-blue-100 text-black lg:h-[400px] mr-[10%] ml-[10%] w-full lg:w-4/4 rounded-full relative">
                <div className="absolute top-10 left-12 bg-white mt-4 rounded-md md:rounded-l-[250px] p-4 w-72 h-72 flex justify-center items-center">
                  <p className="text-lg font-bold">Management</p>
                </div>
                <div className="md:pl-24 md:pr-16 ml-96">
                  <p className="text-xl font-roboto leading-relaxed max-w-2xl mx-auto">
                    The Corps&apos; governing body, the National Council, acts as
                    Trustees overseeing the charity&apos;s operations and assets.
                    They manage the organization&apos;s day-to-day affairs, providing
                    top-level direction. The Chief of Staff manages uniformed
                    operations, supported by Regional Commanders overseeing
                    groups of units. HQ Officers assist in operations, all
                    reporting to the National Council.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
