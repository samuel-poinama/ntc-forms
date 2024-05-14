import Image from 'next/image'




export default function HomePanel() {
    return (
        <div>  
            <div className="paire">
                <article className="pair">
                    <div className="a">
                        <Image src="/comunity.png" alt="comunity" width={20} height={100}/>
                        <div>
                            <h4>information a rentrer</h4>
                            <h3>Total Users</h3>
                        </div>
                    </div>
                    <a href="*">View All </a>
                </article>
            
                <article className="pair">
                    <div className="a">
                        <Image src="/forms.png" alt="forms" width={20} height={100}/>
                        <div>
                            <h4>information a rentrer</h4>
                            <h3>Total Users</h3>
                        </div>
                    </div>
                    <a href="*">View All </a>
                </article>
            
            
                <article className ="pair">
                    <div className="a">
                        <Image src="/navigation.png" alt="" width={20} height={100}/>
                        <div>
                            <h4>information a rentrer</h4>
                            <h3>Total Users</h3>
                        </div>
                    </div>
                    <a href="*">View All </a>
                </article>
            </div>

            <div className="single">
                <article>
                    <div className="a"/>
                    <a href="*">View All </a>
                </article>
            </div>
        </div>
    )
}