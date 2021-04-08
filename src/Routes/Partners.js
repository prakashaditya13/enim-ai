import PartnerStyle from "../css/Partner.module.css"
const Partner = () => {
    const partnerLogo = ["/bioPharm.jpeg","/dfy.jpeg","/ghanshyam.jpeg","/kredence.jpeg"]
    return <div>
        <div className={PartnerStyle.headingText}>
            <h3>Partners</h3>
        </div>
        <div className={PartnerStyle.partnerImageContainer}>
            <div className="card-deck" >
                {
                    partnerLogo.map((logoList, index) => {
                        return <div style={{width: "12rem", marginLeft: "25px", marginTop:"30px"}} key={index}>
                            <img key={index} src={logoList} className="card-img-top" alt="default"/>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default Partner;