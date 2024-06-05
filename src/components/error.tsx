import Image from "next/image"




export default function Error({
  code,
  message,
}: {
  code: number
  message: string
}) {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#2f5597] text-white">
      <div className="w-full h-full text-center overflow-hidden relative flex flex-col justify-center items-center">
        <Image
          src="/image6.png"
          alt=""
          className="absolute top-[12%] left-[59%] h-[50px] transform -translate-x-1/2"
          width={50}
          height={50}
        />
        <Image
          src="/image5.png"
          alt=""
          className="absolute top-[2%] left-[52%] h-[25px] transform -translate-x-1/2"
          width={25}
          height={25}
        />
        <Image
          src="/image4.png"
          alt=""
          className="absolute top-[17%] left-[47%] h-[30px] transform -translate-x-1/2"
          width={30}
          height={30}
        />
        <Image
          src="/image3.png"
          alt=""
          className="absolute top-[23%] left-[36%] h-[100px] transform -translate-x-1/2"
          width={100}
          height={100}
        />
        <Image
          src="/image2.png"
          alt=""
          className="absolute top-[63%] left-[15%] h-[225px] transform -translate-x-1/2"
          width={225}
          height={225}
        />
        <div className="absolute top-[35%] transform -translate-y-1/2 z-10">
          <h1 className="text-[200px] m-0">{ code }</h1>
          <h2 className="text-[50px] m-0">
            { message }
          </h2>
          <div className="mt-[20px] flex justify-center">
            <div className="bg-[#f4dd13] text-white py-[10px] px-[60px] rounded-[20px] text-[18px]">
              Back to Home
            </div>
          </div>
        </div>
        <Image
          src="/image1.png"
          alt=""
          className="absolute bottom-0 right-0 h-[350px]"
          width={350}
          height={350}
        />
      </div>
    </div>
  )
}
