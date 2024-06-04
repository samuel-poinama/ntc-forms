import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-[#2F5597] text-white px-0">
            <div className="flex flex-wrap justify-center space-x-56 mb-8 py-5 bg-white px-0">
                <a href="https://www.facebook.com/TheNauticalTrainingCorps" className="mb-4 md:mb-0">
                    <Image src="/facebook.png" width={40} height={40} className="logoImage inline-block" alt="Facebook" />
                </a>
                <a href="https://twitter.com/NTCHQ" className="mb-4 md:mb-0">
                    <Image src="/X.png" width={55} height={55} className="logoImage inline-block" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/nauticaltrainingcorps/" className="mb-4 md:mb-0">
                    <Image src="/insta.png" width={55} height={55} className="logoImage inline-block" alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/user/NauticalTrainingCorp" className="mb-4 md:mb-0">
                    <Image src="/youtube.png" width={75} height={75} className="logoImage inline-block" alt="YouTube" />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left px-4">
                <div>
                    <h1 className="text-xl font-bold mb-4">About us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam sunt labore ex ipsum 
                        incidunt architecto perspiciatis quod, culpa enim voluptas nobis dicta quas veritatis 
                        obcaecati fuga odit dolores maxime!
                    </p>
                </div>

                <div>
                    <h1 className="text-xl font-bold mb-4">Contact us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam sunt labore ex ipsum 
                        incidunt architecto perspiciatis quod, culpa enim voluptas nobis dicta quas veritatis 
                        obcaecati fuga odit dolores maxime!
                    </p>
                </div>
                <iframe src="https://calendar.google.com/calendar/embed?src=c_t766ejob0av74esfrpjlgnj4c0%40group.calendar.google.com&ctz=Europe%2FLondon" className="border-none" width="400" height="200" scrolling="no"></iframe>
            </div>

            <div className="text-center mt-8 px-4">
                &copy; 2024 All Rights Reserved
            </div>
        </div>
    );
}
