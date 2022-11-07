import { SocialIcon } from 'react-social-icons';
export default function Footer(){
    return (
        <div className = 'footer'>
            <div className ='about'>
                <div>
                    <h4>About</h4>
                    <a href = '#' >Services</a>
                    <a href = '#' >Join now</a>
                    <a href = '#' >The team</a>
                    <a href = '#' >Home page</a>
                    
                </div>
                <div>
                    <h4>Services</h4>
                    <a href = '#' >Our History</a>
                    <a href = '#' >Financial service</a>
                    <a href = '#' >Employers</a>
                    <a href = '#' >Insurance</a>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a href = '#' >789 startup web developpement</a>
                    <a href = '#' >00229 623 966 32</a>
                    <a href = '#' >startup.com@mat.com</a>
                </div>
            </div>
            <div className = 'social-net'>
                <div className = 'container-net'>
                    <h3>Follow us</h3>
                    <div>
                        <SocialIcon url="https://twitter.com/jaketrent" />
                        <SocialIcon url="https://instagram.com/jaketrent" />
                        <SocialIcon url="https://facebook.com/jaketrent" />
                        <SocialIcon url="https://telegram.com/jaketrent" />
                    </div>
                </div>
                <div className = 'social-net-container'>
                    <h3>Subscribe</h3>
                    <input type ='email' placeholder ='Email'/>
                    <button className = 'send'>Send Here</button>
                </div>
            </div>
            <hr />
            <h5>mathias@startup.com</h5>
        </div>
    )
}