import { Wrapper } from "./Contact.styles";

const Contact = () => {
    return ( 
        <Wrapper>
            <div className="contact-section">
            <div className="contact-info">
                <div><i className="fas fa-map-marker-alt"></i>Edgar Lule</div>
                <div><i className="fas fa-envelope"></i>edgar21lc@gmail.com</div>
                <div><i className="fas fa-phone"></i>Sacramento CA</div>
            </div>
            <div class="contact-form">
                <h2>Contact Me</h2>
                <form className="contact" action="" method="post">
                    <input type="text" name="name" className="text-box" placeholder="Your Name" required />
                    <input type="email" name="email" className="text-box" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <input type="submit" name="submit" className="send-btn" value="Send" />
                </form>
            </div>
            </div>
            </Wrapper>

     );
}
 
export default Contact;