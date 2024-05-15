import Image from 'next/image'




export default function Users({ user } : { user: any }) {
    
    
    return (
        <div className="box">
            <Image loader={({src , width, quality}) => src} src={user.image} alt="" width={128} height={128}/>
            <div>
                <h3>{ user.name }</h3>
            </div>
        
            <a href="*">View All </a>
        </div>
    )
}
