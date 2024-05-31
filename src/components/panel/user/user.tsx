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
}
