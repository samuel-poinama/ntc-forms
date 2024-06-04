import Image from 'next/image';

export default function Page404() {
  return (
    <div className="relative flex justify-center items-center min-h-screen text-white overflow-hidden bg-[url('/bg404.png')] bg-[cover]">

      
      <div className="container text-center">

        <div className="relative max-h-[40%]">
          <h1 className="text-[100px] md:text-[200px] lg:text-[320px] m-0">404</h1>
          <h2 className="text-[24px] md:text-[40px] lg:text-[60px] m-0">
            Oops, This Page Could Not Be Found
          </h2>
          <h3 className="text-[14px] md:text-[16px] lg:text-[18px] m-0">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </h3>
        </div>
      </div>
    </div>
  );
}
