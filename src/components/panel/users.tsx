import Image from "next/image"




export default function Users() {
    return (
        <div className="userframe">
            <div className="single">
                <Image src="/comunity.png" alt="comunity" width={128} height={128}/>
                <h2>Total Users : 5234</h2>
            </div>
            
            <div className="grid">

                {[...Array(20)].map((_, i) => {
                    console.log(i)
                    return (
                        <div className="box">
                            <Image src="/comunity.png" alt="comunity" width={1000} height={1000}/>
                            <div>
                                <h3>Users</h3>
                            </div>
                        
                            <a href="*">View All </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}