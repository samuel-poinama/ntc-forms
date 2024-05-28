import Navigation from '@/components/panel/navigation'



export default function Contact() {
    return (
        <div className="contact">
                <div className="container">
                    
                <h2>Contact us</h2>

                <Navigation/>

                <form action="">
                    <input type="text" id="name" placeholder="Name" maxLength={100}/>


                    <input type="email" id="email" placeholder="Email" maxLength={200} />


                    <textarea name="message" id="message" placeholder="Message" maxLength={500}>
                    </textarea><br/>

                    <input id="submit" type="submit" value="Send"/>
                </form>

                </div>
        </div>
    )
}