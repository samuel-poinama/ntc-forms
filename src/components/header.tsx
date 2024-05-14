import Image from "next/image"



export default function Header() {
    return (
    <div className="header">
        <Image src="/ntc2.png" alt="ntc" width={150} height={150} />
        <h1>Nautical Training Corps</h1>
        <Image src="/ntc2.png" alt="ntc" width={150} height={150} />
    </div>
    )
}