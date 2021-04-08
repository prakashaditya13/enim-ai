import ContactStyle from "../css/Contact.module.css"
const Contact = () => {
    return <div>
        <div className={ContactStyle.headingText}>
            <h3>Contact Us</h3>
        </div>
        <div className={ContactStyle.contactForm}>
            <form>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="textArea">Message</label>
                    <textarea className="form-control" id="textArea" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className={ContactStyle.address}>
            <div className={ContactStyle.addressHeading}>
                <span>Contact Number: <i style={{fontWeight: 700}}>+91-6758465739</i></span><br/>
                <span>Email: <i style={{fontWeight: 700}}>social@enim.ai</i></span>
            </div>
        </div>
    </div>
}

export default Contact;