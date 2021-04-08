import ServiceStyle from "../css/Service.module.css"
const Services = () => {
    const service = ["UI/UX Design", "Mobile Development", "Web Development", "Custom Software Development", "Deployment & Maintenance"]
    const description = [
        "Creating design for products, systems or services that provide meaningful and relevant experiences to users.",
        "Frequently serve to provide users with similar services to those accessed on web.",
        "Application to application Communication.",
        "Let your product or service communicate with other products and services without having to know how they’re implemented.",
        "We make the application ability to learn automatically from experience without being explicit programmed."
    ]
    return <div>
        <div className={ServiceStyle.headingText}>
            <h3>Our Services</h3>
        </div>
        <div className={ServiceStyle.serviceTag}>
            <div className="card-deck">
                {
                    service.map((serve, index) => {
                        return <div key={index} className="card border-light mb-3" style={{width: "18rem"}}>
                            <div className="card-header" style={{
                                fontWeight: 500,
                                letterSpacing: "1.2px"
                            }}>{serve}</div>
                            <div className="card-body">
                                <p className="card-text">{description[index]}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default Services;