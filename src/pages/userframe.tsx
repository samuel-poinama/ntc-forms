import { Island_Moments } from "next/font/google"
import Image from "next/image"
import Navigation from '../components/navigation'



export default function Userframe() {
    return (
        <div  className="userframe">
                <div className="content">
        

                    <Navigation/>

                    <main>

                    <div className="single">
                            <article>
                                <div className="a">
                                    <Image src="/comunity.png" alt="comunity" width={1000} height={1000}/>
                                    <h2>Total Users :</h2>
                                    <h2>5234</h2>
                                </div>

                            </article>
                        </div>
                        
                        <div className="paire">
                            <article className="pair">
                            <Image src="/comunity.png" alt="comunity" width={1000} height={1000}/>
                                    <div>
                                    <h3>Users</h3>
                                </div>
                        
                                <a href="*">View All </a>
                            </article>
                        
                            <article className="pair">
                            <Image src="/comunity.png" alt="comunity" width={1000} height={1000}/>
                                    <div>
                                        <h3>Users</h3>
                                </div>
                        
                                <a href="*">View All </a>
                            </article>
                        
                        
                            <article className ="pair">
                            <Image src="/comunity.png" alt="comunity" width={1000} height={1000}/>
                                    <div>
                                    <h3>Users</h3>
                                </div>
                                <a href="*">View All </a>
                            </article>

                            <article className="pair">
                            <Image src="/comunity.png" alt="comunity" width={1000} height={1000}/>
                                    <div>
                                    <h3>Users</h3>
                                </div>
                        
                                <a href="*">View All </a>
                            </article>

                            <article className="pair">
                                    <Image src="/comunity.png" alt="comunity" width={1000} height={1000}/>
                                    <div>
                                    <h3>Users</h3>
                                </div>
                        
                                <a href="*">View All </a>
                            </article>
                        </div>
                    </main>
                </div> 
        </div>
    )
}