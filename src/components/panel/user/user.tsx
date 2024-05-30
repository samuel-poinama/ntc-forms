import Image from 'next/image'




export default function Users({ user, onClick } : 
    { user: any, 
    onClick: () => void }) {
        

        return (
            <div className="flex justify-between p-2 mb-2 bg-blue-600 rounded-md cursor-pointer" onClick={onClick}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
            </div>
        )
        return (
        <div className="box" onClick={onClick} >
            <Image loader={({src , width, quality}) => src} src={user.image} alt="" width={128} height={128}/>
            <div>
                <h3>{ (user.name.length > 6) ? user.name.substring(0, 6) + "..." : user.name }</h3>
            </div>
        
            <a href="*">View All </a>
        </div>
    )
}
