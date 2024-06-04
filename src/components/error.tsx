import Image from "next/image";




export default function Error({ code, message } : { code: number, message: string }) {
  return (
    <div className="flex justify-center items-center h-screen bg-[#2f5597] text-white">
      <div className="container text-center overflow-hidden">
        <Image
          src="/image6.png"
          alt=""
          className="absolute top-[15%] left-[56%] h-[15px]"
          width={15}
          height={15}
        />
        <Image
          src="/image5.png"
          alt=""
          className="absolute top-[30%] left-[60%] h-[100px]"
          width={100}
          height={100}
        />
        <Image
          src="/image4.png"
          alt=""
          className="absolute top-[40%] left-[43.5%] h-[60px]"
          width={60}
          height={60}
        />
        <div className="max-h-[40%]">
          <h1 className="text-[320px] m-0">{code}</h1>
          <h2 className="text-[60px] m-0">
            {message}
          </h2>
        </div>
        <Image
          src="/image3.png"
          alt=""
          className="absolute top-[45%] left-[22%] h-[175px]"
          width={175}
          height={175}
        />
        <Image
          src="/image2.png"
          alt=""
          className="absolute top-[82%] left-[27%] h-[250px]"
          width={251}
          height={251}
        />
        <div className="mt-[100px]">
          <button className="bg-[#f4dd13] text-white py-[30px] px-[80px] rounded-[40px] text-[18px] cursor-pointer">
            Back to Home
          </button>
        </div>
        <Image
          src="/image1.png"
          alt=""
          className="absolute top-[65%] right-0 h-[700px]"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}
